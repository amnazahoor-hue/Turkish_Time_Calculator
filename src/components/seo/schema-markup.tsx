import { JsonLd } from "./json-ld";

interface SchemaProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function SchemaMarkup({ data }: SchemaProps) {
  return <JsonLd data={data} />;
}

export { JsonLd };
