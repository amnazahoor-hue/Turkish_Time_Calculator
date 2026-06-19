import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = generatePageMetadata({
  title: "Kullanım Koşulları",
  description: `${SITE_NAME} kullanım koşulları. Platformumuzu kullanırken uymanız gereken kurallar ve şartlar.`,
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
      <LegalPageLayout title="Kullanım Koşulları" lastUpdated="15 Haziran 2025">
        <section>
          <h2>1. Kabul</h2>
          <p>
            {SITE_NAME} web sitesini ve hizmetlerini kullanarak bu Kullanım
            Koşullarını kabul etmiş sayılırsınız. Koşulları kabul etmiyorsanız
            lütfen platformumuzu kullanmayınız.
          </p>
        </section>

        <section>
          <h2>2. Hizmet Tanımı</h2>
          <p>
            {SITE_NAME}, kullanıcılara ücretsiz online saat hesaplama araçları
            sunan bir web platformudur. Saat farkı hesaplama, tarih ekleme/çıkarma
            ve çalışma süresi hesaplama gibi hizmetler sağlanmaktadır.
          </p>
        </section>

        <section>
          <h2>3. Kullanım Kuralları</h2>
          <p>Platformumuzu kullanırken aşağıdaki kurallara uymanız gerekmektedir:</p>
          <ul>
            <li>Hizmetleri yasal amaçlarla kullanmak</li>
            <li>Platformun güvenliğini tehlikeye atmamak</li>
            <li>Otomatik botlar veya scriptler ile aşırı istek göndermemek</li>
            <li>Diğer kullanıcıların haklarına saygı göstermek</li>
            <li>Telif hakkı ve fikri mülkiyet haklarına uymak</li>
          </ul>
        </section>

        <section>
          <h2>4. Fikri Mülkiyet</h2>
          <p>
            Platform üzerindeki tüm içerik, tasarım, logo, yazılım ve markalar
            {SITE_NAME}&apos;a aittir ve telif hakkı yasaları ile korunmaktadır.
            İzinsiz kopyalama, dağıtma veya değiştirme yasaktır.
          </p>
        </section>

        <section>
          <h2>5. Sorumluluk Sınırlaması</h2>
          <p>
            Hizmetlerimiz &quot;olduğu gibi&quot; sunulmaktadır. Hesaplama
            sonuçlarının doğruluğu için azami çaba gösterilse de, kritik
            kararlar almadan önce sonuçları doğrulamanızı öneririz. Detaylı
            bilgi için Sorumluluk Reddi sayfamızı inceleyiniz.
          </p>
        </section>

        <section>
          <h2>6. Hizmet Değişiklikleri</h2>
          <p>
            Platform özelliklerini, hizmetlerini veya bu koşulları önceden
            haber vermeksizin değiştirme hakkını saklı tutarız. Değişiklikler
            bu sayfada yayınlandığı anda yürürlüğe girer.
          </p>
        </section>

        <section>
          <h2>7. Hesap ve Kayıt</h2>
          <p>
            Mevcut hizmetlerimiz kayıt gerektirmemektedir. Gelecekte kayıt
            gerektiren özellikler eklenmesi durumunda, kullanıcılar ayrıca
            bilgilendirilecektir.
          </p>
        </section>

        <section>
          <h2>8. Uygulanacak Hukuk</h2>
          <p>
            Bu koşullar Türkiye Cumhuriyeti kanunlarına tabidir. Uyuşmazlıklarda
            İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
          </p>
        </section>

        <section>
          <h2>9. İletişim</h2>
          <p>
            Kullanım koşulları hakkında sorularınız için info@saathesaplama.com
            adresinden bize ulaşabilirsiniz.
          </p>
        </section>
      </LegalPageLayout>
    </PageTransition>
  );
}
