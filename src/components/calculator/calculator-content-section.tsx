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
  ToolUsesSection,
} from "@/components/calculator/tool-info-sections";
import { ToolBenefitsSection } from "@/components/calculator/tool-benefits-section";
import { ToolSolutionSection } from "@/components/calculator/tool-solution-section";
import { ToolFaqSection } from "@/components/calculator/tool-faq-section";
import {
  TIME_DIFFERENCE_STEPS,
  TIME_DIFFERENCE_INTRO,
  TIME_DIFFERENCE_OUTRO,
  MANUAL_ADD_EXAMPLE,
  MANUAL_SUBTRACT_EXAMPLE,
  MANUAL_SUBTRACT_TIPS,
} from "@/lib/calculator-page-content";

export function CalculatorContentSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl space-y-14 px-4 md:space-y-20 md:px-6">
        <AddSubtractTimeSection />

        {/* Layout: 4-step cards */}
        <div>
          <FadeUp>
            <SectionTitle>Saat Farkı Nasıl Bulunur?</SectionTitle>
            <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">
              {TIME_DIFFERENCE_INTRO}
            </p>
          </FadeUp>
          <div className="mt-6">
            <FourStepCards steps={TIME_DIFFERENCE_STEPS} />
          </div>
          <FadeUp>
            <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
              {TIME_DIFFERENCE_OUTRO}
            </p>
          </FadeUp>
        </div>

        {/* Layout: Overlap panel — manual tips as list */}
        <ManualAddSection />

        <ManualSubtractSection />

        {/* Layout: Timeline + example — manual add */}
        <TimelineSection
          title="Saati Manuel Olarak Nasıl Eklersiniz?"
          intro="Önce gerekli saatleri, ardından dakikaları ekleyin. Toplam dakika 60'ı geçerse her 60 dakikayı 1 saate dönüştürün."
          steps={[
            {
              title: "Başlangıç saatini belirleyin",
              description: "İlk zaman değerinizi not alın.",
            },
            {
              title: "Saat ve dakika ekleyin",
              description: "Önce saatleri, sonra dakikaları toplayın.",
            },
            {
              title: "Dönüşüm yapın",
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

        {/* Layout: Timeline — manual subtract (reversed visual on mobile) */}
        <TimelineSection
          title="Saati Manuel Olarak Nasıl Çıkarırsınız?"
          intro="Başlangıç zamanından önce dakikaları, ardından saatleri çıkarın. Gerektiğinde saat değerinden 1 saat ödünç alın."
          steps={MANUAL_SUBTRACT_TIPS.map((tip, i) => ({
            title: `Hatırlatma ${i + 1}`,
            description: tip,
          }))}
          example={{
            label: "Örnek",
            rows: [
              { key: "İlk Zaman", value: MANUAL_SUBTRACT_EXAMPLE.first },
              { key: "Çıkar", value: MANUAL_SUBTRACT_EXAMPLE.subtract },
              { key: "Sonuç", value: MANUAL_SUBTRACT_EXAMPLE.result },
            ],
          }}
        />

        <ToolFeaturesSection />

        <ToolUsesSection />

        <ToolBenefitsSection />

        <ToolSolutionSection />

        <ToolFaqSection />
      </div>
    </section>
  );
}
