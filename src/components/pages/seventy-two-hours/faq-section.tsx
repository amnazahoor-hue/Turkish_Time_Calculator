"use client";

import { MessageCircleQuestion } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeUp } from "@/components/motion";
import { SectionTitle } from "@/components/calculator/content-layouts";
import { cn, capitalizeHeadingWords } from "@/lib/utils";
import { SEVENTY_TWO_HOURS_FAQS } from "@/lib/seventy-two-hours-content";

export function SeventyTwoHoursFaqSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto w-full px-4 md:px-6">
        <FadeUp>
          <article className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm md:rounded-3xl">
            <div className="h-1 bg-gradient-to-r from-accent to-primary" />

            <div className="flex flex-col px-5 pb-5 pt-7 sm:px-6 sm:pb-6 sm:pt-8 md:px-8 md:pb-8 md:pt-10">
              <div className="mb-4 shrink-0 sm:mb-5">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent shadow-[0_10px_24px_-8px_rgba(211,84,0,0.55)] sm:h-12 sm:w-12">
                    <span
                      aria-hidden
                      className="absolute inset-1 rounded-[0.65rem] border border-white/25"
                    />
                    <MessageCircleQuestion
                      className="relative h-5 w-5 text-white sm:h-[1.35rem] sm:w-[1.35rem]"
                      strokeWidth={2}
                    />
                  </span>
                  <div>
                    <SectionTitle>Sık Sorulan Sorular</SectionTitle>
                    <p className="mt-1 text-xs text-muted sm:text-sm">
                      Saat ve gün dönüşümleri hakkında en çok merak edilenler
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-navy-100/80 bg-gradient-to-b from-background/40 to-white",
                  "h-[min(58vh,520px)] sm:h-[min(60vh,560px)] md:h-[580px]"
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
                    {SEVENTY_TWO_HOURS_FAQS.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`faq-72-${index}`}
                        className="group border-navy-100/90 px-2 transition-colors duration-200 last:border-b-0 hover:bg-accent/[0.06] data-[state=open]:rounded-xl data-[state=open]:bg-accent/[0.06] sm:px-3"
                      >
                        <AccordionTrigger className="items-start gap-3 rounded-lg py-3.5 text-left transition-colors duration-200 hover:bg-transparent hover:text-foreground sm:py-4 [&>svg]:mt-0.5 [&>svg]:text-accent [&[data-state=open]>svg]:text-accent [&[data-state=open]]:text-foreground">
                          <span className="flex min-w-0 flex-1 items-start gap-2.5 text-left">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-[11px] font-black text-primary transition-colors duration-200 group-hover:bg-accent/15 group-hover:text-accent group-data-[state=open]:bg-accent/15 group-data-[state=open]:text-accent sm:h-8 sm:w-8 sm:text-xs">
                              S{index + 1}
                            </span>
                            <span className="min-w-0 flex-1 pt-0.5 text-sm font-semibold leading-snug text-foreground sm:text-[15px] sm:leading-relaxed">
                              {capitalizeHeadingWords(faq.question)}
                            </span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pl-[2.65rem] text-left text-sm leading-relaxed text-foreground/75 sm:pl-[2.85rem] sm:text-[15px]">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              <p className="mt-4 shrink-0 text-center text-xs text-muted">
                {SEVENTY_TWO_HOURS_FAQS.length} soru · Aşağı kaydırarak tümünü
                görüntüleyebilirsiniz
              </p>
            </div>
          </article>
        </FadeUp>
      </div>
    </section>
  );
}
