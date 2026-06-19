import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

export default function TermsPage() {
  redirect("/kullanim-kosullari");
}
