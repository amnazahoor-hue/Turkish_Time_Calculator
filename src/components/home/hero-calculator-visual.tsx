"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroCalculatorVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]"
    >
      {/* Soft ambient glow — not a box background */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.9, 1.08, 0.9] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full"
      >
        <motion.div
          animate={{ rotate: [0, 1.2, 0, -1.2, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-full w-full"
        >
          <Image
            src="/images/hero-hourglass.webp"
            alt="Saat hesaplama aracı — kum saati illüstrasyonu"
            title="Saat hesaplama aracı — kum saati illüstrasyonu"
            width={900}
            height={900}
            priority
            className="h-full w-full object-contain drop-shadow-[0_28px_56px_rgba(0,43,91,0.28)]"
          />
        </motion.div>
      </motion.div>

      {/* Falling sand sparkles */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-accent"
          style={{ left: "48%", top: "38%" }}
          animate={{
            y: [0, 90 + i * 8, 120],
            x: [0, (i - 2) * 4, (i - 2) * 6],
            opacity: [0, 0.9, 0],
            scale: [0.4, 1, 0.3],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeIn",
            delay: i * 0.28,
          }}
        />
      ))}

      {/* Light sweep across glass */}
      <motion.div
        className="pointer-events-none absolute inset-[12%] rounded-full bg-gradient-to-tr from-white/0 via-white/25 to-white/0"
        animate={{ opacity: [0, 0.45, 0], x: ["-30%", "30%", "-30%"] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
