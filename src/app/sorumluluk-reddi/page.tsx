import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { LegalHubLayout } from "@/components/legal/legal-hub-layout";
import { disclaimerSectionsTr } from "@/lib/legal-content-tr";

export const metadata: Metadata = generatePageMetadata({
  title: "Sorumluluk Reddi",
  description: `${SITE_NAME} sorumluluk reddi. Saat hesaplama sonuçlarının sınırları, doğruluk uyarıları ve profesyonel kullanım.`,
  path: "/sorumluluk-reddi",
});

export default function SorumlulukReddiPage() {
  return (
    <PageTransition>
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Ana Sayfa", url: "/" },
          { name: "Sorumluluk Reddi", url: "/sorumluluk-reddi" },
        ])}
      />
      <LegalHubLayout
        title="Sorumluluk Reddi"
        description="Saat farkı, mesai ve tarih hesaplama araçlarının bilgilendirme amaçlı olduğu, sonuç sınırları ve sorumluluk kapsamı hakkında önemli uyarılar."
        sections={disclaimerSectionsTr}
      />
    </PageTransition>
  );
}
