"use client";

import { BENEFITS } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem, GlowHover } from "@/components/motion";
import { cn } from "@/lib/utils";

const sizeClasses = {
  small: "sm:col-span-1",
  medium: "sm:col-span-1 lg:col-span-1",
  large: "sm:col-span-2 lg:col-span-2",
};

export function BenefitsSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">Neden Saat Hesaplama?</h2>
          <p className="section-subheading">
            Zamanınızı daha verimli kullanmanız için tasarlandı.
          </p>
        </FadeUp>

        <StaggerContainer className="section-content-gap grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <StaggerItem
              key={benefit.title}
              className={cn(sizeClasses[benefit.size])}
            >
              <GlowHover>
                <div
                  className={cn(
                    "group h-full rounded-xl border border-border/60 bg-background p-4 transition-all duration-300 hover:border-accent/30 hover:bg-white sm:rounded-2xl sm:p-5 md:p-6",
                    benefit.size === "large" &&
                      "bg-gradient-to-br from-white to-primary/5"
                  )}
                >
                  <h3 className="text-base font-bold text-foreground sm:text-lg">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    {benefit.description}
                  </p>
                </div>
              </GlowHover>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
