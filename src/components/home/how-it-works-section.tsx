"use client";

import { HOW_IT_WORKS } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { capitalizeHeadingWords } from "@/lib/utils";

export function HowItWorksSection() {
  return (
    <section id="nasil-calisir" className="section-padding">
      <div className="mx-auto w-full px-4 md:px-6">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">{capitalizeHeadingWords("Nasıl Çalışır?")}</h2>
          <p className="section-subheading">
            Dört basit adımda saat hesaplamalarınızı tamamlayın.
          </p>
        </FadeUp>

        <StaggerContainer className="section-content-gap relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-6 md:space-y-8">
            {HOW_IT_WORKS.map((item, index) => (
              <StaggerItem key={item.step}>
                <div
                  className={`relative flex flex-col gap-4 sm:gap-5 md:flex-row md:items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    <div
                      className={`${
                        index % 2 === 1 ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <h3 className="text-base font-bold text-foreground sm:text-lg">
                        {capitalizeHeadingWords(item.title)}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{item.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-lg font-black text-white shadow-glow md:mx-6 md:h-14 md:w-14 md:rounded-2xl md:text-xl">
                    {item.step}
                  </div>

                  <div className="hidden flex-1 md:block" />
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
