import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { generateLegalPageMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { LegalHubLayout } from "@/components/legal/legal-hub-layout";
import { privacySectionsTr } from "@/lib/legal-content-tr";

const PAGE = {
  title: "Gizlilik Politikası",
  description: `${SITE_NAME} gizlilik politikası. Saat hesaplama aracında verileriniz tarayıcıda işlenir; kişisel veri, çerez ve KVKK hakları.`,
  path: "/gizlilik-politikasi",
} as const;

export const metadata: Metadata = generateLegalPageMetadata({
  title: PAGE.title,
  description: PAGE.description,
  path: PAGE.path,
});

export default function GizlilikPolitikasiPage() {
  return (
    <PageTransition>
      <LegalHubLayout
        title="Gizlilik Politikası"
        description="Saat hesaplama aracını kullanırken hangi verilerin işlendiğini, hesaplama girdilerinizin nasıl korunduğunu ve KVKK kapsamındaki haklarınızı öğrenin."
        sections={privacySectionsTr}
      />
    </PageTransition>
  );
}
