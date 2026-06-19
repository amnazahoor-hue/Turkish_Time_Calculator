/**
 * Optimizes hero background video for web delivery.
 * Targets: WebM (VP9) primary + H.264 MP4 fallback for Safari.
 * Hero background best practice: muted, no audio, ≤1280px wide, ≤~1.5MB WebM when possible.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegStatic from "ffmpeg-static";
import ffprobeStatic from "ffprobe-static";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const SOURCE_CANDIDATES = [
  path.join(publicDir, "hero_Background.mp4"),
  path.join(publicDir, "hero-background-source.mp4"),
  path.join(publicDir, "hero-background.mp4"),
];

const WEBM_OUT = path.join(publicDir, "hero-background.webm");
const MP4_OUT = path.join(publicDir, "hero-background.mp4");
const LEGACY_MP4 = path.join(publicDir, "hero_Background.mp4");

const MAX_WIDTH = 1280;
const HERO_CLIP_SEC = 12;
const HERO_FPS = 24;
const TARGET_WEBM_KB = 800;
const TARGET_MP4_KB = 1000;

function kb(size) {
  return `${(size / 1024).toFixed(1)} KB`;
}

function probe(file) {
  const out = execFileSync(
    ffprobeStatic.path,
    [
      "-v",
      "error",
      "-select_streams",
      "v:0",
      "-show_entries",
      "stream=width,height,duration,codec_name",
      "-show_entries",
      "format=duration,size",
      "-of",
      "json",
      file,
    ],
    { encoding: "utf8" }
  );
  return JSON.parse(out);
}

function videoFilter() {
  return `scale='min(${MAX_WIDTH},iw)':-2,fps=${HERO_FPS}`;
}

function encodeWebm(input, output, crf) {
  execFileSync(ffmpegStatic, [
    "-y",
    "-ss",
    "0",
    "-t",
    String(HERO_CLIP_SEC),
    "-i",
    input,
    "-an",
    "-c:v",
    "libvpx-vp9",
    "-crf",
    String(crf),
    "-b:v",
    "0",
    "-row-mt",
    "1",
    "-cpu-used",
    "4",
    "-deadline",
    "good",
    "-vf",
    videoFilter(),
    "-pix_fmt",
    "yuv420p",
    "-f",
    "webm",
    output,
  ], { stdio: "inherit" });
}

function encodeMp4(input, output, crf) {
  execFileSync(ffmpegStatic, [
    "-y",
    "-ss",
    "0",
    "-t",
    String(HERO_CLIP_SEC),
    "-i",
    input,
    "-an",
    "-c:v",
    "libx264",
    "-crf",
    String(crf),
    "-preset",
    "slow",
    "-vf",
    videoFilter(),
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    "-profile:v",
    "high",
    "-level",
    "4.0",
    output,
  ], { stdio: "inherit" });
}

function findSource() {
  for (const candidate of SOURCE_CANDIDATES) {
    if (fs.existsSync(candidate)) return candidate;
  }
  throw new Error("Hero source video not found in public/");
}

function encodeToTemp(encodeFn, input, finalOutput, crf) {
  const sameFile =
    path.resolve(input).toLowerCase() === path.resolve(finalOutput).toLowerCase();
  const output = sameFile
    ? finalOutput.replace(/(\.[^.]+)$/, "-optimized$1")
    : finalOutput;

  encodeFn(input, output, crf);

  if (sameFile) {
    fs.unlinkSync(finalOutput);
    fs.renameSync(output, finalOutput);
  }
}

function tuneCrf(encodeFn, input, output, startCrf, maxKb) {
  let crf = startCrf;
  const maxAttempts = 4;

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    encodeToTemp(encodeFn, input, output, crf);
    const size = fs.statSync(output).size;
    console.log(`  crf=${crf} → ${kb(size)}`);
    if (size <= maxKb * 1024 || crf >= 40) return { crf, size };
    crf += 3;
  }

  return { crf, size: fs.statSync(output).size };
}

function main() {
  if (!ffmpegStatic) throw new Error("ffmpeg-static binary missing");

  const source = findSource();
  const sourceSize = fs.statSync(source).size;
  console.log(`Source: ${path.basename(source)} (${kb(sourceSize)})`);

  try {
    const meta = probe(source);
    const stream = meta.streams?.[0];
    console.log(
      `  ${stream?.width}x${stream?.height}, ${stream?.codec_name}, ${Number(meta.format?.duration ?? 0).toFixed(1)}s`
    );
  } catch {
    console.log("  (probe skipped)");
  }

  console.log(`\nClip: first ${HERO_CLIP_SEC}s @ ${HERO_FPS}fps, max width ${MAX_WIDTH}px`);

  console.log("\nEncoding WebM (VP9)…");
  const webm = tuneCrf(encodeWebm, source, WEBM_OUT, 32, TARGET_WEBM_KB);

  console.log("\nEncoding MP4 fallback (H.264)…");
  const mp4 = tuneCrf(encodeMp4, source, MP4_OUT, 28, TARGET_MP4_KB);

  console.log("\nDone:");
  console.log(`  hero-background.webm — ${kb(webm.size)} (crf ${webm.crf})`);
  console.log(`  hero-background.mp4  — ${kb(mp4.size)} (crf ${mp4.crf})`);

  if (source === LEGACY_MP4 && fs.existsSync(LEGACY_MP4)) {
    fs.renameSync(LEGACY_MP4, path.join(publicDir, "hero-background-source.mp4"));
    console.log("  Archived source as hero-background-source.mp4");
  }
}

main();
