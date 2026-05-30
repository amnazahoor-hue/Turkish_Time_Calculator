import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import JsonLd from "@/components/JsonLd";
import { createLegalMetadata } from "@/lib/legal-metadata";
import { getAboutPageSchema } from "@/lib/schema";
import { aboutSections, aboutFaq } from "@/content/legal/about-us";

export const metadata: Metadata = createLegalMetadata({
  title: "About Us",
  description:
    "About Time Calculator: a free online time calculator for workers, shift staff, students, and managers. Our mission, values, and who we serve.",
  path: "/about-us",
  keywords: ["about us", "time calculator", "work hours calculator", "shift tracking"],
});

export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={getAboutPageSchema()} />
      <LegalPageLayout
        title="About Us"
        description="Time Calculator is a free online platform for workers, shift staff, students, and managers. We provide a fast, reliable, privacy-focused tool for work hours, overnight shifts, and scheduling."
        path="/about-us"
        breadcrumbLabel="About Us"
        sections={aboutSections}
        faq={aboutFaq}
      />
    </>
  );
}
