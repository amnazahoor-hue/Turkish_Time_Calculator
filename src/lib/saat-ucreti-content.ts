import type { FAQItem } from "@/types";
import { HOURLY_WAGE_PAGE } from "@/lib/pages-seo";

export const SAAT_UCRETI_PAGE = HOURLY_WAGE_PAGE;

export const SAAT_UCRETI_HERO = {
  h1: "Saatlik Ücret Hesaplayıcı",
  paragraphs: [
    "Bu saatlik ücret dönüştürme aracı, saatlik ücretleri, aylık maaşları ve fazla mesai ücretlerini doğru bir şekilde hesaplamanıza yardımcı olur. Maaştan saatlik ücrete dönüşüm veya saatlik ücretten maaşa dönüşüm ihtiyacınız olsun, bu araç hızlı ve güvenilir sonuçlar sunar. Yıllık, aylık, haftalık veya saatlik ücret hesaplamalarınız için bu araca tamamen güvenebilirsiniz. Ayrıca brüt ve net kazançları tahmin etmek için de kullanılır.",
  ],
} as const;

export const HOW_HOURLY_CALCULATED = {
  title: "Saatlik Ücret Nasıl Hesaplanır?",
  intro:
    "Manuel hesaplamalar için, arka planda hesaplamaların nasıl yapıldığına dair açıklamalar içeren bazı formüller aşağıda verilmiştir. Bu, gerektiğinde manuel hesaplamalar yapmanıza yardımcı olacaktır. Bu hesaplamayı bir örnekle anlayalım. Bu örnekte, haftada 40 saat çalıştığınızı varsayalım.",
  examples: [
    {
      title: "Yıllık Maaş (₺600.000) İle Saatlik Ücret Arasındaki İlişki:",
      lines: [
        "(₺600,000 per year ÷ 12 months) ÷ 225 hours per month",
        "= ₺50,000 ÷ 225",
        "= ₺222.22 per hour",
      ],
    },
    {
      title: "Aylık Maaş (₺50.000) İle Saatlik Ücret Arasında:",
      lines: ["₺50,000 ÷ 225 hours per month", "= ₺222.22 per hour"],
    },
    {
      title: "Haftalık Ücret (₺11.250) Saatlik Ücrete Dönüştürüldü:",
      lines: [
        "₺11,250 per week ÷ 45 hours per week",
        "= ₺250.00 per hour",
      ],
    },
    {
      title: "Günlük Ücret (₺1.875) Saatlik Ücrete Dönüştürüldü:",
      lines: [
        "₺1,875 per day ÷ 7.5 hours per day",
        "= ₺250.00 per hour",
      ],
    },
  ],
} as const;

export const SALARY_TO_HOURLY = {
  title: "Maaştan Saatlik Ücrete Hesaplayıcı",
  intro:
    "Saatlik ücret hesaplayıcımızla, maaşınızı saatlik ücrete dönüştürebilirsiniz. Son derece basit ve kolay olan bu işlem, doğru hesaplamalarla en hızlı sonuçları sunar. Bu da zamandan tasarruf etmenizi sağlar. Sadece maaş miktarınızı girerek hatasız sonuçlar elde edersiniz",
  reverseTitle: "Saatlik Ücrete Göre Maaş",
  reverseIntro:
    "Ama eğer kendiniz hesaplamak isterseniz, işte formülü.",
  formulaTitle: "Formül:",
  formula: "Aylık Maaş ÷ 225 = Saatlik Ücret",
  stepsTitle: "Adımlar:",
  steps: [
    "Aylık maaşı hesaplayın.",
    "Aylık maaşı 225'e bölün. Standart olarak, aylık çalışma saatleri 225 olarak kabul edilir.",
    "Sonuç, saatlik ücretiniz olacaktır.",
  ],
  exampleTitle: "Örnek:",
  exampleLines: [
    "Aylık maaş = 3.000 TL",
    "Aylık çalışma saati = 225",
    "3.000 TL ÷ 225 = 13,33 TL",
  ],
  exampleOutro:
    "Dolayısıyla, aylık 3.000 TL maaş için saatlik ücret 13,33 TL'dir. Bu, maaşın saatlik ücrete çevrilmesidir.",
  monthlyHours: 225,
} as const;

export const ANNUAL_SALARY_TABLE = {
  title: "Yıllık Maaş İle Saatlik Ücret Arasındaki İlişkiyi Gösteren Tablo",
  intro:
    "Bu basit hesaplama kılavuzu, haftada 45 saat, günde 7,5 saat ve ayda 225 çalışma saati kriterlerine göre hazırlanmıştır.",
  rows: [
    { annual: 300_000, monthly: 25_000, hourly: 111.11 },
    { annual: 360_000, monthly: 30_000, hourly: 133.33 },
    { annual: 420_000, monthly: 35_000, hourly: 155.56 },
    { annual: 480_000, monthly: 40_000, hourly: 177.78 },
    { annual: 540_000, monthly: 45_000, hourly: 200.0 },
    { annual: 600_000, monthly: 50_000, hourly: 222.22 },
    { annual: 720_000, monthly: 60_000, hourly: 266.67 },
    { annual: 840_000, monthly: 70_000, hourly: 311.11 },
    { annual: 960_000, monthly: 80_000, hourly: 355.56 },
    { annual: 1_080_000, monthly: 90_000, hourly: 400.0 },
    { annual: 1_200_000, monthly: 100_000, hourly: 444.44 },
    { annual: 1_440_000, monthly: 120_000, hourly: 533.33 },
    { annual: 1_800_000, monthly: 150_000, hourly: 666.67 },
  ],
} as const;

export const WORKING_HOURS_SECTION = {
  title: "Çalışma Saatlerinin Hesaplanması:",
  paragraphs: [
    "Ay içindeki çalışma saatleri, ayın günlerine bağlı olarak değişebilir.",
    "31 günlük aylarda 232,5 çalışma saati vardır.",
    "28 günlük aylarda 210 çalışma saati vardır.",
  ],
} as const;

export const OVERTIME_SECTION = {
  title: "Fazla Mesai Ücretlerinin Hesaplanması",
  intro:
    "Çalışma Saati Hesaplama aracımızda fazla mesai, normal çalışma saati ücretine saat başına %50 zam eklenerek hesaplanır. Sistemimiz, fazla mesai ücretini normal saatlik ücretin bir buçuk katı olarak hesaplar. Bu sayede kazancınızı daha doğru bir şekilde görebilir ve ne kadar ek ücret alacağınızı kolayca öğrenebilirsiniz.",
  formulaTitle: "Formül:",
  formula: "Fazla Mesai Ücreti = Saatlik Ücret × 1,5 × Fazla Mesai Saatleri",
  exampleTitle: "Örnek:",
  exampleLines: [
    "Saatlik Ücret: 200 ₺",
    "Fazla Mesai Saatleri: 5",
    "Fazla Mesai Saatlik Ücreti = 200 ₺ × 1,5 = 300 ₺",
    "Toplam Fazla Mesai Ücreti = 300 ₺ × 5 = 1.500 ₺",
  ],
  exampleOutro:
    "Dolayısıyla, saatte 200 ₺ kazanan bir çalışan 5 saat fazla mesai yaparsa, 1.500 ₺ fazla mesai ücreti alacaktır.",
} as const;

export const HOURLY_MONTHLY_DIFF = {
  title: "Saatlik Ücret İle Aylık Maaş Arasındaki Fark",
  intro:
    "Çalışma Saati Hesaplama işleminde saatlik ücret, çalışılan her saat için kazanılan tutarı ifade eder; aylık maaş ise bir ay boyunca elde edilen toplam kazançtır. Türkiye'de aylık maaş hesaplamaları genellikle ayda 225 çalışma saati esas alınarak yapılır. Bu nedenle Çalışma Saati Hesaplama aracı, saatlik ücret ile aylık maaş arasındaki ilişkiyi daha kolay anlamanıza yardımcı olur.",
  rows: [
    { hourly: 100, monthly: 22_500 },
    { hourly: 150, monthly: 33_750 },
    { hourly: 200, monthly: 45_000 },
    { hourly: 250, monthly: 56_250 },
    { hourly: 300, monthly: 67_500 },
    { hourly: 350, monthly: 78_750 },
    { hourly: 400, monthly: 90_000 },
  ],
} as const;

export const PROS_CONS_SECTION = {
  title: "Ücretli ve Saatlik Ücretli Çalışmanın Avantajları ve Dezavantajları",
  intro:
    "Hem maaşlı hem de saatlik ücret yapıları, iş türüne ve çalışan ihtiyaçlarına bağlı olarak avantajlara ve dezavantajlara sahiptir.",
  items: [
    {
      title: "Maaş (Aylık Ödeme)",
      advantages:
        "Avantajlar: İstikrarlı gelir, öngörülebilir aylık kazanç, çoğu durumda ücretli tatiller",
      disadvantages:
        "Dezavantajlar: Fazla mesai için ek ücret yok, daha az esneklik",
    },
    {
      title: "Saatlik Ücret",
      advantages:
        "Avantajlar: Çalışılan her saat için ödeme yapılır, fazla mesai ücreti mümkündür, esnek kazanç potansiyeli",
      disadvantages:
        "Dezavantajlar: Gelir aylık olarak değişebilir ve çalışma saatleri azaltılırsa garantili bir ödeme yoktur.",
    },
  ],
} as const;

export const SAAT_UCRETI_FAQS: FAQItem[] = [
  {
    question: "Saatlik ücret nasıl hesaplanır?",
    answer:
      "Net saatlik ücret, aylık maaşın toplam aylık çalışma saatine bölünmesiyle hesaplanır. Saatlik ücretin hesaplanmasında kullanılan formül aşağıdaki gibidir:\nFormül: Aylık Maaş ÷ 225 = Saatlik Ücret (Türkiye standardı)",
  },
  {
    question: "Aylık brüt maaştan saatlik ücret nasıl hesaplanır?",
    answer:
      "Aylık brüt maaşı 225 çalışma saatine bölün. 225'e bölüyoruz çünkü Türkiye'de hesaplamalarda kullanılan standart çalışma saati 225 saattir. Aşağıda hesaplamayı açıklayan basit bir örnek bulunmaktadır.\nÖrnek: ₺45,000 ÷ 225 = ₺200/hour",
  },
  {
    question: "Brüt maaşı neden 225'e bölüyoruz?",
    answer:
      "Çünkü Türkiye'de standart tam zamanlı çalışma programı şöyledir:\nHaftada 45 saat\nGünde 7,5 saat\nAyda yaklaşık 225 saat\nDolayısıyla 225, standart aylık çalışma saatlerini temsil eder.",
  },
  {
    question: "Aylık maaş, saatlik ücretten nasıl hesaplanır?",
    answer:
      "Saatlik ücret, aylık çalışma saatleriyle çarpılır. Aylık maaşı hesaplamak için kullanılan formül şudur: saatlik ücretten aylık maaş.\nFormül: Saatlik Ücret × 225 = Aylık Maaş",
  },
  {
    question: "Brüt ve net saatlik ücret arasındaki fark nedir?",
    answer:
      "Brüt saatlik ücret, vergiler ve kesintiler düşülmeden önce hesaplanır. Net saatlik ücret ise vergiler, sigorta ve kesintiler düşüldükten sonra hesaplanır.",
  },
  {
    question: "2026 yılında saatlik asgari ücret ne kadar olacak?",
    answer:
      "Saatlik asgari ücret, bir kişinin kazandığı en düşük para miktarıdır. Aylık ücret, toplam aylık çalışma saatine bölünerek hesaplanır. Ayrıca, resmi hükümet güncellemelerine de bağlıdır. Bunun formülü şu şekildedir:\nSaatlik asgari ücret = aylık asgari ücret ÷ 225 (Türkiye standardı).",
  },
  {
    question: "Fazla mesai ücreti nasıl hesaplanır?",
    answer:
      "Fazla mesai ücreti, normal saatlik ücretin %50 artırılmasıyla hesaplanır. Fazla mesai ücretini hesaplama formülü aşağıdaki gibidir. Bu formüle değerler girerek fazla mesai ücretinizi hesaplayabilirsiniz:\nFormül: Saatlik Ücret × 1,5 × Fazla Mesai Saatleri",
  },
  {
    question: "Fazla mesai zam oranı nedir?",
    answer:
      "Türk iş kanununa göre fazla mesai ücreti artış oranı %50'dir (normal saatlik ücretin 1,5 katı). Dolayısıyla, fazla mesai zammınız normal veya ortalama ücretinizin %50 fazlası veya normal ücretinizin 1,5 katı olacaktır.",
  },
  {
    question: "Yıllık fazla mesai limiti saat olarak kaçtır?",
    answer:
      "Türkiye'de yasal yıllık fazla mesai sınırı 270 saattir. Bu sınır kanuna ve ülkeye göre değişiklik gösterebilir. Ancak Türkiye'de bu fazla mesai sınırı yıllık 270 saattir.",
  },
  {
    question: "Hafta sonları ve resmî tatillerde fazla mesai nasıl hesaplanır?",
    answer:
      "Hafta sonu ve resmi tatil çalışmaları, aksi kararlaştırılmadıkça genellikle çift ücret (%100 zam) ile ödenir. Hafta sonları veya resmi tatillerde fazla mesai hesaplaması için bu formül kullanılır.\nFormül: Saatlik Ücret × 2",
  },
  {
    question: "Saatlik ücretlere zam nasıl hesaplanır?",
    answer:
      "Ücret artışı, mevcut saatlik ücrete belirli bir yüzde eklenerek uygulanır. Bu, saatlik ücretinizi zaten biliyorsanız mümkündür. Saatlik ücret bu şekilde hesaplanır.",
  },
  {
    question: "Saatlik fazla mesai ücreti nasıl hesaplanır?",
    answer:
      "Saatlik fazla mesai ücreti, saatlik ücretin 1,5 ile çarpılması ve ardından fazla mesai saatleriyle çarpılmasıyla hesaplanır. İşte saatlik bazda fazla mesai ücreti hesaplamasına dair bir örnek.\nÖrnek: 200 ₺ × 1,5 × 5 saat = 1.500 ₺",
  },
];
