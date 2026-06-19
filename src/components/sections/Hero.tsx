"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Star, Users, Zap } from "lucide-react";
import HeroVisual from "@/components/sections/HeroVisual";
import {
  fadeUp,
  buttonMotion,
  noMotion,
  stagger,
} from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const trustBadges = [
  { label: "Free forever" },
  { label: "No sign-up" },
  { label: "Instant results" },
];

const stats = [
  { icon: Users, value: "50K+", label: "Active users" },
  { icon: Zap, value: "<1s", label: "Avg. speed" },
  { icon: Clock, value: "24/7", label: "Always on" },
];

export default function Hero() {
  const prefersReduced = usePrefersReducedMotion();
  const motionBtn = prefersReduced ? {} : buttonMotion;
  const textVariants = prefersReduced ? noMotion : fadeUp;

  return (
    <section className="hero-section section-bg-hero" aria-labelledby="hero-heading">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="hero-glow hero-glow--teal" aria-hidden="true" />
      <div className="hero-glow hero-glow--coral" aria-hidden="true" />
      <div className="hero-glow hero-glow--sky" aria-hidden="true" />

      <div className="section-container relative w-full">
        <div className="hero-layout">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={prefersReduced ? noMotion : stagger}
            className="hero-content relative z-10"
          >
            <motion.div variants={textVariants} className="hero-eyebrow mb-4">
              <span className="hero-eyebrow-dot" aria-hidden="true" />
              <SparklesRow />
              Fast &amp; Free Online Time Calculator
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={textVariants}
              className="hero-headline text-balance"
            >
              The smarter way to{" "}
              <span className="hero-headline-highlight">
                <span className="text-gradient">calculate time</span>
                <span className="hero-headline-accent" aria-hidden="true" />
              </span>
            </motion.h1>

            <motion.p variants={textVariants} className="hero-subheadline">
              Find hours between two clocks, add or subtract durations, and handle
              overnight shifts — instant results in your browser.
            </motion.p>

            <motion.div
              variants={textVariants}
              className="hero-rating mt-4 flex flex-wrap items-center gap-3"
            >
              <div className="hero-stars" aria-label="4.9 out of 5 rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="hero-rating-text">
                <strong>4.9/5</strong> from 2,400+ users
              </span>
            </motion.div>

            <motion.div variants={textVariants} className="mt-5 flex flex-wrap gap-2.5">
              {trustBadges.map((badge) => (
                <span key={badge.label} className="hero-trust-pill">
                  <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
                  {badge.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={textVariants}
              className="hero-actions mt-6"
            >
              <motion.a href="#calculator" {...motionBtn} className="hero-btn-primary">
                Start Calculating
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a href="#how-it-works" {...motionBtn} className="hero-btn-secondary">
                See how it works
              </motion.a>
            </motion.div>

            <motion.div variants={textVariants} className="hero-stats-row">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat-inline">
                  <div className="hero-stat-inline__icon">
                    <stat.icon className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="hero-stat-inline__value">{stat.value}</p>
                    <p className="hero-stat-inline__label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: prefersReduced ? 0 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hero-visual-col relative z-10"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SparklesRow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l1.4 4.2L17.6 8 13.4 9.4 12 13.6 10.6 9.4 6.4 8l4.2-1.8L12 2z"
        fill="var(--c-accent)"
        opacity="0.9"
      />
    </svg>
  );
}
