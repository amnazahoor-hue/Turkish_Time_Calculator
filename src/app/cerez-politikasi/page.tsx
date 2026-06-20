import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { generateLegalPageMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { LegalHubLayout } from "@/components/legal/legal-hub-layout";
import { cookieSectionsTr } from "@/lib/legal-content-tr";

const PAGE = {
  title: "Çerez Politikası",
  description: `${SITE_NAME} çerez politikası. Saat hesaplama sitesinde kullanılan çerez türleri ve yönetim seçenekleri.`,
  path: "/cerez-politikasi",
} as const;

export const metadata: Metadata = generateLegalPageMetadata({
  title: PAGE.title,
  description: PAGE.description,
  path: PAGE.path,
});

export default function CerezPolitikasiPage() {
  return (
    <PageTransition>
      <LegalHubLayout
        title="Çerez Politikası"
        description="Saat Hesaplama web sitesinde hangi çerezlerin kullanıldığını, hesaplama verilerinizin çerezlerle ilişkisini ve tercihlerinizi nasıl yönetebileceğinizi açıklar."
        sections={cookieSectionsTr}
      />
    </PageTransition>
  );
}
