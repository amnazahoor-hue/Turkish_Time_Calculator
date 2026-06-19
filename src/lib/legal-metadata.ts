import type { Metadata } from "next";
import { generateLegalPageMetadata } from "@/lib/seo";

interface LegalMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function createLegalMetadata(options: LegalMetadataOptions): Metadata {
  return generateLegalPageMetadata(options);
}

export const LEGAL_LAST_UPDATED = "May 2026";
