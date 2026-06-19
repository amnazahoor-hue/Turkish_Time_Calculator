import type { FAQItem } from "@/types";

export const SEVENTY_TWO_HOURS_PAGE = {
  path: "/72-saat-kac-gun",
  title: "72 Saat Kaç Gündür? Kolay Açıklama",
  description:
    "72 saati günlere çevirmenin basit ve heyecan verici yöntemini öğrenin. Matematiği eğlenceli ve anlaşılır hale getiren kolay kılavuzumuzla zaman hesaplamalarında ustalaşın.",
  focusKeyword: "72 saat kaç gündür",
  h1: "72 Saat Kaç Gündür?",
} as const;

export const SEVENTY_TWO_HOURS_HERO = {
  h1: SEVENTY_TWO_HOURS_PAGE.h1,
  paragraphs: [
    "Bir gün 24 saate eşittir, dolayısıyla 72 saatte kaç gün olduğunu hesaplamak istiyorsak, bir gün 24 saat içerdiğinden, cevabı 72'yi 24'e bölerek bulabiliriz: 72 ÷ 24 = 3. 72 saat 3 güne eşittir.",
    "Daha kolay dönüşümler için, bunları manuel olarak yapmak istiyorsanız veya bir günde kaç dakika olduğunu merak ediyorsanız ya da buna benzer daha fazla sorunuz varsa, makaleyi okumaya devam edin. Bu hızlı saat-gün dönüşümü, programları, son teslim tarihlerini ve seyahat sürelerini hesaplamak için kullanışlıdır.",
  ],
} as const;

export const SEVENTY_TWO_HOURS_SOLUTION = {
  title: "Çözüm",
  content:
    "Günümüzde zaman yönetimi çok önemli, bu nedenle günleri saatlere nasıl çevireceğinizi bilmek çok önemli. Doğru zaman hesaplamasıyla çok zaman kazanabilirsiniz. İster görevlerinizi planlıyor olun ister son teslim tarihlerini belirliyor olun, tüm alanlarda iyi performans gösterebilmeniz için doğru zaman dönüşümleri temel olarak çok önemlidir.",
} as const;

export const SEVENTY_TWO_HOURS_FAQS: FAQItem[] = [
  {
    question: "72 saatte kaç gün vardır?",
    answer:
      "Bir gün 24 saate eşit olduğundan, verilen saat sayısını 24 saate bölerek 3 günü bulabiliriz. Dolayısıyla 72 saatte 3 gün vardır. 48 saat ise 2 güne eşittir.",
  },
  {
    question: "Bir günde kaç saat vardır?",
    answer:
      "Bir günde 24 saat vardır ve dünya genelinde hh:mm:ss formatında yazılır. 'Hh' represents hours, while 'mm' represents minutes. Seconds are represented by 'ss'.",
  },
  {
    question: "Bir günde kaç dakika vardır?",
    answer:
      "1 saatte 60 dakika, bir günde ise 24 saat vardır. Dolayısıyla 24 x 60 = 1440. Yani bir günde 1440 dakika vardır. Kısacası, bir saatte 60 dakika varken, bir günde 1440 dakika vardır.",
  },
  {
    question: "Yarım saatte kaç dakika vardır?",
    answer:
      "Bir saat 60 dakikadır. Yarım saat için 60'ı 2'ye bölün (60 / 2 = 30). Dolayısıyla, yarım saatte 30 dakika vardır. Sonuç 30'dur.",
  },
  {
    question: "3 saatte kaç dakika vardır?",
    answer:
      "Bir saatte 60 dakika vardır. Sonucu bulmak için 3'ü 60 dakikayla çarpın. Yani 3 saatte 180 dakika vardır. (3 saat x 60 dakika = 180 dakika)",
  },
  {
    question: "135 dakikada kaç saat vardır?",
    answer:
      "135 dakikada 2,25 saat (veya 2 saat 15 dakika) vardır. 1 saatte 60 dakika olduğu gibi, 60+60+15=135, bu da 2,25 saate eşittir.",
  },
  {
    question: "Bir haftada kaç saat vardır?",
    answer:
      "Hepimizin bildiği gibi, bir günde 24 saat ve bir günde 7 gün vardır. Dolayısıyla, cevabı bulmak için 7'yi 24 ile çarparız, bu da 168 saattir. Bu nedenle, bir haftada veya 7 günde 168 saat vardır.",
  },
  {
    question: "Bir ayda kaç saat vardır?",
    answer:
      "1 gün 24 saate eşittir. Dolayısıyla, ayın gün sayısına bağlıdır, 30 veya 31 olabilir. Ancak formül şöyledir: Saat = Gün x 24. Örneğin: 30 günlük ay: 30 × 24 = 720 hours. 31 günlük ay: 31 × 24 = 744 hours.",
  },
  {
    question: "Saatleri dakikaya nasıl çeviririm?",
    answer:
      "Saatleri dakikaya çevirmek için, saat sayısını 60 ile çarpmanız yeterlidir. Dakika = Saat × 60. Örneğin, 3 saat için şunu yaparız: 3 X 60 = 180 minutes.",
  },
  {
    question: "Dakikaları saate nasıl çeviririm?",
    answer:
      "Dakikaları saate çevirirken, toplam saat sayısını elde etmek için dakikaları 60'a bölün. Çünkü 1 saatte 60 dakika vardır. Dolayısıyla, 60 burada standart bir ölçü birimidir ve dönüştürme faktörü olarak kullanılır.",
  },
  {
    question: "Saati saniyeye nasıl çeviririm?",
    answer:
      "Öncelikle saatleri dakikalara, sonra da dakikaları saniyelere bölün. Bu en kolay yöntemdir. Çünkü bir günde 24 saat vardır. Ama her saatte 60 dakika vardır. Dolayısıyla 3600'ü 24 ile çarptığımızda 86.400 saniye elde ederiz.",
  },
  {
    question: "Günün saatini nasıl değiştiririm?",
    answer:
      "Bir zamanı güne çevirmek veya bir zaman ölçümünü günlere dönüştürmek için, toplam saat sayısını 24'e bölün. Burada 24'e bölmemizin nedeni, bir günde 24 saat olmasıdır. Dolayısıyla, 24 burada standart bir rakam olarak kabul edilir. Günler = Saatler / 24",
  },
];
