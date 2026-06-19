import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { CalculatorCard } from "@/components/calculator/calculator-card";
import { CalculatorContentSection } from "@/components/calculator/calculator-content-section";
import { ToolPageJsonLd } from "@/components/seo/tool-page-json-ld";
import { generatePageMetadata } from "@/lib/seo";
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
      <ToolPageJsonLd
        name={HOME_PAGE.title}
        description={HOME_PAGE.description}
        path={HOME_PAGE.path}
        webAppName={HOME_PAGE.focusKeyword}
        breadcrumbs={[{ name: "Ana Sayfa", url: "/" }]}
        faqs={CALCULATOR_FAQS}
      />
      <HeroSection />
      <CalculatorCard />
      <CalculatorContentSection />
    </>
  );
}
