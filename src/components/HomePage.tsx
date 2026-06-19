import Hero from "@/components/sections/Hero";
import ToolSection from "@/components/sections/ToolSection";
import HowToUse from "@/components/sections/HowToUse";
import ToolDetailCards from "@/components/sections/ToolDetailCards";
import FAQ from "@/components/sections/FAQ";

/**
 * Full homepage section scaffold (Sections 2–6).
 * Header (§1) and Footer (§7) are rendered in root layout.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ToolSection />
      <HowToUse />
      <ToolDetailCards />
      <FAQ />
    </>
  );
}
