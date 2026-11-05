// Motion-powered scroll reveal. Replaces the manual IntersectionObserver logic
// that previously added a `.in` class to `.rv` elements.
//
// Hybrid behaviour to avoid the "flash" on already-visible content:
// - Elements already inside the viewport at mount (above the fold) are shown
//   immediately with no animation — animating them on load is what caused the
//   flash, since `inView` fires instantly for them.
// - Elements below the fold get the fade-up reveal the first time they enter
//   the viewport from below, preserving the scroll-reveal effect where it
//   matters.
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

    // Split into already-visible (above the fold) vs. below-the-fold.
    // Already-visible elements are shown immediately — no animation — so they
    // don't flash on mount. Below-the-fold elements keep the scroll reveal.
    const vh = window.innerHeight;
    const visible: HTMLElement[] = [];
    const hidden: HTMLElement[] = [];
    for (const el of els) {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh) {
        visible.push(el);
      } else {
        hidden.push(el);
      }
    }

    // Show already-visible elements right away.
    visible.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });

    if (hidden.length === 0) return;

    // `inView` fires once per element when it enters the viewport. The
    // callback receives the element as its first argument. We animate opacity
    // + a small translateY fade-up. This mirrors the original
    // IntersectionObserver → add("in") flow so the reveal happens once.
    const stop = inView(
      hidden,
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
