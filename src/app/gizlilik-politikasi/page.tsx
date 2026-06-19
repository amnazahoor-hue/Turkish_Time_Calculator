import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = generatePageMetadata({
  title: "Gizlilik Politikası",
  description: `${SITE_NAME} gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi.`,
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
      <LegalPageLayout title="Gizlilik Politikası" lastUpdated="15 Haziran 2025">
        <section>
          <h2>1. Giriş</h2>
          <p>
            {SITE_NAME} olarak kişisel verilerinizin gizliliğine büyük önem veriyoruz.
            Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi
            kullandığınızda kişisel verilerinizin nasıl toplandığını, kullanıldığını,
            saklandığını ve korunduğunu açıklamaktadır.
          </p>
        </section>

        <section>
          <h2>2. Toplanan Veriler</h2>
          <p>Hizmetlerimizi kullanırken aşağıdaki veriler toplanabilir:</p>
          <ul>
            <li>İletişim formu aracılığıyla sağladığınız ad, e-posta ve mesaj içeriği</li>
            <li>Tarayıcı türü, işletim sistemi ve cihaz bilgileri</li>
            <li>IP adresi ve genel konum bilgisi</li>
            <li>Site kullanım istatistikleri ve analitik veriler</li>
            <li>Çerezler aracılığıyla toplanan tercih ve davranış verileri</li>
          </ul>
          <p>
            Saat hesaplama araçlarımızda girdiğiniz tarih ve saat bilgileri
            tarayıcınızda yerel olarak işlenir ve sunucularımıza kaydedilmez.
          </p>
        </section>

        <section>
          <h2>3. Verilerin Kullanım Amacı</h2>
          <p>Toplanan veriler aşağıdaki amaçlarla kullanılmaktadır:</p>
          <ul>
            <li>Hizmetlerimizi sunmak ve geliştirmek</li>
            <li>Kullanıcı deneyimini iyileştirmek</li>
            <li>İletişim taleplerinize yanıt vermek</li>
            <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            <li>Güvenlik ve dolandırıcılık önleme</li>
          </ul>
        </section>

        <section>
          <h2>4. Verilerin Paylaşımı</h2>
          <p>
            Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla
            paylaşılmaz. Analitik hizmetleri için anonim ve toplu veriler
            kullanılabilir. Verileriniz hiçbir koşulda satılmaz veya kiralanmaz.
          </p>
        </section>

        <section>
          <h2>5. Veri Güvenliği</h2>
          <p>
            Verilerinizi korumak için endüstri standardı güvenlik önlemleri
            uyguluyoruz. SSL şifreleme, güvenli sunucu altyapısı ve düzenli
            güvenlik denetimleri ile verilerinizin güvenliğini sağlıyoruz.
          </p>
        </section>

        <section>
          <h2>6. KVKK Haklarınız</h2>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki
            haklara sahipsiniz:
          </p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme</li>
            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
            <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
            <li>Silinmesini veya yok edilmesini isteme</li>
          </ul>
        </section>

        <section>
          <h2>7. Çerezler</h2>
          <p>
            Web sitemiz çerezler kullanmaktadır. Çerez kullanımı hakkında
            detaylı bilgi için Çerez Politikamızı inceleyebilirsiniz.
          </p>
        </section>

        <section>
          <h2>8. İletişim</h2>
          <p>
            Gizlilik politikamız hakkında sorularınız için info@saathesaplama.com
            adresinden bize ulaşabilirsiniz.
          </p>
        </section>
      </LegalPageLayout>
    </PageTransition>
  );
}
