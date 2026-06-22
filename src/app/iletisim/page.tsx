import type { Metadata } from "next";
import { PageTransition, FadeUp } from "@/components/motion";
import { ContactForm, ContactInfo } from "@/components/iletisim/contact-form";
import { generateIndexablePageMetadata } from "@/lib/seo";
import { capitalizeHeadingWords } from "@/lib/utils";
import { LegalPageSidebar } from "@/components/legal/legal-hub-layout";

const PAGE = {
  title: "Bize Ulaşın",
  description:
    "Saat Hesaplama ekibine ulaşın. Sorularınız, önerileriniz ve geri bildirimleriniz için bize yazın.",
  path: "/iletisim",
} as const;

export const metadata: Metadata = generateIndexablePageMetadata({
  title: PAGE.title,
  description: PAGE.description,
  path: PAGE.path,
});

export default function IletisimPage() {
  return (
    <PageTransition>
      <article className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <FadeUp>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-navy-100 bg-gradient-to-br from-navy via-navy-600 to-navy-700 px-6 py-10 text-white sm:rounded-[2rem] sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/25 blur-3xl" />
              <h1 className="text-2xl font-black sm:text-3xl md:text-4xl">Bize Ulaşın</h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                Saat hesaplama aracı, içerik veya yasal metinler hakkında sorularınız için bize
                yazın. En kısa sürede dönüş yapıyoruz.
              </p>
            </div>
          </FadeUp>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <div>
                <FadeUp delay={0.05}>
                  <h2 className="text-xl font-bold text-navy sm:text-2xl">{capitalizeHeadingWords("Bize Yazın")}</h2>
                  <p className="mt-2 text-sm text-muted">
                    Formu doldurarak araç, hata bildirimi veya öneri gönderebilirsiniz.
                  </p>
                </FadeUp>
                <div className="mt-5 rounded-2xl border border-navy-100 bg-white p-4 shadow-sm sm:mt-6 sm:p-6">
                  <ContactForm />
                </div>
              </div>
              <div>
                <FadeUp delay={0.1}>
                  <h2 className="text-xl font-bold text-navy sm:text-2xl">{capitalizeHeadingWords("Ulaşım Bilgileri")}</h2>
                </FadeUp>
                <div className="mt-5 sm:mt-6">
                  <ContactInfo />
                </div>
              </div>
            </div>

            <LegalPageSidebar />
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
