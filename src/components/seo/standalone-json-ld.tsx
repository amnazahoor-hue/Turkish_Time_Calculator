const SCHEMA_ORDER = [
  "Organization",
  "WebPage",
  "WebApplication",
  "ProfilePage",
  "Person",
  "BreadcrumbList",
  "FAQPage",
] as const;

function serializeJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

function sortSchemas(scripts: Record<string, unknown>[]) {
  return [...scripts].sort((a, b) => {
    const aIndex = SCHEMA_ORDER.indexOf(a["@type"] as (typeof SCHEMA_ORDER)[number]);
    const bIndex = SCHEMA_ORDER.indexOf(b["@type"] as (typeof SCHEMA_ORDER)[number]);
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  });
}

interface StandaloneJsonLdProps {
  scripts: Record<string, unknown>[];
}

/** Renders one JSON-LD script per schema type — no @graph, no @id links between types. */
export function StandaloneJsonLd({ scripts }: StandaloneJsonLdProps) {
  const ordered = sortSchemas(scripts);

  return (
    <>
      {ordered.map((schema) => (
        <script
          key={String(schema["@type"])}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
    </>
  );
}
