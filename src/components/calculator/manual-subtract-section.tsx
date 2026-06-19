"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { FadeUp } from "@/components/motion";
import { SectionTitle } from "@/components/calculator/content-layouts";
import { MANUAL_SUBTRACT_OVERLAP } from "@/lib/calculator-page-content";

function AnimatedClockVisual() {
  return (
    <div className="relative flex h-56 w-full items-center justify-center sm:h-64 md:h-72">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-40 w-40 rounded-full bg-primary/20 blur-2xl sm:h-48 sm:w-48"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute h-44 w-44 rounded-full border border-dashed border-primary/25 sm:h-52 sm:w-52"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-primary shadow-glow sm:h-32 sm:w-32"
      >
        <motion.div
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Clock className="h-14 w-14 text-white sm:h-16 sm:w-16" strokeWidth={1.75} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function ManualSubtractSection() {
  const { title, intro, exampleRows, remindersTitle, reminders } =
    MANUAL_SUBTRACT_OVERLAP;

  return (
    <article className="hover-card overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition-all duration-300 md:rounded-3xl">
      <div className="h-1 bg-gradient-primary" />
      <div className="grid items-center gap-8 p-5 sm:p-6 md:p-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
        <div className="order-1 flex items-center justify-center lg:col-start-1 lg:justify-start">
          <AnimatedClockVisual />
        </div>

        <FadeUp className="order-2 flex flex-col justify-center lg:col-start-2">
          <SectionTitle>{title}</SectionTitle>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base md:leading-7">
            {intro}
          </p>

          {exampleRows.length > 0 && (
            <div className="mt-6 rounded-2xl border border-border/60 bg-slate-50/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Örnek
              </p>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-foreground">
                {exampleRows.map((row) => (
                  <li key={row.label}>
                    <span className="font-medium">{row.label}</span>
                    {row.label === "Sonuç" ? " " : " = "}
                    <span className="font-semibold">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6">
            <p className="text-sm font-semibold text-foreground sm:text-base">
              {remindersTitle}
            </p>
            <ol className="mt-3 space-y-2">
              {reminders.map((tip, index) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted sm:text-base"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ol>
          </div>
        </FadeUp>
      </div>
    </article>
  );
}
