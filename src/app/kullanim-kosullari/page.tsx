import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { LegalHubLayout } from "@/components/legal/legal-hub-layout";
import { termsSectionsTr } from "@/lib/legal-content-tr";

export const metadata: Metadata = generatePageMetadata({
  title: "Kullanım Koşulları",
  description: `${SITE_NAME} kullanım koşulları. Saat hesaplama aracının yasal kullanım şartları, sorumluluklar ve fikri mülkiyet.`,
  path: "/kullanim-kosullari",
});

export default function KullanimKosullariPage() {
  return (
    <PageTransition>
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Ana Sayfa", url: "/" },
          { name: "Kullanım Koşulları", url: "/kullanim-kosullari" },
        ])}
      />
      <LegalHubLayout
        title="Kullanım Koşulları"
        description="Saat Hesaplama platformunu ve online saat hesaplama araçlarını kullanırken uymanız gereken kurallar, araç kullanım sınırları ve yasal çerçeve."
        sections={termsSectionsTr}
      />
    </PageTransition>
  );
}
