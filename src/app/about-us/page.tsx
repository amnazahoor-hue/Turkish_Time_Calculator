import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUsPage() {
  redirect("/hakkimizda");
}
