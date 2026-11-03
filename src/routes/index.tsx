import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { SITE_INLINE_IMAGES, SITE_BODY_HTML, SITE_CSS } from "@/lib/grandnatural-content";
import { useLazyImages, getCachedLazyImages } from "@/hooks/use-lazy-images";
import { SiteNav } from "@/components/site-nav";
import { JsonLd } from "@/components/json-ld";
import { LOCAL_BUSINESS_JSONLD, canonicalUrl } from "@/lib/seo-schema";

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
      {
        rel: "preload",
        as: "image",
        href: "/images/grandnatural-hero.webp",
        fetchPriority: "high",
      },
      { rel: "canonical", href: canonicalUrl("/") },
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

  // Swap every <img data-src="images/..."> to its embedded data URI. Runs on
  // every mount (i.e. every client-side nav / revisit), stays synchronous once
  // the lazy module is cached, and re-swaps on bfcache restore — so photos
  // never disappear when navigating to/from this page.
  useLazyImages(rootRef);

  // Build the homepage body HTML. Only the logo and the hero photo are inlined
  // as data URIs here (so the initial HTML response stays small); every other
  // photo keeps its `images/...` filename as src and is swapped to a data URI
  // after first paint by the lazy-load effect below.
  const bodyHtml = useMemo(() => {
    let html = SITE_BODY_HTML;
    // Turn the four service cards in the scroll section into links to their pages.
    // Run before the image-src → data-URI swap so the filenames are still intact.
    html = html.replace(
      /<article class="sc">(<img loading="lazy" src="images\/04-elkeszult-piros-festett-platooldal\.jpg"[\s\S]*?)<\/article>/,
      '<a class="sc" style="text-decoration:none" href="/lakatosmunka-eger">$1</a>',
    );
    html = html.replace(
      /<article class="sc">(<img loading="lazy" src="images\/05-nyers-acel-lemez-a-muhelyben\.jpg"[\s\S]*?)<\/article>/,
      '<a class="sc" style="text-decoration:none" href="/acelszerkezet-gyartas-eger">$1</a>',
    );
    html = html.replace(
      /<article class="sc">(<img loading="lazy" src="images\/06-daruval-emelt-betonlap\.jpg"[\s\S]*?)<\/article>/,
      '<a class="sc" style="text-decoration:none" href="/daruzas-es-fuvarozas-eger">$1</a>',
    );
    html = html.replace(
      /<article class="sc">(<img loading="lazy" src="images\/10-acelvaz-szerelese-darus-teherautoval\.jpg"[\s\S]*?)<\/article>/,
      '<a class="sc" style="text-decoration:none" href="/felujitas-es-karbantartas">$1</a>',
    );
    // Add a hub link ("Összes szolgáltatás") into the services section header
    // so the homepage services section links to the Szolgáltatások hub page.
    html = html.replace(
      '<a class="pill" href="#kapcsolat">Kapcsolat<i>\u2192</i></a></div>',
      '<a class="pill o" href="/szolgaltatasok" style="margin-right:14px">Összes szolgáltatás<i>\u2192</i></a><a class="pill" href="#kapcsolat">Kapcsolat<i>\u2192</i></a></div>',
    );
    // Inline only the logo and the hero photo. The hero is the first paint's
    // background; the logo is in the (stripped) nav + footer. Every other
    // photo keeps its `images/...` filename in a data-src attribute with a
    // tiny transparent placeholder as src, so the browser never fires a 404
    // fetch for a non-existent `images/...` path; the lazy-load effect swaps
    // the real data URI in after first paint.
    for (const [name, img] of Object.entries(SITE_INLINE_IMAGES)) {
      html = html.split(`"${name}"`).join(`"${img.src}"`);
    }
    const PLACEHOLDER =
      "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    html = html.replace(
      /src="(images\/[^"]+)"/g,
      (_m, p1: string) => `src="${PLACEHOLDER}" data-src="${p1}"`,
    );
    // The top nav + call bar are rendered by <SiteNav> in React, so strip the
    // original raw-HTML nav and call bar from the body markup to avoid a
    // duplicate, non-interactive nav.
    html = html.replace(
      /<header class="nav">[\s\S]*?<\/header>\s*<a class="call"[\s\S]*?<\/a>/,
      "",
    );
    // Point the footer "Daruzás" link to the landing page.
    html = html.replace(
      '<a href="#szolg">Daruzás</a>',
      '<a href="/daruzas-es-fuvarozas-eger">Daruzás</a>',
    );
    return html;
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

    // contact form -> mailto + CRM tracking
    const frm = root.querySelector<HTMLFormElement>("#frm");
    const msg = root.querySelector<HTMLElement>("#msg");

    const getTrackingSessionId = () => {
      try {
        const sid = document.cookie.match(/(?:^|;\s*)__vibe_sid=([0-9a-f-]{36})(?:;|$)/)?.[1];
        if (sid) return sid;
      } catch {}
      return crypto.randomUUID();
    };
    const postTrackingEvent = (
      trackingPayload: Record<string, unknown> & {
        formData: Record<string, unknown>;
        formLabels: Record<string, string>;
      },
      options: {
        customFields?: Record<string, { value?: unknown; label: string }>;
      } = {},
    ) => {
      const { customFields = {} } = options;
      const eventPayload = {
        ...trackingPayload,
        formData: { ...trackingPayload.formData },
        formLabels: { ...trackingPayload.formLabels },
      };
      for (const [key, field] of Object.entries(customFields)) {
        if (field.value === undefined || field.value === "") continue;
        eventPayload.formData[key] = field.value;
        eventPayload.formLabels[key] = field.label;
      }
      for (const key of Object.keys(eventPayload.formData)) {
        eventPayload.formLabels[key] ||= key;
      }
      const body = new FormData();
      body.append("event", JSON.stringify(eventPayload));
      void fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
        method: "POST",
        headers: { version: "2021-07-28" },
        body,
      }).catch(() => {});
    };

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

      // Fire-and-forget CRM tracking (standard fields only here; work type is custom).
      postTrackingEvent(
        {
          type: "external_form_submission",
          timestamp: Date.now(),
          formId: "ajanlatkeres-form",
          formData: {
            phone: f.t.value,
            email: f.e.value,
            calendar_notes: f.d.value,
          },
          formLabels: {
            phone: "Telefonszám",
            email: "E-mail",
            calendar_notes: "Üzenet",
          },
          url: window.location.href,
          title: document.title,
          path: window.location.pathname,
          userAgent: navigator.userAgent,
          trackingId: "tk_e5da04a093dd44059979431bee8d9203",
          locationId: "o9nl9NLLuguzw8wf9pWu",
          projectId: "1793461824715116291",
          sessionId: getTrackingSessionId(),
          properties: {
            deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
            source: "ai_studio",
            projectId: "1793461824715116291",
            formName: "Ajánlatkérő űrlap",
          },
        },
        {
          customFields: {
            ei7PBcc6PH8G9oclWL5h: {
              value: f.k.value,
              label: "Munka típusa",
            },
          },
        },
      );

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

    // The references view is a hidden <main> toggled by a hash change (not a
    // route change). useLazyImages swaps its images to a real src on mount, but
    // they keep loading="lazy" while inside the display:none container, so the
    // browser never fetched them. When the view becomes visible, give every
    // image its real src, drop loading="lazy", and force-reload any not yet
    // fetched so the gallery photos appear immediately. One pass, no races:
    // not-yet-swapped (data-src) images are swapped here, already-swapped ones
    // are made eager + reloaded.
    if (isRefView && ref) {
      const apply = (map: Record<string, { src: string }>) => {
        const imgs = Array.from(ref.querySelectorAll<HTMLImageElement>("img"));
        for (const img of imgs) {
          const ds = img.getAttribute("data-src");
          if (ds && map[ds]) {
            img.removeAttribute("loading");
            img.src = map[ds].src;
            img.removeAttribute("data-src");
            continue;
          }
          // already swapped to a real src — make it eager and reload it so a
          // previously-hidden, never-fetched lazy image actually loads now
          img.removeAttribute("loading");
          if (!img.complete || img.naturalWidth === 0) {
            const s = img.src;
            img.src = "";
            img.src = s;
          }
        }
      };
      const cached = getCachedLazyImages();
      if (cached) {
        apply(cached);
      } else {
        void import("@/lib/grandnatural-lazy-images").then((m) => apply(m.SITE_LAZY_IMAGES));
      }

      // Re-apply the active filter so the tabs work on first open.
      const tabs = Array.from(ref.querySelectorAll<HTMLButtonElement>(".tb button"));
      const items = Array.from(ref.querySelectorAll<HTMLElement>(".pj"));
      const activeTab = tabs.find((b) => b.getAttribute("aria-pressed") === "true") ?? tabs[0];
      const k = activeTab?.dataset["f"] ?? "all";
      items.forEach((el) => {
        el.hidden = !(k === "all" || (el.dataset["c"] ?? "").split(" ").indexOf(k) > -1);
      });
    }
  }, [isRefView]);

  return (
    <div className="grandnatural-root" ref={rootRef}>
      <JsonLd json={LOCAL_BUSINESS_JSONLD} />
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS }} />
      <SiteNav current="/" />
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </div>
  );
}
