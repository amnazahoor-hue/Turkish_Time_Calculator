import type { Metadata } from "next";
import { CalculatorCard } from "@/components/calculator/calculator-card";
import { PageTransition } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Saat Çıkarma",
  description:
    "Belirli bir tarihten saat ve dakika çıkarın. Ücretsiz online tarih ve saat çıkarma hesaplama aracı.",
  path: "/saat-cikarma",
  keywords: ["saat çıkarma", "tarihten saat çıkarma", "dakika çıkarma"],
});

export default function SaatCikarmaPage() {
  return (
    <PageTransition>
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Ana Sayfa", url: "/" },
          { name: "Saat Çıkarma", url: "/saat-cikarma" },
        ])}
      />
      <div className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
            Saat Çıkarma
          </h1>
          <p className="mt-3 text-sm text-muted sm:mt-4 sm:text-base md:text-lg">
            Tarihten belirli saat ve dakika çıkararak yeni zamanı hesaplayın.
          </p>
        </div>
        <CalculatorCard defaultTab="cikar" showTitle={false} />
      </div>
    </PageTransition>
  );
}
