import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = generatePageMetadata({
  title: "Çerez Politikası",
  description: `${SITE_NAME} çerez politikası. Web sitemizde kullanılan çerezler ve yönetim seçenekleri hakkında bilgi.`,
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
      <LegalPageLayout title="Çerez Politikası" lastUpdated="15 Haziran 2025">
        <section>
          <h2>1. Çerez Nedir?</h2>
          <p>
            Çerezler, web sitelerini ziyaret ettiğinizde tarayıcınıza kaydedilen
            küçük metin dosyalarıdır. Çerezler, site deneyiminizi iyileştirmek,
            tercihlerinizi hatırlamak ve site kullanımını analiz etmek için
            kullanılır.
          </p>
        </section>

        <section>
          <h2>2. Kullandığımız Çerez Türleri</h2>
          <p>Web sitemizde aşağıdaki çerez türleri kullanılmaktadır:</p>
          <ul>
            <li>
              <strong>Zorunlu Çerezler:</strong> Sitenin temel işlevlerinin
              çalışması için gereklidir. Bu çerezler olmadan site düzgün
              çalışamaz.
            </li>
            <li>
              <strong>Analitik Çerezler:</strong> Ziyaretçi sayısı, sayfa
              görüntüleme ve site kullanım istatistiklerini toplar. Bu veriler
              anonim olarak işlenir.
            </li>
            <li>
              <strong>İşlevsel Çerezler:</strong> Dil tercihi ve diğer
              kullanıcı ayarlarını hatırlar.
            </li>
            <li>
              <strong>Performans Çerezleri:</strong> Site performansını ölçer ve
              iyileştirmeye yardımcı olur.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Üçüncü Taraf Çerezleri</h2>
          <p>
            Analitik ve performans ölçümü için güvenilir üçüncü taraf hizmet
            sağlayıcılarının çerezlerini kullanabiliriz. Bu çerezler yalnızca
            anonim ve toplu veri toplamak için kullanılır.
          </p>
        </section>

        <section>
          <h2>4. Çerez Yönetimi</h2>
          <p>
            Tarayıcı ayarlarınızdan çerezleri yönetebilir, silebilir veya
            engelleyebilirsiniz. Çoğu tarayıcı çerezleri otomatik olarak kabul
            eder, ancak bu ayarı değiştirebilirsiniz. Çerezleri devre dışı
            bırakmanız durumunda sitenin bazı özellikleri düzgün çalışmayabilir.
          </p>
        </section>

        <section>
          <h2>5. Çerez Süreleri</h2>
          <p>
            Oturum çerezleri tarayıcınızı kapattığınızda silinir. Kalıcı çerezler
            belirli bir süre sonra veya manuel olarak silinene kadar cihazınızda
            kalır. Analitik çerezlerimiz genellikle 12 ay süreyle saklanır.
          </p>
        </section>

        <section>
          <h2>6. Güncellemeler</h2>
          <p>
            Bu çerez politikasını zaman zaman güncelleyebiliriz. Değişiklikler
            bu sayfada yayınlandığı anda yürürlüğe girer. Düzenli olarak bu
            sayfayı kontrol etmenizi öneririz.
          </p>
        </section>

        <section>
          <h2>7. İletişim</h2>
          <p>
            Çerez politikamız hakkında sorularınız için info@saathesaplama.com
            adresinden {SITE_NAME} ekibine ulaşabilirsiniz.
          </p>
        </section>
      </LegalPageLayout>
    </PageTransition>
  );
}
