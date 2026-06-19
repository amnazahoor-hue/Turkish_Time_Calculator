export const HOURS_DAYS_TABLE_SECTION = {
  title: "Saat-Gün Dönüştürme Tablosu",
  intro:
    "Bu tablo sayesinde saatlerden gün sayısını kolayca hesaplayabilirsiniz. Bu, matematiksel hatalardan kaçınmanızı ve zamandan tasarruf etmenizi sağlar.",
  formulaTitle: "Dönüşüm Formülü",
  formulaIntro: "Saatleri günlere çevirmek için, saat sayısını 24'e bölün:",
  formula: "Günler = Saat ÷ 24",
  formulaExamples: [
    "72 saat ÷ 24 = 3 günler",
    "120 saat ÷ 24 = 5 günler",
    "168 saat ÷ 24 = 7 günler",
  ],
  formulaOutro:
    "Bu formül, saat ile gün arasındaki her türlü dönüşüm için geçerlidir.",
} as const;

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function toFraction(hours: number): string {
  if (hours === 0) return "0";
  const divisor = gcd(hours, 24);
  const numerator = hours / divisor;
  const denominator = 24 / divisor;
  if (denominator === 1) return `${numerator}`;
  return `${numerator}/${denominator}`;
}

function toDecimal(hours: number): string {
  const value = hours / 24;
  if (Number.isInteger(value)) return value.toString();
  return parseFloat(value.toFixed(5)).toString();
}

export const HOURS_TO_DAYS_TABLE_ROWS = Array.from({ length: 73 }, (_, hours) => ({
  hours,
  fraction: toFraction(hours),
  decimal: toDecimal(hours),
}));
