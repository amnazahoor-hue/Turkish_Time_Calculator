import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { generateLegalPageMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { LegalHubLayout } from "@/components/legal/legal-hub-layout";
import { disclaimerSectionsTr } from "@/lib/legal-content-tr";

const PAGE = {
  title: "Sorumluluk Reddi",
  description: `${SITE_NAME} sorumluluk reddi. Saat hesaplama sonuçlarının sınırları, doğruluk uyarıları ve profesyonel kullanım.`,
  path: "/sorumluluk-reddi",
} as const;

export const metadata: Metadata = generateLegalPageMetadata({
  title: PAGE.title,
  description: PAGE.description,
  path: PAGE.path,
});

export default function SorumlulukReddiPage() {
  return (
    <PageTransition>
      <LegalHubLayout
        title="Sorumluluk Reddi"
        description="Saat farkı, mesai ve tarih hesaplama araçlarının bilgilendirme amaçlı olduğu, sonuç sınırları ve sorumluluk kapsamı hakkında önemli uyarılar."
        sections={disclaimerSectionsTr}
      />
    </PageTransition>
  );
}
