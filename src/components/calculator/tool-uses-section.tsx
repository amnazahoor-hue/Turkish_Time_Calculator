"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  FolderKanban,
  CalendarDays,
  Hourglass,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { SiteLogo } from "@/components/layout/site-logo";
import { TOOL_USES_SECTION } from "@/lib/calculator-page-content";
import { cn, capitalizeHeadingWords } from "@/lib/utils";

const USE_ICONS: LucideIcon[] = [
  Briefcase,
  FolderKanban,
  CalendarDays,
  Hourglass,
  GraduationCap,
];

function UseGridCell({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const Icon = USE_ICONS[index] ?? Briefcase;
  const col = index % 3;
  const row = Math.floor(index / 3);

  return (
    <motion.article
      whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
      transition={{ duration: 0.25 }}
      className={cn(
        "group relative border-white/10 p-6 sm:p-7 lg:p-8",
        "border-b last:border-b-0",
        "sm:[&:nth-child(odd)]:border-r",
        "lg:border-b-0 lg:last:border-b-0",
        col < 2 && "lg:border-r",
        row === 0 && "lg:border-b",
        index >= 3 && col < 1 && "lg:border-r"
      )}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-accent/20 group-hover:ring-accent/30">
        <Icon className="h-[18px] w-[18px] text-white" strokeWidth={2} />
      </div>

      <h3 className="mt-4 text-[15px] font-bold leading-snug text-white sm:text-base">
        {capitalizeHeadingWords(title)}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/55 sm:text-[15px] sm:leading-6">
        {description}
      </p>
    </motion.article>
  );
}

function DecorativeCell() {
  return (
    <div
      aria-hidden
      className="relative hidden overflow-hidden lg:block lg:border-t lg:border-white/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-navy/20" />
      <div className="flex h-full min-h-[180px] items-center justify-center p-8">
        <div className="relative h-24 w-24">
          <span className="absolute inset-0 rounded-full bg-accent/20 blur-xl" />
          <span className="relative flex h-full w-full items-center justify-center rounded-full border border-white/15 bg-white/90 p-3">
            <SiteLogo size={56} className="!ml-0 !mr-0 block shrink-0 object-center" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function ToolUsesSection() {
  const { title, intro, items } = TOOL_USES_SECTION;

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <FadeUp>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#1c1c1e] via-navy-800 to-navy-900 shadow-[0_32px_64px_-16px_rgba(0,43,91,0.45)] sm:rounded-[2rem]">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_70%_50%,rgba(211,84,0,0.18),transparent_65%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(0,43,91,0.35),transparent_55%)]"
            />

            <div className="relative grid lg:grid-cols-[2fr_3fr]">
              <div className="flex flex-col justify-center border-b border-white/10 px-7 py-10 sm:px-10 sm:py-12 lg:border-b-0 lg:border-r lg:py-14 lg:pl-12 lg:pr-10 xl:pl-14">
                <h2 className="text-2xl font-black leading-[1.15] tracking-tight text-white sm:text-3xl md:text-[2.25rem] lg:text-4xl xl:text-[2.65rem]">
                  {capitalizeHeadingWords(title)}
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55 sm:text-[15px] sm:leading-7">
                  {intro}
                </p>
              </div>

              <StaggerContainer
                staggerDelay={0.07}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              >
                {items.map((item, index) => (
                  <StaggerItem key={item.title}>
                    <UseGridCell
                      title={item.title}
                      description={item.description}
                      index={index}
                    />
                  </StaggerItem>
                ))}
                <DecorativeCell />
              </StaggerContainer>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
