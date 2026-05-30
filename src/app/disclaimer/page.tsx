import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { createLegalMetadata } from "@/lib/legal-metadata";
import { disclaimerSections, disclaimerFaq } from "@/content/legal/disclaimer";

export const metadata: Metadata = createLegalMetadata({
  title: "Disclaimer",
  description:
    "Time Calculator disclaimer: general limitations, tool use responsibility, third-party links, no professional advice, advertising disclosures, and errors and omissions.",
  path: "/disclaimer",
  keywords: ["disclaimer", "time calculator liability", "legal notice"],
});

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      description="Disclaimer for the Time Calculator website and tool, including liability limits and legal notices. Results are for reference only and are not official documents."
      path="/disclaimer"
      breadcrumbLabel="Disclaimer"
      sections={disclaimerSections}
      faq={disclaimerFaq}
    />
  );
}
