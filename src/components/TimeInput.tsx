"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { faqCollapse } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface TimeInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  id: string;
  error?: string;
  hint?: string;
  onNow?: () => void;
}

function FieldError({ id, message }: { id: string; message: string }) {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <AnimatePresence>
      <motion.p
        id={id}
        role="alert"
        {...(prefersReduced ? {} : faqCollapse)}
        className="tool-error-msg"
      >
        <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
        {message}
      </motion.p>
    </AnimatePresence>
  );
}

export default function TimeInput({
  label,
  value,
  onChange,
  id,
  error,
  hint,
  onNow,
}: TimeInputProps) {
  return (
    <div className="flex flex-col">
      <div className="mb-2 flex items-center justify-between gap-2">
        <label htmlFor={id} className="tool-input-label mb-0">
          {label}
        </label>
        {onNow && (
          <button type="button" onClick={onNow} className="tool-input-action">
            Now
          </button>
        )}
      </div>
      <input
        type="time"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`tool-input tool-input--time ${error ? "tool-input--error" : ""}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
      />
      {hint && !error && (
        <p id={`${id}-hint`} className="tool-input-hint">
          {hint}
        </p>
      )}
      {error && <FieldError id={`${id}-error`} message={error} />}
    </div>
  );
}

interface NumberInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  id: string;
  max?: number;
  suffix?: string;
  error?: string;
  hint?: string;
  placeholder?: string;
}

export function NumberInput({
  label,
  value,
  onChange,
  id,
  max,
  suffix,
  error,
  hint,
  placeholder = "0",
}: NumberInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="tool-input-label">
        {label}
      </label>
      <div className="relative">
        <input
          type="number"
          inputMode="numeric"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={0}
          max={max}
          placeholder={placeholder}
          className={`tool-input ${suffix ? "pr-16" : ""} ${error ? "tool-input--error" : ""}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted">
            {suffix}
          </span>
        )}
      </div>
      {hint && !error && (
        <p id={`${id}-hint`} className="tool-input-hint">
          {hint}
        </p>
      )}
      {error && <FieldError id={`${id}-error`} message={error} />}
    </div>
  );
}
