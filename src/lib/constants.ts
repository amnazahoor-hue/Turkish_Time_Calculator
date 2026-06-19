export const SITE_NAME = "Saat Hesaplama";
export const SITE_LOGO = "/images/logo.webp";
export const SITE_URL = "https://saathesaplama.com";
export const SITE_DESCRIPTION =
  "Türkiye'nin en gelişmiş saat hesaplama aracı. Saat farkı, tarih ekleme, çıkarma ve çalışma süresi hesaplamalarını anında yapın.";

export const NAV_LINKS = [
  { label: "Araçlar", href: "/#araclar" },
  { label: "72 Saat Kaç Gündür", href: "/72-saat-kac-gundur" },
  { label: "Özellikler", href: "/#ozellikler" },
  { label: "Blog", href: "/#blog" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
] as const;

export const TOOL_LINKS = [
  {
    label: "Saat Hesaplama",
    href: "/saat-hesaplama",
    description: "Genel saat hesaplama aracı",
  },
  {
    label: "Saat Farkı Hesaplama",
    href: "/saat-farki-hesaplama",
    description: "İki zaman arasındaki farkı hesaplayın",
  },
  {
    label: "Saat Ekleme",
    href: "/saat-ekleme",
    description: "Tarihe saat ve dakika ekleyin",
  },
  {
    label: "Saat Çıkarma",
    href: "/saat-cikarma",
    description: "Tarihten saat ve dakika çıkarın",
  },
  {
    label: "Çalışma Saati Hesaplama",
    href: "/calisma-saati-hesaplama",
    description: "Çalışma sürenizi hesaplayın",
  },
  {
    label: "72 Saat Kaç Gündür",
    href: "/72-saat-kac-gundur",
    description: "72 saatin kaç güne denk geldiğini öğrenin",
  },
] as const;

export const TRUST_STATS = [
  { value: "10.000+", label: "Kullanıcı" },
  { value: "99.99%", label: "Doğruluk" },
  { value: "7/24", label: "Erişim" },
  { value: "Ücretsiz", label: "Kullanım" },
] as const;

export const FEATURES = [
  {
    title: "Hızlı Hesaplama",
    description:
      "Saniyeler içinde karmaşık saat ve tarih hesaplamalarını tamamlayın.",
    icon: "Zap",
  },
  {
    title: "%100 Doğru Sonuç",
    description:
      "Milisaniye hassasiyetinde doğru sonuçlar sunan gelişmiş algoritmalar.",
    icon: "CheckCircle2",
  },
  {
    title: "Saat Dilimi Desteği",
    description:
      "Türkiye ve dünya genelinde saat dilimi hesaplamalarını destekler.",
    icon: "Globe",
  },
  {
    title: "Tarih Hesaplamaları",
    description:
      "Tarihlere saat ekleyin, çıkarın ve gelecek tarihleri hesaplayın.",
    icon: "Calendar",
  },
  {
    title: "Çalışma Süresi Takibi",
    description:
      "Mesai saatlerinizi, molalarınızı ve toplam çalışma sürenizi takip edin.",
    icon: "Briefcase",
  },
  {
    title: "Anında Sonuç",
    description:
      "Hesaplama sonuçlarını anında görüntüleyin, kopyalayın veya dışa aktarın.",
    icon: "Sparkles",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Başlangıç tarihini girin",
    description: "Hesaplama yapmak istediğiniz başlangıç tarih ve saatini seçin.",
  },
  {
    step: 2,
    title: "Saat ve dakikaları ekleyin",
    description: "İşlem için gerekli saat ve dakika değerlerini girin.",
  },
  {
    step: 3,
    title: "İşlem seçin",
    description: "Ekleme, çıkarma veya fark hesaplama işlemini seçin.",
  },
  {
    step: 4,
    title: "Sonucu alın",
    description: "Anında sonucu görüntüleyin, kopyalayın veya dışa aktarın.",
  },
] as const;

export const USE_CASES = [
  {
    title: "Freelancerlar",
    description:
      "Proje sürelerinizi takip edin, müşterilere doğru faturalandırma yapın.",
    icon: "User",
  },
  {
    title: "Şirketler",
    description:
      "Çalışan mesai saatlerini yönetin, bordro hesaplamalarını kolaylaştırın.",
    icon: "Building2",
  },
  {
    title: "Öğrenciler",
    description:
      "Ders programlarınızı planlayın, sınav tarihlerini hesaplayın.",
    icon: "GraduationCap",
  },
  {
    title: "Ekipler",
    description:
      "Toplantı saatlerini koordine edin, proje deadline'larını yönetin.",
    icon: "Users",
  },
] as const;

export const BENEFITS = [
  {
    title: "Zaman Kazandırır",
    description: "Manuel hesaplamalara veda edin, saniyeler içinde sonuç alın.",
    size: "large" as const,
  },
  {
    title: "Daha Fazla Hassasiyet",
    description: "İnsan hatasını ortadan kaldıran otomatik hesaplamalar.",
    size: "small" as const,
  },
  {
    title: "Görev Yönetimi",
    description: "Görev sürelerinizi planlayın ve takip edin.",
    size: "small" as const,
  },
  {
    title: "Toplantı Planlama",
    description: "Farklı saat dilimlerinde toplantı saatlerini kolayca belirleyin.",
    size: "medium" as const,
  },
  {
    title: "Verimlilik",
    description: "İş akışınızı optimize edin, daha fazla iş yapın.",
    size: "medium" as const,
  },
  {
    title: "Kolay Kullanım",
    description: "Sezgisel arayüz ile herkes kolayca kullanabilir.",
    size: "large" as const,
  },
] as const;

export const FOOTER_LINKS = {
  tools: TOOL_LINKS,
  company: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İletişim", href: "/iletisim" },
  ],
  legal: [
    { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
    { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
    { label: "Çerez Politikası", href: "/cerez-politikasi" },
    { label: "Sorumluluk Reddi", href: "/sorumluluk-reddi" },
  ],
} as const;
