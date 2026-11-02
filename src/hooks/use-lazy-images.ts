// After first paint, swap every <img data-src="images/..."> inside the page
// root to its embedded data URI. Mirrors the homepage's lazy-load effect so
// the initial HTML response stays small: only the logo + hero are inlined,
// every other photo is deferred to a dynamically-imported chunk (so no route
// statically imports the full set of 28 images).
import { useEffect } from "react";

export const PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

type LazyImageMap = Record<string, { src: string }>;

export function useLazyImages(rootRef: { current: HTMLElement | null }) {
  useEffect(() => {
    let cancelled = false;
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    const ric = win.requestIdleCallback;
    const schedule = (cb: () => void): number =>
      typeof ric === "function" ? ric(cb, { timeout: 2000 }) : window.setTimeout(cb, 200);
    schedule(async () => {
      if (cancelled) return;
      const root = rootRef.current;
      if (!root) return;
      const mod = (await import("@/lib/grandnatural-lazy-images")) as {
        SITE_LAZY_IMAGES: LazyImageMap;
      };
      if (cancelled) return;
      const imgs = Array.from(root.querySelectorAll<HTMLImageElement>('img[data-src^="images/"]'));
      for (const img of imgs) {
        const key = img.getAttribute("data-src") || "";
        const data = mod.SITE_LAZY_IMAGES[key];
        if (data) {
          img.src = data.src;
          img.removeAttribute("data-src");
        }
      }
    });
    return () => {
      cancelled = true;
    };
  }, [rootRef]);
}
