import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LegalFaq from "@/components/LegalFaq";
import { LEGAL_LAST_UPDATED } from "@/lib/legal-metadata";
import {
  getBreadcrumbSchemaForPage,
  getFAQSchemaFromItems,
  type LegalFaqItem,
} from "@/lib/schema";

export interface LegalSection {
  id: string;
  title: string;
  level: 2 | 3;
  paragraphs: string[];
}

interface LegalPageLayoutProps {
  title: string;
  description: string;
  path: string;
  breadcrumbLabel: string;
  sections: LegalSection[];
  faq?: LegalFaqItem[];
  children?: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  description,
  path,
  breadcrumbLabel,
  sections,
  faq,
  children,
}: LegalPageLayoutProps) {
  const HeadingTag = ({ level, id, children: heading }: { level: 2 | 3; id: string; children: React.ReactNode }) => {
    if (level === 3) {
      return (
        <h3 id={id} className="text-card-mobile md:text-card text-text-primary mb-3 mt-6">
          {heading}
        </h3>
      );
    }
    return (
      <h2 id={id} className="text-section-mobile md:text-section text-text-primary mb-4 mt-10 first:mt-0">
        {heading}
      </h2>
    );
  };

  return (
    <>
      <JsonLd data={getBreadcrumbSchemaForPage(breadcrumbLabel, path)} />
      {faq && faq.length > 0 && <JsonLd data={getFAQSchemaFromItems(faq)} />}

      <article className="section-container section-bg-legal max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-small text-text-secondary">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text-primary font-medium">{breadcrumbLabel}</li>
          </ol>
        </nav>

        <Link
          href="/"
          className="inline-flex items-center text-body-mobile md:text-body text-primary hover:text-primary-dark transition-colors mb-8"
        >
          &larr; Back to Home
        </Link>

        <header className="mb-10">
          <h1 className="text-hero-mobile md:text-hero mb-4">{title}</h1>
          <p className="prose-content text-body-mobile md:text-body mb-3">{description}</p>
          <p className="text-small text-text-secondary">
            Last Updated: {LEGAL_LAST_UPDATED}
          </p>
        </header>

        <div className="space-y-4 text-body-mobile md:text-body text-text-secondary leading-relaxed">
          {sections.map((section) => (
            <section key={section.id} aria-labelledby={section.id}>
              <HeadingTag level={section.level} id={section.id}>
                {section.title}
              </HeadingTag>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          {children}
        </div>

        {faq && faq.length > 0 && <LegalFaq items={faq} />}
      </article>
    </>
  );
}
