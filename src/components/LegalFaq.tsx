"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { DURATION, EASE_OUT, faqCollapse } from "@/lib/animations";
import type { LegalFaqItem } from "@/lib/schema";

interface LegalFaqProps {
  items: LegalFaqItem[];
}

export default function LegalFaq({ items }: LegalFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-16 pt-10 border-t border-border" aria-labelledby="legal-faq-heading">
      <h2 id="legal-faq-heading" className="text-section-mobile md:text-section mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="rounded-xl overflow-hidden glass-card">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-bg-overlay"
              aria-expanded={openIndex === index}
            >
              <span className="text-body-mobile md:text-body font-medium text-text-primary">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: DURATION.fast, ease: EASE_OUT }}
              >
                <ChevronDown className="h-5 w-5 text-text-secondary flex-shrink-0" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div {...faqCollapse}>
                  <div className="px-5 pb-5 text-body-mobile md:text-body text-text-secondary leading-relaxed border-t border-border pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
