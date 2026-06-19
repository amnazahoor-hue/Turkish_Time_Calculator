"use client";

import { motion } from "framer-motion";
import { fadeUp, noMotion } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  titleId?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  titleId,
  align = "center",
}: SectionHeaderProps) {
  const prefersReduced = usePrefersReducedMotion();
  const isCenter = align === "center";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={prefersReduced ? noMotion : fadeUp}
      className={`section-header ${isCenter ? "section-header--center" : ""}`}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 id={titleId} className="section-heading">
        {title}
      </h2>
      {subtitle && <p className="section-subheading">{subtitle}</p>}
    </motion.div>
  );
}
