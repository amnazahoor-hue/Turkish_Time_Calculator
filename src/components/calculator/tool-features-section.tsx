"use client";

import { motion } from "framer-motion";
import { CalendarClock, Timer, Globe } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { TOOL_FEATURES_SECTION } from "@/lib/calculator-page-content";
import { cn } from "@/lib/utils";

const FEATURE_ILLUSTRATIONS = [
  CalendarIllustration,
  FormatIllustration,
  TimezoneIllustration,
] as const;

function CalendarIllustration() {
  return (
    <div className="relative w-full max-w-[190px]">
      <div className="absolute -left-2 top-1 h-14 w-14 rounded-full bg-accent/20 blur-xl" />
      <div className="relative rounded-2xl border border-navy-100 bg-white p-3 shadow-md">
        <div className="flex items-center gap-2 border-b border-navy-100 pb-1.5">
          <CalendarClock className="h-3.5 w-3.5 text-accent" />
          <span className="text-[9px] font-bold text-navy">Haziran 2025</span>
        </div>
        <div className="mt-2 grid grid-cols-7 gap-0.5">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "flex h-4 w-4 items-center justify-center rounded-md text-[7px] font-semibold",
                i === 8 ? "bg-accent text-white" : "bg-navy-50 text-navy/70"
              )}
            >
              {i + 1}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-2 -right-2 rounded-xl bg-navy px-3 py-1.5 text-[10px] font-bold text-white shadow-lg">
        +3 gün
      </div>
    </div>
  );
}

function FormatIllustration() {
  return (
    <div className="relative flex w-full max-w-[190px] flex-col items-center gap-2">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-navy to-navy-600 shadow-lg">
        <Timer className="h-7 w-7 text-white" strokeWidth={1.75} />
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {["14:30", "2:30 PM", "14.30"].map((fmt) => (
          <span
            key={fmt}
            className="rounded-full border border-navy-100 bg-white px-2.5 py-1 text-[10px] font-semibold text-navy shadow-sm"
          >
            {fmt}
          </span>
        ))}
      </div>
    </div>
  );
}

function TimezoneIllustration() {
  return (
    <div className="relative w-full max-w-[190px]">
      <div className="absolute right-0 top-0 h-12 w-12 rounded-full bg-teal-400/25 blur-xl" />
      <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-accent/90 to-accent shadow-lg">
        <Globe className="h-8 w-8 text-white" strokeWidth={1.75} />
      </div>
      <div className="mt-3 space-y-1.5">
        {[
          { city: "İstanbul", time: "15:00" },
          { city: "Londra", time: "13:00" },
        ].map((row) => (
          <div
            key={row.city}
            className="flex items-center justify-between rounded-lg border border-navy-100 bg-white px-3 py-1.5 text-[10px] shadow-sm"
          >
            <span className="font-semibold text-navy">{row.city}</span>
            <span className="font-bold text-accent">{row.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const Illustration = FEATURE_ILLUSTRATIONS[index] ?? CalendarIllustration;

  return (
    <motion.article
      whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_50px_-24px_rgba(0,43,91,0.22)] transition-shadow duration-300 hover:shadow-[0_28px_56px_-20px_rgba(0,43,91,0.28)]"
    >
      <div className="flex h-40 items-center justify-center bg-gradient-to-br from-navy-50/80 via-white to-accent/10 p-4 sm:h-44 sm:p-5">
        <Illustration />
      </div>

      <div className="flex flex-col items-center px-5 pb-5 pt-4 text-center sm:px-6">
        <h3 className="text-base font-bold text-navy sm:text-lg">{title}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-6">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export function ToolFeaturesSection() {
  const { title, intro, items } = TOOL_FEATURES_SECTION;

  return (
    <FadeUp>
      <section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 top-8 h-48 w-48 rounded-full bg-teal-400/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 bottom-4 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-black tracking-tight text-navy sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base md:text-[17px] md:leading-8">
            {intro}
          </p>
        </div>

        <StaggerContainer
          staggerDelay={0.1}
          className="relative mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-3 md:gap-7"
        >
          {items.map((item, index) => (
            <StaggerItem key={item.title}>
              <FeatureCard title={item.title} description={item.description} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </FadeUp>
  );
}
