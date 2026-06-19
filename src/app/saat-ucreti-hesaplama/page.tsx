import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { SaatUcretiHeroSection } from "@/components/pages/saat-ucreti/hero-section";
import { SalaryToHourlyCalculatorSection } from "@/components/pages/saat-ucreti/salary-to-hourly-calculator-section";
import {
  AnnualSalaryTableSection,
  HowHourlyCalculatedSection,
  HourlyMonthlyDifferenceSection,
  OvertimeCalculationSection,
  ProsConsSection,
  WorkingHoursSection,
} from "@/components/pages/saat-ucreti/content-sections";
import { SaatUcretiFaqSection } from "@/components/pages/saat-ucreti/faq-section";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import {
  generatePageMetadata,
  buildPageSchemas,
  generateFAQSchema,
} from "@/lib/seo";
import { HOURLY_WAGE_PAGE } from "@/lib/pages-seo";
import { SAAT_UCRETI_FAQS } from "@/lib/saat-ucreti-content";

const PAGE_PATH = HOURLY_WAGE_PAGE.path;

export const metadata: Metadata = generatePageMetadata({
  title: HOURLY_WAGE_PAGE.title,
  description: HOURLY_WAGE_PAGE.description,
  path: PAGE_PATH,
  keywords: [HOURLY_WAGE_PAGE.focusKeyword],
});

export default function SaatUcretiHesaplamaPage() {
  return (
    <PageTransition>
      <SchemaMarkup
        data={buildPageSchemas({
          name: HOURLY_WAGE_PAGE.title,
          description: HOURLY_WAGE_PAGE.description,
          path: PAGE_PATH,
          breadcrumbs: [
            { name: "Ana Sayfa", url: "/" },
            { name: "Saat Ücreti Hesaplama", url: PAGE_PATH },
          ],
          additional: [
            generateFAQSchema(SAAT_UCRETI_FAQS, {
              path: PAGE_PATH,
              name: HOURLY_WAGE_PAGE.title,
            }),
          ],
        })}
      />
      <SaatUcretiHeroSection />
      <HowHourlyCalculatedSection />
      <SalaryToHourlyCalculatorSection />
      <AnnualSalaryTableSection />
      <WorkingHoursSection />
      <OvertimeCalculationSection />
      <HourlyMonthlyDifferenceSection />
      <ProsConsSection />
      <SaatUcretiFaqSection />
    </PageTransition>
  );
}
