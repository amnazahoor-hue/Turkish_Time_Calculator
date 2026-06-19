import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FOOTER_SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = {
  youtube: FaYoutube,
  facebook: FaFacebook,
  instagram: FaInstagram,
  pinterest: FaPinterest,
  x: FaXTwitter,
} as const;

const brandHoverStyles: Record<
  keyof typeof iconMap,
  { default: string; hover: string }
> = {
  youtube: {
    default: "text-[#FF0000]/75",
    hover:
      "hover:bg-[#FF0000] hover:text-white hover:ring-[#FF0000]/35 hover:shadow-[0_10px_24px_-8px_rgba(255,0,0,0.55)]",
  },
  facebook: {
    default: "text-[#1877F2]/80",
    hover:
      "hover:bg-[#1877F2] hover:text-white hover:ring-[#1877F2]/35 hover:shadow-[0_10px_24px_-8px_rgba(24,119,242,0.5)]",
  },
  instagram: {
    default: "text-[#E4405F]/80",
    hover:
      "hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white hover:ring-[#dc2743]/35 hover:shadow-[0_10px_24px_-8px_rgba(220,39,67,0.45)]",
  },
  pinterest: {
    default: "text-[#E60023]/80",
    hover:
      "hover:bg-[#E60023] hover:text-white hover:ring-[#E60023]/35 hover:shadow-[0_10px_24px_-8px_rgba(230,0,35,0.5)]",
  },
  x: {
    default: "text-black/70",
    hover:
      "hover:bg-black hover:text-white hover:ring-black/25 hover:shadow-[0_10px_24px_-8px_rgba(0,0,0,0.45)]",
  },
};

export function FooterSocialIcons({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mt-6 flex flex-wrap items-center gap-3",
        className
      )}
      aria-label="Sosyal medya bağlantıları"
    >
      {FOOTER_SOCIAL_LINKS.map(({ href, label, platform }) => {
        const Icon = iconMap[platform];
        const styles = brandHoverStyles[platform];

        return (
          <a
            key={platform}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "group flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5",
              "transition-all duration-300 ease-out hover:-translate-y-1",
              styles.default,
              styles.hover
            )}
          >
            <Icon
              className="h-[18px] w-[18px] transition-colors duration-300 group-hover:text-white"
              aria-hidden
            />
          </a>
        );
      })}
    </div>
  );
}
