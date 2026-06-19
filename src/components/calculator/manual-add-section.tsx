"use client";

import { LazyImage } from "@/components/ui/lazy-image";
import { FadeUp } from "@/components/motion";
import { MANUAL_ADD_OVERLAP } from "@/lib/calculator-page-content";
import { capitalizeHeadingWords } from "@/lib/utils";
function ManualAddVisual({ result }: { result: string }) {
  return (
    <div className="relative w-full overflow-x-clip py-2 pl-2 pr-2 pb-12 sm:overflow-visible sm:pl-8 sm:pr-4 sm:pb-14">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-3 h-[88%] w-[86%] bg-[radial-gradient(circle,rgba(0,43,91,0.07)_1px,transparent_1px)] bg-[length:12px_12px]"
      />

      <div
        aria-hidden
        className="absolute bottom-4 left-0 z-0 h-[82%] w-[78%] border-b-[3px] border-l-[3px] border-accent"
      />

      <div className="relative z-10 w-full">
        <LazyImage
          src="/images/manual-add-time-visual.webp"
          alt="Manuel saat ekleme görseli"
          width={800}
          height={533}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="h-auto w-full rounded-2xl [object-fit:contain] sm:rounded-3xl"
          priority={false}
        />
      </div>

      <div className="absolute bottom-2 right-2 z-20 w-[118px] rounded-2xl bg-accent px-3 py-5 text-center shadow-xl sm:right-8 sm:w-[156px] sm:rounded-3xl sm:px-5 sm:py-6">
        <p className="text-[2rem] font-black tabular-nums leading-none text-white sm:text-5xl">
          {result}
        </p>
        <p className="mt-1.5 text-sm font-semibold text-white/95">Saat</p>
      </div>
    </div>
  );
}

export function ManualAddSection() {
  const { title, intro, exampleRows, outro } = MANUAL_ADD_OVERLAP;
  const [startRow, addRow, resultRow] = exampleRows;

  return (
    <section className="relative w-full overflow-x-clip bg-background py-10 sm:py-14 md:py-16 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(0,43,91,0.03)_0px,rgba(0,43,91,0.03)_1px,transparent_1px,transparent_72px)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <FadeUp className="w-full">
          <ManualAddVisual result={resultRow?.value ?? "18:15"} />
        </FadeUp>

        <FadeUp delay={0.08} className="flex w-full flex-col justify-center">
          <h2 className="text-2xl font-black leading-snug text-navy sm:text-3xl md:text-[2.05rem] md:leading-tight">
            {capitalizeHeadingWords(title)}
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
            {intro}
          </p>

          {startRow && addRow && (
            <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-10">
              <div>
                <h3 className="text-base font-bold text-accent sm:text-lg">
                  {capitalizeHeadingWords(startRow.label)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
                  <span className="font-bold tabular-nums text-navy">
                    {startRow.value}
                  </span>
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-accent sm:text-lg">
                  {capitalizeHeadingWords(addRow.label)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
                  <span className="font-bold text-navy">{addRow.value}</span>
                </p>
              </div>
            </div>
          )}

          {resultRow && (
            <p className="mt-6 text-sm text-foreground/75 sm:text-[15px]">
              <span className="font-semibold text-navy">{resultRow.label}:</span>{" "}
              <span className="font-bold tabular-nums text-navy">{resultRow.value}</span>
            </p>
          )}

          <p className="mt-6 text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
            {outro}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
