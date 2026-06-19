"use client";

import { motion } from "framer-motion";
import { Clock, Plus, Equal, Timer } from "lucide-react";
import { FadeUp } from "@/components/motion";
import { SectionTitle } from "@/components/calculator/content-layouts";
import { MANUAL_ADD_OVERLAP } from "@/lib/calculator-page-content";

function ManualAddVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-2 top-2 h-14 w-14 rounded-full bg-primary/20 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute -left-2 bottom-6 h-16 w-16 rounded-full bg-secondary/15 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-white p-5 shadow-premium sm:rounded-3xl sm:p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-secondary/[0.05]" />

        <div className="relative">
          <div className="flex items-center gap-2.5">
            <motion.div
              animate={{ rotate: [0, 4, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow"
            >
              <Clock className="h-5 w-5 text-white" />
            </motion.div>
            <div>
              <p className="text-sm font-semibold text-foreground">Manuel Hesaplama</p>
              <p className="text-xs text-muted">Adım adım görsel</p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-xl border border-border/60 bg-white/90 p-3.5"
            >
              <p className="text-2xl font-black tabular-nums text-foreground">14:45</p>
            </motion.div>

            <div className="flex justify-center">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary/30 bg-white"
              >
                <Plus className="h-4 w-4 text-primary" />
              </motion.div>
            </div>

            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="rounded-xl border border-dashed border-primary/30 bg-primary/5 px-4 py-2.5 text-center"
            >
              <p className="text-sm font-semibold text-foreground">+ 3 saat 30 dakika</p>
            </motion.div>

            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10"
              >
                <Equal className="h-4 w-4 text-primary" />
              </motion.div>
            </div>

            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255, 90, 44, 0)",
                  "0 0 20px 0 rgba(255, 90, 44, 0.15)",
                  "0 0 0 0 rgba(255, 90, 44, 0)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="rounded-xl border border-primary/25 bg-gradient-to-br from-primary/10 to-secondary/10 p-4"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                Sonuç
              </p>
              <motion.p
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-1 text-2xl font-black tabular-nums text-foreground"
              >
                18:15
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted"
          >
            <Timer className="h-3.5 w-3.5" />
            <span>60 dk → 1 saat dönüşümü</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function ManualAddSection() {
  const { title, intro, exampleRows, outro } = MANUAL_ADD_OVERLAP;

  return (
    <article className="hover-card overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition-all duration-300 md:rounded-3xl">
      <div className="h-1 bg-gradient-primary" />
      <div className="grid items-center gap-8 p-5 sm:p-6 md:p-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
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
              <ol className="mt-3 space-y-2.5">
                {exampleRows.map((row, index) => (
                  <li key={row.label} className="flex items-start gap-3 text-sm">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed text-foreground">
                      <span className="font-medium">{row.label}</span>
                      {row.label === "Sonuç" ? ": " : " = "}
                      <span className="font-semibold">{row.value}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base md:leading-7">
            {outro}
          </p>
        </FadeUp>

        <div className="flex items-center justify-center lg:justify-end">
          <ManualAddVisual />
        </div>
      </div>
    </article>
  );
}
