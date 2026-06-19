"use client";

import { useEffect } from "react";
import {
  applyTimeTheme,
  getThemePeriodFromRgb,
  getTimeThemePeriod,
  sampleVideoColors,
} from "@/lib/time-theme";

const VIDEO_SELECTOR = "video[data-theme-source]";
const SAMPLE_INTERVAL_MS = 2500;

export function TimeThemeProvider() {
  useEffect(() => {
    const syncFromClock = () => {
      applyTimeTheme(getTimeThemePeriod(new Date().getHours()));
    };

    const syncFromVideo = () => {
      const video = document.querySelector<HTMLVideoElement>(VIDEO_SELECTOR);
      if (!video) {
        syncFromClock();
        return;
      }

      const colors = sampleVideoColors(video);
      if (!colors) return;

      applyTimeTheme(getThemePeriodFromRgb(colors));
    };

    syncFromVideo();

    const video = document.querySelector<HTMLVideoElement>(VIDEO_SELECTOR);
    const onVideoReady = () => syncFromVideo();

    video?.addEventListener("loadeddata", onVideoReady);
    video?.addEventListener("seeked", onVideoReady);

    const interval = window.setInterval(syncFromVideo, SAMPLE_INTERVAL_MS);

    return () => {
      video?.removeEventListener("loadeddata", onVideoReady);
      video?.removeEventListener("seeked", onVideoReady);
      window.clearInterval(interval);
    };
  }, []);

  return null;
}
