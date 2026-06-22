import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { HOURLY_WAGE_PAGE } from "@/lib/pages-seo";

const HOME_PATH = "/";
const HOURS_TO_DAYS_PATH = "/72-saat-kac-gun";

const INTERNAL_LINK_CLASS =
  "font-medium text-primary underline-offset-2 transition-colors hover:text-accent hover:underline";

const LINKED_TIME_UNITS_PHRASE = /(gün,\s*saat,\s*dakika ve saniye)/gi;
const LINKED_HOURLY_WAGE_PHRASE = /(saat ücreti hesaplama)/gi;
const LINKED_SAATI_PHRASE = /(\bsaati\b)/gi;
const LINKED_HOMEPAGE_TOOL_PHRASE = /(saat hesaplama)/gi;
const LINKED_72_HOURS_PHRASE = /(72 saat kaç gündür)/gi;

function withPhraseLink(
  text: string,
  pattern: RegExp,
  href: string,
  matcher: RegExp
): ReactNode {
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    if (matcher.test(part)) {
      matcher.lastIndex = 0;
      return (
        <Link key={index} href={href} className={INTERNAL_LINK_CLASS}>
          {part}
        </Link>
      );
    }

    return <Fragment key={index}>{part}</Fragment>;
  });
}

/** Link the phrase "gün, saat, dakika ve saniye" as one unit to the 72 saat page. */
export function withTimeUnitLinks(text: string): ReactNode {
  const parts = text.split(LINKED_TIME_UNITS_PHRASE);

  return parts.map((part, index) => {
    if (/^gün,\s*saat,\s*dakika ve saniye$/i.test(part)) {
      return (
        <Link key={index} href={HOURS_TO_DAYS_PATH} className={INTERNAL_LINK_CLASS}>
          {part}
        </Link>
      );
    }

    return <Fragment key={index}>{part}</Fragment>;
  });
}

/** Link "saati" to the 72 saat page. */
export function withSaatiLink(text: string): ReactNode {
  return withPhraseLink(text, LINKED_SAATI_PHRASE, HOURS_TO_DAYS_PATH, /^saati$/i);
}

/** Link "saat hesaplama" to the homepage tool. */
export function withHomepageToolLink(text: string): ReactNode {
  return withPhraseLink(text, LINKED_HOMEPAGE_TOOL_PHRASE, HOME_PATH, /^saat hesaplama$/i);
}

/** Link "72 saat kaç gündür" to the 72 saat page. */
export function with72HoursPageLink(text: string): ReactNode {
  return withPhraseLink(
    text,
    LINKED_72_HOURS_PHRASE,
    HOURS_TO_DAYS_PATH,
    /^72 saat kaç gündür$/i
  );
}

/** Link the phrase "saat ücreti hesaplama" as one unit to the hourly wage tool page. */
export function withHourlyWageToolLink(text: string): ReactNode {
  const parts = text.split(LINKED_HOURLY_WAGE_PHRASE);

  return parts.map((part, index) => {
    if (/^saat ücreti hesaplama$/i.test(part)) {
      return (
        <Link
          key={index}
          href={HOURLY_WAGE_PAGE.path}
          className={INTERNAL_LINK_CLASS}
        >
          {part}
        </Link>
      );
    }

    return <Fragment key={index}>{part}</Fragment>;
  });
}