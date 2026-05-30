"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Moon, Sparkles, Timer } from "lucide-react";
import { scaleIn, noMotion } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function HeroVisual() {
  const prefersReduced = usePrefersReducedMotion();
  const cardVariants = prefersReduced ? noMotion : scaleIn;

  return (
    <div className="hero-visual-wrap">
      <div className="hero-visual-scene" aria-hidden="true">
        <div className="hero-scene-ring" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ delay: prefersReduced ? 0 : 0.1 }}
          className="hero-dashboard hero-dashboard--hero"
        >
          <div className="hero-dashboard__shine" />

          <div className="hero-dashboard__header">
            <div className="hero-dashboard__icon">
              <Timer className="h-4 w-4 text-inverse" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="hero-dashboard__title">Duration Calculator</p>
              <p className="hero-dashboard__subtitle">Live preview</p>
            </div>
            <span className="hero-live-badge">
              <span className="hero-live-dot" />
              Live
            </span>
          </div>

          <div className="hero-dashboard__mode">
            <span className="hero-dashboard__mode-tab hero-dashboard__mode-tab--active">Duration</span>
            <span className="hero-dashboard__mode-tab">Add / Subtract</span>
          </div>

          <div className="hero-dashboard__inputs">
            <div className="hero-dashboard__field">
              <span className="hero-dashboard__field-label">From</span>
              <span className="hero-dashboard__field-value">09:00</span>
            </div>
            <div className="hero-dashboard__arrow">
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
            <div className="hero-dashboard__field">
              <span className="hero-dashboard__field-label">To</span>
              <span className="hero-dashboard__field-value">17:00</span>
            </div>
          </div>

          <div className="hero-dashboard__timeline">
            <div className="hero-dashboard__timeline-fill hero-dashboard__timeline-fill--static" />
            <div className="hero-dashboard__timeline-dot hero-dashboard__timeline-dot--start" />
            <div
              className="hero-dashboard__timeline-dot hero-dashboard__timeline-dot--end"
              style={{ left: "100%" }}
            />
          </div>

          <div className="hero-dashboard__result hero-dashboard__result--compact">
            <div>
              <p className="hero-dashboard__result-label">Duration</p>
              <p className="hero-dashboard__result-value hero-dashboard__result-value--sm">
                8<span className="hero-dashboard__result-unit">hr</span>
                {" "}0<span className="hero-dashboard__result-unit">min</span>
              </p>
            </div>
            <div className="hero-dashboard__result-icon hero-dashboard__result-icon--sm">
              <Clock className="h-5 w-5" />
            </div>
          </div>

          <motion.a
            href="#calculator"
            className="hero-dashboard__cta hero-dashboard__cta--compact"
            {...(prefersReduced ? {} : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } })}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Try it now
          </motion.a>
        </motion.div>

        <div className="hero-chip hero-chip--tl">
          <Moon className="h-3.5 w-3.5 text-primary" />
          <span>Night shift ready</span>
        </div>
        <div className="hero-chip hero-chip--tr">⚡ Instant calc</div>
      </div>
    </div>
  );
}
