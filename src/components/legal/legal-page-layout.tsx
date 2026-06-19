import { FadeUp } from "@/components/motion";

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <article className="pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <FadeUp>
          <h1 className="text-2xl font-black text-foreground sm:text-3xl md:text-4xl">{title}</h1>
          <p className="mt-4 text-sm text-muted">
            Son güncelleme: {lastUpdated}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="prose prose-sm mt-8 max-w-none sm:prose-base md:mt-10 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-foreground sm:[&_h2]:text-xl [&_p]:leading-relaxed [&_p]:text-muted [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-muted [&_li]:mb-1.5 [&_strong]:text-foreground">
            {children}
          </div>
        </FadeUp>
      </div>
    </article>
  );
}
