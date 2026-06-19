"use client";

import Image from "next/image";
import { HelpCircle } from "lucide-react";
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

function FaqVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-[92%] xl:max-w-md">
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/15 via-transparent to-accent/10 blur-md" />
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-white shadow-premium sm:rounded-3xl">
        <Image
          src="/images/faq-illustration.webp"
          alt="Sık sorulan sorular — saat hesaplama yardım görseli"
          width={800}
          height={533}
          className="h-auto w-full object-cover"
          sizes="(max-width: 1024px) 90vw, 420px"
          priority={false}
        />
      </div>
    </div>
  );
}

export function ToolFaqSection() {
  return (
    <article className="overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm md:rounded-3xl">
      <div className="h-1 bg-gradient-primary" />

      {/* Fixed height on desktop — accordion scrolls inside, image & footer stay put */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[720px] lg:max-h-[720px]">
        {/* Image — fixed slot, does not resize when FAQ opens */}
        <div className="order-1 flex h-[220px] shrink-0 items-center justify-center border-b border-border/40 bg-gradient-to-br from-primary/[0.06] via-white to-secondary/[0.05] p-5 sm:h-[260px] sm:p-6 md:p-8 lg:order-2 lg:h-full lg:max-h-[720px] lg:border-b-0 lg:border-l lg:border-border/40">
          <FaqVisual />
        </div>

        {/* FAQ — scrollable accordion area */}
        <FadeUp className="order-2 flex min-h-0 flex-col p-4 sm:p-6 md:p-8 lg:order-1 lg:h-full lg:max-h-[720px]">
          <div className="mb-4 flex shrink-0 items-center gap-3 sm:mb-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow sm:h-10 sm:w-10">
              <HelpCircle className="h-4 w-4 text-white sm:h-5 sm:w-5" />
            </span>
            <SectionTitle className="!text-lg sm:!text-xl md:!text-2xl">
              {TOOL_FAQ_SECTION.title}
            </SectionTitle>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1 [-webkit-overflow-scrolling:touch] max-h-[min(58vh,500px)] sm:max-h-[min(60vh,540px)] lg:max-h-full">
            <Accordion type="single" collapsible className="w-full">
              {CALCULATOR_FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-border/50 transition-colors duration-200 hover:bg-primary/[0.03]"
                >
                  <AccordionTrigger className="items-start gap-3 rounded-lg py-3 transition-all duration-200 hover:bg-primary/[0.04] hover:text-primary sm:py-3.5 [&>svg]:mt-0.5 [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:text-accent">
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
      </div>
    </article>
  );
}
