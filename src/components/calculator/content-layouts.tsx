"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarClock,
  Timer,
  Plus,
  Minus,
  Calculator,
  Clock,
  Check,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { FadeUp } from "@/components/motion";
import { cn } from "@/lib/utils";

/* ─── Shared primitives ─── */

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-xl font-black text-foreground sm:text-2xl md:text-3xl",
        className
      )}
    >
      {children}
      <span className="mt-2 block h-1 w-16 rounded-full bg-gradient-primary" />
    </h2>
  );
}

/* ─── Layout 1: Text left + visual card right (sample 3 & 4) ─── */

export function SplitContentVisual({
  title,
  children,
  visual,
  reverse = false,
}: {
  title: string;
  children: React.ReactNode;
  visual: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <FadeUp>
      <div
        className={cn(
          "grid items-center gap-8 lg:grid-cols-2 lg:gap-10",
          reverse && "lg:[&>*:first-child]:order-2"
        )}
      >
        <div>
          <SectionTitle>{title}</SectionTitle>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
            {children}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">{visual}</div>
      </div>
    </FadeUp>
  );
}

export function VisualCalculatorCard() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute -inset-3 rounded-3xl bg-gradient-primary/15 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white to-primary/5 p-6 shadow-premium md:rounded-3xl md:p-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
          <Calculator className="h-10 w-10 text-white" />
        </div>
        <div className="mt-5 space-y-2">
          <div className="h-3 rounded-full bg-primary/20" />
          <div className="h-3 w-4/5 rounded-full bg-primary/15" />
          <div className="mt-4 flex gap-2">
            <div className="h-10 flex-1 rounded-xl bg-gradient-primary/20" />
            <div className="h-10 w-10 rounded-xl bg-secondary/30" />
          </div>
          <div className="flex gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Plus className="h-4 w-4 text-primary" />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Minus className="h-4 w-4 text-primary" />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-dark/10">
              <Clock className="h-4 w-4 text-dark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineSectionImage({
  src,
  alt,
  width,
  height,
  align = "left",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  align?: "left" | "right";
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-md lg:mx-0",
        align === "right" && "lg:ml-auto"
      )}
    >
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-sm" />
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-white shadow-premium transition-all duration-500 ease-out hover:scale-[1.02] hover:border-primary/25 hover:shadow-[0_24px_50px_-16px_rgba(0,43,91,0.25)] sm:rounded-3xl">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full object-cover"
          sizes="(max-width: 1024px) 100vw, 480px"
        />
      </div>
    </div>
  );
}

/* ─── Layout 2: Overlap white + primary panel (sample 1) ─── */

export function OverlapPanelSection({
  title,
  description,
  exampleRows,
  footer,
}: {
  title: string;
  description: string;
  exampleRows?: readonly { label: string; value: string }[];
  footer?: string;
}) {
  return (
    <FadeUp>
      <article className="overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm md:rounded-3xl">
        <div className="h-1 bg-gradient-primary" />
        <div className="p-5 sm:p-6 md:p-8">
          <SectionTitle>{title}</SectionTitle>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base md:leading-7">
            {description}
          </p>

          {exampleRows && exampleRows.length > 0 && (
            <div className="mt-6 max-w-md rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] to-secondary/[0.04] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Örnek
              </p>
              <ol className="mt-3 space-y-2.5">
                {exampleRows.map((row, index) => (
                  <li key={row.label} className="flex items-start gap-3 text-sm">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed text-foreground">
                      <span className="font-medium">{row.label}</span>
                      {row.label === "Sonuç" ? ": " : " = "}
                      <span className="font-semibold text-primary">{row.value}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {footer && (
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted sm:text-base md:leading-7">
              {footer}
            </p>
          )}
        </div>
      </article>
    </FadeUp>
  );
}

/* ─── Layout 3: 4-column step cards (sample 8) ─── */

export function FourStepCards({
  steps,
}: {
  steps: readonly { title: string; description: string }[];
}) {
  return (
    <FadeUp>
      <div className="overflow-hidden rounded-2xl border border-border/60 shadow-sm sm:rounded-3xl">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-0 lg:grid-cols-5">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            whileHover={{
              y: -10,
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            }}
            className={cn(
              "group relative flex cursor-default flex-col items-center overflow-hidden bg-white px-4 py-6 text-center",
              "border-border/40 sm:border-b sm:last:border-b-0",
              "lg:border-0 lg:border-r lg:last:border-r-0",
              "transition-[box-shadow,background-color,border-color] duration-300",
              "hover:z-10 hover:bg-gradient-to-b hover:from-primary/[0.06] hover:via-white hover:to-white",
              "hover:shadow-[0_20px_45px_-15px_rgba(0,43,91,0.22),0_0_28px_-6px_rgba(211,84,0,0.25)]",
              "lg:hover:shadow-[0_20px_45px_-15px_rgba(0,43,91,0.22),0_0_28px_-6px_rgba(211,84,0,0.25)]"
            )}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary via-primary to-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/15"
            />
            <span
              className={cn(
                "relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-white shadow-glow",
                "transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_22px_rgba(211,84,0,0.5)]"
              )}
            >
              {index + 1}
            </span>
            <h3 className="mt-3 text-sm font-bold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-base">
              {step.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground/80 sm:text-sm">
              {step.description}
            </p>
          </motion.div>
        ))}
        </div>
      </div>
    </FadeUp>
  );
}

/* ─── Layout 4: Timeline with visual (sample 6) ─── */

export function TimelineSection({
  title,
  intro,
  steps,
  example,
  visualImage,
  visualPosition = "left",
}: {
  title: string;
  intro: string;
  steps: { title: string; description: string }[];
  example?: { label: string; rows: { key: string; value: string }[] };
  visualImage?: { src: string; alt: string; width: number; height: number };
  visualPosition?: "left" | "right";
}) {
  const imageOnRight = visualPosition === "right";

  const visualBlock = (
    <div
      className={cn(
        "flex justify-center",
        visualImage ? (imageOnRight ? "lg:order-2 lg:justify-end" : "lg:order-1 lg:justify-start") : "hidden lg:order-1 lg:flex"
      )}
    >
      {visualImage ? (
        <TimelineSectionImage {...visualImage} align={visualPosition} />
      ) : (
        <VisualCalculatorCard />
      )}
    </div>
  );

  const contentBlock = (
    <div
      className={cn(
        visualImage && (imageOnRight ? "lg:order-1" : "lg:order-2")
      )}
    >
      <p className="text-sm text-muted sm:text-base">{intro}</p>
      <ol className="relative mt-6 space-y-0">
        <div className="absolute bottom-2 left-[18px] top-2 w-px bg-border" />
        {steps.map((step, index) => (
          <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
            <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-primary text-xs font-bold text-white shadow-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="pt-0.5">
              <h3 className="text-sm font-bold text-foreground">{step.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
      {example && (
        <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {example.label}
          </p>
          <div className="mt-2 space-y-1.5 font-mono text-sm">
            {example.rows.map((row) => (
              <div key={row.key} className="flex justify-between gap-4">
                <span className="text-muted">{row.key}</span>
                <span className="font-semibold text-foreground">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <FadeUp>
      <SectionTitle className="mb-6">{title}</SectionTitle>
      <div
        className={cn(
          "grid gap-8 lg:items-start",
          imageOnRight && visualImage
            ? "lg:grid-cols-[1.1fr_0.9fr]"
            : "lg:grid-cols-[0.9fr_1.1fr]"
        )}
      >
        {imageOnRight && visualImage ? (
          <>
            {contentBlock}
            {visualBlock}
          </>
        ) : (
          <>
            {visualBlock}
            {contentBlock}
          </>
        )}
      </div>
    </FadeUp>
  );
}

/* ─── Layout 5: Icon card list + visual (sample 7) ─── */

export function IconCardListSection({
  title,
  intro,
  items,
}: {
  title: string;
  intro?: string;
  items: { title: string; description: string; icon: LucideIcon }[];
}) {
  return (
    <FadeUp>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <SectionTitle>{title}</SectionTitle>
          {intro && (
            <p className="mt-3 text-sm text-muted sm:text-base">{intro}</p>
          )}
          <ul className="mt-5 space-y-3">
            {items.map((item) => (
              <li
                key={item.title}
                className="group flex gap-3 rounded-xl border border-primary/10 bg-primary/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.08] hover:shadow-[0_16px_36px_-12px_rgba(0,43,91,0.18)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-primary group-hover:shadow-[0_0_16px_rgba(211,84,0,0.4)]">
                  <item.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-white" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-xs">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative flex aspect-square items-center justify-center rounded-3xl border border-border/40 bg-white p-8 shadow-premium">
              <div className="text-center">
                <Sparkles className="mx-auto h-12 w-12 text-primary" />
                <p className="mt-4 text-lg font-bold text-foreground">
                  Saat Hesaplama
                </p>
                <p className="mt-1 text-sm text-muted">Akıllı zaman yönetimi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

/* ─── Layout 6: Feature grid (sample 5) ─── */

export function FeatureGridSection({
  title,
  intro,
  features,
}: {
  title: string;
  intro: string;
  features: { title: string; description: string; icon: LucideIcon }[];
}) {
  return (
    <FadeUp>
      <SectionTitle>{title}</SectionTitle>
      <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">{intro}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-border/60 bg-white p-5 shadow-sm transition-shadow hover:shadow-premium"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <feature.icon className="h-5 w-5 text-primary" />
            </span>
            <h3 className="mt-3 text-sm font-bold text-foreground sm:text-base">
              {feature.title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </FadeUp>
  );
}

/* ─── Layout 7: Uses pills + orbital hub (sample 2 simplified) ─── */

export function UsesHubSection({
  title,
  uses,
}: {
  title: string;
  uses: { title: string; icon: LucideIcon }[];
}) {
  const left = uses.slice(0, Math.ceil(uses.length / 2));
  const right = uses.slice(Math.ceil(uses.length / 2));

  return (
    <FadeUp>
      <SectionTitle className="mb-8 text-center">{title}</SectionTitle>
      <div className="relative rounded-2xl border border-border/40 bg-gradient-to-br from-primary/[0.04] to-secondary/[0.06] p-6 md:p-10">
        <div className="absolute left-1/2 top-1/2 hidden h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 md:block" />
        <div className="absolute left-1/2 top-1/2 hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/15 md:block" />

        <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-4">
          <ul className="space-y-3 md:text-right">
            {left.map((use) => (
              <li
                key={use.title}
                className="flex items-center gap-2 md:flex-row-reverse"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <use.icon className="h-4 w-4 text-primary" />
                </span>
                <span className="text-xs font-medium text-foreground sm:text-sm">
                  {use.title}
                </span>
              </li>
            ))}
          </ul>

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow md:h-20 md:w-20">
            <Timer className="h-8 w-8 text-white md:h-9 md:w-9" />
          </div>

          <ul className="space-y-3">
            {right.map((use) => (
              <li key={use.title} className="flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <use.icon className="h-4 w-4 text-primary" />
                </span>
                <span className="text-xs font-medium text-foreground sm:text-sm">
                  {use.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeUp>
  );
}

/* ─── Layout 8: Checklist conclusion (sample 3 style) ─── */

export function ConclusionSection({
  title,
  paragraphs,
  highlights,
}: {
  title: string;
  paragraphs: string[];
  highlights: string[];
}) {
  return (
    <SplitContentVisual
      title={title}
      visual={
        <div className="w-full max-w-sm overflow-hidden rounded-2xl shadow-premium">
          <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 flex items-center justify-center">
            <CalendarClock className="h-20 w-20 text-primary/40" />
          </div>
        </div>
      }
    >
      {paragraphs.map((p) => (
        <p key={p.slice(0, 20)}>{p}</p>
      ))}
      <ul className="space-y-2 pt-2">
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-foreground">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dark">
              <Check className="h-3 w-3 text-white" />
            </span>
            <span className="text-sm">{h}</span>
          </li>
        ))}
      </ul>
    </SplitContentVisual>
  );
}
