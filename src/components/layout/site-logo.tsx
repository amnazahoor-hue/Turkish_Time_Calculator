import { LazyImage } from "@/components/ui/lazy-image";
import { SITE_LOGO, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

export function SiteLogo({
  size = 44,
  className,
  priority = false,
}: SiteLogoProps) {
  return (
    <LazyImage
      src={SITE_LOGO}
      alt={SITE_NAME}
      title={SITE_NAME}
      width={size}
      height={size}
      priority={priority}
      sizes={`${size}px`}
      className={cn("object-contain", className)}
    />
  );
}
