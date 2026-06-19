"use client";

import Image from "next/image";
import { FadeUp } from "@/components/motion";
import { MANUAL_ADD_OVERLAP } from "@/lib/calculator-page-content";
function ManualAddVisual({ result }: { result: string }) {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-5 -left-5 h-[90%] w-[88%] bg-[radial-gradient(circle,rgba(0,43,91,0.07)_1px,transparent_1px)] bg-[length:12px_12px]"
      />

      <div
        aria-hidden
        className="absolute -bottom-8 -left-8 z-0 h-[82%] w-[80%] border-b-[3px] border-l-[3px] border-accent"
      />

      <div className="relative z-10 min-h-[360px] w-full overflow-hidden rounded-2xl sm:min-h-[420px] sm:rounded-3xl lg:min-h-[520px]">
        <Image
          src="/images/manual-add-time-visual.webp"
          alt="Manuel saat ekleme görseli"
          width={800}
          height={533}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="h-full min-h-[360px] w-full rounded-2xl object-cover sm:min-h-[420px] sm:rounded-3xl lg:min-h-[520px]"
          priority={false}
        />
      </div>

      <div className="absolute -bottom-6 -right-4 z-20 w-[140px] rounded-2xl bg-accent px-5 py-6 text-center shadow-xl sm:-right-6 sm:w-[156px] sm:rounded-3xl">
        <p className="text-[2.65rem] font-black tabular-nums leading-none text-white sm:text-5xl">
          {result}
        </p>
        <p className="mt-1.5 text-sm font-semibold text-white/95">Saat</p>
        <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/85">
          Sonuç
        </p>
      </div>
    </div>
  );
}

export function ManualAddSection() {
  const { title, intro, exampleRows, outro } = MANUAL_ADD_OVERLAP;
  const [startRow, addRow, resultRow] = exampleRows;

  return (
    <section className="relative w-full overflow-hidden bg-background py-10 sm:py-14 md:py-16 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(0,43,91,0.03)_0px,rgba(0,43,91,0.03)_1px,transparent_1px,transparent_72px)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <FadeUp className="w-full">
          <ManualAddVisual result={resultRow?.value ?? "18:15"} />
        </FadeUp>

        <FadeUp delay={0.08} className="flex w-full flex-col justify-center">
          <p className="text-base font-bold text-accent sm:text-lg">
            Manuel Hesaplama —
          </p>

          <h2 className="mt-3 text-2xl font-black leading-snug text-navy sm:text-3xl md:text-[2.05rem] md:leading-tight">
            {title}
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
            {intro}
          </p>

          <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-navy">
            Örnek
          </p>

          {startRow && addRow && (
            <div className="mt-4 grid gap-8 sm:grid-cols-2 sm:gap-10">
              <div>
                <h3 className="text-base font-bold text-accent sm:text-lg">
                  {startRow.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
                  <span className="font-bold tabular-nums text-navy">
                    {startRow.value}
                  </span>
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-accent sm:text-lg">
                  {addRow.label}
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
