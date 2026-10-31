import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { SITE_IMAGES, SITE_BODY_HTML, SITE_CSS } from "@/lib/grandnatural-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grandnatural – Acélszerkezet, daruzás és kivitelezés Egerben" },
      {
        name: "description",
        content:
          "Acélszerkezetek, lakatosmunkák, daruzás és egyedi kivitelezés Egerben. Saját darus teherautó, több mint 16 év tapasztalat a Heves vármegyei építkezéseken.",
      },
      {
        property: "og:title",
        content: "Grandnatural – Acélszerkezet, daruzás és kivitelezés Egerben",
      },
      {
        property: "og:description",
        content:
          "Acélszerkezetek, lakatosmunkák, daruzás és egyedi kivitelezés Egerben. Saját darus teherautó, több mint 16 év tapasztalat a Heves vármegyei építkezéseken.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;800&display=swap",
      },
    ],
  }),
  component: Grandnatural,
});

// Parse the original body HTML once and inject the original CSS + image data URIs.
// The markup is rendered through dangerouslySetInnerHTML so the site keeps its
// exact original structure; the small interactive behaviours are re-implemented in
// React via refs/observers attached after mount.
function Grandnatural() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isRefView, setIsRefView] = useState(false);

  // Build the full document body HTML with images already swapped for data URIs.
  const bodyHtml = useMemo(() => {
    let html = SITE_BODY_HTML;
    for (const [name, dataUri] of Object.entries(SITE_IMAGES)) {
      html = html.split(`"${name}"`).join(`"${dataUri}"`);
    }
    return html;
  }, []);

  // Inject the original site CSS into the document head once.
  useEffect(() => {
    const id = "grandnatural-site-css";
    let style = document.getElementById(id) as HTMLStyleElement | null;
    if (!style) {
      style = document.createElement("style");
      style.id = id;
      style.textContent = SITE_CSS;
      document.head.appendChild(style);
    }
    return () => {
      // leave the style in place for the lifetime of the SPA
    };
  }, []);

  // ---- Hash routing between home (#) and references (#referenciak) ----
  useEffect(() => {
    const route = () => setIsRefView(window.location.hash.slice(1) === "referenciak");
    route();
    window.addEventListener("hashchange", route);
    return () => window.removeEventListener("hashchange", route);
  }, []);

  // ---- After mount: wire up scroll reveals, before/after slider, services
  // horizontal scroll, and the contact form (mailto) ----
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // reveal-on-scroll
    const els = Array.from(root.querySelectorAll<HTMLElement>(".rv"));
    if ("IntersectionObserver" in window) {
      const o = new IntersectionObserver(
        (entries) => {
          entries.forEach((x) => {
            if (x.isIntersecting) {
              x.target.classList.add("in");
              o.unobserve(x.target);
            }
          });
        },
        { threshold: 0.1 },
      );
      els.forEach((e) => o.observe(e));
    } else {
      els.forEach((e) => e.classList.add("in"));
    }

    // before/after slider
    const rng = root.querySelector<HTMLInputElement>("#rng");
    const aft = root.querySelector<HTMLElement>("#aft");
    const bar = root.querySelector<HTMLElement>("#bar");
    const t1 = root.querySelector<HTMLElement>("#t1");
    const t2 = root.querySelector<HTMLElement>("#t2");
    const slider = () => {
      if (!rng || !aft || !bar) return;
      const v = +rng.value;
      aft.style.clipPath = `inset(0 0 0 ${v}%)`;
      bar.style.left = `${v}%`;
      if (t1) t1.style.opacity = v < 12 ? "0" : "1";
      if (t2) t2.style.opacity = v > 88 ? "0" : "1";
    };
    rng?.addEventListener("input", slider);
    slider();

    // services horizontal scroll (scroll-driven translate)
    const svw = root.querySelector<HTMLElement>(".svw");
    const trk = root.querySelector<HTMLElement>("#trk2");
    let D = 0,
      cur = 0,
      tgt = 0,
      run = false;
    const rm = window.matchMedia("(prefers-reduced-motion:reduce)");
    const size = () => {
      if (!svw || !trk) return;
      if (rm.matches) {
        svw.style.height = "";
        return;
      }
      D = Math.max(0, trk.scrollWidth - trk.parentElement!.clientWidth);
      svw.style.height = `${window.innerHeight + D}px`;
      upd();
    };
    const upd = () => {
      if (!svw || !trk || rm.matches) return;
      const r = svw.getBoundingClientRect();
      tgt = (D ? Math.min(1, Math.max(0, -r.top / D)) : 0) * D;
      if (!run) {
        run = true;
        requestAnimationFrame(tick);
      }
    };
    const tick = () => {
      cur += (tgt - cur) * 0.14;
      if (Math.abs(tgt - cur) < 0.4) cur = tgt;
      if (trk) trk.style.transform = `translate3d(${-cur}px,0,0)`;
      if (cur !== tgt) requestAnimationFrame(tick);
      else run = false;
    };
    window.addEventListener("scroll", upd, { passive: true });
    window.addEventListener("resize", size);
    window.addEventListener("load", size);
    if ((document as any).fonts?.ready) (document as any).fonts.ready.then(size);
    size();

    // contact form -> mailto
    const frm = root.querySelector<HTMLFormElement>("#frm");
    const msg = root.querySelector<HTMLElement>("#msg");
    const onSubmit = (ev: Event) => {
      ev.preventDefault();
      if (!frm) return;
      const f = (frm as any).elements;
      const body =
        "Név: " +
        f.n.value +
        "\nTelefonszám: " +
        f.t.value +
        "\nE-mail: " +
        f.e.value +
        "\nMunka típusa: " +
        f.k.value +
        "\n\n" +
        f.d.value;
      if (msg)
        msg.textContent =
          "Megnyitjuk az e-mail programját. Ha nem történik semmi, hívjon: +36 70 576 0108, vagy írjon: grandnatural2010@gmail.com";
      window.location.href =
        "mailto:grandnatural2010@gmail.com?subject=" +
        encodeURIComponent("Ajánlatkérés" + (f.k.value ? " – " + f.k.value : "")) +
        "&body=" +
        encodeURIComponent(body);
    };
    frm?.addEventListener("submit", onSubmit);

    // references filter tabs
    const refMain = root.querySelector<HTMLElement>("#v-ref");
    const tabs = Array.from(refMain?.querySelectorAll<HTMLButtonElement>(".tb button") ?? []);
    const items = Array.from(refMain?.querySelectorAll<HTMLElement>(".pj") ?? []);
    const filter = (k: string) => {
      items.forEach((el) => {
        el.hidden = !(k === "all" || (el.dataset["c"] ?? "").split(" ").indexOf(k) > -1);
      });
      tabs.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset["f"] === k)));
    };
    tabs.forEach((b) => b.addEventListener("click", () => filter(b.dataset["f"] ?? "all")));

    return () => {
      window.removeEventListener("scroll", upd);
      window.removeEventListener("resize", size);
      window.removeEventListener("load", size);
      frm?.removeEventListener("submit", onSubmit);
    };
  }, []);

  // Toggle visibility of the two <main> views based on hash routing.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const home = root.querySelector<HTMLElement>("#v-home");
    const ref = root.querySelector<HTMLElement>("#v-ref");
    const navref = root.querySelector<HTMLElement>("#navref");
    if (home) home.hidden = isRefView;
    if (ref) ref.hidden = !isRefView;
    if (navref) {
      if (isRefView) navref.setAttribute("aria-current", "page");
      else navref.removeAttribute("aria-current");
    }
    document.title = isRefView
      ? "Referenciák | Grandnatural"
      : "Grandnatural – Acélszerkezet, daruzás és kivitelezés Egerben";
    if (isRefView) window.scrollTo(0, 0);
  }, [isRefView]);

  return (
    <div className="grandnatural-root" ref={rootRef}>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </div>
  );
}
