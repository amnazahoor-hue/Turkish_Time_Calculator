"use client";

import { FadeUp } from "@/components/motion";
import { SectionTitle } from "@/components/calculator/content-layouts";
import { SEVENTY_TWO_HOURS_SOLUTION } from "@/lib/seventy-two-hours-content";

export function SeventyTwoHoursSolutionSection() {
  const { title, content } = SEVENTY_TWO_HOURS_SOLUTION;

  return (
    <section className="bg-white py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeUp>
          <article className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm md:rounded-3xl">
            <div className="h-1 bg-gradient-to-r from-primary to-accent" />
            <div className="p-5 sm:p-6 md:p-8 lg:p-10">
              <SectionTitle>{title}</SectionTitle>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-foreground/75 sm:text-base sm:leading-7 md:text-[17px] md:leading-8">
                {content}
              </p>
            </div>
          </article>
        </FadeUp>
      </div>
    </section>
  );
}
