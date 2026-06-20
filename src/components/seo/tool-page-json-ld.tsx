import {
  buildToolPageJsonLdScripts,
  type ToolPageSchemaInput,
} from "@/lib/tool-page-schema";
import { StandaloneJsonLd } from "./standalone-json-ld";

export function ToolPageJsonLd(props: ToolPageSchemaInput) {
  return <StandaloneJsonLd scripts={buildToolPageJsonLdScripts(props)} />;
}
