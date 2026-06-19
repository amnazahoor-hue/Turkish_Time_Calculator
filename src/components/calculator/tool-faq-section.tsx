"use client";

import { LazyImage } from "@/components/ui/lazy-image";
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
import { cn, capitalizeHeadingWords } from "@/lib/utils";

function FaqVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-md">
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-white shadow-premium md:rounded-3xl">
        <LazyImage
          src="/images/faq-illustration.webp"
          alt="Sık sorulan sorular — saat hesaplama yardım görseli"
          width={800}
          height={533}
          className="h-auto w-full object-cover"
          sizes="(max-width: 900px) 90vw, (max-width: 1280px) 360px, 420px"
          priority={false}
        />
      </div>
    </div>
  );
}

export function ToolFaqSection() {
  return (
    <article
      id="sik-sorulan-sorular"
      className="scroll-mt-20 overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm md:scroll-mt-24 md:rounded-3xl"
    >
      <div className="h-1 bg-gradient-primary" />

      <div className="grid grid-cols-1 items-start min-[900px]:grid-cols-[1.12fr_0.88fr] lg:grid-cols-[1.2fr_0.8fr]">
        <div className="order-1 flex shrink-0 items-center justify-center border-b border-border/40 bg-gradient-to-br from-primary/[0.06] via-white to-secondary/[0.05] p-5 sm:p-6 min-[900px]:order-2 min-[900px]:sticky min-[900px]:top-28 min-[900px]:self-start min-[900px]:border-b-0 min-[900px]:border-l min-[900px]:border-border/40 min-[900px]:p-6 lg:p-8">
          <div className="flex w-full items-center justify-center py-2 min-[900px]:py-6 lg:py-8">
            <FaqVisual />
          </div>
        </div>

        <FadeUp className="order-2 flex min-h-0 flex-col p-4 sm:p-6 min-[900px]:order-1 min-[900px]:p-6 lg:p-8">
          <div className="mb-4 flex shrink-0 items-center gap-3 sm:mb-5 md:mb-6">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow sm:h-10 sm:w-10">
              <HelpCircle className="h-4 w-4 text-white sm:h-5 sm:w-5" />
            </span>
            <SectionTitle className="!text-lg sm:!text-xl md:!text-2xl">
              {TOOL_FAQ_SECTION.title}
            </SectionTitle>
          </div>

          <div
            className={cn(
              "relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-navy-100/80 bg-gradient-to-b from-background/40 to-white",
              "h-[min(58vh,520px)] sm:h-[min(60vh,560px)] min-[900px]:h-[580px]"
            )}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-6 bg-gradient-to-b from-white/90 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-gradient-to-t from-white/95 to-transparent"
            />

            <div className="h-full overflow-y-auto overscroll-contain px-1 py-2 [-webkit-overflow-scrolling:touch] sm:px-2 sm:py-3">
              <Accordion type="single" collapsible className="w-full">
                {CALCULATOR_FAQS.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="group border-border/50 px-1 transition-colors duration-200 last:border-b-0 hover:bg-primary/[0.03] data-[state=open]:rounded-xl data-[state=open]:bg-primary/[0.04] sm:px-2"
                  >
                    <AccordionTrigger className="items-start gap-2 rounded-lg py-3.5 transition-all duration-200 hover:bg-primary/[0.04] hover:text-primary sm:gap-3 sm:py-4 md:py-4 [&>svg]:mt-1 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0 sm:[&>svg]:h-5 sm:[&>svg]:w-5 [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:text-accent">
                      <span className="flex min-w-0 flex-1 items-start gap-2.5 text-left md:gap-3">
                        <span className="w-8 shrink-0 text-left text-xs font-bold tabular-nums text-primary sm:w-9 sm:text-sm">
                          S{index + 1}
                        </span>
                        <span className="min-w-0 flex-1 text-left text-sm font-medium leading-relaxed text-foreground md:text-[15px] md:leading-7">
                          {capitalizeHeadingWords(faq.question)}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-10 text-left text-sm leading-relaxed text-muted sm:pl-11 md:pl-12 md:text-[15px] md:leading-7">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <p className="mt-3 shrink-0 text-center text-xs text-muted sm:mt-4">
            {CALCULATOR_FAQS.length} soru · Aşağı kaydırarak tümünü görüntüleyebilirsiniz
          </p>
        </FadeUp>
      </div>
    </article>
  );
}
