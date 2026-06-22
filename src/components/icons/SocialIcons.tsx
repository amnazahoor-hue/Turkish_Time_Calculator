type IconProps = { className?: string };

export function XBrandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function FacebookBrandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

export function InstagramBrandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="footerInstagramGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--social-instagram-start)" />
          <stop offset="45%" stopColor="var(--social-instagram-mid)" />
          <stop offset="100%" stopColor="var(--social-instagram-end)" />
        </linearGradient>
      </defs>
      <path
        fill="url(#footerInstagramGrad)"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.017 7.052.082 5.775.147 4.602.413 3.585 1.43 2.568 2.447 2.302 3.62 2.237 4.897 2.172 6.177 2.155 6.586 2.155 12c0 5.414.017 5.823.082 7.103.065 1.277.331 2.45 1.348 3.467.967.967 2.14 1.233 3.417 1.298C8.332 23.983 8.741 24 12 24s3.668-.017 4.948-.082c1.277-.065 2.45-.331 3.467-1.348.967-.967 1.233-2.14 1.298-3.417.065-1.28.082-1.689.082-7.103 0-5.414-.017-5.823-.082-7.103-.065-1.277-.331-2.45-1.348-3.467-.967-.967-2.14-1.233-3.417-1.298C15.668.017 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
      />
    </svg>
  );
}

export function LinkedInBrandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function YouTubeBrandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function TikTokBrandIcon({ className }: IconProps) {
  const notePath =
    "M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-1.183-.11 6.44 6.44 0 0 0-6.5 6.64 6.44 6.44 0 0 0 7.27 6.364 6.44 6.44 0 0 0 3.645-1.036v-6.86a8.533 8.533 0 0 0 4.773 1.466V8.687a4.884 4.884 0 0 1-1.002-.001z";

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="var(--social-tiktok-cyan)" d={notePath} transform="translate(-1,-1)" />
      <path fill="var(--social-tiktok-pink)" d={notePath} transform="translate(1,1)" />
      <path fill="var(--social-tiktok)" d={notePath} />
    </svg>
  );
}

export function PinterestBrandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  );
}

export function QuoraBrandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.738 18.701c-.831-1.635-1.858-3.317-3.307-3.317-1.199 0-1.954 1.045-1.954 2.515 0 1.47.755 2.516 1.954 2.516 1.449 0 2.476-1.682 3.307-3.317zm5.551-9.314c-2.837 0-5.138 2.298-5.138 5.137 0 .958.262 1.854.719 2.625l-1.979 3.645h3.469l1.419-2.616c.688.198 1.414.304 2.165.304 2.837 0 5.138-2.299 5.138-5.137S19.126 9.387 16.289 9.387z" />
    </svg>
  );
}

export type SocialPlatform =
  | "x"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "tiktok"
  | "pinterest";

const iconMap = {
  x: XBrandIcon,
  facebook: FacebookBrandIcon,
  instagram: InstagramBrandIcon,
  linkedin: LinkedInBrandIcon,
  youtube: YouTubeBrandIcon,
  tiktok: TikTokBrandIcon,
  pinterest: PinterestBrandIcon,
};

export function SocialBrandIcon({
  platform,
  className,
}: {
  platform: SocialPlatform;
  className?: string;
}) {
  const Icon = iconMap[platform];
  return <Icon className={className} />;
}
