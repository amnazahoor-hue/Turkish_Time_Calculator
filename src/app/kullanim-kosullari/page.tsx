import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generateLegalPageMetadata, buildPageSchemas } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { LegalHubLayout } from "@/components/legal/legal-hub-layout";
import { termsSectionsTr } from "@/lib/legal-content-tr";

const PAGE = {
  title: "Kullanım Koşulları",
  description: `${SITE_NAME} kullanım koşulları. Saat hesaplama aracının yasal kullanım şartları, sorumluluklar ve fikri mülkiyet.`,
  path: "/kullanim-kosullari",
} as const;

export const metadata: Metadata = generateLegalPageMetadata({
  title: PAGE.title,
  description: PAGE.description,
  path: PAGE.path,
});

export default function KullanimKosullariPage() {
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
      <LegalHubLayout
        title="Kullanım Koşulları"
        description="Saat Hesaplama platformunu ve online saat hesaplama araçlarını kullanırken uymanız gereken kurallar, araç kullanım sınırları ve yasal çerçeve."
        sections={termsSectionsTr}
      />
    </PageTransition>
  );
}
