export type TimeThemePeriod = "dawn" | "morning" | "afternoon" | "evening";

export interface RgbColor {
  r: number;
  g: number;
  b: number;
}

export const TIME_THEMES = {
  dawn: {
    primary: "192 182 217",
    secondary: "235 210 217",
  },
  morning: {
    primary: "127 214 215",
    secondary: "130 192 226",
  },
  afternoon: {
    primary: "255 216 104",
    secondary: "255 165 0",
  },
  evening: {
    primary: "47 60 126",
    secondary: "31 32 65",
  },
} as const;

export function getTimeThemePeriod(hour: number): TimeThemePeriod {
  if (hour >= 5 && hour < 7) return "dawn";
  if (hour >= 7 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  return "evening";
}

export function applyTimeTheme(period: TimeThemePeriod): void {
  document.documentElement.setAttribute("data-time-theme", period);
}

export function sampleVideoColors(
  video: HTMLVideoElement
): RgbColor | null {
  if (video.readyState < 2 || video.videoWidth === 0) return null;

  const canvas = document.createElement("canvas");
  const size = 48;
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;

  ctx.drawImage(video, 0, 0, size, size);
  const data = ctx.getImageData(0, 0, size, size).data;

  let r = 0;
  let g = 0;
  let b = 0;
  let count = 0;

  for (let i = 0; i < data.length; i += 4) {
    const pr = data[i];
    const pg = data[i + 1];
    const pb = data[i + 2];
    const brightness = (pr + pg + pb) / 3;

    if (brightness < 18 || brightness > 248) continue;

    r += pr;
    g += pg;
    b += pb;
    count++;
  }

  if (count === 0) return null;

  return {
    r: Math.round(r / count),
    g: Math.round(g / count),
    b: Math.round(b / count),
  };
}

export function getThemePeriodFromRgb({ r, g, b }: RgbColor): TimeThemePeriod {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2 / 255;

  if (lightness < 0.22) return "evening";

  let hue = 0;
  if (max !== min) {
    const delta = max - min;
    if (max === r) hue = ((g - b) / delta + (g < b ? 6 : 0)) / 6;
    else if (max === g) hue = ((b - r) / delta + 2) / 6;
    else hue = ((r - g) / delta + 4) / 6;
  }

  hue *= 360;

  if (hue >= 250 || hue < 25) return "dawn";
  if (hue >= 25 && hue < 68) return "afternoon";
  if (hue >= 68 && hue < 210) return "morning";
  return "evening";
}
