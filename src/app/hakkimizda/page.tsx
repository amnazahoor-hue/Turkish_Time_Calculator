import type { Metadata } from "next";
import { LazyImage } from "@/components/ui/lazy-image";
import Link from "next/link";
import { Target, Eye, Heart, Award, TrendingUp, ArrowRight } from "lucide-react";
import { PageTransition, FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generateIndexablePageMetadata, buildPageSchemas } from "@/lib/seo";
import { TRUST_STATS, SITE_NAME } from "@/lib/constants";
import { LegalPageSidebar } from "@/components/legal/legal-hub-layout";
import { AUTHOR } from "@/lib/legal-pages-config";

const PAGE = {
  title: "Hakkımızda",
  description:
    "Saat Hesaplama platformu hakkında bilgi edinin. Misyonumuz, vizyonumuz ve değerlerimizi keşfedin.",
  path: "/hakkimizda",
} as const;

export const metadata: Metadata = generateIndexablePageMetadata({
  title: PAGE.title,
  description: PAGE.description,
  path: PAGE.path,
});

const values = [
  {
    icon: Target,
    title: "Doğruluk",
    description: "Saat farkı ve mesai hesaplarında güvenilir sonuçlar hedeflenir.",
  },
  {
    icon: Heart,
    title: "Kullanıcı Odaklılık",
    description: "Araçlar sade Türkçe arayüz ve mobil uyumla tasarlanır.",
  },
  {
    icon: Award,
    title: "Kalite",
    description: "Gece yarısı geçişi ve dakika taşıma senaryoları test edilir.",
  },
  {
    icon: TrendingUp,
    title: "İnovasyon",
    description: "Yeni hesaplama modları ve rehber içeriklerle gelişiriz.",
  },
];

const timeline = [
  { year: "2022", title: "Kuruluş", description: "Saat Hesaplama platformu İstanbul'da kuruldu." },
  { year: "2023", title: "10.000 Kullanıcı", description: "Platform 10.000 aktif kullanıcıya ulaştı." },
  { year: "2024", title: "Yeni Araçlar", description: "Çalışma saati ve 72 saat dönüştürücü eklendi." },
  { year: "2025", title: "Gelişmiş Rehberler", description: "Sık sorulan sorular, yasal sayfalar ve içerik ekibi genişletildi." },
];

export default function HakkimizdaPage() {
  return (
    <PageTransition>
      <SchemaMarkup
        data={buildPageSchemas({
          name: PAGE.title,
          description: PAGE.description,
          path: PAGE.path,
          breadcrumbs: [
            { name: "Ana Sayfa", url: "/" },
            { name: PAGE.title, url: PAGE.path },
          ],
        })}
      />
      <article className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto w-full px-4 md:px-6">
          <FadeUp>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-navy-100 bg-gradient-to-br from-navy via-navy-600 to-navy-700 px-6 py-10 text-white sm:rounded-[2rem] sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/25 blur-3xl" />
              <h1 className="text-2xl font-black sm:text-3xl md:text-4xl">Hakkımızda</h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                Saat farkı, tarih ekleme/çıkarma ve çalışma süresi hesaplamalarını herkes için
                ücretsiz ve gizlilik odaklı sunuyoruz.
              </p>
            </div>
          </FadeUp>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-12 md:space-y-14">
              <div className="grid gap-6 sm:grid-cols-2">
                <FadeUp>
                  <div className="hover-card rounded-2xl border border-navy-100 bg-white p-6">
                    <h2 className="text-xl font-bold text-navy">Kimiz?</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                      {SITE_NAME}, çalışanlar, vardiya personeli, öğrenciler ve yöneticiler için
                      ücretsiz bir çevrimiçi saat hesaplama platformudur. 2024&apos;te hayata geçirildi;
                      gece yarısı geçişi, mobil uyum ve gizlilik odaklı tarayıcı içi işleme önceliğimizdir.
                    </p>
                  </div>
                </FadeUp>
                <FadeUp delay={0.06}>
                  <div className="hover-card rounded-2xl border border-navy-100 bg-white p-6">
                    <h2 className="text-xl font-bold text-navy">Ne Yapıyoruz?</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                      İki zaman arasındaki farkı hesaplama, saat ve dakika ekleme/çıkarma, çalışma
                      süresi ve mesai senaryolarını destekleriz. Sık sorulan sorular, adım adım rehberler ve yasal
                      özetlerle karmaşık zaman aritmetiğini herkes için anlaşılır kılarız.
                    </p>
                  </div>
                </FadeUp>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <FadeUp>
                  <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-navy">Misyonumuz</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                      Zaman hesaplamalarını kolay, hızlı ve doğru hale getirmek; karmaşık saat
                      aritmetiğini herkesin kullanabileceği araçlara dönüştürmek.
                    </p>
                  </div>
                </FadeUp>
                <FadeUp delay={0.08}>
                  <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary">
                      <Eye className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-navy">Vizyonumuz</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                      Türkiye&apos;de zaman planlama ve mesai hesabında güvenilen dijital
                      referans platform olmak.
                    </p>
                  </div>
                </FadeUp>
              </div>

              <div>
                <FadeUp className="text-center lg:text-left">
                  <h2 className="text-2xl font-black text-navy">Değerlerimiz</h2>
                </FadeUp>
                <StaggerContainer className="mt-6 grid gap-4 sm:grid-cols-2">
                  {values.map((value) => (
                    <StaggerItem key={value.title}>
                      <div className="hover-card rounded-2xl border border-navy-100 bg-white p-5">
                        <value.icon className="h-7 w-7 text-accent" />
                        <h3 className="mt-3 font-bold text-navy">{value.title}</h3>
                        <p className="mt-2 text-sm text-muted">{value.description}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              <div className="rounded-2xl border border-navy-100 bg-navy-50/50 py-8">
                <StaggerContainer className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  {TRUST_STATS.map((stat) => (
                    <StaggerItem key={stat.label} className="text-center">
                      <div className="text-2xl font-black text-navy md:text-3xl">{stat.value}</div>
                      <div className="mt-1 text-xs font-medium text-muted sm:text-sm">{stat.label}</div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              <div>
                <FadeUp>
                  <h2 className="text-2xl font-black text-navy">Yolculuğumuz</h2>
                </FadeUp>
                <div className="relative mt-8 space-y-4">
                  {timeline.map((item, index) => (
                    <FadeUp key={item.year} delay={index * 0.06}>
                      <div className="flex gap-4 rounded-xl border border-navy-100 bg-white p-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-white">
                          {item.year.slice(2)}
                        </span>
                        <div>
                          <span className="text-xs font-semibold text-accent">{item.year}</span>
                          <h3 className="font-bold text-navy">{item.title}</h3>
                          <p className="mt-1 text-sm text-muted">{item.description}</p>
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>

              <div>
                <FadeUp>
                  <h2 className="text-2xl font-black text-navy">İçerik Ekibimiz</h2>
                  <p className="mt-2 text-sm text-muted">
                    Saat hesaplama rehberleri ve sık sorulan sorular metinlerinin sorumlusu.
                  </p>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <Link
                    href={`/yazar/${AUTHOR.slug}`}
                    className="hover-card mt-6 flex flex-col items-center gap-4 rounded-2xl border border-navy-100 bg-white p-6 text-center sm:flex-row sm:text-left"
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-md">
                      <LazyImage
                        src={AUTHOR.image}
                        alt={`${AUTHOR.name} — ${SITE_NAME} içerik editörü portresi`}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-navy">{AUTHOR.name}</h3>
                      <p className="text-sm font-medium text-accent">{AUTHOR.role}</p>
                      <p className="mt-2 text-sm text-muted">
                        Saat hesaplama rehberleri, sık sorulan sorular metinleri ve kullanım kılavuzlarının editörü.
                      </p>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 text-accent sm:block" />
                  </Link>
                </FadeUp>
              </div>
            </div>

            <LegalPageSidebar />
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
