"use client";

import {
  User,
  Building2,
  GraduationCap,
  Users,
  type LucideIcon,
} from "lucide-react";
import { USE_CASES } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem, HoverLift } from "@/components/motion";
import { capitalizeHeadingWords } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  User,
  Building2,
  GraduationCap,
  Users,
};

export function UseCasesSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto w-full px-4 md:px-6">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">Kimler Kullanıyor?</h2>
          <p className="section-subheading">
            Farklı sektörlerden binlerce kullanıcı güvenle tercih ediyor.
          </p>
        </FadeUp>

        <StaggerContainer className="section-content-gap grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {USE_CASES.map((useCase) => {
            const Icon = iconMap[useCase.icon];
            return (
              <StaggerItem key={useCase.title}>
                <HoverLift>
                  <div className="group h-full rounded-xl border border-border/60 bg-white p-4 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-premium sm:rounded-2xl sm:p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-dark text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="mt-3 text-base font-bold text-foreground sm:mt-4 sm:text-lg">
                      {capitalizeHeadingWords(useCase.title)}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted sm:mt-2 sm:text-sm">
                      {useCase.description}
                    </p>
                  </div>
                </HoverLift>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
