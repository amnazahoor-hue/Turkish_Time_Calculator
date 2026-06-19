"use client";

import { useState } from "react";
import {
  Zap,
  Target,
  Clock,
  Layers,
  Receipt,
  type LucideIcon,
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { SiteLogo } from "@/components/layout/site-logo";
import {
  CALCULATOR_BENEFITS,
  TOOL_BENEFITS_SECTION,
} from "@/lib/calculator-page-content";
import { cn } from "@/lib/utils";

const BENEFIT_ICONS: Record<string, LucideIcon> = {
  Zap,
  Target,
  Clock,
  Layers,
  Receipt,
};

const DIAGRAM_HEIGHT = 680;
const HUB = { x: 500, y: 385 };

const SPOKE_NODES = [
  { x: 500, y: 168, slot: "top" as const },
  { x: 238, y: 258, slot: "left" as const },
  { x: 238, y: 512, slot: "left" as const },
  { x: 762, y: 258, slot: "right" as const },
  { x: 762, y: 512, slot: "right" as const },
] as const;

function getNodeStyle(node: (typeof SPOKE_NODES)[number]) {
  const left = `${(node.x / 1000) * 100}%`;
  const top = `${(node.y / DIAGRAM_HEIGHT) * 100}%`;

  switch (node.slot) {
    case "top":
      return {
        left,
        top,
        transform: "translate(-50%, calc(-100% + 14px))",
      };
    case "left":
      return {
        left,
        top,
        transform: "translate(calc(-100% + 14px), -50%)",
      };
    case "right":
      return {
        left,
        top,
        transform: "translate(-14px, -50%)",
      };
  }
}

function BenefitHub({ active }: { active: boolean }) {
  return (
    <div
      className={cn(
        "relative flex h-[92px] w-[92px] items-center justify-center rounded-full border bg-white p-2 shadow-[0_4px_20px_-4px_rgba(0,43,91,0.15)] transition-all duration-300 md:h-[100px] md:w-[100px] md:p-2.5",
        active
          ? "scale-110 border-accent/50 shadow-[0_8px_28px_-6px_rgba(211,84,0,0.25)]"
          : "border-navy/15 hover:scale-105 hover:border-accent/30"
      )}
    >
      <SiteLogo
        size={68}
        className="!ml-0 !mr-0 block shrink-0 object-center md:!h-[72px] md:!w-[72px]"
      />
    </div>
  );
}

function SpokeLines({ activeIndex }: { activeIndex: number | null }) {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={`0 0 1000 ${DIAGRAM_HEIGHT}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {SPOKE_NODES.map((node, i) => (
        <line
          key={i}
          x1={HUB.x}
          y1={HUB.y}
          x2={node.x}
          y2={node.y}
          stroke={
            activeIndex === i
              ? "rgba(211,84,0,0.45)"
              : "rgba(0,43,91,0.14)"
          }
          strokeWidth={activeIndex === i ? 2 : 1.5}
          strokeDasharray={activeIndex === i ? "none" : "5 7"}
          className="transition-all duration-300"
        />
      ))}
    </svg>
  );
}

function SpokeIcon({
  icon: Icon,
  index,
  active,
}: {
  icon: LucideIcon;
  index: number;
  active: boolean;
}) {
  return (
    <div
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-white transition-all duration-300",
        active
          ? "scale-110 border-accent bg-accent/10 text-accent"
          : index % 2 === 0
            ? "border-accent/40 text-accent"
            : "border-navy/25 text-navy"
      )}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
    </div>
  );
}

function BenefitCard({
  title,
  description,
  icon,
  index,
  slot,
  isActive,
  onHover,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  slot: "top" | "left" | "right";
  isActive: boolean;
  onHover: (index: number | null) => void;
}) {
  const Icon = icon;

  const cardClass = cn(
    "w-[168px] rounded-xl border bg-white p-3.5 shadow-sm transition-all duration-300 sm:w-[188px] md:w-[200px] lg:w-[220px]",
    "border-navy-100",
    isActive && "border-accent shadow-[0_10px_28px_-8px_rgba(211,84,0,0.3)] ring-1 ring-accent/20"
  );

  const content = (
    <>
      <h3
        className={cn(
          "text-sm font-bold leading-snug text-navy md:text-[15px]",
          isActive && "text-accent"
        )}
      >
        {title}
      </h3>
      <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm sm:leading-6">
        {description}
      </p>
    </>
  );

  const hoverHandlers = {
    onMouseEnter: () => onHover(index),
    onMouseLeave: () => onHover(null),
    onFocus: () => onHover(index),
    onBlur: () => onHover(null),
  };

  if (slot === "top") {
    return (
      <article {...hoverHandlers} className={cn(cardClass, "text-center")}>
        <div className="flex justify-center">
          <SpokeIcon icon={Icon} index={index} active={isActive} />
        </div>
        <div className="mt-3">{content}</div>
      </article>
    );
  }

  if (slot === "left") {
    return (
      <article {...hoverHandlers} className={cardClass}>
        <div className="flex items-start gap-2.5 text-left">
          <SpokeIcon icon={Icon} index={index} active={isActive} />
          <div className="min-w-0 flex-1">{content}</div>
        </div>
      </article>
    );
  }

  return (
    <article {...hoverHandlers} className={cardClass}>
      <div className="flex items-start gap-2.5 text-left">
        <SpokeIcon icon={Icon} index={index} active={isActive} />
        <div className="min-w-0 flex-1">{content}</div>
      </div>
    </article>
  );
}

function MobileBenefit({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}) {
  const Icon = icon;

  return (
    <article className="group rounded-xl border border-navy-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-md">
      <div className="flex items-start gap-3">
        <SpokeIcon icon={Icon} index={index} active={false} />
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold text-navy group-hover:text-accent">
            {title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
        </div>
      </div>
    </article>
  );
}

export function ToolBenefitsSection() {
  const { title, intro } = TOOL_BENEFITS_SECTION;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-black tracking-tight text-navy sm:text-3xl md:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base md:text-[17px] md:leading-8">
              {intro}
            </p>
          </div>
        </FadeUp>

        <div className="relative mx-auto mt-16 hidden w-full max-w-5xl md:mt-20 md:block lg:max-w-6xl">
          <div className="relative h-[540px] w-full sm:h-[600px] lg:h-[680px]">
            <SpokeLines activeIndex={activeIndex} />

            <div
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: "50%",
                top: `${(HUB.y / DIAGRAM_HEIGHT) * 100}%`,
              }}
            >
              <BenefitHub active={activeIndex !== null} />
            </div>

            {CALCULATOR_BENEFITS.map((benefit, index) => {
              const node = SPOKE_NODES[index];
              const Icon = BENEFIT_ICONS[benefit.icon] ?? Zap;

              return (
                <div
                  key={benefit.title}
                  className="absolute z-20"
                  style={getNodeStyle(node)}
                >
                  <BenefitCard
                    title={benefit.title}
                    description={benefit.description}
                    icon={Icon}
                    index={index}
                    slot={node.slot}
                    isActive={activeIndex === index}
                    onHover={setActiveIndex}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <StaggerContainer
          staggerDelay={0.07}
          className="relative mx-auto mt-10 max-w-lg space-y-3 md:hidden"
        >
          <StaggerItem className="flex justify-center pb-3">
            <BenefitHub active={false} />
          </StaggerItem>
          {CALCULATOR_BENEFITS.map((benefit, index) => {
            const Icon = BENEFIT_ICONS[benefit.icon] ?? Zap;
            return (
              <StaggerItem key={benefit.title}>
                <MobileBenefit
                  title={benefit.title}
                  description={benefit.description}
                  icon={Icon}
                  index={index}
                />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
