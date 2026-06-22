"use client";

import type { ReactNode } from "react";
import { LazyImage } from "@/components/ui/lazy-image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  CalendarRange,
  Clock,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { FadeUp } from "@/components/motion";
import { withHomepageToolLink } from "@/components/seo/time-unit-links";
import { SectionTitle } from "@/components/calculator/content-layouts";
import { cn, capitalizeHeadingWords } from "@/lib/utils";
import {
  ANNUAL_SALARY_TABLE,
  HOW_HOURLY_CALCULATED,
  HOURLY_MONTHLY_DIFF,
  OVERTIME_SECTION,
  PROS_CONS_SECTION,
  WORKING_HOURS_SECTION,
} from "@/lib/saat-ucreti-content";

function FormulaVisual({
  type,
  lines,
  icon: Icon,
}: {
  type: "yearly" | "monthly" | "weekly" | "daily";
  lines: readonly string[];
  icon: LucideIcon;
}) {
  const result = lines[lines.length - 1] ?? "";

  return (
    <div className="relative w-full max-w-[220px]">
      <div className="rounded-2xl border border-navy-100/80 bg-white/90 p-3 shadow-sm">
        <div className="flex items-center gap-2 border-b border-navy-100/70 pb-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Icon className="h-4 w-4" strokeWidth={2} />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-navy/70">
            {type === "yearly" && "Yıllık ÷ 12"}
            {type === "monthly" && "Aylık ÷ 225"}
            {type === "weekly" && "Haftalık ÷ 45"}
            {type === "daily" && "Günlük ÷ 7,5"}
          </span>
        </div>
        <div className="mt-2 space-y-1 font-mono text-[10px] leading-relaxed text-navy/80 sm:text-[11px]">
          {lines.slice(0, -1).map((line) => (
            <p key={line} className="truncate">
              {line}
            </p>
          ))}
        </div>
        <p className="mt-2 rounded-lg bg-accent/10 px-2 py-1.5 text-center text-xs font-bold tabular-nums text-accent">
          {result}
        </p>
      </div>
      <div
        aria-hidden
        className="absolute -right-2 -top-2 h-10 w-10 rounded-full bg-primary/10 blur-xl"
      />
    </div>
  );
}

function BentoWageCard({
  number,
  label,
  title,
  lines,
  icon,
  visualType,
}: {
  number: number;
  label: string;
  title: string;
  lines: readonly string[];
  icon: LucideIcon;
  visualType: "yearly" | "monthly" | "weekly" | "daily";
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-5 shadow-[0_20px_50px_-22px_rgba(0,43,91,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-18px_rgba(211,84,0,0.22)] sm:p-6">
      <span
        className="text-[3.25rem] font-black leading-none text-accent sm:text-[3.75rem]"
        aria-hidden
      >
        {number}
      </span>

      <div className="mt-4 flex min-h-[150px] flex-1 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fff5eb]/90 via-white to-[#e8f0f8]/80 p-4 sm:min-h-[168px]">
        <FormulaVisual type={visualType} lines={lines} icon={icon} />
      </div>

      <div className="mt-5">
        <h3 className="text-base font-bold text-navy sm:text-lg">{capitalizeHeadingWords(label)}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-6">
          {title}
        </p>
      </div>
    </article>
  );
}

const BENTO_WAGE_STEPS = [
  {
    number: 1,
    label: "Yıllık Maaş",
    icon: CalendarRange,
    visualType: "yearly" as const,
  },
  {
    number: 2,
    label: "Aylık Maaş",
    icon: Wallet,
    visualType: "monthly" as const,
  },
  {
    number: 3,
    label: "Haftalık Ücret",
    icon: CalendarDays,
    visualType: "weekly" as const,
  },
  {
    number: 4,
    label: "Günlük Ücret",
    icon: Clock,
    visualType: "daily" as const,
  },
] as const;

function SectionCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm md:rounded-3xl",
        className
      )}
    >
      <div className="h-1 bg-gradient-to-r from-primary to-accent" />
      <div className="p-5 sm:p-6 md:p-8">{children}</div>
    </article>
  );
}

function formatTry(value: number, decimals = 0): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function HowHourlyCalculatedSection() {
  const { title, intro, examples } = HOW_HOURLY_CALCULATED;

  return (
    <section className="bg-white py-10 md:py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeUp className="text-center">
          <SectionTitle className="mx-auto">{title}</SectionTitle>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/75 sm:text-base sm:leading-7">
            {intro}
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-foreground/75 sm:text-base sm:leading-7">
            {withHomepageToolLink(
              "Zaman ve tarih hesaplamaları için ana sayfamızdaki saat hesaplama aracını kullanabilirsiniz."
            )}
          </p>
        </FadeUp>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 md:gap-6 lg:gap-8">
          {examples.map((example, index) => {
            const step = BENTO_WAGE_STEPS[index];
            if (!step) return null;

            return (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="h-full"
              >
                <BentoWageCard
                  number={step.number}
                  label={step.label}
                  title={example.title}
                  lines={example.lines}
                  icon={step.icon}
                  visualType={step.visualType}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AnnualSalaryTableSection() {
  const { title, intro, rows } = ANNUAL_SALARY_TABLE;

  return (
    <section className="bg-white py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeUp>
          <SectionCard>
            <SectionTitle>{title}</SectionTitle>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
              {intro}
            </p>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-navy-100">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 font-bold">Yıllık Maaş (₺)</th>
                    <th className="px-4 py-3 font-bold">Aylık Maaş (₺)</th>
                    <th className="px-4 py-3 font-bold">Saatlik Ücret (₺)</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr
                      key={row.annual}
                      className={cn(
                        "border-t border-navy-100",
                        index % 2 === 0 ? "bg-white" : "bg-background"
                      )}
                    >
                      <td className="px-4 py-2.5 tabular-nums text-navy">
                        {formatTry(row.annual)}
                      </td>
                      <td className="px-4 py-2.5 tabular-nums text-navy">
                        {formatTry(row.monthly)}
                      </td>
                      <td className="px-4 py-2.5 tabular-nums font-semibold text-navy">
                        {formatTry(row.hourly, 2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </FadeUp>
      </div>
    </section>
  );
}

export function WorkingHoursSection() {
  const { title, paragraphs } = WORKING_HOURS_SECTION;

  return (
    <section className="relative overflow-hidden py-10 md:py-14 lg:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
          <LazyImage
          src="/images/working-hours-calculation-bg.webp"
          alt="Çalışma saati hesaplama bölümü arka plan görseli"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.22] saturate-[0.85]"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/88 to-background/78" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(211,84,0,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(0,43,91,0.05),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <FadeUp>
          <SectionCard>
            <SectionTitle>{title}</SectionTitle>
            <div className="mt-5 space-y-3">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={cn(
                    "text-sm leading-relaxed sm:text-[15px] sm:leading-7",
                    index === 0
                      ? "text-foreground/75"
                      : "rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 font-medium text-navy"
                  )}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </SectionCard>
        </FadeUp>
      </div>
    </section>
  );
}

export function OvertimeCalculationSection() {
  const {
    title,
    intro,
    formulaTitle,
    formula,
    exampleTitle,
    exampleLines,
    exampleOutro,
  } = OVERTIME_SECTION;

  return (
    <section className="bg-white py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeUp>
          <SectionCard>
            <SectionTitle>{title}</SectionTitle>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
              {intro}
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-base font-bold text-navy">{capitalizeHeadingWords(formulaTitle)}</h3>
                <p className="mt-3 rounded-xl border border-accent/20 bg-accent/5 px-5 py-4 text-base font-bold text-navy sm:text-lg">
                  {formula}
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-navy">{capitalizeHeadingWords(exampleTitle)}</h3>
                <ul className="mt-3 space-y-2 rounded-2xl border border-navy-100 bg-background/50 p-5">
                  {exampleLines.map((line) => (
                    <li
                      key={line}
                      className="text-sm leading-relaxed text-foreground/80 sm:text-[15px]"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
                  {exampleOutro}
                </p>
              </div>
            </div>
          </SectionCard>
        </FadeUp>
      </div>
    </section>
  );
}

export function HourlyMonthlyDifferenceSection() {
  const { title, intro, rows } = HOURLY_MONTHLY_DIFF;

  return (
    <section className="bg-background py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeUp>
          <SectionCard>
            <SectionTitle>{title}</SectionTitle>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
              {intro}
            </p>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-navy-100">
              <table className="w-full min-w-[360px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 font-bold">Saatlik Ücret (₺)</th>
                    <th className="px-4 py-3 font-bold">Aylık Maaş (₺)</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr
                      key={row.hourly}
                      className={cn(
                        "border-t border-navy-100",
                        index % 2 === 0 ? "bg-white" : "bg-background"
                      )}
                    >
                      <td className="px-4 py-2.5 tabular-nums text-navy">
                        {formatTry(row.hourly)}
                      </td>
                      <td className="px-4 py-2.5 tabular-nums font-semibold text-navy">
                        {formatTry(row.monthly)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </FadeUp>
      </div>
    </section>
  );
}

export function ProsConsSection() {
  const { title, intro, items } = PROS_CONS_SECTION;

  return (
    <section className="relative overflow-hidden py-10 md:py-14 lg:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
          <LazyImage
          src="/images/pros-cons-employment-bg.webp"
          alt="Saatlik ve aylık ücret karşılaştırması bölümü arka plan görseli"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.2] saturate-[0.85]"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/96 via-white/90 to-white/82" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(211,84,0,0.05),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_90%,rgba(0,43,91,0.04),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <FadeUp>
          <SectionCard>
            <SectionTitle>{title}</SectionTitle>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
              {intro}
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-navy-100 p-5 sm:p-6"
                >
                  <h3 className="text-base font-black text-navy sm:text-lg">
                    {capitalizeHeadingWords(item.title)}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
                    {item.advantages}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-[15px]">
                    {item.disadvantages}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>
        </FadeUp>
      </div>
    </section>
  );
}
