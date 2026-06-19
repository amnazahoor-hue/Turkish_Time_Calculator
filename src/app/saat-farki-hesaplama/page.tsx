import type { Metadata } from "next";
import { CalculatorCard } from "@/components/calculator/calculator-card";
import { PageTransition } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Saat Farkı Hesaplama",
  description:
    "İki tarih ve saat arasındaki farkı gün, saat, dakika olarak hesaplayın. Ücretsiz online saat farkı hesaplama aracı.",
  path: "/saat-farki-hesaplama",
  keywords: ["saat farkı hesaplama", "zaman farkı hesaplama", "iki saat arası fark"],
});

export default function SaatFarkiPage() {
  return (
    <PageTransition>
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Ana Sayfa", url: "/" },
          { name: "Saat Farkı Hesaplama", url: "/saat-farki-hesaplama" },
        ])}
      />
      <div className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
            Saat Farkı Hesaplama
          </h1>
          <p className="mt-3 text-sm text-muted sm:mt-4 sm:text-base md:text-lg">
            İki farklı tarih ve saat arasındaki süreyi anında hesaplayın.
          </p>
        </div>
        <CalculatorCard defaultTab="fark" showTitle={false} />
      </div>
    </PageTransition>
  );
}
