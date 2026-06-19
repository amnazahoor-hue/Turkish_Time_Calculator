"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { FadeUp } from "@/components/motion";

export function FAQSection() {
  return (
    <section id="sik-sorulan-sorular" className="section-padding">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <FadeUp className="text-center">
          <h2 className="section-heading">Sık Sorulan Sorular</h2>
          <p className="section-subheading">
            Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
          </p>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-6 md:mt-8">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="py-4 text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
}
