"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Clock,
  CalendarClock,
  Briefcase,
  FileSpreadsheet,
  Moon,
  Timer,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeUp } from "@/components/motion";
import { SectionTitle } from "@/components/calculator/content-layouts";
import {
  CALCULATOR_FAQS,
  TOOL_FAQ_SECTION,
} from "@/lib/calculator-page-content";

const FAQ_VISUAL_TOPICS = [
  { icon: Briefcase, label: "Görev yönetimi" },
  { icon: Clock, label: "Saat farkı" },
  { icon: Timer, label: "Geçen süre" },
  { icon: Moon, label: "Gece hesabı" },
  { icon: FileSpreadsheet, label: "Excel formülü" },
  { icon: CalendarClock, label: "Tarih farkı" },
] as const;

function FaqVisual() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % FAQ_VISUAL_TOPICS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const active = FAQ_VISUAL_TOPICS[activeIndex];
  const preview = CALCULATOR_FAQS[activeIndex]?.question ?? "";

  return (
    <div className="relative flex h-full min-h-[220px] w-full items-center justify-center sm:min-h-[260px] lg:min-h-[380px]">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-44 w-44 rounded-full bg-primary/20 blur-3xl sm:h-52 sm:w-52"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute h-52 w-52 rounded-full border border-dashed border-primary/25 sm:h-60 sm:w-60"
      />

      <div className="relative flex flex-col items-center">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow sm:h-24 sm:w-24"
        >
          <HelpCircle className="h-10 w-10 text-white sm:h-12 sm:w-12" strokeWidth={1.75} />
        </motion.div>

        <div className="mt-5 w-full max-w-[240px] rounded-2xl border border-border/50 bg-white p-4 shadow-premium sm:mt-6">
          <p className="text-center text-[10px] font-semibold uppercase tracking-wider text-primary">
            Sık Sorulan Sorular
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="mt-3 flex flex-col items-center gap-2"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 sm:h-11 sm:w-11">
                <active.icon className="h-5 w-5 text-primary" />
              </span>
              <p className="text-center text-sm font-semibold text-foreground">
                {active.label}
              </p>
              <p className="line-clamp-2 text-center text-xs leading-relaxed text-muted">
                S{activeIndex + 1}: {preview}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-4 flex gap-1.5">
          {FAQ_VISUAL_TOPICS.map((_, index) => (
            <motion.span
              key={index}
              animate={{
                scale: index === activeIndex ? 1.2 : 1,
                opacity: index === activeIndex ? 1 : 0.35,
              }}
              className="h-1.5 w-1.5 rounded-full bg-primary"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ToolFaqSection() {
  return (
    <article className="hover-card overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition-all duration-300 md:rounded-3xl">
      <div className="h-1 bg-gradient-primary" />
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[700px]">
        {/* FAQ — fixed-height scroll area so expanding items don't push the footer */}
        <FadeUp className="order-2 flex min-h-0 min-w-0 flex-col p-4 sm:p-6 md:p-8 lg:order-1 lg:border-r lg:border-border/40">
          <div className="mb-4 flex shrink-0 items-center gap-3 sm:mb-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow sm:h-10 sm:w-10">
              <HelpCircle className="h-4 w-4 text-white sm:h-5 sm:w-5" />
            </span>
            <SectionTitle className="!text-lg sm:!text-xl md:!text-2xl">
              {TOOL_FAQ_SECTION.title}
            </SectionTitle>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1 [-webkit-overflow-scrolling:touch] max-h-[min(70vh,560px)] lg:max-h-none">
            <Accordion type="single" collapsible className="w-full">
            {CALCULATOR_FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-border/50">
                <AccordionTrigger className="items-start gap-3 py-3 hover:text-primary sm:py-3.5 [&>svg]:mt-0.5">
                  <span className="flex min-w-0 flex-1 items-start gap-2 text-left">
                    <span className="w-8 shrink-0 text-left text-xs font-bold text-primary sm:w-9 sm:text-sm">
                      S{index + 1}:
                    </span>
                    <span className="min-w-0 flex-1 text-left text-[13px] font-medium leading-snug text-foreground sm:text-sm sm:leading-relaxed">
                      {faq.question}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-10 text-left text-[13px] leading-relaxed text-muted sm:pl-11 sm:text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
            </Accordion>
          </div>
        </FadeUp>

        {/* Visual — top on mobile, right on desktop */}
        <div className="order-1 flex min-h-[220px] items-center justify-center border-b border-border/40 bg-gradient-to-br from-primary/[0.06] via-white to-secondary/[0.05] p-5 sm:min-h-[260px] sm:p-6 md:p-8 lg:order-2 lg:min-h-0 lg:border-b-0">
          <FaqVisual />
        </div>
      </div>
    </article>
  );
}
