import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { CalculatorCard } from "@/components/calculator/calculator-card";
import { CalculatorContentSection } from "@/components/calculator/calculator-content-section";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import {
  generateSoftwareApplicationSchema,
  generatePageMetadata,
  generateFAQSchema,
} from "@/lib/seo";
import { CALCULATOR_FAQS } from "@/lib/calculator-page-content";

export const metadata: Metadata = generatePageMetadata({
  title: "Daha İyi Sonuçlar İçin Kanıtlanmış Saat Hesaplama Yöntemleri",
  description:
    "Karmaşık matematiği basitleştiren en üstün saat hesaplama tekniklerini keşfedin. Zamanı verimli bir şekilde hesaplamanın kanıtlanmış yöntemlerini öğrenin.",
  path: "/",
  keywords: ["saat hesaplama"],
});

export default function HomePage() {
  return (
    <>
      <SchemaMarkup
        data={[
          generateSoftwareApplicationSchema(),
          generateFAQSchema(CALCULATOR_FAQS),
        ]}
      />
      <HeroSection />
      <CalculatorCard />
      <CalculatorContentSection />
    </>
  );
}
