"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Target,
  Clock,
  Layers,
  Receipt,
  Timer,
  type LucideIcon,
} from "lucide-react";
import { FadeUp } from "@/components/motion";
import { SectionTitle } from "@/components/calculator/content-layouts";
import {
  CALCULATOR_BENEFITS,
  TOOL_BENEFITS_SECTION,
} from "@/lib/calculator-page-content";

const BENEFIT_ICONS: Record<string, LucideIcon> = {
  Zap,
  Target,
  Clock,
  Layers,
  Receipt,
};

const VISUAL_ICONS = [Zap, Target, Clock, Layers, Receipt] as const;

function BenefitsVisual() {
  return (
    <div className="relative flex h-72 w-full items-center justify-center sm:h-80 md:h-[22rem]">
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-48 w-48 rounded-full bg-primary/20 blur-3xl sm:h-56 sm:w-56"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute h-56 w-56 rounded-full border border-dashed border-primary/20 sm:h-64 sm:w-64"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute h-44 w-44 rounded-full border border-primary/10 sm:h-52 sm:w-52"
      />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow sm:h-28 sm:w-28"
      >
        <Timer className="h-12 w-12 text-white sm:h-14 sm:w-14" strokeWidth={1.75} />
      </motion.div>

      {VISUAL_ICONS.map((Icon, index) => {
        const angle = (index / VISUAL_ICONS.length) * 360 - 90;
        const radius = 108;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={index}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
          >
            <motion.div
              animate={{ y: [0, index % 2 === 0 ? -6 : 6, 0] }}
              transition={{
                duration: 2.5 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/60 bg-white shadow-premium sm:h-12 sm:w-12"
            >
              <Icon className="h-5 w-5 text-primary" />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export function ToolBenefitsSection() {
  const { title, intro } = TOOL_BENEFITS_SECTION;

  return (
    <article className="hover-card overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition-all duration-300 md:rounded-3xl">
      <div className="h-1 bg-gradient-primary" />
      <div className="grid items-center gap-8 p-5 sm:p-6 md:p-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
        <FadeUp className="order-2 flex flex-col justify-center lg:order-1">
          <SectionTitle>{title}</SectionTitle>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base md:leading-7">
            {intro}
          </p>

          <ul className="mt-6 space-y-3">
            {CALCULATOR_BENEFITS.map((benefit) => {
              const Icon = BENEFIT_ICONS[benefit.icon] ?? Zap;
              return (
                <li
                  key={benefit.title}
                  className="flex gap-3 rounded-xl border border-border/50 bg-slate-50/60 p-4 transition-colors hover:border-primary/20 hover:bg-primary/[0.04]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-primary shadow-sm">
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground sm:text-base">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </FadeUp>

        <div className="order-1 flex items-center justify-center lg:order-2 lg:justify-end">
          <BenefitsVisual />
        </div>
      </div>
    </article>
  );
}
