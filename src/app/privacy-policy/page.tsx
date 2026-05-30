import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { createLegalMetadata } from "@/lib/legal-metadata";
import { privacySections, privacyFaq } from "@/content/legal/privacy-policy";

export const metadata: Metadata = createLegalMetadata({
  title: "Privacy Policy",
  description:
    "Time Calculator privacy policy: data collection, cookies, Google Analytics, Microsoft Clarity, privacy rights, and data security.",
  path: "/privacy-policy",
  keywords: ["privacy policy", "cookie policy", "data security", "time calculator"],
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="How Time Calculator handles your data. Time calculations run in your browser and are not stored on our servers. Learn about cookies, analytics, and your privacy rights."
      path="/privacy-policy"
      breadcrumbLabel="Privacy Policy"
      sections={privacySections}
      faq={privacyFaq}
    />
  );
}
