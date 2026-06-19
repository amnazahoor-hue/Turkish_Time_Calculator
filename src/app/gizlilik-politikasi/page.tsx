import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { LegalHubLayout } from "@/components/legal/legal-hub-layout";
import { privacySectionsTr } from "@/lib/legal-content-tr";

export const metadata: Metadata = generatePageMetadata({
  title: "Gizlilik Politikası",
  description: `${SITE_NAME} gizlilik politikası. Saat hesaplama aracında verileriniz tarayıcıda işlenir; kişisel veri, çerez ve KVKK hakları.`,
  path: "/gizlilik-politikasi",
});

export default function GizlilikPolitikasiPage() {
  return (
    <PageTransition>
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Ana Sayfa", url: "/" },
          { name: "Gizlilik Politikası", url: "/gizlilik-politikasi" },
        ])}
      />
      <LegalHubLayout
        title="Gizlilik Politikası"
        description="Saat hesaplama aracını kullanırken hangi verilerin işlendiğini, hesaplama girdilerinizin nasıl korunduğunu ve KVKK kapsamındaki haklarınızı öğrenin."
        sections={privacySectionsTr}
      />
    </PageTransition>
  );
}
