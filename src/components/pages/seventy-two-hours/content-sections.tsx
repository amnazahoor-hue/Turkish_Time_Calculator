"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, Equal, Sun, Timer, X } from "lucide-react";
import { SectionTitle } from "@/components/calculator/content-layouts";
import { FadeUp } from "@/components/motion";

function MinutesInDayVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 top-0 h-20 w-20 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 bottom-4 h-24 w-24 rounded-full bg-secondary/15 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-white p-5 shadow-premium sm:rounded-3xl sm:p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-secondary/[0.06]" />

        <div className="relative space-y-4">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 6, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow"
            >
              <Sun className="h-5 w-5 text-white" />
            </motion.div>
            <div>
              <p className="text-sm font-semibold text-foreground">1 Gün</p>
              <p className="text-xs text-muted">24 saatlik döngü</p>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-xl border border-border/60 bg-white/90 p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Saat</span>
              </div>
              <span className="text-2xl font-black tabular-nums text-foreground">24</span>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary/25 bg-white"
            >
              <X className="h-4 w-4 text-primary" />
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="rounded-xl border border-dashed border-primary/30 bg-primary/5 px-4 py-3 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              24 × 60 dakika
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">60 dk = 1 saat</p>
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
                "0 0 24px 0 rgba(255, 90, 44, 0.18)",
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
              className="mt-1 text-3xl font-black tabular-nums text-foreground"
            >
              1440
            </motion.p>
            <p className="mt-1 text-sm font-medium text-muted">dakika / gün</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ThreeHoursMinutesVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 m-auto h-56 w-56 rounded-full border border-dashed border-primary/15"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-white p-5 shadow-premium sm:rounded-3xl sm:p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.05] via-transparent to-primary/[0.05]" />

        <div className="relative">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow"
            >
              <Timer className="h-5 w-5 text-white" />
            </motion.div>
            <div>
              <p className="text-sm font-semibold text-foreground">3 Saat Dönüşümü</p>
              <p className="text-xs text-muted">Saat → dakika</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2.5">
            {[1, 2, 3].map((hour) => (
              <motion.div
                key={hour}
                animate={{ y: [0, hour % 2 === 0 ? -4 : 4, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: hour * 0.15,
                }}
                className="rounded-xl border border-border/60 bg-white/90 p-3 text-center"
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                  Saat {hour}
                </p>
                <p className="mt-1 text-xl font-black tabular-nums text-foreground">60</p>
                <p className="text-[10px] text-muted">dakika</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
            <span className="rounded-lg bg-slate-100 px-3 py-1.5 tabular-nums">3</span>
            <X className="h-4 w-4 text-primary" />
            <span className="rounded-lg bg-slate-100 px-3 py-1.5 tabular-nums">60</span>
            <Equal className="h-4 w-4 text-primary" />
            <motion.span
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="rounded-lg bg-gradient-to-br from-primary/15 to-secondary/15 px-3 py-1.5 tabular-nums text-primary"
            >
              180
            </motion.span>
          </div>

          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-4 rounded-xl border border-primary/20 bg-[#fff5eb] px-4 py-3 text-center"
          >
            <p className="text-sm font-bold text-primary">3 saat = 180 dakika</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const DAY_STEPS = [
  { number: 1, text: "Bir günde 24 saat vardır." },
  { number: 2, text: "Bir günde 1440 dakika vardır." },
];

export function MinutesInDaySection() {
  return (
    <article className="overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm md:rounded-3xl">
      <div className="h-1 bg-gradient-primary" />
      <div className="grid items-center gap-8 p-5 sm:p-6 md:p-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
        <FadeUp className="flex flex-col justify-center">
          <SectionTitle>Bir günde kaç dakika vardır?</SectionTitle>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base md:leading-7">
            Bir günde kaç dakika olduğunu hesaplamak için, günü saatlere ve
            saatleri dakikalara bölün. Cevabı bulacaksınız.
          </p>

          <div className="mt-6 space-y-3">
            {DAY_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-border/50 bg-slate-50/80 p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-sm font-bold text-white shadow-glow">
                  {step.number}
                </span>
                <p className="pt-2 text-sm font-medium leading-relaxed text-foreground sm:text-base">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        <div className="flex items-center justify-center lg:justify-end">
          <MinutesInDayVisual />
        </div>
      </div>
    </article>
  );
}

export function ThreeHoursMinutesSection() {
  return (
    <article className="overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm md:rounded-3xl">
      <div className="h-1 bg-gradient-to-r from-secondary to-primary" />
      <div className="grid items-center gap-8 p-5 sm:p-6 md:p-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
        <div className="order-2 flex items-center justify-center lg:order-1 lg:justify-start">
          <ThreeHoursMinutesVisual />
        </div>

        <FadeUp className="order-1 flex flex-col justify-center lg:order-2">
          <SectionTitle>3 saatte kaç dakika vardır?</SectionTitle>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base md:leading-7">
            Bir saatte 60 dakika vardır. Dolayısıyla, 3 saat için dakikaları
            saat sayısıyla çarpmanız yeterlidir.{" "}
            <span className="font-semibold text-foreground">3 × 60 = 180</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-5"
          >
            <div className="flex items-center gap-2 text-primary">
              <CalendarDays className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-wider">
                Cevap
              </p>
            </div>
            <p className="mt-2 text-lg font-bold text-foreground sm:text-xl">
              3 saat = 180 dakika
            </p>
          </motion.div>

          <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base md:leading-7">
            Bu dönüşüm, programları, egzersiz sürelerini, seyahat sürelerini ve
            diğer zamana dayalı faaliyetleri hesaplamak için kullanışlıdır.
          </p>
        </FadeUp>
      </div>
    </article>
  );
}
