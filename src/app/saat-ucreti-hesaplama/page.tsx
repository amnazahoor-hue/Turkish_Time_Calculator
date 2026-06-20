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
import { generatePageMetadata } from "@/lib/seo";
import { HOURLY_WAGE_PAGE } from "@/lib/pages-seo";

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
