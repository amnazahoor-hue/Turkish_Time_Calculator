import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = generatePageMetadata({
  title: "Sorumluluk Reddi",
  description: `${SITE_NAME} sorumluluk reddi beyanı. Hizmetlerimizin kullanımına ilişkin yasal sınırlamalar.`,
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
      <LegalPageLayout title="Sorumluluk Reddi" lastUpdated="15 Haziran 2025">
        <section>
          <h2>1. Genel Bilgilendirme</h2>
          <p>
            {SITE_NAME} web sitesinde sunulan saat hesaplama araçları ve içerikler
            yalnızca bilgilendirme amaçlıdır. Platform, profesyonel danışmanlık,
            hukuki, mali veya teknik tavsiye yerine geçmez.
          </p>
        </section>

        <section>
          <h2>2. Hesaplama Doğruluğu</h2>
          <p>
            Hesaplama sonuçlarının doğruluğu için azami çaba gösterilmektedir.
            Ancak, teknik hatalar, yazılım güncellemeleri veya kullanıcı giriş
            hataları nedeniyle sonuçlar yanlış olabilir. Kritik kararlar almadan
            önce sonuçları bağımsız olarak doğrulamanızı şiddetle tavsiye ederiz.
          </p>
        </section>

        <section>
          <h2>3. Sorumluluk Sınırlaması</h2>
          <p>
            {SITE_NAME}, platformun kullanımından kaynaklanan doğrudan, dolaylı,
            arızi veya sonuç olarak ortaya çıkan zararlardan sorumlu tutulamaz.
            Bu sınırlama, hizmet kesintileri, veri kaybı, hesaplama hataları ve
            üçüncü taraf bağlantılarından kaynaklanan sorunları kapsar.
          </p>
        </section>

        <section>
          <h2>4. Üçüncü Taraf Bağlantıları</h2>
          <p>
            Web sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu
            sitelerin içeriği, gizlilik politikaları veya uygulamaları üzerinde
            kontrolümüz bulunmamaktadır. Üçüncü taraf sitelerin kullanımından
            doğan riskler kullanıcıya aittir.
          </p>
        </section>

        <section>
          <h2>5. Hizmet Kesintileri</h2>
          <p>
            Bakım, güncelleme veya teknik sorunlar nedeniyle hizmetlerimizde
            geçici kesintiler yaşanabilir. Kesintisiz hizmet garantisi
            verilmemektedir. Planlı bakımlar mümkün olduğunca önceden duyurulur.
          </p>
        </section>

        <section>
          <h2>6. Profesyonel Kullanım</h2>
          <p>
            Bordro hesaplamaları, yasal süre hesaplamaları, tıbbi dozaj
            zamanlaması gibi profesyonel uygulamalarda platformumuzun
            sonuçlarını kullanmadan önce ilgili uzmanlara danışmanız
            gerekmektedir. Platform, profesyonel standartların yerine geçmez.
          </p>
        </section>

        <section>
          <h2>7. Değişiklik Hakkı</h2>
          <p>
            Bu sorumluluk reddi beyanını önceden haber vermeksizin
            değiştirme hakkını saklı tutarız. Güncellemeler bu sayfada
            yayınlandığı anda yürürlüğe girer.
          </p>
        </section>

        <section>
          <h2>8. İletişim</h2>
          <p>
            Sorumluluk reddi hakkında sorularınız için info@saathesaplama.com
            adresinden bize ulaşabilirsiniz.
          </p>
        </section>
      </LegalPageLayout>
    </PageTransition>
  );
}
