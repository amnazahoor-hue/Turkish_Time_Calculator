import type {
  TimeDifferenceResult,
  DateOperationResult,
  WorkHoursResult,
  HoursToDaysResult,
  TimeUnit,
  TimeUnitConversionResult,
} from "@/types";

function parseDateTime(date: string, time: string): Date {
  return new Date(`${date}T${time}:00`);
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

function formatDuration(days: number, hours: number, minutes: number, seconds: number): string {
  const parts: string[] = [];
  if (days > 0) parts.push(`${days} gün`);
  if (hours > 0) parts.push(`${hours} saat`);
  if (minutes > 0) parts.push(`${minutes} dakika`);
  if (seconds > 0 && days === 0) parts.push(`${seconds} saniye`);
  return parts.length > 0 ? parts.join(", ") : "0 dakika";
}

export function calculateTimeDifference(
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string
): TimeDifferenceResult {
  const start = parseDateTime(startDate, startTime);
  const end = parseDateTime(endDate, endTime);
  const diffMs = Math.abs(end.getTime() - start.getTime());

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(diffMs / 60000);
  const totalHours = diffMs / 3600000;

  return {
    days,
    hours,
    minutes,
    seconds,
    totalHours: Math.round(totalHours * 100) / 100,
    totalMinutes,
    formatted: formatDuration(days, hours, minutes, seconds),
  };
}

export function addTimeToDate(
  date: string,
  time: string,
  hours: number,
  minutes: number
): DateOperationResult {
  const start = parseDateTime(date, time);
  start.setMinutes(start.getMinutes() + hours * 60 + minutes);

  return {
    resultDate: start,
    formatted: `${start.toLocaleDateString("tr-TR")} ${pad(start.getHours())}:${pad(start.getMinutes())}`,
  };
}

export function subtractTimeFromDate(
  date: string,
  time: string,
  hours: number,
  minutes: number
): DateOperationResult {
  const start = parseDateTime(date, time);
  start.setMinutes(start.getMinutes() - (hours * 60 + minutes));

  return {
    resultDate: start,
    formatted: `${start.toLocaleDateString("tr-TR")} ${pad(start.getHours())}:${pad(start.getMinutes())}`,
  };
}

export function calculateWorkHours(
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string,
  breakMinutes: number = 0
): WorkHoursResult {
  const start = parseDateTime(startDate, startTime);
  const end = parseDateTime(endDate, endTime);
  let diffMs = end.getTime() - start.getTime();

  if (diffMs < 0) diffMs = 0;

  const totalMinutes = Math.max(0, Math.floor(diffMs / 60000) - breakMinutes);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return {
    totalMinutes,
    hours,
    minutes,
    breakMinutes,
    formatted: `${hours} saat ${minutes} dakika`,
  };
}

const HOURS_PER_UNIT: Record<TimeUnit, number> = {
  minutes: 1 / 60,
  hours: 1,
  days: 24,
  weeks: 168,
};

const UNIT_LABELS: Record<TimeUnit, [string, string]> = {
  minutes: ["minute", "minutes"],
  hours: ["hour", "hours"],
  days: ["day", "days"],
  weeks: ["week", "weeks"],
};

function formatUnitLabel(unit: TimeUnit, count: number): string {
  const [singular, plural] = UNIT_LABELS[unit];
  return Math.abs(count) === 1 ? singular : plural;
}

function formatConversionNumber(value: number): string {
  if (!Number.isFinite(value)) return "0";
  if (Number.isInteger(value)) return value.toString();
  return parseFloat(value.toFixed(4)).toString();
}

export function convertTimeUnits(
  value: number,
  fromUnit: TimeUnit,
  toUnit: TimeUnit
): TimeUnitConversionResult {
  const inputValue = Math.max(0, value);
  const inHours = inputValue * HOURS_PER_UNIT[fromUnit];
  const outputValue = inHours / HOURS_PER_UNIT[toUnit];

  const formatted = `${formatConversionNumber(inputValue)} ${formatUnitLabel(fromUnit, inputValue)} = ${formatConversionNumber(outputValue)} ${formatUnitLabel(toUnit, outputValue)}`;

  return {
    inputValue,
    outputValue,
    fromUnit,
    toUnit,
    formatted,
  };
}

export function calculateHoursToDays(hours: number): HoursToDaysResult {
  const safeHours = Math.max(0, hours);
  const days = Math.round((safeHours / 24) * 100) / 100;
  const wholeDays = Math.floor(safeHours / 24);
  const remainingHours = safeHours % 24;

  let formatted = `${safeHours} hours = ${days} days`;
  if (remainingHours > 0 && wholeDays > 0) {
    formatted = `${safeHours} hours = ${wholeDays} days and ${remainingHours} hours (${days} days)`;
  }

  return {
    hours: safeHours,
    days,
    wholeDays,
    remainingHours,
    formatted,
  };
}

export function getDefaultDate(): string {
  return new Date().toISOString().split("T")[0];
}

export function getDefaultTime(): string {
  const now = new Date();
  return `${pad(now.getHours())}:${pad(now.getMinutes())}`;
}
