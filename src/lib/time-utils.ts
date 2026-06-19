export interface TimeValue {
  hours: number;
  minutes: number;
}

export function parseTimeString(time: string): TimeValue | null {
  if (!time.trim()) return null;
  const match = time.match(/^(\d{1,2}):(\d{2})(?::\d{2})?$/);
  if (!match) return null;

  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);

  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;

  return { hours, minutes };
}

export function timeToMinutes(time: TimeValue): number {
  return time.hours * 60 + time.minutes;
}

export function minutesToTime(totalMinutes: number): TimeValue {
  const normalized = ((totalMinutes % (24 * 60)) + 24 * 60) % (24 * 60);
  const hours = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  return { hours, minutes };
}

export function formatTime(time: TimeValue): string {
  return `${String(time.hours).padStart(2, "0")}:${String(time.minutes).padStart(2, "0")}`;
}

export function formatDuration(totalMinutes: number): string {
  const absMinutes = Math.abs(totalMinutes);
  const hours = Math.floor(absMinutes / 60);
  const minutes = absMinutes % 60;

  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours} hour${hours !== 1 ? "s" : ""}`);
  if (minutes > 0) parts.push(`${minutes} minute${minutes !== 1 ? "s" : ""}`);
  if (parts.length === 0) return "0 minutes";

  return parts.join(" ");
}

export function formatDurationParts(totalMinutes: number): {
  hours: number;
  minutes: number;
} {
  const absMinutes = Math.abs(totalMinutes);
  return {
    hours: Math.floor(absMinutes / 60),
    minutes: absMinutes % 60,
  };
}

export function calculateTimeDifference(
  startTime: TimeValue,
  endTime: TimeValue,
  crossesMidnight: boolean
): number {
  const startMinutes = timeToMinutes(startTime);
  let endMinutes = timeToMinutes(endTime);

  if (crossesMidnight || endMinutes < startMinutes) {
    endMinutes += 24 * 60;
  }

  return endMinutes - startMinutes;
}

export function addTimeToTime(
  baseTime: TimeValue,
  addHours: number,
  addMinutes: number
): TimeValue {
  const totalMinutes = timeToMinutes(baseTime) + addHours * 60 + addMinutes;
  return minutesToTime(totalMinutes);
}

export function subtractTimeFromTime(
  baseTime: TimeValue,
  subHours: number,
  subMinutes: number
): TimeValue {
  const totalMinutes = timeToMinutes(baseTime) - subHours * 60 - subMinutes;
  return minutesToTime(totalMinutes);
}

export function getCurrentTimeString(): string {
  const now = new Date();
  return formatTime({ hours: now.getHours(), minutes: now.getMinutes() });
}

export function isOvernightShift(start: TimeValue, end: TimeValue): boolean {
  return timeToMinutes(end) < timeToMinutes(start);
}

export function validateHoursInput(value: string): number | null {
  const num = parseInt(value, 10);
  if (isNaN(num) || num < 0 || num > 999) return null;
  return num;
}

export function validateMinutesInput(value: string): number | null {
  const num = parseInt(value, 10);
  if (isNaN(num) || num < 0 || num > 59) return null;
  return num;
}
