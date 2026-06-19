import {
  buildToolPageJsonLdScripts,
  type ToolPageSchemaInput,
} from "@/lib/tool-page-schema";

const ORDER = [
  "Organization",
  "Person",
  "WebPage",
  "BreadcrumbList",
  "WebApplication",
  "FAQPage",
] as const;

export function ToolPageJsonLd(props: ToolPageSchemaInput) {
  const scripts = buildToolPageJsonLdScripts(props);
  const ordered = ORDER.map((type) =>
    scripts.find((s) => s["@type"] === type)
  ).filter(Boolean) as Record<string, unknown>[];

  return (
    <>
      {ordered.map((schema) => (
        <script
          key={String(schema["@id"] ?? schema["@type"])}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
