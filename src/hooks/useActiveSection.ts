"use client";

import { useEffect, useState } from "react";

const HEADER_OFFSET = 72;

function getActiveSectionId(sectionIds: string[]): string {
  const trigger = HEADER_OFFSET;

  let activeId = "";

  for (const id of sectionIds) {
    const element = document.getElementById(id);
    if (!element) continue;

    const { top, bottom } = element.getBoundingClientRect();
    if (top <= trigger && bottom > trigger) {
      activeId = id;
    }
  }

  return activeId;
}

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (sectionIds.length === 0) {
      setActiveId("");
      return;
    }

    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const next = getActiveSectionId(sectionIds);
        setActiveId((prev) => (prev === next ? prev : next));
      });
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
    };
  }, [sectionIds]);

  return activeId;
}
