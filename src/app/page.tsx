import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { CalculatorCard } from "@/components/calculator/calculator-card";
import { CalculatorContentSection } from "@/components/calculator/calculator-content-section";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import {
  generatePageMetadata,
  buildToolPageSchemas,
  generateHeroVideoSchema,
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
        data={buildToolPageSchemas({
          name: HOME_PAGE.title,
          description: HOME_PAGE.description,
          path: HOME_PAGE.path,
          webAppName: HOME_PAGE.focusKeyword,
          aboutTopic: HOME_PAGE.focusKeyword,
          breadcrumbs: [{ name: "Ana Sayfa", url: "/" }],
          speakableSelectors: ["#home-hero-title", "#home-hero-lead"],
          faqs: CALCULATOR_FAQS,
          additional: [generateHeroVideoSchema()],
        })}
      />
      <HeroSection />
      <CalculatorCard />
      <CalculatorContentSection />
    </>
  );
}
