import type { Metadata } from "next";
import { CalculatorCard } from "@/components/calculator/calculator-card";
import { PageTransition } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Saat Ekleme",
  description:
    "Belirli bir tarihe saat ve dakika ekleyin. Ücretsiz online tarih ve saat ekleme hesaplama aracı.",
  path: "/saat-ekleme",
  keywords: ["saat ekleme", "tarihe saat ekleme", "dakika ekleme"],
});

export default function SaatEklemePage() {
  return (
    <PageTransition>
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Ana Sayfa", url: "/" },
          { name: "Saat Ekleme", url: "/saat-ekleme" },
        ])}
      />
      <div className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
            Saat Ekleme
          </h1>
          <p className="mt-3 text-sm text-muted sm:mt-4 sm:text-base md:text-lg">
            Tarihe belirli saat ve dakika ekleyerek yeni zamanı hesaplayın.
          </p>
        </div>
        <CalculatorCard defaultTab="ekle" showTitle={false} />
      </div>
    </PageTransition>
  );
}
