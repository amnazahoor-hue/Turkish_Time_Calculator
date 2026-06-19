import type { Metadata } from "next";
import { CalculatorCard } from "@/components/calculator/calculator-card";
import { PageTransition } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, buildPageSchemas } from "@/lib/seo";

const PAGE = {
  title: "Saat Ekleme",
  description:
    "Belirli bir tarihe saat ve dakika ekleyin. Ücretsiz online tarih ve saat ekleme hesaplama aracı.",
  path: "/saat-ekleme",
} as const;

export const metadata: Metadata = generatePageMetadata({
  title: PAGE.title,
  description: PAGE.description,
  path: PAGE.path,
  keywords: ["saat ekleme", "tarihe saat ekleme", "dakika ekleme"],
});

export default function SaatEklemePage() {
  return (
    <PageTransition>
      <SchemaMarkup
        data={buildPageSchemas({
          name: PAGE.title,
          description: PAGE.description,
          path: PAGE.path,
          breadcrumbs: [
            { name: "Ana Sayfa", url: "/" },
            { name: PAGE.title, url: PAGE.path },
          ],
        })}
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
