export const LEGAL_LAST_UPDATED = "19 Haziran 2025";

export const LEGAL_NAV = [
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/kullanim-kosullari", label: "Kullanım Koşulları" },
  { href: "/sorumluluk-reddi", label: "Sorumluluk Reddi" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
] as const;

export const COMPANY_NAV = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/yazar/aylin-durmus", label: "Yazar — Aylin Durmuş" },
] as const;

export const AUTHOR = {
  slug: "aylin-durmus",
  name: "Aylin Durmuş",
  role: "İçerik Editörü & Zaman Hesaplama Uzmanı",
  image: "/images/author-aylin-durmus.webp",
  imageWidth: 640,
  imageHeight: 640,
  location: "İstanbul, Türkiye",
  email: "aylin@saathesaplama.com",
  bio: [
    "Aylin Durmuş, Saat Hesaplama platformunun içerik ve kullanıcı rehberlerinden sorumlu editördür. Mesai süresi, vardiya planlaması ve günlük zaman aritmetiği konularında sade, uygulanabilir açıklamalar hazırlar.",
    "Üniversite yıllarında endüstri mühendisliği ve veri okuryazarlığı derslerinde edindiği disiplini, bugün saat farkı, tarih ekleme/çıkarma ve çalışma süresi hesaplama rehberlerine taşır. Amacı, karmaşık zaman matematiğini herkesin anlayacağı Türkçe içeriklere dönüştürmektir.",
    "Aylin, hesaplama sonuçlarının resmi bordro, hukuki süre veya tıbbi zamanlama yerine geçmediğini vurgular; kullanıcıların kritik kararlarda uzman doğrulaması almasını önerir. Platformdaki SSS, kullanım kılavuzları ve yasal özet metinlerin büyük bölümünü o koordine eder.",
  ],
  expertise: [
    "Saat farkı ve süre hesaplama",
    "Vardiya & mesai senaryoları",
    "Kullanıcı dostu rehber yazımı",
    "KVKK odaklı gizlilik açıklamaları",
  ],
} as const;

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};
