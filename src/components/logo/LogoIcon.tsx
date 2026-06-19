interface LogoIconProps {
  className?: string;
}

export default function LogoIcon({ className = "h-8 w-8" }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <circle cx="16" cy="16" r="14" style={{ fill: "var(--c-primary)" }} />
      <circle
        cx="16"
        cy="16"
        r="11"
        style={{ fill: "var(--c-text-inverse)", opacity: 0.12 }}
      />
      {[0, 90, 180, 270].map((deg) => (
        <line
          key={deg}
          x1="16"
          y1="5"
          x2="16"
          y2="7"
          stroke="var(--c-text-inverse)"
          strokeWidth="1"
          strokeLinecap="round"
          transform={`rotate(${deg} 16 16)`}
          opacity="0.5"
        />
      ))}
      <line
        x1="16"
        y1="16"
        x2="16"
        y2="9"
        stroke="var(--c-text-inverse)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="16"
        x2="21"
        y2="16"
        stroke="var(--c-text-inverse)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="1.5" style={{ fill: "var(--c-text-inverse)" }} />
      <circle cx="25" cy="7" r="3" style={{ fill: "var(--c-accent)" }} />
      <path
        d="M23.5 7h3M25 5.5v3"
        stroke="var(--c-text-primary)"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
