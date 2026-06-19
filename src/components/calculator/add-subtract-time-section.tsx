"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarClock,
  Plus,
  Minus,
  Clock,
  ArrowRight,
  Calendar,
  Sparkles,
} from "lucide-react";
import { FadeUp } from "@/components/motion";
import { useState, useEffect } from "react";

const STEPS = [
  { icon: Calendar, label: "Tarih girin" },
  { icon: Clock, label: "Saat seçin" },
  { icon: Plus, label: "Ekle / Çıkar" },
  { icon: Sparkles, label: "Sonucu alın" },
];

function MotionGraphicPanel() {
  const [mode, setMode] = useState<"add" | "subtract">("add");

  useEffect(() => {
    const interval = setInterval(() => {
      setMode((m) => (m === "add" ? "subtract" : "add"));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -14, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-2 top-4 h-16 w-16 rounded-full bg-primary/20 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-3 bottom-8 h-20 w-20 rounded-full bg-secondary/15 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/50 bg-white/90 p-5 shadow-premium backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:shadow-[0_16px_40px_-10px_rgba(0,43,91,0.15)] sm:rounded-3xl sm:p-6 md:p-7">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-secondary/[0.06]" />

        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow"
            >
              <CalendarClock className="h-6 w-6 text-white" />
            </motion.div>
            <div className="flex gap-1.5 rounded-full bg-black/[0.04] p-1">
              <motion.button
                type="button"
                onClick={() => setMode("add")}
                className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  mode === "add"
                    ? "bg-gradient-primary text-white shadow-sm"
                    : "text-muted"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="h-3 w-3" />
                Ekle
              </motion.button>
              <motion.button
                type="button"
                onClick={() => setMode("subtract")}
                className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  mode === "subtract"
                    ? "bg-gradient-primary text-white shadow-sm"
                    : "text-muted"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <Minus className="h-3 w-3" />
                Çıkar
              </motion.button>
            </div>
          </div>

          {/* Input fields mockup */}
          <div className="mt-5 space-y-3">
            <div className="rounded-xl border border-border/60 bg-white p-3.5">
              <div className="flex items-center justify-between">
                <motion.span
                  key="date"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="text-lg font-bold tabular-nums text-foreground"
                >
                  15 Haz 2025
                </motion.span>
                <motion.span
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                  className="text-lg font-bold tabular-nums text-primary"
                >
                  09:00
                </motion.span>
              </div>
            </div>

            {/* Operation arrow */}
            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary/30 bg-white"
              >
                <AnimatePresence mode="wait">
                  {mode === "add" ? (
                    <motion.div
                      key="plus"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Plus className="h-4 w-4 text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="minus"
                      initial={{ scale: 0, rotate: 90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: -90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Minus className="h-4 w-4 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-primary/30 bg-primary/5 px-4 py-2.5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={mode}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="text-sm font-semibold text-primary"
                >
                  {mode === "add" ? "+ 2 saat 30 dk" : "− 1 saat 15 dk"}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Result */}
            <div className="rounded-xl border border-primary/25 bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                Yeni Tarih & Saat
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="mt-1.5 flex items-center justify-between"
                >
                  <span className="text-xl font-black tabular-nums text-foreground">
                    {mode === "add" ? "15 Haz 2025" : "15 Haz 2025"}
                  </span>
                  <motion.span
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xl font-black tabular-nums text-primary"
                  >
                    {mode === "add" ? "11:30" : "07:45"}
                  </motion.span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mini step flow */}
          <div className="mt-5 flex items-center justify-between gap-1 border-t border-border/40 pt-4">
            {STEPS.map((step) => (
              <div key={step.label} className="flex flex-col items-center gap-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <step.icon className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="hidden text-[9px] font-medium text-muted sm:block">
                  {step.label}
                </span>
                {STEPS.indexOf(step) < STEPS.length - 1 && (
                  <ArrowRight className="absolute hidden h-3 w-3 text-primary/30 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AddSubtractTimeSection() {
  return (
    <div className="relative w-full py-2 sm:py-4">
      <div className="pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-0 h-32 w-32 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <FadeUp>
          <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Tarihe Saat Ekleme veya Çıkarma
            <span className="mt-3 block h-1 w-16 rounded-full bg-gradient-primary" />
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base md:leading-7">
            Bu hesap makinesi, ihtiyaçlarınıza göre zaman girişlerini toplamanıza
            veya çıkarmanıza olanak tanır. Başlangıç tarihini ve saatini giriş
            alanlarına girmeniz yeterlidir. Toplama veya çıkarma seçeneklerinden
            birini seçin; ardından yeni tarih ve saati elde edeceksiniz.
          </p>
        </FadeUp>

        <MotionGraphicPanel />
      </div>
    </div>
  );
}
