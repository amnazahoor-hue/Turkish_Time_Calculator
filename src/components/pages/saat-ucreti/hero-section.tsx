"use client";

import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/motion";
import { HeroHourlyWageVisual } from "@/components/pages/saat-ucreti/hero-hourly-wage-visual";
import { SAAT_UCRETI_HERO } from "@/lib/saat-ucreti-content";
import { capitalizeHeadingWords } from "@/lib/utils";

export function SaatUcretiHeroSection() {
  const { h1, paragraphs } = SAAT_UCRETI_HERO;

  return (
    <section className="relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8f0f8] via-[#f8fafc] to-[#fff3eb]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_25%,rgba(0,43,91,0.14),transparent_52%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_72%,rgba(211,84,0,0.12),transparent_48%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <FadeUp>
            <h1 className="text-3xl font-black leading-tight tracking-tight text-navy sm:text-4xl md:text-[2.5rem] md:leading-tight lg:text-[2.75rem]">
              {capitalizeHeadingWords(h1)}
            </h1>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/75 sm:text-base sm:leading-7">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7">
              <a
                href="#saat-ucreti-hesaplayici"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-white shadow-[0_12px_28px_-8px_rgba(211,84,0,0.45)] transition-all duration-300 hover:scale-[1.03] hover:bg-accent-500 hover:shadow-glow active:scale-[0.98]"
              >
                Hesaplayıcıya Git
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.12} className="flex w-full justify-center lg:justify-end">
            <HeroHourlyWageVisual />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
