"use client";



import {

  FourStepCards,

  TimelineSection,

  SectionTitle,

} from "@/components/calculator/content-layouts";

import { FadeUp } from "@/components/motion";

import { AddSubtractTimeSection } from "@/components/calculator/add-subtract-time-section";

import { ManualAddSection } from "@/components/calculator/manual-add-section";

import { ManualSubtractSection } from "@/components/calculator/manual-subtract-section";

import {

  ToolFeaturesSection,

} from "@/components/calculator/tool-features-section";

import { ToolUsesSection } from "@/components/calculator/tool-uses-section";

import { ToolBenefitsSection } from "@/components/calculator/tool-benefits-section";

import { ToolSolutionSection } from "@/components/calculator/tool-solution-section";

import { ToolFaqSection } from "@/components/calculator/tool-faq-section";

import {

  TIME_DIFFERENCE_STEPS,

  TIME_DIFFERENCE_INTRO,

  TIME_DIFFERENCE_OUTRO,

  MANUAL_ADD_EXAMPLE,

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

          <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">

            {TIME_DIFFERENCE_INTRO}

          </p>

        </FadeUp>

        <div className="mt-5 md:mt-6">

          <FourStepCards steps={TIME_DIFFERENCE_STEPS} />

        </div>

        <FadeUp>

          <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">

            {TIME_DIFFERENCE_OUTRO}

          </p>

        </FadeUp>

      </ContentBand>



      <ManualAddSection />



      <ContentBand variant="white">

        <ManualSubtractSection />

      </ContentBand>



      <ContentBand variant="gray">

        <TimelineSection

          title="Saati Manuel Olarak Nasıl Eklersiniz?"

          intro="Önce gerekli saatleri, ardından dakikaları ekleyin. Toplam dakika 60'ı geçerse her 60 dakikayı 1 saate dönüştürün."

          visualImage={{

            src: "/images/salary-calc-visual.webp",

            alt: "Saati manuel olarak ekleme görseli",

            width: 800,

            height: 597,

          }}

          visualPosition="left"

          steps={[

            {

              title: "Başlangıç Saatini Belirleyin",

              description: "İlk zaman değerinizi not alın.",

            },

            {

              title: "Saat Ve Dakika Ekleyin",

              description: "Önce saatleri, sonra dakikaları toplayın.",

            },

            {

              title: "Dönüşüm Yapın",

              description: "60 dakikayı 1 saate çevirin ve sonucu yazın.",

            },

          ]}

          example={{

            label: "Örnek",

            rows: [

              { key: "İlk Zaman", value: MANUAL_ADD_EXAMPLE.first },

              { key: "Ekle", value: MANUAL_ADD_EXAMPLE.add },

              { key: "Sonuç", value: MANUAL_ADD_EXAMPLE.result },

            ],

          }}

        />

      </ContentBand>



      <ContentBand variant="features" wide>

        <ToolFeaturesSection />

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


