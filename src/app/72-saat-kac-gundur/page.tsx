import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { SeventyTwoHoursHeroSection } from "@/components/pages/seventy-two-hours/hero-section";
import { HoursToDaysCalculatorSection } from "@/components/pages/seventy-two-hours/hours-to-days-calculator-section";
import {
  MinutesInDaySection,
  ThreeHoursMinutesSection,
} from "@/components/pages/seventy-two-hours/content-sections";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

const PAGE_PATH = "/72-saat-kac-gundur";

export const metadata: Metadata = generatePageMetadata({
  title: "72 Saat Kaç Gündür? Kolay Açıklama",
  description:
    "72 saati günlere çevirmenin basit ve heyecan verici yöntemini öğrenin. Matematiği eğlenceli ve anlaşılır hale getiren kolay kılavuzumuzla zaman hesaplamalarında ustalaşın.",
  path: PAGE_PATH,
  keywords: ["72 saat kaç gündür"],
});

export default function YetmisIkiSaatKacGundurPage() {
  return (
    <PageTransition>
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Ana Sayfa", url: "/" },
          { name: "72 Saat Kaç Gündür", url: PAGE_PATH },
        ])}
      />
      <SeventyTwoHoursHeroSection />
      <HoursToDaysCalculatorSection />
      <section className="section-padding">
        <div className="mx-auto max-w-6xl space-y-10 px-4 md:space-y-14 md:px-6">
          <MinutesInDaySection />
          <ThreeHoursMinutesSection />
        </div>
      </section>
    </PageTransition>
  );
}
