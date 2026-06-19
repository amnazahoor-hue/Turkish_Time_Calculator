"use client";

import Link from "next/link";
import { LazyImage } from "@/components/ui/lazy-image";
import { motion } from "framer-motion";
import { Clock, TrendingUp } from "lucide-react";
import { SectionTitle } from "@/components/calculator/content-layouts";
import { FadeUp } from "@/components/motion";
import { cn } from "@/lib/utils";

function InfographicStepCard({
  number,
  text,
  detail,
  icon: Icon,
  headerClass,
  numberClass,
  numberSide,
}: {
  number: number;
  text: string;
  detail?: string;
  icon: typeof Clock;
  headerClass: string;
  numberClass: string;
  numberSide: "left" | "right";
}) {
  return (
    <>
      {/* Mobile: compact card — no oversized side numbers */}
      <div className="md:hidden">
        <div className="overflow-hidden rounded-2xl border border-navy-100/60 bg-white shadow-[0_8px_28px_-10px_rgba(0,43,91,0.18)]">
          <div
            className={cn(
              "flex items-center gap-3 px-4 py-3.5",
              headerClass
            )}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/20 text-base font-black text-white">
              {number}
            </span>
            <Icon className="h-5 w-5 shrink-0 text-white/90" strokeWidth={2} />
          </div>
          <div className="px-4 py-4">
            <p className="text-sm font-semibold leading-relaxed text-navy">
              {text}
            </p>
            {detail && (
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {detail}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Desktop: side-number infographic */}
      <div className="relative hidden overflow-hidden md:block">
        <div
          className={cn(
            "flex items-stretch gap-4",
            numberSide === "right" && "flex-row-reverse"
          )}
        >
          <span
            className={cn(
              "pointer-events-none shrink-0 select-none self-center text-[6rem] font-black leading-none md:text-[7rem]",
              numberClass
            )}
            aria-hidden
          >
            {number}
          </span>

          <div className="min-w-0 flex-1">
            <div className="overflow-hidden rounded-[1.5rem] shadow-[0_18px_40px_-14px_rgba(0,43,91,0.28)]">
              <div
                className={cn(
                  "relative px-6 pb-6 pt-4",
                  headerClass
                )}
              >
                <div
                  aria-hidden
                  className="absolute -bottom-px left-0 right-0 h-6 bg-white"
                  style={{
                    borderTopLeftRadius: "50% 100%",
                    borderTopRightRadius: "50% 100%",
                  }}
                />
              </div>

              <div className="relative bg-white px-6 pb-8 pt-2">
                <p className="text-base font-semibold leading-relaxed text-navy sm:leading-7">
                  {text}
                </p>
                {detail && (
                  <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
                    {detail}
                  </p>
                )}
                <div className="mt-6 flex justify-center border-t border-navy-100/80 pt-5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-background text-primary">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const DAY_STEPS = [
  {
    number: 1,
    text: "Bir günde 24 saat vardır.",
    detail: "Bir tam gün, 24 saatlik standart zaman dilimine eşittir.",
    icon: Clock,
    headerClass: "bg-primary",
    numberClass: "text-primary/20",
    numberSide: "left" as const,
  },
  {
    number: 2,
    text: "Bir günde 1440 dakika vardır.",
    detail: "24 saat × 60 dakika = 1440 dakika",
    icon: TrendingUp,
    headerClass: "bg-accent",
    numberClass: "text-accent/25",
    numberSide: "right" as const,
  },
];

export function MinutesInDaySection() {
  return (
    <article>
      <FadeUp className="text-center sm:text-center">
        <SectionTitle className="mx-auto text-lg sm:text-2xl md:text-3xl">
          Bir günde kaç dakika vardır?
        </SectionTitle>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:mt-4 sm:text-base md:leading-7">
          Bir günde kaç dakika olduğunu hesaplamak için, günü saatlere ve
          saatleri dakikalara bölün. Cevabı bulacaksınız.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base md:leading-7">
          Tarih ve saat toplama veya çıkarma işlemleri için ana sayfamızdaki{" "}
          <Link
            href="/"
            className="font-medium text-primary underline-offset-2 transition-colors hover:text-accent hover:underline"
          >
            saat hesaplama
          </Link>{" "}
          aracını kullanabilirsiniz.
        </p>
      </FadeUp>

      <div className="mt-5 grid gap-4 sm:mt-8 sm:gap-6 md:mt-12 md:grid-cols-2 md:gap-8 lg:gap-10">
        {DAY_STEPS.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.45 }}
          >
            <InfographicStepCard {...step} />
          </motion.div>
        ))}
      </div>
    </article>
  );
}

export function ThreeHoursMinutesSection() {
  return (
    <article className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
      <FadeUp className="flex flex-col justify-center lg:order-2">
        <SectionTitle className="text-lg sm:text-2xl md:text-3xl">
          3 saatte kaç dakika vardır?
        </SectionTitle>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base md:leading-7">
          Bir saatte 60 dakika vardır. Dolayısıyla, 3 saat için dakikaları
          saat sayısıyla çarpmanız yeterlidir.{" "}
          <span className="font-semibold text-foreground">3 × 60 = 180</span>
        </p>

        <p className="mt-4 rounded-xl bg-primary/5 px-4 py-3 text-sm leading-relaxed text-foreground/75 sm:mt-6 sm:bg-transparent sm:p-0 sm:text-[15px] sm:leading-7">
          <span className="font-semibold text-navy">Cevap:</span>{" "}
          <span className="font-bold text-navy">3 saat = 180 dakika</span>
        </p>

        <p className="mt-4 text-sm leading-relaxed text-muted sm:mt-6 sm:text-base md:leading-7">
          Bu dönüşüm, programları, egzersiz sürelerini, seyahat sürelerini ve
          diğer zamana dayalı faaliyetleri hesaplamak için kullanışlıdır.
        </p>
      </FadeUp>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="flex items-center justify-center lg:order-1 lg:justify-start"
      >
        <div className="relative mx-auto w-full max-w-[280px] sm:max-w-md lg:max-w-none">
          <LazyImage
            src="/images/three-hours-minutes-visual.webp"
            alt="3 saatin 180 dakikaya dönüşümünü gösteren illüstrasyon"
            width={800}
            height={533}
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 100vw, 45vw"
            className="h-auto w-full rounded-xl [object-fit:contain] drop-shadow-[0_12px_32px_rgba(0,43,91,0.14)] sm:rounded-2xl sm:drop-shadow-[0_20px_48px_rgba(0,43,91,0.18)] md:rounded-3xl"
          />
        </div>
      </motion.div>
    </article>
  );
}
