import type { LegalSection } from "@/lib/legal-pages-config";
import { SITE_NAME } from "@/lib/constants";

export const privacySectionsTr: LegalSection[] = [
  {
    id: "giris",
    title: "1. Giriş",
    paragraphs: [
      `${SITE_NAME}, saat farkı, tarihe saat ekleme/çıkarma ve çalışma süresi hesaplama araçları sunan ücretsiz bir web platformudur. Bu Gizlilik Politikası; sitemizi ziyaret ettiğinizde, hesaplama aracını kullandığınızda ve bizimle iletişime geçtiğinizde hangi verilerin işlenebileceğini açıklar.`,
      "Hesaplama alanlarına girdiğiniz tarih ve saat değerleri normal kullanımda tarayıcınızda işlenir; bu girdiler sunucularımıza kaydedilmez ve hesaplama geçmişi oluşturulmaz. Gizlilik tasarımımızın merkezinde, araç kullanımını kişisel veri toplamadan tamamlayabilmeniz yer alır.",
    ],
  },
  {
    id: "toplanan-veriler",
    title: "2. Toplanan Veriler",
    paragraphs: [
      "Aşağıdaki veri kategorileri, hizmeti sunmak ve geliştirmek için sınırlı ölçüde işlenebilir:",
    ],
    list: [
      "İletişim formu: ad, e-posta adresi ve mesaj metni (yalnızca formu gönderirseniz)",
      "Teknik veriler: IP adresi, tarayıcı türü, cihaz bilgisi, ziyaret edilen sayfalar",
      "Çerezler ve benzeri teknolojiler aracılığıyla toplanan anonim kullanım istatistikleri",
      "Hata günlükleri: performans ve güvenlik analizi için anonimleştirilmiş kayıtlar",
    ],
  },
  {
    id: "hesaplama-verisi",
    title: "3. Saat Hesaplama Verileri",
    paragraphs: [
      "Saat hesaplama, mesai süresi, 72 saat kaç gündür gibi araçlara girdiğiniz değerler cihazınızda hesaplanır. Bu bilgileri sunucuya göndermek zorunda değilsiniz; form gönderimi olmadıkça kişisel hesaplama içeriğiniz bizde saklanmaz.",
      "Sonuçları kopyalamanız veya ekran görüntüsü almanız tamamen sizin kontrolünüzdür. Hassas iş verileri için tarayıcı otomatik doldurma ve paylaşımlı cihazlarda oturum kapatma önerilir.",
    ],
  },
  {
    id: "kullanim-amaci",
    title: "4. Verilerin Kullanım Amaçları",
    list: [
      "Saat hesaplama aracının güvenli ve hızlı çalışmasını sağlamak",
      "Kullanıcı deneyimini ve arayüz erişilebilirliğini iyileştirmek",
      "İletişim taleplerinize yanıt vermek",
      "KVKK ve ilgili mevzuattan doğan yükümlülükleri yerine getirmek",
      "Kötüye kullanım, bot trafiği ve güvenlik tehditlerini önlemek",
    ],
    paragraphs: [],
  },
  {
    id: "paylasim",
    title: "5. Verilerin Paylaşımı",
    paragraphs: [
      "Kişisel verileriniz satılmaz veya kiralanmaz. Yasal zorunluluk, mahkeme kararı veya açık rızanız dışında üçüncü taraflarla paylaşılmaz. Analitik hizmet sağlayıcıları yalnızca toplu ve anonim istatistik alabilir.",
    ],
  },
  {
    id: "guvenlik",
    title: "6. Veri Güvenliği",
    paragraphs: [
      "SSL/TLS şifreleme, güvenli barındırma altyapısı ve erişim kontrolleri uygulanır. Hiçbir internet aktarımı %100 güvenli olmasa da, verilerinizi korumak için makul teknik ve idari önlemler alınır.",
    ],
  },
  {
    id: "kvkk",
    title: "7. KVKK Kapsamındaki Haklarınız",
    paragraphs: [
      "6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca; verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltme, silme, itiraz etme ve zararın giderilmesini talep etme haklarına sahipsiniz.",
      "Taleplerinizi info@saathesaplama.com adresine iletebilirsiniz. Başvurularınız mevzuata uygun sürede yanıtlanır.",
    ],
  },
  {
    id: "cerezler",
    title: "8. Çerezler",
    paragraphs: [
      "Zorunlu, işlevsel ve analitik çerezler kullanılabilir. Ayrıntılar için Çerez Politikamıza bakınız. Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz; bazı tercihler arayüz davranışını etkileyebilir.",
    ],
  },
];

export const termsSectionsTr: LegalSection[] = [
  {
    id: "kabul",
    title: "1. Koşulların Kabulü",
    paragraphs: [
      `${SITE_NAME} sitesini ve saat hesaplama araçlarını kullanarak bu Kullanım Koşullarını kabul etmiş olursunuz. Kabul etmiyorsanız platformu kullanmayınız.`,
      "Koşullar zaman zaman güncellenebilir. Güncel metin bu sayfada yayımlandığı anda geçerlidir. Kullanıma devam etmeniz, güncellenmiş koşulları kabul ettiğiniz anlamına gelir.",
    ],
  },
  {
    id: "hizmet",
    title: "2. Hizmet Tanımı",
    paragraphs: [
      "Platform; saat farkı hesaplama, tarihe saat ekleme/çıkarma, çalışma süresi hesaplama ve ilgili bilgilendirici içerikler sunar. Temel araçlar ücretsizdir ve kayıt zorunluluğu yoktur.",
    ],
  },
  {
    id: "arac-kullanimi",
    title: "3. Saat Hesaplama Aracı Kullanım Şartları",
    list: [
      "Araç yalnızca bilgilendirme ve planlama amaçlıdır; resmi bordro, hukuki süre veya tıbbi zamanlama yerine geçmez",
      "Girdiğiniz tarih/saat değerlerinin doğruluğundan siz sorumlusunuz",
      "Otomatik botlarla aşırı istek göndermek, sistemi zorlamak veya tersine mühendislik yapmak yasaktır",
      "Sonuçları paylaşırken bağlamı doğru aktarmak kullanıcı sorumluluğundadır",
    ],
    paragraphs: [],
  },
  {
    id: "kurallar",
    title: "4. Genel Kullanım Kuralları",
    list: [
      "Hizmetleri yalnızca yasal amaçlarla kullanmak",
      "Site güvenliğini tehlikeye atmamak",
      "Fikri mülkiyet haklarına saygı göstermek",
      "Diğer kullanıcıların erişimini engelleyecek davranışlardan kaçınmak",
    ],
    paragraphs: [],
  },
  {
    id: "fikri-mulkiyet",
    title: "5. Fikri Mülkiyet",
    paragraphs: [
      "Logo, arayüz tasarımı, metinler, görseller ve yazılım bileşenleri Saat Hesaplama'ya aittir. İzinsiz kopyalama, dağıtma veya ticari kullanım yasaktır.",
    ],
  },
  {
    id: "degisiklik",
    title: "6. Hizmet Değişiklikleri",
    paragraphs: [
      "Özellikler, araçlar veya koşullar önceden bildirim yapılmaksızın güncellenebilir. Bakım ve güvenlik çalışmaları nedeniyle geçici kesintiler yaşanabilir.",
    ],
  },
  {
    id: "hukuk",
    title: "7. Uygulanacak Hukuk",
    paragraphs: [
      "Bu koşullar Türkiye Cumhuriyeti kanunlarına tabidir. Uyuşmazlıklarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.",
    ],
  },
];

export const disclaimerSectionsTr: LegalSection[] = [
  {
    id: "genel",
    title: "1. Genel Sorumluluk Reddi",
    paragraphs: [
      `${SITE_NAME} üzerindeki saat hesaplama araçları ve tüm içerikler yalnızca genel bilgilendirme amacı taşır. Profesyonel muhasebe, hukuk, insan kaynakları veya sağlık danışmanlığı değildir.`,
      "Siteyi kullanarak bu sınırlamaları okuduğunuzu ve anladığınızı kabul edersiniz.",
    ],
  },
  {
    id: "dogruluk",
    title: "2. Hesaplama Doğruluğu",
    paragraphs: [
      "Algoritmalarımız saat farkı, gece yarısı geçişi ve dakika taşıma senaryolarını kapsayacak şekilde test edilir. Buna rağmen yazılım hatası, tarayıcı uyumsuzluğu veya hatalı kullanıcı girdisi sonuçları etkileyebilir.",
      "Bordro, fazla mesai, yasal süre, randevu veya ilaç zamanlaması gibi kritik konularda sonuçları bağımsız olarak doğrulayın.",
    ],
  },
  {
    id: "sinir",
    title: "3. Sorumluluk Sınırı",
    paragraphs: [
      "Platform, hizmetin kullanımından doğan doğrudan veya dolaylı zararlardan — veri kaybı, iş kesintisi, kar kaybı dahil — yürürlükteki zorunlu tüketici hakları saklı kalmak kaydıyla sorumlu tutulamaz.",
    ],
  },
  {
    id: "ucuncu-taraf",
    title: "4. Üçüncü Taraf Bağlantıları",
    paragraphs: [
      "Sitedeki harici bağlantıların içeriği, gizlilik uygulamaları ve güvenliği üzerinde kontrolümüz yoktur. Bu siteleri kendi riskinizle ziyaret edersiniz.",
    ],
  },
  {
    id: "kesinti",
    title: "5. Hizmet Kesintileri",
    paragraphs: [
      "Kesintisiz erişim garanti edilmez. Bakım, altyapı sorunları veya güvenlik güncellemeleri geçici erişim kaybına yol açabilir.",
    ],
  },
  {
    id: "profesyonel",
    title: "6. Profesyonel Kullanım Uyarısı",
    paragraphs: [
      "Mesai, vardiya, proje süresi ve benzeri iş senaryolarında araç planlama yardımcısıdır. Resmi kayıtlar için işveren politikaları, sendika anlaşmaları veya uzman onayı esas alınmalıdır.",
    ],
  },
];

export const cookieSectionsTr: LegalSection[] = [
  {
    id: "cerez-nedir",
    title: "1. Çerez Nedir?",
    paragraphs: [
      "Çerezler, Saat Hesaplama sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Araç tercihlerinizi hatırlamak, oturum güvenliğini desteklemek ve hangi sayfaların en çok kullanıldığını anonim olarak anlamak için kullanılabilir.",
    ],
  },
  {
    id: "turler",
    title: "2. Kullandığımız Çerez Türleri",
    list: [
      "Zorunlu çerezler: site ve hesaplama arayüzünün temel işlevleri",
      "Analitik çerezler: anonim ziyaret ve araç kullanım istatistikleri",
      "İşlevsel çerezler: dil ve arayüz tercihlerinin hatırlanması",
      "Performans çerezleri: sayfa hızı ve hata oranı ölçümü",
    ],
    paragraphs: [],
  },
  {
    id: "hesaplama",
    title: "3. Saat Hesaplama ve Çerezler",
    paragraphs: [
      "Hesaplama girdileriniz (tarih, saat, süre) çerezlerde saklanmaz. Çerezler; oturum kimliği, analitik olayları veya arayüz tercihleri gibi genel site verileriyle sınırlıdır.",
    ],
  },
  {
    id: "ucuncu-taraf",
    title: "4. Üçüncü Taraf Çerezleri",
    paragraphs: [
      "Analitik sağlayıcıları yalnızca toplu, anonim kullanım verisi toplayabilir. Sağlayıcıların kendi gizlilik politikaları geçerlidir.",
    ],
  },
  {
    id: "yonetim",
    title: "5. Çerez Yönetimi",
    paragraphs: [
      "Tarayıcı ayarlarından çerezleri silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin kapatılması saat hesaplama aracının bazı kolaylaştırıcı özelliklerini etkileyebilir.",
    ],
  },
  {
    id: "sure",
    title: "6. Saklama Süreleri",
    paragraphs: [
      "Oturum çerezleri tarayıcı kapanınca silinir. Kalıcı çerezler genellikle 12 aya kadar saklanabilir; süre çerez türüne göre değişir.",
    ],
  },
];
