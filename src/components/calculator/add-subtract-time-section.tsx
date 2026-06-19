"use client";

import Image from "next/image";
import { FadeUp } from "@/components/motion";

export function AddSubtractTimeSection() {
  return (
    <section className="relative w-full overflow-hidden py-10 md:py-14 lg:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/add-subtract-time-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_40%] opacity-[0.34] saturate-[0.95]"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/92 via-background/78 to-background/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(211,84,0,0.07),transparent_50%)]" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full bg-accent/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 left-0 h-32 w-32 rounded-full bg-navy/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeUp className="flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px] overflow-hidden rounded-2xl border border-navy-100/60 bg-white/80 shadow-[0_16px_40px_-12px_rgba(0,43,91,0.15)] md:rounded-3xl">
              <Image
                src="/images/add-subtract-time-visual.webp"
                alt="Tarihe saat ekleme veya çıkarma görseli"
                width={800}
                height={533}
                sizes="(max-width: 1024px) 100vw, 420px"
                className="h-auto w-full object-cover"
                priority={false}
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-2xl font-black tracking-tight text-navy sm:text-3xl md:text-4xl">
              Tarihe Saat Ekleme veya Çıkarma
              <span className="mt-3 block h-1 w-16 rounded-full bg-gradient-primary" />
            </h2>

            <p className="mt-5 text-sm font-medium leading-relaxed text-muted sm:text-base md:leading-7">
              Bu hesap makinesi, ihtiyaçlarınıza göre zaman girişlerini toplamanıza
              veya çıkarmanıza olanak tanır. Başlangıç tarihini ve saatini giriş
              alanlarına girmeniz yeterlidir. Toplama veya çıkarma seçeneklerinden
              birini seçin; ardından yeni tarih ve saati elde edeceksiniz.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
