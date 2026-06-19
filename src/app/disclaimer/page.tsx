import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Disclaimer",
};

export default function DisclaimerPage() {
  redirect("/sorumluluk-reddi");
}
