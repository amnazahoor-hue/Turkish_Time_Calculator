"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/motion";
import { HeroCalculatorVisual } from "./hero-calculator-visual";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-10 md:pt-28 md:pb-12 lg:pt-32 lg:pb-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/branding/og-image.webp"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/hero-background.webm" type="video/webm" />
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/35 to-white/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-6 md:gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-10">
          <FadeUp>
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:max-w-[520px] lg:text-left">
              <h1 className="text-3xl font-bold tracking-tight sm:text-[2.5rem] md:text-[3rem] md:leading-tight lg:text-[3.5rem]">
                <span className="text-primary">Saat </span>
                <span className="text-accent">Hesaplama</span>
              </h1>

              <p className="mt-3 text-base leading-relaxed text-foreground md:mt-4 md:text-lg">
                Bu saat hesaplama aracı temel olarak iki zaman değerini toplamak
                veya çıkarmak için kullanılır. Aynı günün iki zaman dilimi
                arasındaki süreyi belirleyin. Bu hesap makinesiyle kaç saat
                çalıştığınızı öğrenebilirsiniz.
              </p>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center md:mt-6 lg:justify-start">
                <Link
                  href="/#araclar"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 text-base font-semibold text-white transition-all duration-300 hover:bg-accent-500 hover:shadow-glow active:scale-[0.98] sm:w-auto sm:px-6 sm:text-lg md:h-[3.25rem]"
                >
                  Hesaplamaya Başla
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#araclar"
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-primary/20 bg-white/50 px-5 text-base font-semibold text-primary backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-white/80 hover:shadow-md active:scale-[0.98] sm:w-auto sm:px-6 sm:text-lg md:h-[3.25rem]"
                >
                  Nasıl Çalışır?
                </Link>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15} className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[440px]">
              <HeroCalculatorVisual />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
