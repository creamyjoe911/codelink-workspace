// Motion-powered scroll reveal. Replaces the manual IntersectionObserver logic
// that previously added a `.in` class to `.rv` elements.
//
// Motion's `inView` + `animate` drive the same visual behaviour the CSS already
// encodes (the `.js .rv` → `.js .rv.in` fade-up) but in a way that re-runs on
// every mount and every route change, including client-side navigations back to
// a page and bfcache restores — which the original `useEffect([])` observer
// did not reliably handle.
//
// Why `motion` (not `motion/react`)? The homepage renders its body through
// `dangerouslySetInnerHTML`, so the `.rv` elements are plain DOM nodes, not
// React components we can wrap in `motion.div`. Motion's imperative `inView`
// + `animate` work directly on DOM elements, which is exactly what we need.
// `useReducedMotion` from `motion/react` mirrors `prefers-reduced-motion` so the
// reveal is skipped (elements shown immediately) for users who ask for it.
import { useEffect } from "react";
import { inView, animate } from "motion";
import { useReducedMotion } from "motion/react";

/**
 * Animate `.rv` elements into view with a fade-up, matching the existing
 * `.js .rv` → `.js .rv.in` CSS. Runs on every mount (i.e. every route change /
 * revisit) so it works on client-side navigations and bfcache restores.
 *
 * Call from any route component with a ref to the route root:
 *   const rootRef = useRef<HTMLDivElement>(null);
 *   useReveal(rootRef);
 */
export function useReveal(rootRef: { current: HTMLElement | null }) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // When the user prefers reduced motion, show every reveal element
    // immediately and skip the animation — mirrors the CSS
    // `@media (prefers-reduced-motion: reduce)` behaviour.
    const els = Array.from(root.querySelectorAll<HTMLElement>(".rv"));
    if (prefersReduced) {
      els.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    // `inView` fires once per element when it enters the viewport. The
    // callback receives the element as its first argument. We animate opacity
    // + a small translateY fade-up. This mirrors the original
    // IntersectionObserver → add("in") flow so the reveal happens once.
    const stop = inView(
      els,
      (target: Element) => {
        animate(
          target as HTMLElement,
          { opacity: [0, 1], transform: ["translateY(24px)", "translateY(0px)"] },
          { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        );
      },
      { margin: "0px 0px -10% 0px" },
    );

    return () => {
      stop();
    };
    // Re-run on every mount so revisits and route changes re-reveal. The
    // rootRef identity is stable; prefersReduced updates the branch.
  }, [rootRef, prefersReduced]);
}
