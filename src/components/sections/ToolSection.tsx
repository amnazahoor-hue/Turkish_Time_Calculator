"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyImage } from "@/components/ui/lazy-image";
import {
  ArrowLeftRight,
  Clock,
  Moon,
  RotateCcw,
} from "lucide-react";
import TimeInput, { NumberInput } from "@/components/TimeInput";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  scaleIn,
  buttonMotion,
  resultFade,
  noMotion,
  DURATION,
  EASE_OUT,
} from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import {
  parseTimeString,
  calculateTimeDifference,
  formatDurationParts,
  addTimeToTime,
  subtractTimeFromTime,
  formatTime,
  validateHoursInput,
  validateMinutesInput,
  getCurrentTimeString,
  isOvernightShift,
} from "@/lib/time-utils";

type Mode = "difference" | "addSubtract";
type Operation = "add" | "subtract";

const DIFF_PRESETS = [
  { label: "Work day", start: "09:00", end: "17:00" },
  { label: "Morning", start: "06:00", end: "12:00" },
  { label: "Night shift", start: "22:00", end: "06:00" },
] as const;

function DurationResult({ minutes }: { minutes: number }) {
  const { hours, minutes: mins } = formatDurationParts(minutes);
  const decimalHours = (minutes / 60).toFixed(2);
  const decimalDays = (minutes / (24 * 60)).toFixed(2);

  return (
    <motion.div
      {...resultFade}
      className="tool-result-card"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="tool-result-label mb-1">Duration</p>
          <p className="tool-result-value">
            {hours > 0 && (
              <>
                {hours} <span className="tool-result-unit">hr</span>{" "}
              </>
            )}
            {mins > 0 && (
              <>
                {mins} <span className="tool-result-unit">min</span>
              </>
            )}
            {hours === 0 && mins === 0 && (
              <>
                0 <span className="tool-result-unit">min</span>
              </>
            )}
          </p>
        </div>
        <div className="tool-result-icon-badge">
          <Clock className="h-6 w-6" />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="tool-stat-chip">= {minutes} minutes</span>
        <span className="tool-stat-chip">= {decimalHours} hours</span>
        <span className="tool-stat-chip">= {decimalDays} days</span>
      </div>
    </motion.div>
  );
}

function TimeResult({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      {...resultFade}
      className="tool-result-card"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="tool-result-label mb-1">{label}</p>
          <p className="tool-result-value">{value}</p>
        </div>
        <div className="tool-result-icon-badge">
          <Clock className="h-6 w-6" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ToolSection() {
  const prefersReduced = usePrefersReducedMotion();
  const motionBtn = prefersReduced ? {} : buttonMotion;
  const cardVariants = prefersReduced ? noMotion : scaleIn;

  const [mode, setMode] = useState<Mode>("difference");

  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");
  const [diffResult, setDiffResult] = useState<number | null>(null);
  const [diffErrors, setDiffErrors] = useState<{ start?: string; end?: string }>({});

  const [baseTime, setBaseTime] = useState("09:00");
  const [hours, setHours] = useState("1");
  const [minutes, setMinutes] = useState("30");
  const [operation, setOperation] = useState<Operation>("add");
  const [addResult, setAddResult] = useState<string | null>(null);
  const [addErrors, setAddErrors] = useState<{ base?: string; hours?: string; minutes?: string }>(
    {}
  );

  const clearResults = () => {
    setDiffResult(null);
    setAddResult(null);
  };

  const handleStartTimeChange = (value: string) => {
    setStartTime(value);
    setDiffResult(null);
    setDiffErrors({});
  };

  const handleEndTimeChange = (value: string) => {
    setEndTime(value);
    setDiffResult(null);
    setDiffErrors({});
  };

  const handleBaseTimeChange = (value: string) => {
    setBaseTime(value);
    setAddResult(null);
    setAddErrors({});
  };

  const handleHoursChange = (value: string) => {
    setHours(value);
    setAddResult(null);
    setAddErrors({});
  };

  const handleMinutesChange = (value: string) => {
    setMinutes(value);
    setAddResult(null);
    setAddErrors({});
  };

  const handleDiffCalculate = () => {
    const newErrors: { start?: string; end?: string } = {};
    if (!startTime.trim()) newErrors.start = "Pick a start time";
    if (!endTime.trim()) newErrors.end = "Pick an end time";
    if (startTime.trim() && !parseTimeString(startTime)) {
      newErrors.start = "Invalid time";
    }
    if (endTime.trim() && !parseTimeString(endTime)) {
      newErrors.end = "Invalid time";
    }
    if (Object.keys(newErrors).length > 0) {
      setDiffErrors(newErrors);
      setDiffResult(null);
      return;
    }
    setDiffErrors({});
    const start = parseTimeString(startTime)!;
    const end = parseTimeString(endTime)!;
    setDiffResult(calculateTimeDifference(start, end, false));
  };

  const handleAddCalculate = () => {
    const newErrors: typeof addErrors = {};
    if (!baseTime.trim()) newErrors.base = "Pick a base time";
    if (!hours.trim() && !minutes.trim()) {
      newErrors.hours = "Enter hours or minutes";
    }
    if (baseTime.trim() && !parseTimeString(baseTime)) {
      newErrors.base = "Invalid time";
    }
    if (hours.trim() && validateHoursInput(hours) === null) {
      newErrors.hours = "Use 0–999";
    }
    if (minutes.trim() && validateMinutesInput(minutes) === null) {
      newErrors.minutes = "Use 0–59";
    }
    if (Object.keys(newErrors).length > 0) {
      setAddErrors(newErrors);
      setAddResult(null);
      return;
    }
    setAddErrors({});
    const base = parseTimeString(baseTime)!;
    const h = hours.trim() ? validateHoursInput(hours)! : 0;
    const m = minutes.trim() ? validateMinutesInput(minutes)! : 0;
    const calculated =
      operation === "add" ? addTimeToTime(base, h, m) : subtractTimeFromTime(base, h, m);
    setAddResult(formatTime(calculated));
  };

  const handleCalculate = () => {
    if (mode === "difference") handleDiffCalculate();
    else handleAddCalculate();
  };

  const overnight =
    mode === "difference" &&
    parseTimeString(startTime) &&
    parseTimeString(endTime) &&
    isOvernightShift(parseTimeString(startTime)!, parseTimeString(endTime)!);

  const handleReset = () => {
    if (mode === "difference") {
      setStartTime("09:00");
      setEndTime("17:00");
      setDiffErrors({});
    } else {
      setBaseTime("09:00");
      setHours("1");
      setMinutes("30");
      setOperation("add");
      setAddErrors({});
    }
    clearResults();
  };

  const switchMode = (newMode: Mode) => {
    setMode(newMode);
    setDiffErrors({});
    setAddErrors({});
    clearResults();
  };

  const swapTimes = () => {
    setStartTime(endTime);
    setEndTime(startTime);
    setDiffResult(null);
    setDiffErrors({});
  };

  const applyPreset = (start: string, end: string) => {
    setStartTime(start);
    setEndTime(end);
    setDiffResult(null);
    setDiffErrors({});
  };

  return (
    <section id="calculator" className="tool-section" aria-labelledby="tool-heading">
      <div className="tool-section-glow" aria-hidden="true" />
      <div className="section-container relative">
        <div className="tool-section-intro">
          <SectionHeader
            eyebrow="Calculator"
            title="Time Calculator Tool"
            subtitle="Enter your times, then click Calculate to see the result."
            titleId="tool-heading"
            align="left"
          />
          <div className="tool-section-art">
            <LazyImage
              src="/images/tool-calculator.webp"
              alt="Saat hesaplama aracı illüstrasyonu"
              width={200}
              height={160}
              className="tool-section-image"
            />
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="tool-card"
        >
          <div className="tool-mode-track mb-2">
            <motion.div
              className="tool-mode-indicator"
              animate={{ left: mode === "difference" ? 4 : "calc(50%)" }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                duration: prefersReduced ? 0 : undefined,
              }}
            />
            <button
              type="button"
              onClick={() => switchMode("difference")}
              className={`tool-mode-tab ${mode === "difference" ? "tool-mode-tab--active" : ""}`}
              aria-pressed={mode === "difference"}
            >
              Time Between
            </button>
            <button
              type="button"
              onClick={() => switchMode("addSubtract")}
              className={`tool-mode-tab ${mode === "addSubtract" ? "tool-mode-tab--active" : ""}`}
              aria-pressed={mode === "addSubtract"}
            >
              Add / Subtract
            </button>
          </div>
          <p className="tool-mode-hint mb-6">
            {mode === "difference"
              ? "How long between two times? Great for work hours and shifts."
              : "Add or remove hours and minutes from any time."}
          </p>

          <AnimatePresence mode="wait">
            {mode === "difference" ? (
              <motion.div
                key="difference"
                initial={prefersReduced ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReduced ? undefined : { opacity: 0, x: 12 }}
                transition={{ duration: DURATION.normal, ease: EASE_OUT }}
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  {DIFF_PRESETS.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => applyPreset(preset.start, preset.end)}
                      className={`tool-preset-chip ${
                        startTime === preset.start && endTime === preset.end
                          ? "tool-preset-chip--active"
                          : ""
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                <div className="mb-4 grid grid-cols-1 items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
                  <TimeInput
                    id="start-time"
                    label="From"
                    value={startTime}
                    onChange={handleStartTimeChange}
                    error={diffErrors.start}
                    hint="When you start"
                    onNow={() => handleStartTimeChange(getCurrentTimeString())}
                  />
                  <button
                    type="button"
                    onClick={swapTimes}
                    className="tool-swap-btn mx-auto sm:mb-3"
                    aria-label="Swap start and end times"
                    title="Swap times"
                  >
                    <ArrowLeftRight className="h-[18px] w-[18px]" />
                  </button>
                  <TimeInput
                    id="end-time"
                    label="To"
                    value={endTime}
                    onChange={handleEndTimeChange}
                    error={diffErrors.end}
                    hint="When you finish"
                    onNow={() => handleEndTimeChange(getCurrentTimeString())}
                  />
                </div>

                {overnight && (
                  <div className="tool-info-pill mb-6">
                    <Moon className="h-4 w-4 shrink-0" />
                    Overnight shift detected — counting past midnight.
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="addSubtract"
                initial={prefersReduced ? false : { opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReduced ? undefined : { opacity: 0, x: -12 }}
                transition={{ duration: DURATION.normal, ease: EASE_OUT }}
              >
                <div className="mb-6">
                  <TimeInput
                    id="base-time"
                    label="Starting time"
                    value={baseTime}
                    onChange={handleBaseTimeChange}
                    error={addErrors.base}
                    hint="The time you want to adjust"
                    onNow={() => handleBaseTimeChange(getCurrentTimeString())}
                  />
                </div>

                <div className="mb-6">
                  <p className="tool-input-label mb-3">What to do</p>
                  <div className="op-toggle-track">
                    <motion.div
                      className="op-toggle-indicator"
                      animate={{ left: operation === "add" ? 4 : "calc(50%)" }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                        duration: prefersReduced ? 0 : undefined,
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setOperation("add");
                        setAddResult(null);
                      }}
                      className={`op-toggle-tab ${operation === "add" ? "op-toggle-tab--active" : "op-toggle-tab--inactive"}`}
                      aria-pressed={operation === "add"}
                    >
                      Add +
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setOperation("subtract");
                        setAddResult(null);
                      }}
                      className={`op-toggle-tab ${operation === "subtract" ? "op-toggle-tab--active" : "op-toggle-tab--inactive"}`}
                      aria-pressed={operation === "subtract"}
                    >
                      Subtract −
                    </button>
                  </div>
                </div>

                <div className="mb-8 grid gap-6 sm:grid-cols-2">
                  <NumberInput
                    id="add-hours"
                    label="Hours"
                    value={hours}
                    onChange={handleHoursChange}
                    max={999}
                    suffix="hr"
                    error={addErrors.hours}
                    hint="Optional — leave 0 if none"
                  />
                  <NumberInput
                    id="add-minutes"
                    label="Minutes"
                    value={minutes}
                    onChange={handleMinutesChange}
                    max={59}
                    suffix="min"
                    error={addErrors.minutes}
                    hint="Optional — leave 0 if none"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col gap-3">
            <motion.button
              type="button"
              onClick={handleCalculate}
              {...motionBtn}
              className="tool-calc-btn"
            >
              Calculate
            </motion.button>

            <button type="button" onClick={handleReset} className="tool-reset-btn mx-auto">
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
          </div>

          <AnimatePresence mode="wait">
            {mode === "difference" && diffResult !== null && !diffErrors.start && !diffErrors.end && (
              <DurationResult key="diff-result" minutes={diffResult} />
            )}
            {mode === "addSubtract" && addResult && !addErrors.base && (
              <TimeResult key="add-result" label="New time" value={addResult} />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
