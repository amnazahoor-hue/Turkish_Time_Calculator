"use client";

import {
  CalendarClock,
  Timer,
  Globe,
  Briefcase,
  FolderKanban,
  CalendarDays,
  Hourglass,
  GraduationCap,
  Sparkles,
  LayoutGrid,
} from "lucide-react";
import { FadeUp } from "@/components/motion";
import { SectionTitle } from "@/components/calculator/content-layouts";
import { cn } from "@/lib/utils";
import {
  TOOL_FEATURES_SECTION,
  TOOL_USES_SECTION,
} from "@/lib/calculator-page-content";

const FEATURE_ICONS = [CalendarClock, Timer, Globe] as const;
const USE_ICONS = [
  Briefcase,
  FolderKanban,
  CalendarDays,
  Hourglass,
  GraduationCap,
] as const;

export function ToolFeaturesSection() {
  const { title, intro, items } = TOOL_FEATURES_SECTION;

  return (
    <FadeUp>
      <div>
        <div className="flex items-start gap-3">
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <Sparkles className="h-5 w-5 text-white" />
          </span>
          <div>
            <SectionTitle>{title}</SectionTitle>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {intro}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0 lg:overflow-hidden lg:rounded-2xl lg:border lg:border-border/60 lg:shadow-sm">
          {items.map((item, index) => {
            const Icon = FEATURE_ICONS[index] ?? CalendarClock;
            return (
              <div
                key={item}
                className={cn(
                  "relative flex flex-col items-center px-5 py-7 text-center sm:rounded-xl sm:border sm:border-border/60 lg:rounded-none lg:border-0",
                  index === 0
                    ? "bg-primary/5 lg:border-r lg:border-primary/20 lg:bg-primary/[0.07]"
                    : "bg-white lg:border-r lg:border-border/40 last:lg:border-r-0"
                )}
              >
                {index === 0 && (
                  <span className="absolute left-0 top-0 hidden h-full w-1 bg-gradient-primary lg:block" />
                )}
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-white shadow-glow">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                  {index + 1}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-foreground sm:text-[15px]">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </FadeUp>
  );
}

export function ToolUsesSection() {
  const { title, intro, items } = TOOL_USES_SECTION;

  return (
    <FadeUp>
      <div className="hover-card overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-white via-white to-primary/[0.04] shadow-sm transition-all duration-300 md:rounded-3xl">
        <div className="border-b border-border/40 bg-gradient-to-r from-primary/5 to-secondary/5 px-5 py-5 sm:px-6 md:px-8">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <LayoutGrid className="h-5 w-5 text-white" />
            </span>
            <div>
              <SectionTitle>{title}</SectionTitle>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {intro}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4 xl:p-8">
          {items.map((item, index) => {
            const Icon = USE_ICONS[index] ?? Briefcase;
            return (
              <div
                key={item}
                className="group flex items-start gap-3 rounded-xl border border-border/50 bg-white p-4 shadow-sm transition-all hover:border-primary/25 hover:shadow-premium"
              >
                <span className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-gradient-primary">
                  <Icon className="h-4 w-4 text-primary transition-colors group-hover:text-white" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-0.5 text-sm font-medium leading-snug text-foreground">
                    {item}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </FadeUp>
  );
}
