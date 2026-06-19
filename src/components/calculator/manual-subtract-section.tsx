"use client";

import Image from "next/image";
import { FadeUp } from "@/components/motion";
import { SectionTitle } from "@/components/calculator/content-layouts";
import { MANUAL_SUBTRACT_OVERLAP } from "@/lib/calculator-page-content";

function ManualTimeImage() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
      <Image
        src="/images/image1.webp"
        alt="Saat hesaplama manuel yöntem görseli"
        width={800}
        height={597}
        className="h-auto w-full rounded-2xl object-cover sm:rounded-3xl"
        sizes="(max-width: 1024px) 100vw, 480px"
        priority={false}
      />
    </div>
  );
}

export function ManualSubtractSection() {
  const { title, intro, exampleRows, remindersTitle, reminders } =
    MANUAL_SUBTRACT_OVERLAP;

  return (
    <section className="py-4 sm:py-6">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <FadeUp className="flex flex-col justify-center">
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

        <FadeUp delay={0.1} className="flex items-center justify-center lg:justify-end">
          <ManualTimeImage />
        </FadeUp>
      </div>
    </section>
  );
}
