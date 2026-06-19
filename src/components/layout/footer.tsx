import Link from "next/link";
import { SiteLogo } from "@/components/layout/site-logo";
import { FooterSocialIcons } from "@/components/layout/footer-social-icons";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12 lg:py-14">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-1.5">
              <SiteLogo size={44} />
              <span className="text-lg font-bold text-primary">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              Türkiye&apos;nin en gelişmiş saat hesaplama platformu. Saat farkı,
              tarih işlemleri ve çalışma süresi hesaplamalarını anında yapın.
            </p>
            <FooterSocialIcons />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary">Araçlar</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.tools.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="interactive-link text-sm text-foreground/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary">Şirket</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="interactive-link text-sm text-foreground/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary">Yasal</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="interactive-link text-sm text-foreground/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-navy-100 pt-6 text-center md:mt-10 md:pt-8">
          <p className="text-sm text-foreground/60">
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
