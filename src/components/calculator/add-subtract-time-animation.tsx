"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Plus,
  Minus,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Mode = "add" | "subtract";

const SCENARIOS = {
  add: {
    mode: "add" as Mode,
    startDate: "15 Haz 2025",
    startTime: "09:00",
    delta: "+ 2 saat 30 dk",
    resultDate: "15 Haz 2025",
    resultTime: "11:30",
    startMinutes: 9 * 60,
    resultMinutes: 11 * 60 + 30,
    label: "Toplama",
  },
  subtract: {
    mode: "subtract" as Mode,
    startDate: "15 Haz 2025",
    startTime: "09:00",
    delta: "− 1 saat 15 dk",
    resultDate: "15 Haz 2025",
    resultTime: "07:45",
    startMinutes: 9 * 60,
    resultMinutes: 7 * 60 + 45,
    label: "Çıkarma",
  },
};

function clockAngles(totalMinutes: number) {
  const h = Math.floor(totalMinutes / 60) % 12;
  const m = totalMinutes % 60;
  return {
    hour: (h * 30 + m * 0.5) % 360,
    minute: m * 6,
  };
}

function AnimatedClock({
  minutes,
  mode,
}: {
  minutes: number;
  mode: Mode;
}) {
  const { hour, minute } = clockAngles(minutes);

  return (
    <div className="relative mx-auto h-44 w-44 sm:h-52 sm:w-52">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-dashed border-primary/20"
      />
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 blur-sm"
      />

      <div className="absolute inset-2 rounded-full border-2 border-primary/15 bg-white shadow-[inset_0_2px_12px_rgba(0,43,91,0.08)]">
        {[0, 90, 180, 270].map((deg) => (
          <span
            key={deg}
            className="absolute left-1/2 top-3 h-2 w-0.5 -translate-x-1/2 rounded-full bg-primary/30"
            style={{
              transformOrigin: "50% 76px",
              transform: `translateX(-50%) rotate(${deg}deg)`,
            }}
          />
        ))}

        <motion.div
          className="absolute bottom-1/2 left-1/2 h-[38%] w-1 -translate-x-1/2 origin-bottom rounded-full bg-primary"
          animate={{ rotate: hour }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute bottom-1/2 left-1/2 h-[48%] w-0.5 -translate-x-1/2 origin-bottom rounded-full bg-accent"
          animate={{ rotate: minute }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary to-accent shadow-sm" />
      </div>

      <motion.div
        key={mode}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md ${
          mode === "add" ? "bg-accent" : "bg-primary"
        }`}
      >
        {mode === "add" ? <Plus className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
        {SCENARIOS[mode].label}
      </motion.div>
    </div>
  );
}

function FlowParticle({ mode, delay }: { mode: Mode; delay: number }) {
  return (
    <motion.span
      className={`absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full ${
        mode === "add" ? "bg-accent" : "bg-primary"
      }`}
      initial={{ left: mode === "add" ? "8%" : "88%", opacity: 0, scale: 0 }}
      animate={{
        left: mode === "add" ? ["8%", "88%"] : ["88%", "8%"],
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.5],
      }}
      transition={{
        duration: 2.2,
        delay,
        repeat: Infinity,
        repeatDelay: 0.6,
        ease: "easeInOut",
      }}
    />
  );
}

function TimelineNode({
  label,
  date,
  time,
  variant,
  active,
}: {
  label: string;
  date: string;
  time: string;
  variant: "start" | "delta" | "result";
  active?: boolean;
}) {
  return (
    <motion.div
      animate={
        active
          ? {
              scale: [1, 1.04, 1],
              boxShadow: [
                "0 0 0 0 rgba(211,84,0,0)",
                "0 0 24px 0 rgba(211,84,0,0.25)",
                "0 0 0 0 rgba(211,84,0,0)",
              ],
            }
          : {}
      }
      transition={{ duration: 2, repeat: active ? Infinity : 0 }}
      className={cn(
        "relative z-10 min-w-0 flex-1 rounded-xl border px-3 py-3 text-center sm:px-4 sm:py-3.5",
        variant === "start" && "border-primary/20 bg-white",
        variant === "delta" && "border-dashed border-accent/40 bg-accent/5",
        variant === "result" &&
          "border-accent/30 bg-gradient-to-br from-primary/10 via-white to-accent/10"
      )}
    >
      <p className="text-[9px] font-bold uppercase tracking-wider text-primary/70 sm:text-[10px]">
        {label}
      </p>
      {variant === "delta" ? (
        <p className="mt-1 text-sm font-bold text-accent sm:text-base">{date}</p>
      ) : (
        <>
          <div className="mt-1 flex items-center justify-center gap-1 text-[11px] font-semibold text-foreground sm:text-xs">
            <Calendar className="h-3 w-3 text-primary" />
            {date}
          </div>
          <p className="mt-0.5 text-lg font-black tabular-nums text-primary sm:text-xl">
            {time}
          </p>
        </>
      )}
    </motion.div>
  );
}

export function AddSubtractTimeAnimation() {
  const [mode, setMode] = useState<Mode>("add");
  const [animPhase, setAnimPhase] = useState<"start" | "flow" | "result">("start");
  const scenario = SCENARIOS[mode];

  const displayMinutes =
    animPhase === "result" ? scenario.resultMinutes : scenario.startMinutes;

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const runCycle = () => {
      setAnimPhase("start");
      timeouts.push(setTimeout(() => setAnimPhase("flow"), 600));
      timeouts.push(setTimeout(() => setAnimPhase("result"), 1800));
      timeouts.push(
        setTimeout(() => {
          setMode((m) => (m === "add" ? "subtract" : "add"));
        }, 4200)
      );
    };

    runCycle();
    const interval = setInterval(runCycle, 5000);

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    setAnimPhase("start");
    const t1 = setTimeout(() => setAnimPhase("flow"), 600);
    const t2 = setTimeout(() => setAnimPhase("result"), 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [mode]);

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 top-0 h-28 w-28 rounded-full bg-accent/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-4 bottom-4 h-32 w-32 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="hover-image-frame relative overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-white via-white to-primary/[0.04] p-5 shadow-[0_20px_50px_-20px_rgba(0,43,91,0.25)] sm:rounded-3xl sm:p-6 md:p-7">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary to-accent" />

        <div className="relative flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow"
            >
              <Clock className="h-5 w-5 text-white" />
            </motion.div>
            <div>
              <p className="text-xs font-bold text-primary">Canlı Simülasyon</p>
              <p className="text-[10px] text-muted">Tarih + saat hesaplama</p>
            </div>
          </div>

          <div className="relative flex rounded-full bg-navy-50 p-1">
            <motion.div
              layout
              className="absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-gradient-primary shadow-sm"
              style={{ left: mode === "add" ? 4 : "calc(50% + 0px)" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            {(["add", "subtract"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`relative z-10 flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors ${
                  mode === m ? "text-white" : "text-muted"
                }`}
              >
                {m === "add" ? <Plus className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
                {m === "add" ? "Ekle" : "Çıkar"}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-6 flex justify-center">
          <AnimatedClock minutes={displayMinutes} mode={mode} />
        </div>

        <div className="relative mt-6">
          <div className="absolute left-[16%] right-[16%] top-1/2 h-0.5 -translate-y-1/2 overflow-hidden rounded-full bg-primary/10">
            <motion.div
              className={`h-full rounded-full ${mode === "add" ? "bg-accent" : "bg-primary"}`}
              initial={{ width: "0%" }}
              animate={{
                width: animPhase === "start" ? "0%" : animPhase === "flow" ? "50%" : "100%",
              }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          {[0, 1, 2].map((i) => (
            <FlowParticle key={`${mode}-${i}`} mode={mode} delay={i * 0.35} />
          ))}

          <div className="relative flex items-stretch gap-2 sm:gap-3">
            <TimelineNode
              label="Başlangıç"
              date={scenario.startDate}
              time={scenario.startTime}
              variant="start"
            />
            <div className="flex shrink-0 items-center">
              <motion.div
                animate={{ x: mode === "add" ? [0, 4, 0] : [0, -4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <ArrowRight
                  className={`h-4 w-4 text-primary/40 ${mode === "subtract" ? "rotate-180" : ""}`}
                />
              </motion.div>
            </div>
            <TimelineNode label="İşlem" date={scenario.delta} time="" variant="delta" />
            <div className="flex shrink-0 items-center">
              <motion.div
                animate={{ scale: animPhase === "result" ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.5 }}
              >
                <ArrowRight className="h-4 w-4 text-accent/60" />
              </motion.div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${mode}-${scenario.resultTime}`}
                initial={{ opacity: 0.5, scale: 0.95 }}
                animate={{
                  opacity: animPhase === "result" ? 1 : 0.65,
                  scale: animPhase === "result" ? 1 : 0.97,
                }}
                className="min-w-0 flex-1"
              >
                <TimelineNode
                  label="Sonuç"
                  date={scenario.resultDate}
                  time={scenario.resultTime}
                  variant="result"
                  active={animPhase === "result"}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-2 border-t border-border/40 pt-4">
          {[
            { icon: Calendar, label: "Tarih" },
            { icon: Clock, label: "Saat" },
            { icon: mode === "add" ? Plus : Minus, label: "İşlem" },
            { icon: Sparkles, label: "Sonuç" },
          ].map((step, i) => {
            const stepPhase =
              i === 0 ? true : i === 1 ? animPhase !== "start" : i === 2 ? animPhase === "flow" || animPhase === "result" : animPhase === "result";
            return (
              <motion.div
                key={step.label}
                animate={{ opacity: stepPhase ? 1 : 0.35, y: stepPhase ? 0 : 2 }}
                className="flex flex-col items-center gap-1"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 ${
                    stepPhase ? "bg-gradient-primary shadow-glow" : "bg-primary/10"
                  }`}
                >
                  <step.icon className={`h-3.5 w-3.5 ${stepPhase ? "text-white" : "text-primary"}`} />
                </div>
                <span className="text-[9px] font-medium text-muted">{step.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
