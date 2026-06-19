import { jsPDF } from "jspdf";
import {
  SITE_NAME,
  SITE_URL,
  SITE_LOGO,
  OG_IMAGE,
  SITE_DESCRIPTION,
} from "@/lib/constants";
import { formatTurkishDate, formatTurkishTime } from "@/lib/utils";

export interface CalculatorExportPayload {
  toolTitle: string;
  toolPath: string;
  resultText: string;
  inputsSummary?: string;
  calculatedAt?: Date;
}

const NAVY_RGB: [number, number, number] = [0, 43, 91];
const ACCENT_RGB: [number, number, number] = [211, 84, 0];
const MUTED_RGB: [number, number, number] = [80, 90, 105];

function getAbsoluteUrl(path: string): string {
  if (typeof window !== "undefined") {
    return `${window.location.origin}${path}`;
  }
  return `${SITE_URL}${path}`;
}

function getToolUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

async function loadImageAsDataUrl(path: string): Promise<string | null> {
  try {
    const response = await fetch(getAbsoluteUrl(path));
    if (!response.ok) return null;
    const blob = await response.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

async function loadImageForPdf(
  path: string
): Promise<{ data: string; format: "PNG" | "JPEG" } | null> {
  const dataUrl = await loadImageAsDataUrl(path);
  if (!dataUrl) return null;

  if (dataUrl.includes("image/webp") && typeof document !== "undefined") {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(null);
          return;
        }
        ctx.drawImage(img, 0, 0);
        resolve({ data: canvas.toDataURL("image/png"), format: "PNG" });
      };
      img.onerror = () => resolve(null);
      img.src = dataUrl;
    });
  }

  const format: "PNG" | "JPEG" = dataUrl.includes("image/png") ? "PNG" : "JPEG";
  return { data: dataUrl, format };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
}

export function buildCalculatorShareMessage(payload: CalculatorExportPayload): string {
  const toolUrl = getToolUrl(payload.toolPath);
  const ogUrl = getToolUrl(OG_IMAGE);
  const when = payload.calculatedAt ?? new Date();
  const dateLine = `${formatTurkishDate(when)} ${formatTurkishTime(when)}`;

  const lines = [
    `*${SITE_NAME}*`,
    `*${payload.toolTitle}*`,
    "",
    "📊 *Sonuç:*",
    payload.resultText,
  ];

  if (payload.inputsSummary?.trim()) {
    lines.push("", "📝 *Girdiler:*", payload.inputsSummary.trim());
  }

  lines.push(
    "",
    `🔗 ${toolUrl}`,
    `🖼️ ${ogUrl}`,
    "",
    `⏱ ${dateLine}`,
    "",
    SITE_DESCRIPTION
  );

  return lines.join("\n");
}

export function shareCalculatorWhatsApp(payload: CalculatorExportPayload): void {
  const text = encodeURIComponent(buildCalculatorShareMessage(payload));
  window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
}

export function openCalculatorEmail(payload: CalculatorExportPayload): void {
  const subject = encodeURIComponent(`${SITE_NAME} — ${payload.toolTitle} Sonucu`);
  const body = encodeURIComponent(buildCalculatorShareMessage(payload));
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

export async function downloadCalculatorPdf(
  payload: CalculatorExportPayload
): Promise<void> {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  const when = payload.calculatedAt ?? new Date();
  const toolUrl = getToolUrl(payload.toolPath);

  doc.setFillColor(...ACCENT_RGB);
  doc.rect(0, 0, pageWidth, 8, "F");

  const logoImage = await loadImageForPdf(SITE_LOGO);
  let y = 16;

  if (logoImage) {
    doc.addImage(logoImage.data, logoImage.format, margin, y, 18, 18);
  }

  doc.setTextColor(...NAVY_RGB);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(SITE_NAME, margin + (logoImage ? 22 : 0), y + 7);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...MUTED_RGB);
  doc.text(toolUrl, margin + (logoImage ? 22 : 0), y + 13);

  y += 26;

  doc.setDrawColor(...ACCENT_RGB);
  doc.setLineWidth(0.8);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  doc.setTextColor(...NAVY_RGB);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text(payload.toolTitle, margin, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...MUTED_RGB);
  doc.text(
    `Oluşturulma: ${formatTurkishDate(when)} ${formatTurkishTime(when)}`,
    margin,
    y
  );
  y += 10;

  if (payload.inputsSummary?.trim()) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...NAVY_RGB);
    doc.text("Hesaplama Girdileri", margin, y);
    y += 6;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(51, 51, 51);
    const inputLines = doc.splitTextToSize(payload.inputsSummary.trim(), contentWidth);
    doc.text(inputLines, margin, y);
    y += inputLines.length * 5 + 6;
  }

  doc.setFillColor(255, 245, 235);
  doc.setDrawColor(...ACCENT_RGB);
  doc.roundedRect(margin, y, contentWidth, 34, 3, 3, "FD");
  y += 8;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...ACCENT_RGB);
  doc.text("SONUÇ", margin + 4, y);
  y += 7;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(...NAVY_RGB);
  const resultLines = doc.splitTextToSize(payload.resultText, contentWidth - 8);
  doc.text(resultLines, margin + 4, y);
  y += resultLines.length * 6 + 12;

  const footerY = pageHeight - 42;
  doc.setFillColor(245, 247, 250);
  doc.setDrawColor(220, 226, 235);
  doc.roundedRect(margin, footerY, contentWidth, 30, 2, 2, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...NAVY_RGB);
  doc.text(`${SITE_NAME} — Resmi Hesaplama Belgesi`, margin + 4, footerY + 7);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...MUTED_RGB);
  const footerText = [
    SITE_DESCRIPTION,
    "Bu belge bilgilendirme amaçlıdır; resmi bordro, hukuki süre veya mali danışmanlık yerine geçmez.",
    `Araç bağlantısı: ${toolUrl} | İletişim: ${SITE_URL}/iletisim`,
  ].join(" ");
  const footerLines = doc.splitTextToSize(footerText, contentWidth - 8);
  doc.text(footerLines, margin + 4, footerY + 13);

  const filename = `${slugify(payload.toolTitle) || "saat-hesaplama"}-sonuc.pdf`;
  doc.save(filename);
}

export async function exportCalculatorEmailWithPdf(
  payload: CalculatorExportPayload
): Promise<void> {
  await downloadCalculatorPdf(payload);
  openCalculatorEmail(payload);
}

export const CALCULATOR_TAB_EXPORT_META: Record<
  string,
  { toolTitle: string; toolPath: string; fileSlug: string }
> = {
  fark: {
    toolTitle: "Saat Farkı Hesaplama",
    toolPath: "/saat-farki-hesaplama",
    fileSlug: "saat-farki",
  },
  ekle: {
    toolTitle: "Saat Ekleme",
    toolPath: "/saat-ekleme",
    fileSlug: "saat-ekleme",
  },
  cikar: {
    toolTitle: "Saat Çıkarma",
    toolPath: "/saat-cikarma",
    fileSlug: "saat-cikarma",
  },
  calisma: {
    toolTitle: "Çalışma Saati Hesaplama",
    toolPath: "/calisma-saati-hesaplama",
    fileSlug: "calisma-saati",
  },
};
