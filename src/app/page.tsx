import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { CalculatorCard } from "@/components/calculator/calculator-card";
import { CalculatorContentSection } from "@/components/calculator/calculator-content-section";
import { generatePageMetadata } from "@/lib/seo";
import { HOME_PAGE } from "@/lib/pages-seo";

export const metadata: Metadata = generatePageMetadata({
  title: HOME_PAGE.title,
  description: HOME_PAGE.description,
  path: HOME_PAGE.path,
  keywords: [HOME_PAGE.focusKeyword],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CalculatorCard />
      <CalculatorContentSection />
    </>
  );
}
