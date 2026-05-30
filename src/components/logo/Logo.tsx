import LogoIcon from "@/components/logo/LogoIcon";

export type LogoVariant = "light" | "dark" | "icon";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
}

const sizeMap: Record<LogoVariant, string> = {
  light: "h-[30px] w-[120px] md:h-10 md:w-40",
  dark: "h-9 w-[140px]",
  icon: "h-8 w-8",
};

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  if (variant === "icon") {
    return (
      <span role="img" aria-label="Time Calculator" className={`inline-flex ${className}`}>
        <LogoIcon className={className || sizeMap.icon} />
      </span>
    );
  }

  const isDark = variant === "dark";
  const wordmarkColor = isDark ? "var(--c-text-inverse)" : "var(--c-primary)";

  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Time Calculator"
      className={`${sizeMap[variant]} ${className}`}
      preserveAspectRatio="xMinYMid meet"
    >
      <circle cx="20" cy="20" r="16" style={{ fill: "var(--c-primary)" }} />
      <circle
        cx="20"
        cy="20"
        r="13"
        style={{ fill: "var(--c-text-inverse)", opacity: 0.12 }}
      />
      {[0, 90, 180, 270].map((deg) => (
        <line
          key={deg}
          x1="20"
          y1="6"
          x2="20"
          y2="8"
          stroke="var(--c-text-inverse)"
          strokeWidth="0.75"
          strokeLinecap="round"
          transform={`rotate(${deg} 20 20)`}
          opacity="0.5"
        />
      ))}
      <line
        x1="20"
        y1="20"
        x2="20"
        y2="10"
        stroke="var(--c-text-inverse)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="20"
        x2="27"
        y2="20"
        stroke="var(--c-text-inverse)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="2" style={{ fill: "var(--c-text-inverse)" }} />
      <circle cx="32" cy="8" r="4" style={{ fill: "var(--c-accent)" }} />
      <path
        d="M30.5 8h3M32 6.5v3"
        stroke="var(--c-text-primary)"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.55"
      />
      <text
        x="44"
        y="26"
        style={{
          fill: wordmarkColor,
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "15",
          fontWeight: 700,
        }}
      >
        Time
      </text>
      <text
        x="84"
        y="26"
        style={{
          fill: wordmarkColor,
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "15",
          fontWeight: 700,
        }}
      >
        Calculator
      </text>
    </svg>
  );
}
