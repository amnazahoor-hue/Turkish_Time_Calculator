import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { CalculatorCard } from "@/components/calculator/calculator-card";
import { CalculatorContentSection } from "@/components/calculator/calculator-content-section";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import {
  generateSoftwareApplicationSchema,
  generatePageMetadata,
  generateFAQSchema,
  buildPageSchemas,
} from "@/lib/seo";
import { HOME_PAGE } from "@/lib/pages-seo";
import { CALCULATOR_FAQS } from "@/lib/calculator-page-content";

export const metadata: Metadata = generatePageMetadata({
  title: HOME_PAGE.title,
  description: HOME_PAGE.description,
  path: HOME_PAGE.path,
  keywords: [HOME_PAGE.focusKeyword],
});

export default function HomePage() {
  return (
    <>
      <SchemaMarkup
        data={buildPageSchemas({
          name: HOME_PAGE.title,
          description: HOME_PAGE.description,
          path: HOME_PAGE.path,
          breadcrumbs: [{ name: "Ana Sayfa", url: "/" }],
          additional: [
            generateSoftwareApplicationSchema(),
            generateFAQSchema(CALCULATOR_FAQS, {
              path: HOME_PAGE.path,
              name: HOME_PAGE.title,
            }),
          ],
        })}
      />
      <HeroSection />
      <CalculatorCard />
      <CalculatorContentSection />
    </>
  );
}
