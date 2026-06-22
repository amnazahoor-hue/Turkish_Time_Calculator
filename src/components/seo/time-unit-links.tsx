import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { HOURLY_WAGE_PAGE } from "@/lib/pages-seo";

const HOURS_TO_DAYS_PATH = "/72-saat-kac-gun";

const INTERNAL_LINK_CLASS =
  "font-medium text-primary underline-offset-2 transition-colors hover:text-accent hover:underline";

const LINKED_TIME_UNITS_PHRASE = /(gün,\s*saat,\s*dakika ve saniye)/gi;
const LINKED_HOURLY_WAGE_PHRASE = /(saat ücreti hesaplama)/gi;

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