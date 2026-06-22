import type { FAQItem } from "@/types";

export const TIME_DIFFERENCE_STEPS = [
  {
    description:
      "Tüm alanlara (gün, saat, dakika ve saniye) değer girin.",
  },
  {
    description: "İşlemi seçin (toplama veya çıkarma).",
  },
  {
    description: "İkinci tarih ve saati de aynı biçimde girin.",
  },
  {
    description: 'Ardından "Hesapla" düğmesine basın.',
  },
  {
    description: "Sonuç ekranda görünecektir.",
  },
  {
    description: "Ekranınızda saat farkı gösterilmektedir.",
  },
] as const;

export const TIME_DIFFERENCE_INTRO =
  "Aşağıda bu zaman hesap makinesini kullanmak için bazı kolay adımlar bulunmaktadır:";

export const TIME_DIFFERENCE_OUTRO =
  "Bu saat hesaplayıcı basit ve kullanımı kolaydır ve görevlerinizi zamanınıza en uygun şekilde planlamanıza ve yönetmenize yardımcı olur. Bu dönüştürücü ile zaman kaybetmeden görevlerinizi verimli bir şekilde planlayabilirsiniz.";

export const TIME_DIFFERENCE_HOURLY_NOTE =
  "Çalışma saatlerinize göre kazancınızı öğrenmek isterseniz, saat ücreti hesaplama aracımızı kullanabilirsiniz.";

export const ADD_SUBTRACT_INTRO =
  "Bu hesap makinesi, ihtiyaçlarınıza göre zaman girişlerini toplamanıza veya çıkarmanıza olanak tanır. Başlangıç tarihini ve saatini giriş alanlarına girmeniz yeterlidir. Toplama veya çıkarma seçeneklerinden birini seçin; ardından yeni tarih ve saati elde edeceksiniz.";

export const MANUAL_ADD_OVERLAP = {
  title: "Saat Manuel Olarak Nasıl Eklerim?",
  intro:
    "Zamanı manuel olarak eklemek, çevrimiçi bir zaman hesap makinesi kullanmadan saat ve dakikaları hesaplamak anlamına gelir. Hesaplamaları kendiniz yapıyorsunuz. Orijinal zamana göre gerekli saatleri ekleyin. Ardından dakikaları ekleyin. Toplam dakika bir saatten fazla ise, her 60 dakikayı bir saate çevirin ve saat toplamına ekleyin.",
  exampleRows: [
    { label: "Başlangıç Saati", value: "14:45" },
    { label: "Eklenen Süre", value: "3 saat 30 dakika" },
    { label: "Sonuç", value: "18:15" },
  ],
  outro:
    "Zamanı manuel olarak eklerken, 60 dakikayı 1 saate çevirin. Dönüştürme yaparken, her zaman AM ve PM dönüşümlerini kontrol edin. Gece yarısı için, saatleri bir sonraki güne kadar saymaya devam edin.",
} as const;

export const MANUAL_SUBTRACT_EXAMPLE = {
  first: "18:15",
  subtract: "2 saat 30 dakika",
  result: "15:45",
};

export const MANUAL_SUBTRACT_OVERLAP = {
  title: "Saat Hesaplama Manuel Olarak Nasıl Yapılır?",
  intro:
    "Saat ve dakika dönüşümlerini anladığınızda, çıkarma işlemlerini kolayca manuel olarak yapabilirsiniz. Artık herhangi bir hesap makinesine bağımlı kalmanıza gerek yok. Sadece başlangıç saatini alın ve dakikaları çıkarın. Sonra saatleri çıkarın. Çıkarılacak dakika kalmadıysa, saat değerinden bir saat ödünç alın.",
  exampleRows: [
    { label: "Başlangıç Saati", value: "18:15" },
    { label: "Çıkarma", value: "2 saat 30 dakika" },
    { label: "Sonuç", value: "15:45." },
  ],
  remindersTitle: "Hatırlanması Gereken Noktalar:",
  reminders: [
    "Gerektiğinde 1 saati 60 dakika olarak ödünç alın.",
    "Dönüştürme yaparken AM/PM değişikliklerini kontrol edin.",
  ],
} as const;

export const MANUAL_SUBTRACT_TIPS = [
  "Gerektiğinde 1 saati 60 dakika olarak ödünç alın.",
  "Dönüşüm yaparken AM/PM değişikliklerini kontrol edin.",
] as const;

export const CALCULATOR_FEATURES = [
  {
    title: "Çok Günlü Hesaplama",
    description:
      "Günler, aylar veya yıllar arasında tarih ve saat hesaplamaları yapın.",
    icon: "CalendarRange",
  },
  {
    title: "Tüm Formatlar",
    description: "Tüm tarih ve saat formatları kabul edilir.",
    icon: "FileClock",
  },
  {
    title: "Saat Dilimi Desteği",
    description:
      "Uluslararası toplantılar için saat dilimi ayarları yapın.",
    icon: "Globe",
  },
] as const;

export const CALCULATOR_USES = [
  { title: "Çalışma Süresi Hesaplama", icon: "Briefcase" },
  { title: "Proje Süresi Takibi", icon: "FolderKanban" },
  { title: "Toplantı ve Etkinlik Planlama", icon: "CalendarDays" },
  { title: "Geçen Süreyi Belirleme", icon: "Hourglass" },
  { title: "Çalışma ve Eğitim Saatleri", icon: "GraduationCap" },
] as const;

export const TOOL_USES_SECTION = {
  title: "Saat Hesaplama Aracının Kullanım Alanları",
  intro:
    "Saat hesaplama makinesi, size birden fazla işlev sunan ücretsiz bir araçtır. En yaygın kullanım alanlarından bazıları şunlardır:",
  items: [
    {
      title: "Çalışma Süresini Hesapla",
      description:
        "Giriş ve çıkış saatlerinden günlük mesai, vardiya ve fazla mesai süresini saniyeler içinde hesaplayın.",
    },
    {
      title: "Proje Süresini Takip Edin",
      description:
        "Proje başlangıç ve bitiş zamanlarını kaydederek ekip performansını net biçimde ölçün.",
    },
    {
      title: "Toplantı ve Etkinlikleri Planlayın",
      description:
        "Toplantı saatlerini ve etkinlik aralıklarını kolayca planlayın, çakışmaları önleyin.",
    },
    {
      title: "Geçen Süreyi Belirleyin",
      description:
        "İki tarih veya saat arasında ne kadar zaman geçtiğini gün, saat ve dakika olarak görün.",
    },
    {
      title: "Çalışma ve Eğitim Saatlerini Hesaplayın",
      description:
        "Öğrenciler ve eğitmenler için ders, staj ve çalışma sürelerini düzenli takip edin.",
    },
    {
      title: "Fazla Mesai ve Vardiya Saatlerini Hesapla",
      description:
        "Gece vardiyası, hafta sonu mesaisi ve fazla çalışma sürelerini giriş-çıkış saatlerine göre hesaplayın.",
    },
  ],
} as const;

export const CALCULATOR_BENEFITS = [
  {
    title: "Zaman Kazandırır",
    description:
      "Bu hesap makinesi karmaşık zaman hesaplamalarını gerçekleştirir ve enerjinizden ve zamanınızdan tasarruf etmenizi sağlar.",
    icon: "Zap",
  },
  {
    title: "Daha Fazla Hassasiyet",
    description:
      "Bu dönüştürücü doğru cevaplar verir ve karmaşık görevler için bile ona tamamen güvenebilirsiniz.",
    icon: "Target",
  },
  {
    title: "Çalışma Saatleri Planlaması",
    description:
      "Çeşitli görevleri planlayarak ve tüm son teslim tarihlerine zamanında uyarak düzgün bir şekilde yönetin. Her görevde verimli bir şekilde iyi sonuçlar elde edin.",
    icon: "Clock",
  },
  {
    title: "Çoklu Görev Yapmaya Yardımcı Olur",
    description:
      "Toplantıları, etkinlikleri ve son teslim tarihlerini daha etkili bir şekilde planlayın.",
    icon: "Layers",
  },
  {
    title: "Faturaları Ödemede Faydalı",
    description:
      "Bu, maaş bordrosu işlemleri ve proje faturalandırması için çok yardımcı olur ve zamandan ve enerjiden tasarruf etmenizi sağlar.",
    icon: "Receipt",
  },
] as const;

export const TOOL_BENEFITS_SECTION = {
  title: "Saat Hesaplama Aracının Faydaları",
  intro:
    "Zaman hesap makinesi, zaman hesaplamalarını kolaylaştırır ve zaman çizelgelerini daha verimli yönetmenize yardımcı olur. Zaman hesap makinesinin birçok avantajı vardır.",
} as const;

export const TOOL_SOLUTION_SECTION = {
  title: "Çözüm",
  content:
    "Bu Saat Hesaplama toplama veya çıkarma işlemlerinde doğru sonuçlarla zaman hesaplamalarını hızlı bir şekilde yapmanızı sağlar. İster zaman farkı hesaplayıcısına, ister zaman toplama hesaplayıcısına ihtiyacınız olsun, tüm işlemler dönüştürme aracımızla kolayca gerçekleştirilebilir. Bu hesaplayıcı ile çalışma saatlerinizi bulabilir ve hangi görevin ne kadar zaman aldığını göstererek ilerlemenizi zamanında takip edebilirsiniz. Doğru zaman yönetimiyle her alanda başarılı olabilirsiniz.",
} as const;

export const TOOL_FAQ_SECTION = {
  title: "Sık Sorulan Sorular",
} as const;

export const CALCULATOR_FAQS: FAQItem[] = [
  {
    question: "Görevleri verimli bir şekilde nasıl yönetebilirim?",
    answer:
      "Saat Hesaplama , başlangıç ​​zamanına saat, dakika ve süre ekleyerek veya çıkararak birden fazla görevi planlamanıza yardımcı olur. Bu hesaplama, hesaplama aracımız kullanılarak da yapılabilir.",
  },
  {
    question: "Saat Farkı Hesaplama  Nasıl Yapılır?",
    answer:
      "Saat Hesaplama işleminde  iki zaman değerini birbirinden çıkarırız. Bu işlem, doğru zamanı belirlemeye yardımcı olur.",
  },
  {
    question: "Geçen saat sayısını nasıl hesaplayabiliriz?",
    answer:
      "İki zaman arasındaki farkı alın; geçen zamanı bulabilirsiniz. Biri başlangıç ​​veya orijinal zaman, diğeri ise son zamandır. Başlangıç ​​zamanını bitiş zamanından çıkarmanız yeterlidir.",
  },
  {
    question:
      "Kaçış zamanının gelip gelmediğini 20 saat öncesinden nasıl öğrenebilirim?",
    answer:
      "Şu anki zamandan 20 saat çıkararak 20 saat önceki zamanı bulabilirsiniz. Bu, birkaç saat önceki zamanı hesaplamanın en kolay ve basit yoludur.",
  },
  {
    question: "X saat sonra saat kaç olacak?",
    answer:
      "X saat sonra saatin kaç olacağını bulmak için, istediğiniz saat sayısını mevcut saate ekleyin. Cevabınızı alacaksınız.",
  },
  {
    question: "Gece Aralıklarında Saat Farkı Hesaplama Nasıl Yapılır?",
    answer:
      "Saat Hesaplama Aracı gece boyunca çalışmaya devam ederse, bunu bir sonraki güne dahil edin. Örneğin, saat 23:00'e 3 saat eklemek, ertesi gün saat 02:00'i verir.",
  },
  {
    question: "Sabah 8 ile akşam 6 arasında kaç çalışma saati vardır?",
    answer:
      "Bu belirli saatleri bulmak için, 18:00'den 08:00'ı çıkarın. Sonuç 10 saattir. Bu bilgiden iş saatleriniz için de bir fikir edinebilirsiniz.",
  },
  {
    question: "Çalışma saatlerini bulma yöntemi nedir?",
    answer:
      "Çalışma saatlerinizi tam olarak belirlemek için başlangıç saatini bitiş saatinden çıkarın. Bu,  saat farkı hesaplama bulmanın en iyi ve en kolay yöntemidir.",
  },
  {
    question: "Excel'de saat farkı nasıl bulunur?",
    answer:
      "Excel'de saat farkını hesaplamak için, başlangıç ve bitiş saatlerini ilgili hücrelere girin. Ardından, başlangıç saatinden bitiş saatini çıkarın. Bu saat farkı Excel formülü, genellikle maaş ve bordro hesaplamalarında kullanılır.",
  },
  {
    question: "24 saatlik ve 12 saatlik formatların amacı nedir?",
    answer:
      "Temelde, 24 saatlik format sabah ve akşam saatleri arasındaki karışıklığı önlemek için kullanılırken, 12 saatlik format günlük işler için kullanılır.",
  },
  {
    question: "İki tarih arasındaki zaman farkını nasıl ölçebilirim?",
    answer:
      "Bu saat farkı hesaplaması, daha önceki tarih ve saatten daha sonraki tarih ve saatin çıkarılmasıyla yapılır.",
  },
  {
    question: "Toplam çalışma saatleri nasıl ölçülür?",
    answer:
      "Öncelikle toplam vardiya saatlerinizi öğrenin, ardından mola sürelerini bundan çıkarın. Kalan saatler çalışma saatleriniz olacaktır.",
  },
];
