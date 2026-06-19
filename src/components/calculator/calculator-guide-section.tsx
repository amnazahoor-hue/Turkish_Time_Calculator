"use client";

import {
  CalendarClock,
  Timer,
  ListOrdered,
  CheckCircle2,
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

const STEPS = [
  "Tüm alanlara (gün, saat, dakika ve saniye) değer girin.",
  "İşlemi seçin (toplama veya çıkarma).",
  "İkinci tarih ve saati de aynı biçimde girin.",
  'Ardından "Hesapla" düğmesine basın.',
] as const;

export function CalculatorGuideSection() {
  return (
    <section className="bg-slate-50/80 py-6 md:py-8">
      <div className="mx-auto max-w-4xl space-y-4 px-4 md:space-y-5 md:px-6">
        <FadeUp>
          <article className="rounded-xl border border-border/60 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-5 md:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/10 sm:h-12 sm:w-12">
                <CalendarClock className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl md:text-2xl">
                  Tarihe saat Ekleme veya Çıkarma
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3 sm:text-base">
                  Bu hesap makinesi, ihtiyaçlarınıza göre zaman girişlerini
                  toplamanıza veya çıkarmanıza olanak tanır. Başlangıç tarihini
                  ve saatini giriş alanlarına girmeniz yeterlidir. Toplama veya
                  çıkarma seçeneklerinden birini seçin; ardından yeni tarih ve
                  saati elde edeceksiniz.
                </p>
              </div>
            </div>
          </article>
        </FadeUp>

        <FadeUp delay={0.1}>
          <article className="rounded-xl border border-border/60 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-5 md:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/10 sm:h-12 sm:w-12">
                <Timer className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl md:text-2xl">
                  Saat Farkı Nasıl Bulunur?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3">
                  Aşağıda bu zaman hesap makinesini kullanmak için bazı kolay
                  adımlar bulunmaktadır:
                </p>

                <StaggerContainer className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5" staggerDelay={0.06}>
                  {STEPS.map((step, index) => (
                    <StaggerItem key={index}>
                      <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/60 px-3 py-2.5 sm:rounded-xl sm:px-4 sm:py-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gradient-primary text-xs font-bold text-white sm:h-8 sm:w-8 sm:rounded-lg sm:text-sm">
                          {index + 1}
                        </span>
                        <p className="pt-0.5 text-xs leading-relaxed text-foreground sm:pt-1 sm:text-sm">
                          {step}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-primary/15 bg-primary/5 px-3 py-2.5 sm:mt-5 sm:rounded-xl sm:px-4 sm:py-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                  <p className="text-xs font-medium text-foreground sm:text-sm">
                    Sonuç ekranda görünecektir.
                  </p>
                </div>

                <div className="mt-4 space-y-3 border-t border-border/60 pt-4 sm:mt-5">
                  <p className="text-sm leading-relaxed text-muted">
                    Bu saat hesaplayıcı basit ve kullanımı kolaydır ve
                    görevlerinizi zamanınıza en uygun şekilde planlamanıza ve
                    yönetmenize yardımcı olur.
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    Bu dönüştürücü ile zaman kaybetmeden görevlerinizi verimli
                    bir şekilde planlayabilirsiniz.
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-2 text-[11px] font-medium text-muted sm:text-xs">
                  <ListOrdered className="h-3.5 w-3.5 text-primary/70" />
                  <span>4 adımda hızlı hesaplama</span>
                </div>
              </div>
            </div>
          </article>
        </FadeUp>
      </div>
    </section>
  );
}
