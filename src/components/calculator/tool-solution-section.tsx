"use client";

import { CheckCircle2 } from "lucide-react";
import { FadeUp } from "@/components/motion";
import { SectionTitle } from "@/components/calculator/content-layouts";
import { TOOL_SOLUTION_SECTION } from "@/lib/calculator-page-content";

export function ToolSolutionSection() {
  const { title, content } = TOOL_SOLUTION_SECTION;

  return (
    <FadeUp>
      <article className="hover-card relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.07] via-white to-secondary/[0.05] shadow-sm transition-all duration-300 md:rounded-3xl">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative p-6 sm:p-8 md:p-10">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
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
      </article>
    </FadeUp>
  );
}
