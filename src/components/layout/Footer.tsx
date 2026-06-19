"use client";

import Link from "next/link";
import Logo from "@/components/logo/Logo";
import { SocialBrandIcon, type SocialPlatform } from "@/components/icons/SocialIcons";
import {
  siteConfig,
  sectionNavLinks,
  legalNavLinks,
  socialLinks,
} from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="section-container relative z-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-5 inline-block" aria-label="Home">
              <Logo variant="dark" className="h-9 w-auto" />
            </Link>
            <p className="footer-desc">
              Free online time calculator. Reliable calculations for work hours, shifts, and
              scheduling.
            </p>
          </div>

          <div>
            <p className="footer-col-label">Navigation</p>
            <ul className="space-y-3">
              {sectionNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-col-label">Legal</p>
            <ul className="space-y-3">
              {legalNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-col-label">Follow Us</p>
            <div className="footer-social-grid">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`footer-social-btn footer-social-btn--${social.platform}`}
                >
                  <SocialBrandIcon
                    platform={social.platform as SocialPlatform}
                    className="footer-social-icon"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
