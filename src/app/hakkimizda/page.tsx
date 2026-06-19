import type { Metadata } from "next";
import { Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react";
import { PageTransition, FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { TRUST_STATS } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Hakkımızda",
  description:
    "Saat Hesaplama platformu hakkında bilgi edinin. Misyonumuz, vizyonumuz ve değerlerimizi keşfedin.",
  path: "/hakkimizda",
});

const values = [
  {
    icon: Target,
    title: "Doğruluk",
    description: "Her hesaplamada %100 doğru sonuçlar sunmayı taahhüt ediyoruz.",
  },
  {
    icon: Heart,
    title: "Kullanıcı Odaklılık",
    description: "Kullanıcı deneyimini her zaman ön planda tutuyoruz.",
  },
  {
    icon: Award,
    title: "Kalite",
    description: "En yüksek kalite standartlarında hizmet sunuyoruz.",
  },
  {
    icon: TrendingUp,
    title: "İnovasyon",
    description: "Sürekli gelişim ve yenilikçi çözümler üretiyoruz.",
  },
];

const timeline = [
  {
    year: "2022",
    title: "Kuruluş",
    description: "Saat Hesaplama platformu İstanbul'da kuruldu.",
  },
  {
    year: "2023",
    title: "10.000 Kullanıcı",
    description: "Platform 10.000 aktif kullanıcıya ulaştı.",
  },
  {
    year: "2024",
    title: "Yeni Özellikler",
    description: "Çalışma saati hesaplama ve gelişmiş araçlar eklendi.",
  },
  {
    year: "2025",
    title: "Liderlik",
    description: "Türkiye'nin en çok tercih edilen saat hesaplama platformu olduk.",
  },
];

const team = [
  {
    name: "Ahmet Yılmaz",
    role: "Kurucu & CEO",
    bio: "10+ yıllık yazılım geliştirme deneyimi ile platformu hayata geçirdi.",
  },
  {
    name: "Elif Kaya",
    role: "CTO",
    bio: "Full-stack geliştirici ve sistem mimarı. Teknik altyapının arkasındaki isim.",
  },
  {
    name: "Mehmet Demir",
    role: "Ürün Müdürü",
    bio: "Kullanıcı deneyimi ve ürün stratejisi konusunda uzman.",
  },
  {
    name: "Zeynep Arslan",
    role: "Tasarım Lideri",
    bio: "Premium kullanıcı arayüzü ve deneyim tasarımından sorumlu.",
  },
];

export default function HakkimizdaPage() {
  return (
    <PageTransition>
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Ana Sayfa", url: "/" },
          { name: "Hakkımızda", url: "/hakkimizda" },
        ])}
      />

      <section className="pt-24 pb-10 md:pt-28 md:pb-14">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <FadeUp>
            <h1 className="text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
              Hakkımızda
            </h1>
            <p className="mt-3 text-sm text-muted sm:mt-4 sm:text-base md:text-lg">
              Türkiye&apos;nin en gelişmiş saat hesaplama platformunu
              oluşturma yolculuğumuz.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeUp>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="mt-6 text-3xl font-black text-foreground">
                Misyonumuz
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Herkesin zaman hesaplamalarını kolay, hızlı ve doğru bir şekilde
                yapabilmesini sağlamak. Karmaşık saat ve tarih işlemlerini basit
                araçlarla herkesin erişebileceği hale getirmek.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h2 className="mt-6 text-3xl font-black text-foreground">
                Vizyonumuz
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Türkiye ve dünya genelinde zaman yönetimi alanında lider dijital
                platform olmak. İnovatif çözümlerle kullanıcılarımızın
                verimliliğini artırmak.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <FadeUp className="text-center">
            <h2 className="text-3xl font-black text-foreground">Değerlerimiz</h2>
          </FadeUp>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="rounded-2xl border border-border/60 bg-white p-6">
                  <value.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {TRUST_STATS.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <div className="text-3xl font-black text-primary md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-muted">
                  {stat.label}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <FadeUp className="text-center">
            <h2 className="text-3xl font-black text-foreground">Yolculuğumuz</h2>
          </FadeUp>
          <div className="relative mt-12">
            <div className="absolute left-4 top-0 h-full w-px bg-primary/20 md:left-1/2" />
            {timeline.map((item, index) => (
              <FadeUp key={item.year} delay={index * 0.1}>
                <div
                  className={`relative mb-12 flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden flex-1 md:block" />
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-white">
                    {item.year.slice(2)}
                  </div>
                  <div className="flex-1 rounded-2xl border border-border/60 bg-white p-5">
                    <span className="text-sm font-semibold text-primary">
                      {item.year}
                    </span>
                    <h3 className="mt-1 font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <FadeUp className="text-center">
            <h2 className="text-3xl font-black text-foreground">Ekibimiz</h2>
            <p className="mt-4 text-muted">
              Platformun arkasındaki tutkulu ekip.
            </p>
          </FadeUp>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="rounded-2xl border border-border/60 bg-background p-6 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-4 font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm text-muted">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  );
}
