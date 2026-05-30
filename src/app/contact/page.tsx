import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import LegalFaq from "@/components/LegalFaq";
import { createLegalMetadata } from "@/lib/legal-metadata";
import { getBreadcrumbSchemaForPage, getFAQSchemaFromItems } from "@/lib/schema";

export const metadata: Metadata = createLegalMetadata({
  title: "Contact",
  description:
    "Contact Time Calculator. Use our contact form for questions, feedback, and technical support requests.",
  path: "/contact",
  keywords: ["contact", "support", "feedback", "time calculator"],
});

const contactFaq = [
  {
    question: "How soon will I get a reply?",
    answer:
      "We aim to respond within 2–3 business days. During busy periods, it may take a little longer.",
  },
  {
    question: "I found a bug in the calculator — how do I report it?",
    answer:
      "Use the contact form and include the times you entered, the mode you selected, and the expected vs. actual result. Our team will review it promptly.",
  },
  {
    question: "Do you accept partnership or collaboration offers?",
    answer:
      "Yes. For advertising, content partnerships, or technical collaboration, select \"Partnership\" as the subject and tell us about your proposal.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchemaForPage("Contact", "/contact")} />
      <JsonLd data={getFAQSchemaFromItems(contactFaq)} />

      <article className="section-container section-bg-legal max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-small text-text-secondary">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text-primary font-medium">Contact</li>
          </ol>
        </nav>

        <Link
          href="/"
          className="inline-flex items-center text-body-mobile md:text-body text-primary hover:text-primary-dark transition-colors mb-8"
        >
          &larr; Back to Home
        </Link>

        <header className="mb-10">
          <h1 className="text-hero-mobile md:text-hero mb-4">Contact</h1>
          <p className="prose-content text-body-mobile md:text-body">
            Questions about the time calculator, technical support, bug reports, or partnership
            ideas — use the form below. You can also email us at{" "}
            <a
              href="mailto:info@saathesaplama.com"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              info@saathesaplama.com
            </a>
            .
          </p>
        </header>

        <ContactForm />

        <LegalFaq items={contactFaq} />
      </article>
    </>
  );
}
