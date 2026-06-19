"use client";

import { useState } from "react";
import { LazyImage } from "@/components/ui/lazy-image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { faqCollapse, fadeUp, noMotion, DURATION, EASE_OUT } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { faqItems } from "@/lib/site-config";

const faqHighlights = [
  { icon: Zap, label: "Instant answers", value: "No waiting" },
  { icon: ShieldCheck, label: "100% free", value: "Forever" },
  { icon: MessageCircle, label: "Need help?", value: "Contact us" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReduced = usePrefersReducedMotion();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <div className="faq-section-glow" aria-hidden="true" />
      <div className="section-container relative">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about using the time calculator."
          titleId="faq-heading"
        />

        <div className="faq-layout">
          <motion.aside
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="faq-aside"
          >
            <div className="faq-aside-visual">
              <LazyImage
                src="/images/faq-hero.webp"
                alt="Saat hesaplama yardımı — saat ve SSS illüstrasyonu"
                width={320}
                height={280}
                className="faq-aside-image"
                priority={false}
              />
            </div>

            <div className="faq-highlights">
              {faqHighlights.map((item) => (
                <div key={item.label} className="faq-highlight">
                  <div className="faq-highlight__icon">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="faq-highlight__label">{item.label}</p>
                    {item.label === "Need help?" ? (
                      <Link href="/iletisim" className="faq-highlight__value faq-highlight__link">
                        {item.value}
                      </Link>
                    ) : (
                      <p className="faq-highlight__value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="faq-aside-note">
              Can&apos;t find your answer?{" "}
              <Link href="/iletisim" className="faq-aside-link">
                Send us a message
              </Link>{" "}
              — we typically reply within 24 hours.
            </p>
          </motion.aside>

          <motion.div
            variants={prefersReduced ? noMotion : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="faq-list"
          >
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className={`faq-item ${openIndex === index ? "faq-item--open" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="faq-trigger"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-trigger__thumb">
                    <LazyImage
                      src={item.image}
                      alt={`${item.question} — sık sorulan sorular ikonu`}
                      width={48}
                      height={48}
                    />
                  </span>
                  <span className="faq-trigger__content">
                    <span className="faq-category">{item.category}</span>
                    <span className="faq-question">{item.question}</span>
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{
                      duration: prefersReduced ? 0 : DURATION.fast,
                      ease: EASE_OUT,
                    }}
                    className="faq-chevron"
                  >
                    <ChevronDown className="h-4 w-4 text-primary" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      {...(prefersReduced ? { initial: false } : faqCollapse)}
                    >
                      <div className="faq-answer-wrap">
                        <p className="faq-answer">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
