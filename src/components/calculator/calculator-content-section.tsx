"use client";



import {
  FourStepCards,
  SectionTitle,
} from "@/components/calculator/content-layouts";
import { withHourlyWageToolLink } from "@/components/seo/time-unit-links";

import { FadeUp } from "@/components/motion";

import { AddSubtractTimeSection } from "@/components/calculator/add-subtract-time-section";

import { ManualAddSection } from "@/components/calculator/manual-add-section";

import { ManualSubtractSection } from "@/components/calculator/manual-subtract-section";
import { ToolUsesSection } from "@/components/calculator/tool-uses-section";

import { ToolBenefitsSection } from "@/components/calculator/tool-benefits-section";

import { ToolSolutionSection } from "@/components/calculator/tool-solution-section";

import { ToolFaqSection } from "@/components/calculator/tool-faq-section";

import {
  TIME_DIFFERENCE_STEPS,
  TIME_DIFFERENCE_INTRO,
  TIME_DIFFERENCE_OUTRO,
  TIME_DIFFERENCE_HOURLY_NOTE,
} from "@/lib/calculator-page-content";

import { cn } from "@/lib/utils";



function ContentBand({

  variant,

  children,

  wide = false,

}: {

  variant: "gray" | "white" | "features";

  children: React.ReactNode;

  wide?: boolean;

}) {

  return (

    <div

      className={cn(

        variant === "gray"
          ? "section-band-gray overflow-x-clip"
          : variant === "features"
            ? "section-band-features overflow-x-clip"
            : "section-band-white overflow-x-clip"

      )}

    >

      <div

        className={cn(

          "mx-auto px-4 md:px-6",

          wide ? "max-w-7xl" : "max-w-6xl"

        )}

      >

        {children}

      </div>

    </div>

  );

}



export function CalculatorContentSection() {

  return (

    <>

      <AddSubtractTimeSection />



      <ContentBand variant="white">

        <FadeUp>

          <SectionTitle>Saat Farkı Nasıl Bulunur?</SectionTitle>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base sm:leading-7">

            {TIME_DIFFERENCE_INTRO}

          </p>

        </FadeUp>

        <div className="mt-5 md:mt-6">

          <FourStepCards steps={TIME_DIFFERENCE_STEPS} />

        </div>

        <FadeUp className="mt-8 md:mt-10">

          <div className="mx-auto max-w-3xl space-y-4 rounded-2xl border border-navy-100/70 bg-slate-50/60 px-5 py-6 sm:px-6 sm:py-7 md:rounded-3xl">

            <p className="text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">

              {TIME_DIFFERENCE_OUTRO}

            </p>

            <p className="text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">

              {withHourlyWageToolLink(TIME_DIFFERENCE_HOURLY_NOTE)}

            </p>

          </div>

        </FadeUp>

      </ContentBand>



      <ManualAddSection />



      <ContentBand variant="white">
        <ManualSubtractSection />
      </ContentBand>

      <ToolUsesSection />



      <ToolBenefitsSection />



      <ContentBand variant="white">

        <ToolSolutionSection />

      </ContentBand>



      <ContentBand variant="gray" wide>

        <ToolFaqSection />

      </ContentBand>

    </>

  );

}


