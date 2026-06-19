import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { SeventyTwoHoursHeroSection } from "@/components/pages/seventy-two-hours/hero-section";
import { HoursToDaysCalculatorSection } from "@/components/pages/seventy-two-hours/hours-to-days-calculator-section";
import {
  MinutesInDaySection,
  ThreeHoursMinutesSection,
} from "@/components/pages/seventy-two-hours/content-sections";
import { HoursDaysConversionTableSection } from "@/components/pages/seventy-two-hours/hours-days-conversion-table-section";
import { SeventyTwoHoursSolutionSection } from "@/components/pages/seventy-two-hours/solution-section";
import { SeventyTwoHoursFaqSection } from "@/components/pages/seventy-two-hours/faq-section";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import {
  generatePageMetadata,
  buildPageSchemas,
  generateFAQSchema,
} from "@/lib/seo";
import {
  SEVENTY_TWO_HOURS_PAGE,
  SEVENTY_TWO_HOURS_FAQS,
} from "@/lib/seventy-two-hours-content";

const PAGE_PATH = SEVENTY_TWO_HOURS_PAGE.path;

export const metadata: Metadata = generatePageMetadata({
  title: SEVENTY_TWO_HOURS_PAGE.title,
  description: SEVENTY_TWO_HOURS_PAGE.description,
  path: PAGE_PATH,
  keywords: [SEVENTY_TWO_HOURS_PAGE.focusKeyword],
});

export default function YetmisIkiSaatKacGunPage() {
  return (
    <PageTransition>
      <SchemaMarkup
        data={buildPageSchemas({
          name: SEVENTY_TWO_HOURS_PAGE.title,
          description: SEVENTY_TWO_HOURS_PAGE.description,
          path: PAGE_PATH,
          breadcrumbs: [
            { name: "Ana Sayfa", url: "/" },
            { name: "72 Saat Kaç Gündür", url: PAGE_PATH },
          ],
          additional: [
            generateFAQSchema(SEVENTY_TWO_HOURS_FAQS, {
              path: PAGE_PATH,
              name: SEVENTY_TWO_HOURS_PAGE.title,
            }),
          ],
        })}
      />
      <SeventyTwoHoursHeroSection />
      <HoursToDaysCalculatorSection />
      <section className="overflow-hidden bg-background py-8 sm:py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
          <MinutesInDaySection />
        </div>
      </section>
      <section className="overflow-hidden bg-white py-8 sm:py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
          <ThreeHoursMinutesSection />
        </div>
      </section>
      <HoursDaysConversionTableSection />
      <SeventyTwoHoursSolutionSection />
      <SeventyTwoHoursFaqSection />
    </PageTransition>
  );
}
