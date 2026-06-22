export const SITE_NAME = "Saat Hesaplama";
export const SITE_LOGO = "/images/logo.webp";
export const SITE_URL = "https://isaathesaplama.tr";
export const OG_IMAGE = "/branding/og-image.webp";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const SITE_DESCRIPTION =
  "Türkiye'nin en gelişmiş saat hesaplama aracı. Saat farkı, tarih ekleme, çıkarma ve çalışma süresi hesaplamalarını anında yapın.";

export const NAV_LINKS = [
  { label: "72 Saat Kaç Gündür", href: "/72-saat-kac-gun" },
  { label: "Saat Ücreti Hesaplama", href: "/saat-ucreti-hesaplama" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
] as const;

export const TOOL_LINKS = [
  {
    label: "Saat Hesaplama",
    href: "/",
    description: "Ana saat hesaplama aracı",
  },
  {
    label: "72 Saat Kaç Gündür",
    href: "/72-saat-kac-gun",
    description: "72 saatin kaç güne denk geldiğini öğrenin",
  },
  {
    label: "Saat Ücreti Hesaplama",
    href: "/saat-ucreti-hesaplama",
    description: "Saatlik ücret ve toplam kazancınızı hesaplayın",
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
    title: "Başlangıç Tarihini Girin",
    description: "Hesaplama yapmak istediğiniz başlangıç tarih ve saatini seçin.",
  },
  {
    step: 2,
    title: "Saat Ve Dakikaları Ekleyin",
    description: "İşlem için gerekli saat ve dakika değerlerini girin.",
  },
  {
    step: 3,
    title: "İşlem Seçin",
    description: "Ekleme, çıkarma veya fark hesaplama işlemini seçin.",
  },
  {
    step: 4,
    title: "Sonucu Alın",
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

export const FOOTER_SOCIAL_LINKS = [
  { href: "https://youtube.com/", label: "YouTube", platform: "youtube" as const },
  { href: "https://facebook.com/", label: "Facebook", platform: "facebook" as const },
  { href: "https://instagram.com/", label: "Instagram", platform: "instagram" as const },
  { href: "https://pinterest.com/", label: "Pinterest", platform: "pinterest" as const },
  { href: "https://x.com/", label: "X (Twitter)", platform: "x" as const },
  { href: "https://reddit.com/", label: "Reddit", platform: "reddit" as const },
  { href: "https://quora.com/", label: "Quora", platform: "quora" as const },
] as const;

export const FOOTER_LINKS = {
  tools: TOOL_LINKS,
  company: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İletişim", href: "/iletisim" },
    { label: "Yazar — Aylin Durmuş", href: "/yazar/aylin-durmus" },
  ],
  legal: [
    { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
    { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
    { label: "Çerez Politikası", href: "/cerez-politikasi" },
    { label: "Sorumluluk Reddi", href: "/sorumluluk-reddi" },
  ],
} as const;
