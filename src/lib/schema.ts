import { siteConfig, faqItems } from "@/lib/site-config";

export interface LegalFaqItem {
  question: string;
  answer: string;
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: `${siteConfig.url}/branding/logo-icon.webp`,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: `${siteConfig.url}/contact`,
      availableLanguage: "English",
    },
  };
}

export function getWebApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    inLanguage: "en",
  };
}

export function getFAQSchema(items: LegalFaqItem[] = faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };
}

export function getBreadcrumbSchemaForPage(pageName: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: `${siteConfig.url}${path}`,
      },
    ],
  };
}

export function getFAQSchemaFromItems(items: LegalFaqItem[]) {
  return getFAQSchema(items);
}

export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About — ${siteConfig.name}`,
    url: `${siteConfig.url}/about-us`,
    description:
      "Time Calculator is a free online tool for workers, shift staff, and managers to calculate time differences and durations.",
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };
}
