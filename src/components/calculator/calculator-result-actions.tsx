"use client";

import { useState } from "react";
import { Check, Copy, Download, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/utils";
import {
  type CalculatorExportPayload,
  shareCalculatorWhatsApp,
  downloadCalculatorPdf,
  exportCalculatorEmailWithPdf,
  buildCalculatorShareMessage,
} from "@/lib/calculator-export";

interface CalculatorResultActionsProps {
  payload: CalculatorExportPayload;
  className?: string;
}

export function CalculatorResultActions({
  payload,
  className = "",
}: CalculatorResultActionsProps) {
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState<"pdf" | "email" | null>(null);

  const handleCopy = async () => {
    await copyToClipboard(buildCalculatorShareMessage(payload));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    shareCalculatorWhatsApp(payload);
  };

  const handlePdf = async () => {
    setBusy("pdf");
    try {
      await downloadCalculatorPdf(payload);
    } finally {
      setBusy(null);
    }
  };

  const handleEmail = async () => {
    setBusy("email");
    try {
      await exportCalculatorEmailWithPdf(payload);
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className={`flex flex-wrap gap-2 sm:gap-3 ${className}`}>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={handleCopy}
        className="border-navy-200 bg-white text-foreground hover:border-navy-300 hover:bg-navy-50"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        {copied ? "Kopyalandı" : "Kopyala"}
      </Button>

      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={handleWhatsApp}
        className="border-green-200 bg-white text-green-700 hover:border-green-300 hover:bg-green-50"
      >
        <FaWhatsapp className="h-4 w-4" />
        WhatsApp
      </Button>

      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={handlePdf}
        disabled={busy === "pdf"}
        className="border-navy-200 bg-white text-foreground hover:border-navy-300 hover:bg-navy-50"
      >
        <Download className="h-4 w-4" />
        {busy === "pdf" ? "PDF..." : "PDF İndir"}
      </Button>

      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={handleEmail}
        disabled={busy === "email"}
        className="border-navy-200 bg-white text-foreground hover:border-navy-300 hover:bg-navy-50"
      >
        <Mail className="h-4 w-4" />
        {busy === "email" ? "E-posta..." : "E-posta Gönder"}
      </Button>
    </div>
  );
}
