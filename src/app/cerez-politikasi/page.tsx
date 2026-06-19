import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { LegalHubLayout } from "@/components/legal/legal-hub-layout";
import { cookieSectionsTr } from "@/lib/legal-content-tr";

export const metadata: Metadata = generatePageMetadata({
  title: "Çerez Politikası",
  description: `${SITE_NAME} çerez politikası. Saat hesaplama sitesinde kullanılan çerez türleri ve yönetim seçenekleri.`,
  path: "/cerez-politikasi",
});

export default function CerezPolitikasiPage() {
  return (
    <PageTransition>
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Ana Sayfa", url: "/" },
          { name: "Çerez Politikası", url: "/cerez-politikasi" },
        ])}
      />
      <LegalHubLayout
        title="Çerez Politikası"
        description="Saat Hesaplama web sitesinde hangi çerezlerin kullanıldığını, hesaplama verilerinizin çerezlerle ilişkisini ve tercihlerinizi nasıl yönetebileceğinizi açıklar."
        sections={cookieSectionsTr}
      />
    </PageTransition>
  );
}
