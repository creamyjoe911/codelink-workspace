import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { SITE_CSS, HERO_OVERLAY_CSS } from "@/lib/grandnatural-content";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLD, canonicalUrl, OG_IMAGE } from "@/lib/seo-schema";

const TITLE = "Adatkezelési tájékoztató | Grandnatural Kft.";
const DESC =
  "A Grandnatural Kft. adatkezelési tájékoztatója: az adatkezelő adatai, a kezelt adatok köre, célja és jogalapja, valamint az érintett jogai.";

export const Route = createFileRoute("/adatvedelem")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/adatvedelem") }],
  }),
  component: Adatvedelem,
});

function Adatvedelem() {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  return (
    <div className="grandnatural-root" ref={rootRef}>
      <JsonLd
        json={breadcrumbJsonLD([
          { name: "Főoldal", path: "/" },
          { name: "Adatkezelési tájékoztató", path: "/adatvedelem" },
        ])}
      />
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + HERO_OVERLAY_CSS }} />

      <SiteNav current="/adatvedelem" />

      <main>
        <section className="hero sm">
          <div className="ovl" aria-hidden="true" />
          <div className="hin">
            <h1>Adatkezelési tájékoztató</h1>
            <p>
              A Grandnatural Kft. a látogatói és ügyféladatait a hatályos jogszabályoknak
              megfelelően kezeli.
            </p>
          </div>
        </section>

        <div className="sheet">
          <div className="sk"></div>
          <section className="wrap" style={{ paddingBlock: "clamp(56px,7vw,110px)" }}>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <div className="rv">
                <h2 style={{ marginBottom: 16 }}>1. Az adatkezelő adatai</h2>
                <p>
                  <b>Cégnév:</b> Grandnatural Kft.
                  <br />
                  <b>Székhely:</b> [UTCA, HÁZSZÁM], [IRÁNYÍTÓSZÁM] Eger
                  <br />
                  <b>Telefon:</b> +36 70 576 0108
                  <br />
                  <b>E-mail:</b> grandnatural2010@gmail.com
                  <br />
                  <b>Adószám:</b> [ADÓSZÁM]
                  <br />
                  <b>Cégjegyzékszám:</b> [CÉGJEGYZÉKSZÁM]
                </p>
              </div>

              <div className="rv" style={{ marginTop: 32 }}>
                <h2 style={{ marginBottom: 16 }}>2. A kezelt adatok köre</h2>
                <p>
                  [Ide kerül a tényleges adatkezelési tájékoztató szövege. Ez egy helyőrző tartalom,
                  amelyet a közzététel előtt a valós adatkezelési gyakorlatnak megfelelően kell
                  kitölteni.]
                </p>
              </div>

              <div className="rv" style={{ marginTop: 32 }}>
                <h2 style={{ marginBottom: 16 }}>3. Az adatkezelés célja és jogalapja</h2>
                <p>[Ide kerül az adatkezelés céljának és jogalapjának leírása.]</p>
              </div>

              <div className="rv" style={{ marginTop: 32 }}>
                <h2 style={{ marginBottom: 16 }}>4. Az adatkezelés időtartama</h2>
                <p>[Ide kerül az adatmegőrzés időtartamának leírása.]</p>
              </div>

              <div className="rv" style={{ marginTop: 32 }}>
                <h2 style={{ marginBottom: 16 }}>5. Az érintett jogai</h2>
                <p>
                  [Ide kerül az érintett jogainak felsorolása: hozzáférés, helyesbítés, törlés,
                  korlátozás, tiltakozás, adathordozhatóság.]
                </p>
              </div>

              <div className="rv" style={{ marginTop: 32 }}>
                <h2 style={{ marginBottom: 16 }}>6. Kapcsolat</h2>
                <p>
                  Az adatkezeléssel kapcsolatos kérdésekkel forduljon hozzánk az alábbi
                  elérhetőségeken:
                  <br />
                  Telefon: +36 70 576 0108
                  <br />
                  E-mail: grandnatural2010@gmail.com
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter current="/adatvedelem" />
    </div>
  );
}
