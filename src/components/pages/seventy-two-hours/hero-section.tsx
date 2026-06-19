import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function SeventyTwoHoursHeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-10 md:pt-28 md:pb-14 lg:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-0 h-64 w-64 rounded-full bg-[#bde3ff]/40 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-primary/10 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Ana Sayfa
        </Link>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.5rem] md:leading-tight">
              72 saat kaç gündür?
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-base md:leading-7">
              <p>
                Bir gün 24 saate eşittir, dolayısıyla 72 saatte kaç gün
                olduğunu hesaplamak istiyorsak, bir gün 24 saat içerdiğinden,
                cevabı 72&apos;yi 24&apos;e bölerek bulabiliriz:{" "}
                <span className="font-semibold text-foreground">
                  72 ÷ 24 = 3
                </span>
                . 72 saat 3 güne eşittir.
              </p>
              <p>
                Daha kolay dönüşümler için, bunları manuel olarak yapmak
                istiyorsanız veya bir günde kaç dakika olduğunu merak
                ediyorsanız ya da buna benzer daha fazla sorunuz varsa,
                makaleyi okumaya devam edin. Bu hızlı saat-gün dönüşümü,
                programları, son teslim tarihlerini ve seyahat sürelerini
                hesaplamak için kullanışlıdır.
              </p>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative h-[280px] w-full max-w-[360px] sm:h-[320px] sm:max-w-[400px] lg:h-[360px] lg:max-w-[440px]">
              <Image
                src="/images/72-saat-hero-cutout.png"
                alt="72 saat kaç gündür - takvim ve saat illüstrasyonu"
                fill
                priority
                sizes="(max-width: 1024px) 360px, 440px"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
