"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, CalendarClock, Moon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUp, stagger, noMotion } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const cards = [
  {
    icon: Briefcase,
    image: "/images/use-case-work.svg",
    title: "Work Hours Calculation",
    description:
      "Enter clock-in and clock-out times to calculate daily work duration down to the minute. Get clear results for HR and payroll reference.",
  },
  {
    icon: Moon,
    image: "/images/use-case-shift.svg",
    title: "Overnight Shift Tracking",
    description:
      "Overnight shifts are detected automatically for ranges like 10:00 PM–6:00 AM. Ideal for healthcare, security, and manufacturing workers.",
  },
  {
    icon: CalendarClock,
    image: "/images/use-case-schedule.svg",
    title: "Scheduling & Meetings",
    description:
      "Use add/subtract mode to find meeting end times, break durations, or deadlines. A practical tool for project managers and students.",
  },
];

export default function ToolDetailCards() {
  const prefersReduced = usePrefersReducedMotion();
  const containerVariants = prefersReduced ? noMotion : stagger;
  const itemVariants = prefersReduced ? noMotion : fadeUp;

  return (
    <section
      id="use-cases"
      className="section-bg-features"
      aria-labelledby="detail-heading"
    >
      <div className="section-container">
        <SectionHeader
          eyebrow="Use Cases"
          title="Time Calculator Use Cases"
          subtitle="Discover how our time calculator helps across industries and everyday scenarios."
          titleId="detail-heading"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              variants={itemVariants}
              transition={{ delay: prefersReduced ? 0 : index * 0.15 }}
              className="info-card info-card--visual flex flex-col"
            >
              <div className="info-card-visual">
                <Image
                  src={card.image}
                  alt=""
                  width={120}
                  height={120}
                  aria-hidden="true"
                  className="info-card-image"
                />
                <card.icon className="info-card-icon h-7 w-7" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold text-heading">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{card.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
