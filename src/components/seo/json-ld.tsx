import { toSchemaGraph } from "@/lib/seo";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

function normalizeSchemaPayload(
  data: Record<string, unknown> | Record<string, unknown>[]
): Record<string, unknown> {
  if (Array.isArray(data)) {
    return toSchemaGraph(data);
  }
  return data;
}

export function JsonLd({ data }: JsonLdProps) {
  const payload = normalizeSchemaPayload(data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
