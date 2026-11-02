// After first paint, swap every <img data-src="images/..."> inside the page
// root to its embedded data URI. The initial HTML response stays small: only
// the logo + hero are inlined, every other photo is deferred to a separate
// chunk so no route statically imports the full set of 28 images.
//
// CRITICAL: the swap must run on EVERY page render and every route change —
// including client-side navigations, hash changes, and browser back/forward
// (bfcache) restores — not only on the first load. So the lazy image module
// is cached after its first import and subsequent swaps are synchronous, and
// a MutationObserver catches any <img> React mounts after the initial effect
// (e.g. when a route component re-renders or a view toggles from hidden).
import { useEffect } from "react";

export const PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

type LazyImageMap = Record<string, { src: string }>;

// Module-level cache so the dynamic import only happens once; after that,
// performSwap runs synchronously, which is what makes revisits and rapid
// client-side navigations show their photos immediately.
let cachedLazyImages: LazyImageMap | null = null;
let lazyModulePromise: Promise<LazyImageMap> | null = null;

function loadLazyImages(): Promise<LazyImageMap> {
  if (cachedLazyImages) return Promise.resolve(cachedLazyImages);
  if (!lazyModulePromise) {
    lazyModulePromise = import("@/lib/grandnatural-lazy-images").then((mod) => {
      cachedLazyImages = mod.SITE_LAZY_IMAGES;
      return mod.SITE_LAZY_IMAGES;
    });
  }
  return lazyModulePromise;
}

// Swap every <img data-src="images/..."> inside `root` (and, as a safety net,
// any stray ones anywhere in the document) to its embedded data URI. Returns
// true if at least one image was swapped.
function performSwap(root: HTMLElement | null): boolean {
  if (!root || !cachedLazyImages) return false;
  let swapped = false;
  // Prefer the route root; fall back to the whole document so a missed root
  // (e.g. during a rapid route transition) never leaves a photo blank.
  const scopes: HTMLElement[] = [root, document.body].filter((el): el is HTMLElement => !!el);
  for (const scope of scopes) {
    const imgs = Array.from(scope.querySelectorAll<HTMLImageElement>('img[data-src^="images/"]'));
    for (const img of imgs) {
      const key = img.getAttribute("data-src") || "";
      const data = cachedLazyImages[key];
      if (data) {
        img.src = data.src;
        img.removeAttribute("data-src");
        swapped = true;
      }
    }
  }
  return swapped;
}

export function useLazyImages(rootRef: { current: HTMLElement | null }) {
  useEffect(() => {
    let cancelled = false;
    const root = rootRef.current;

    // 1) Ensure the lazy image module is loaded, then swap synchronously.
    //    After the first load this resolves immediately and the swap is
    //    instant — no requestIdleCallback / setTimeout delay to drop.
    void loadLazyImages().then((map) => {
      if (cancelled || !map) return;
      performSwap(rootRef.current);
    });

    // 2) Catch any <img data-src> React mounts AFTER the initial effect —
    //    e.g. when a route re-renders, a view toggles from hidden, or the
    //    bfcache restores an older DOM. Scoped to the route root.
    const observer = new MutationObserver(() => {
      if (cancelled || !cachedLazyImages) return;
      performSwap(rootRef.current);
    });
    if (root) {
      observer.observe(root, { childList: true, subtree: true });
    }

    // 3) bfcache restore (browser back/forward): the cached DOM may still
    //    carry data-src placeholders, so swap again on pageshow.
    const onShow = () => {
      void loadLazyImages().then((map) => {
        if (cancelled || !map) return;
        performSwap(rootRef.current);
      });
    };
    window.addEventListener("pageshow", onShow);

    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener("pageshow", onShow);
    };
    // rootRef identity is stable across renders; this effect re-runs on
    // every mount (i.e. every route change / revisit), which is what we want.
  }, [rootRef]);
}
