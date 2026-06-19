import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SEVENTY_TWO_HOURS_PAGE } from "@/lib/seventy-two-hours-content";

export const metadata: Metadata = {
  title: SEVENTY_TWO_HOURS_PAGE.title,
};

export default function YetmisIkiSaatKacGundurRedirectPage() {
  redirect(SEVENTY_TWO_HOURS_PAGE.path);
}
