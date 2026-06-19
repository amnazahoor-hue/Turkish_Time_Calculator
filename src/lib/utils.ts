import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Capitalizes the first letter of each word in visible headings (Turkish-aware). */
export function capitalizeHeadingWords(text: string): string {
  return text.replace(
    /([^\p{L}]*)(\p{L})/gu,
    (_, prefix, letter) => prefix + letter.toLocaleUpperCase("tr-TR")
  );
}

export function formatTurkishDate(date: Date): string {
  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatTurkishTime(date: Date): string {
  return date.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function downloadTextFile(content: string, filename: string): void {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
