import {
  parseTimeString,
  calculateTimeDifference,
  addTimeToTime,
  subtractTimeFromTime,
  formatDuration,
  formatTime,
  validateHoursInput,
  validateMinutesInput,
} from "./time-utils";

function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(`FAIL: ${message}`);
}

// Time difference: 09:00 → 17:30 = 8h 30m = 510 min
assert(
  calculateTimeDifference(parseTimeString("09:00")!, parseTimeString("17:30")!, false) === 510,
  "standard work day diff"
);

// Night shift: 22:00 → 06:00 with midnight = 8h = 480 min
assert(
  calculateTimeDifference(parseTimeString("22:00")!, parseTimeString("06:00")!, true) === 480,
  "night shift diff"
);

// Add 2h 30m to 14:30 = 17:00
assert(
  formatTime(addTimeToTime(parseTimeString("14:30")!, 2, 30)) === "17:00",
  "add time"
);

// Subtract 2h 30m from 14:30 = 12:00
assert(
  formatTime(subtractTimeFromTime(parseTimeString("14:30")!, 2, 30)) === "12:00",
  "subtract time"
);

// Wrap around midnight: 23:00 + 2h = 01:00
assert(
  formatTime(addTimeToTime(parseTimeString("23:00")!, 2, 0)) === "01:00",
  "add past midnight"
);

// Duration formatting
assert(formatDuration(510) === "8 hours 30 minutes", "format duration");
assert(formatDuration(0) === "0 minutes", "zero duration");

// Validation
assert(parseTimeString("") === null, "empty time rejected");
assert(parseTimeString("25:00") === null, "invalid hour rejected");
assert(validateHoursInput("1000") === null, "hours over 999 rejected");
assert(validateMinutesInput("60") === null, "minutes over 59 rejected");

console.log("All time-utils tests passed ✓");
