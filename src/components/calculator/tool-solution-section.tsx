"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FadeUp } from "@/components/motion";
import { SectionTitle } from "@/components/calculator/content-layouts";
import { TOOL_SOLUTION_SECTION } from "@/lib/calculator-page-content";

export function ToolSolutionSection() {
  const { title, content } = TOOL_SOLUTION_SECTION;

  return (
    <FadeUp>
      <motion.article
        whileHover={{
          y: -6,
          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
        }}
        className="group hover-card relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.07] via-white to-secondary/[0.05] shadow-sm transition-all duration-300 md:rounded-3xl hover:border-primary/35 hover:shadow-[0_24px_50px_-16px_rgba(0,43,91,0.22),0_0_30px_-8px_rgba(211,84,0,0.2)]"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative p-6 sm:p-8 md:p-10">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_22px_rgba(211,84,0,0.5)]">
              <CheckCircle2 className="h-6 w-6 text-white" />
            </span>
            <div className="min-w-0 flex-1">
              <SectionTitle>{title}</SectionTitle>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base md:text-[17px] md:leading-8">
                {content}
              </p>
            </div>
          </div>
        </div>
      </motion.article>
    </FadeUp>
  );
}
