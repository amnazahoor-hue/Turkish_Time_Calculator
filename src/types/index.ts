export type CalculatorTab =
  | "fark"
  | "ekle"
  | "cikar"
  | "calisma";

export interface TimeDifferenceResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalHours: number;
  totalMinutes: number;
  formatted: string;
}

export interface DateOperationResult {
  resultDate: Date;
  formatted: string;
}

export interface WorkHoursResult {
  totalMinutes: number;
  hours: number;
  minutes: number;
  formatted: string;
  breakMinutes: number;
}

export interface HoursToDaysResult {
  hours: number;
  days: number;
  wholeDays: number;
  remainingHours: number;
  formatted: string;
}

export type TimeUnit = "minutes" | "hours" | "days" | "weeks";

export interface TimeUnitConversionResult {
  inputValue: number;
  outputValue: number;
  fromUnit: TimeUnit;
  toUnit: TimeUnit;
  formatted: string;
}

export interface CalculatorFormData {
  startDate: string;
  startTime: string;
  endDate?: string;
  endTime?: string;
  hours: number;
  minutes: number;
  breakMinutes?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}
