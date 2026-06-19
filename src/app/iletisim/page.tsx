import type { Metadata } from "next";
import { PageTransition, FadeUp } from "@/components/motion";
import { ContactForm, ContactInfo, MapPlaceholder } from "@/components/contact/contact-form";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "İletişim",
  description:
    "Saat Hesaplama ekibi ile iletişime geçin. Sorularınız, önerileriniz ve geri bildirimleriniz için bize ulaşın.",
  path: "/iletisim",
});

export default function IletisimPage() {
  return (
    <PageTransition>
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Ana Sayfa", url: "/" },
          { name: "İletişim", url: "/iletisim" },
        ])}
      />

      <section className="pt-24 pb-8 md:pt-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <FadeUp>
            <h1 className="text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
              İletişim
            </h1>
            <p className="mt-3 text-sm text-muted sm:mt-4 sm:text-base md:text-lg">
              Sorularınız, önerileriniz veya geri bildirimleriniz için bize
              ulaşın. En kısa sürede size dönüş yapacağız.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <FadeUp>
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                  Bize Yazın
                </h2>
                <p className="mt-2 text-muted">
                  Formu doldurarak bizimle iletişime geçebilirsiniz.
                </p>
              </FadeUp>
              <div className="mt-5 rounded-xl border border-border/60 bg-white p-4 sm:mt-6 sm:rounded-2xl sm:p-5 md:p-6">
                <ContactForm />
              </div>
            </div>
            <div>
              <FadeUp>
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                  İletişim Bilgileri
                </h2>
              </FadeUp>
              <div className="mt-5 sm:mt-6">
                <ContactInfo />
              </div>
              <div className="mt-5 sm:mt-6">
                <MapPlaceholder />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
