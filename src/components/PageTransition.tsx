"use client";

import { motion } from "framer-motion";
import { fadeIn, noMotion } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={prefersReduced ? noMotion : fadeIn}
    >
      {children}
    </motion.div>
  );
}
