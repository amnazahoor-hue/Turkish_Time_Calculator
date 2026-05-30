import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { createLegalMetadata } from "@/lib/legal-metadata";
import { termsSections, termsFaq } from "@/content/legal/terms-and-conditions";

export const metadata: Metadata = createLegalMetadata({
  title: "Terms of Use",
  description:
    "Time Calculator terms of use: lawful use, intellectual property, tool terms, disclaimer of warranties, limitation of liability, and governing law.",
  path: "/terms-and-conditions",
  keywords: ["terms of use", "terms and conditions", "time calculator rules"],
});

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Use"
      description="By using the Time Calculator website and tool, you agree to these terms. This page covers lawful use, intellectual property, warranties, and liability limits."
      path="/terms-and-conditions"
      breadcrumbLabel="Terms of Use"
      sections={termsSections}
      faq={termsFaq}
    />
  );
}
