"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroHoursDaysVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[540px]"
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.9, 1.08, 0.9] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full"
      >
        <motion.div
          animate={{ rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-full w-full overflow-hidden rounded-2xl sm:rounded-3xl"
        >
          <Image
            src="/images/hero-hours-days.webp"
            alt="72 saat kaç gün — takvim ve saat dönüşüm illüstrasyonu"
            title="72 saat kaç gün — takvim ve saat dönüşüm illüstrasyonu"
            width={900}
            height={900}
            priority
            className="h-full w-full rounded-2xl [object-fit:contain] drop-shadow-[0_28px_56px_rgba(0,43,91,0.28)] sm:rounded-3xl"
          />
        </motion.div>
      </motion.div>

      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute h-2 w-2 rounded-full bg-accent/80"
          style={{ left: `${42 + i * 8}%`, top: "32%" }}
          animate={{
            y: [0, 24, 48],
            x: [0, 12 + i * 4, 24],
            opacity: [0, 0.85, 0],
            scale: [0.5, 1, 0.4],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.35,
          }}
        />
      ))}

      <motion.div
        className="pointer-events-none absolute inset-[10%] rounded-full bg-gradient-to-tr from-white/0 via-white/20 to-white/0"
        animate={{ opacity: [0, 0.4, 0], x: ["-25%", "25%", "-25%"] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
