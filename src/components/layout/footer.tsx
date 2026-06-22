import Link from "next/link";
import { SiteLogo } from "@/components/layout/site-logo";
import { FooterSocialIcons } from "@/components/layout/footer-social-icons";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants";
import { capitalizeHeadingWords } from "@/lib/utils";

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-primary md:text-[15px]">
        {capitalizeHeadingWords(title)}
      </h3>
      <ul className="mt-3 space-y-2.5 md:mt-4 md:space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="interactive-link text-sm leading-relaxed text-foreground/70 md:text-[15px]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="overflow-x-clip border-t border-navy-100 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12 lg:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12 xl:gap-16">
          <div className="w-full max-w-md shrink-0 lg:max-w-sm xl:max-w-md">
            <Link
              href="/"
              aria-label="Ana Sayfa"
              className="inline-flex items-center gap-2"
            >
              <SiteLogo size={44} className="h-10 w-10 md:h-11 md:w-11" />
              <span className="text-xl font-bold text-primary md:text-2xl">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70 md:text-[15px] md:leading-7">
              Türkiye&apos;nin en gelişmiş saat hesaplama platformu. Saat farkı,
              tarih işlemleri ve çalışma süresi hesaplamalarını anında yapın.
            </p>
            <FooterSocialIcons />
          </div>

          <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 md:gap-12 lg:w-auto lg:shrink-0">
            <FooterLinkColumn title="Araçlar" links={FOOTER_LINKS.tools} />
            <FooterLinkColumn title="Şirket" links={FOOTER_LINKS.company} />
            <FooterLinkColumn title="Yasal" links={FOOTER_LINKS.legal} />
          </div>
        </div>

        <div className="mt-8 border-t border-navy-100 pt-6 md:mt-10 md:pt-8">
          <p className="text-center text-sm text-foreground/60 md:text-[15px]">
            © {new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="font-medium text-primary transition-colors hover:text-accent"
            >
              {SITE_NAME}
            </Link>
            . Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
