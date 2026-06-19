import type { Metadata } from "next";
import { CalculatorCard } from "@/components/calculator/calculator-card";
import { CalculatorGuideSection } from "@/components/calculator/calculator-guide-section";
import { PageTransition } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Daha İyi Sonuçlar İçin Kanıtlanmış Saat Hesaplama Yöntemleri",
  description:
    "Karmaşık matematiği basitleştiren en üstün saat hesaplama tekniklerini keşfedin. Zamanı verimli bir şekilde hesaplamanın kanıtlanmış yöntemlerini öğrenin.",
  path: "/saat-hesaplama",
  keywords: ["saat hesaplama"],
});

export default function SaatHesaplamaPage() {
  return (
    <PageTransition>
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Ana Sayfa", url: "/" },
          { name: "Saat Hesaplama", url: "/saat-hesaplama" },
        ])}
      />
      <div className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
            Saat Hesaplama
          </h1>
          <p className="mt-3 text-sm text-muted sm:mt-4 sm:text-base md:text-lg">
            Bu saat hesaplama aracı temel olarak iki zaman değerini toplamak
            veya çıkarmak için kullanılır. Aynı günün iki zaman dilimi
            arasındaki süreyi belirleyin. Bu hesap makinesiyle kaç saat
            çalıştığınızı öğrenebilirsiniz.
          </p>
        </div>
        <CalculatorCard showTitle={false} />
        <CalculatorGuideSection />
      </div>
    </PageTransition>
  );
}
