"use client";

import {
  Zap,
  CheckCircle2,
  Globe,
  Calendar,
  Briefcase,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem, GlowHover } from "@/components/motion";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  CheckCircle2,
  Globe,
  Calendar,
  Briefcase,
  Sparkles,
};

export function FeaturesSection() {
  return (
    <section id="ozellikler" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">Güçlü Özellikler</h2>
          <p className="section-subheading">
            Profesyonel saat hesaplama ihtiyaçlarınız için tasarlanmış
            kapsamlı araç seti.
          </p>
        </FadeUp>

        <StaggerContainer className="section-content-gap grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <StaggerItem key={feature.title}>
                <GlowHover>
                  <div
                    className={cn(
                      "group h-full rounded-xl border border-border/60 bg-white p-4 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-premium sm:rounded-2xl sm:p-5",
                      index === 2 && "sm:col-span-2 lg:col-span-1"
                    )}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary/10 transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11 sm:rounded-xl">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-foreground sm:mt-4 sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted sm:mt-2 sm:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </GlowHover>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
