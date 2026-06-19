"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUp, stagger, noMotion } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const steps = [
  {
    step: "1",
    image: "/images/step-choose-mode.svg",
    title: "Choose a Mode",
    description:
      "Select duration calculation or add/subtract time — whichever fits your task.",
  },
  {
    step: "2",
    image: "/images/step-enter-times.svg",
    title: "Enter Times",
    description:
      "Input start and end times, or a base time plus the hours and minutes to add or subtract.",
  },
  {
    step: "3",
    image: "/images/step-calculate.svg",
    title: "Click Calculate",
    description:
      "Press Calculate when your times are ready — copy the result for work hours, shifts, or scheduling.",
  },
];

export default function HowToUse() {
  const prefersReduced = usePrefersReducedMotion();
  const containerVariants = prefersReduced ? noMotion : stagger;
  const itemVariants = prefersReduced ? noMotion : fadeUp;

  return (
    <section
      id="how-it-works"
      className="section-bg-steps"
      aria-labelledby="howto-heading"
    >
      <div className="section-container">
        <SectionHeader
          eyebrow="Step by Step"
          title="How It Works"
          subtitle="Complete your time calculation in three simple steps."
          titleId="howto-heading"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="steps-grid mx-auto grid max-w-5xl gap-6 md:grid-cols-3"
        >
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              variants={itemVariants}
              transition={{ delay: prefersReduced ? 0 : index * 0.15 }}
              className="step-card flex flex-col"
            >
              <div className="step-number-badge mx-auto">{item.step}</div>
              <div className="step-icon-wrap step-icon-wrap--color">
                <Image
                  src={item.image}
                  alt=""
                  width={80}
                  height={80}
                  aria-hidden="true"
                  className="step-icon-image"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-heading">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
