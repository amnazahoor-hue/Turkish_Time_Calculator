"use client";

import { TRUST_STATS } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/motion";

export function TrustSection() {
  return (
    <section className="border-y border-border/60 bg-card py-6 md:py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
          {TRUST_STATS.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <div className="text-2xl font-black text-foreground md:text-3xl lg:text-4xl">
                {stat.value}
              </div>
              <div className="mt-0.5 text-xs font-medium text-muted sm:text-sm">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
