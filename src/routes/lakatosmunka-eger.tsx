import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { SITE_CSS, HERO_OVERLAY_CSS } from "@/lib/grandnatural-content";
import { useReveal } from "@/hooks/use-reveal";
import { RelatedServices } from "@/components/related-services";
import { QuoteForm } from "@/components/quote-form";
import { ServiceBreadcrumb } from "@/components/service-breadcrumb";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { Img } from "@/components/img";
import {
  breadcrumbJsonLD,
  canonicalUrl,
  serviceJsonLD,
  faqPageJsonLD,
  OG_IMAGE,
} from "@/lib/seo-schema";

const TITLE = "Lakatosmunka Eger – kapuk, korlátok, lépcsők | Grandnatural";
const DESC =
  "Kapuk, korlátok, lépcsők, előtetők és műszaki biztonsági szerkezetek gyártása és helyszíni szerelése Egerben. Kérjen ajánlatot: +36 70 576 0108.";

export const Route = createFileRoute("/lakatosmunka-eger")({
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
    links: [{ rel: "canonical", href: canonicalUrl("/lakatosmunka-eger") }],
  }),
  component: LakatosmunkaEger,
});

const PHONE = "+36 70 576 0108";

function LakatosmunkaEger() {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  return (
    <div className="grandnatural-root" ref={rootRef}>
      <JsonLd
        json={breadcrumbJsonLD([
          { name: "Főoldal", path: "/" },
          { name: "Szolgáltatások", path: "/szolgaltatasok" },
          { name: "Lakatosmunka Eger", path: "/lakatosmunka-eger" },
        ])}
      />
      <JsonLd json={serviceJsonLD({ name: "Lakatosmunka Eger", description: DESC })} />
      <JsonLd
        json={faqPageJsonLD([
          {
            question: "Milyen lakatosmunkákat vállal?",
            answer:
              "Kapukat, korlátokat, lépcsőket, előtetőket és műszaki biztonsági szerkezeteket gyártunk és javítunk — egyedi méretben, az igények szerint.",
          },
          {
            question: "Helyszíni szerelést is elvégez?",
            answer:
              "Igen. A kész szerkezetet kiszállítjuk és a helyszínen beépítjük, rögzítjük. Saját darus teherautóval dolgozunk, így a szállítást és a szerelést összehangoltan oldjuk meg.",
          },
          {
            question: "Hogyan kérhetek ajánlatot?",
            answer:
              "Telefonáljon a +36 70 576 0108-as számon, vagy töltse ki az alábbi űrlapot. Szívesen felvesszük a munka részleteit.",
          },
          {
            question: "Egerben és Heves vármegyében vállal munkát?",
            answer:
              "Igen, Egerben és Heves vármegyében vállalunk lakatosmunkát és helyszíni szerelést.",
          },
        ])}
      />
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + HERO_OVERLAY_CSS }} />

      <SiteNav current="/lakatosmunka-eger" />

      <main>
        {/* Hero */}
        <section className="hero">
          <Img
            imgKey="images/lakatosmunka-hero"
            alt="Elkészült, piros festett platóoldal a műhelyben"
            className="bg"
            loading="eager"
            fetchpriority="high"
            decoding="sync"
          />
          <div className="ovl" aria-hidden="true" />
          <div className="hin">
            <ServiceBreadcrumb current="Lakatosmunka Eger" />
            <h1>Lakatosmunka Eger</h1>
            <p>
              Kapuk, korlátok, lépcsők, előtetők és műszaki biztonsági szerkezetek gyártása,
              javítása és helyszíni szerelése — saját műhelyből.
            </p>
            <a className="pill" href="/#kapcsolat">
              Ajánlatkérés<i>→</i>
            </a>
          </div>
          <div className="badge">
            <b>16+</b>
            <span>
              év szakmai
              <br />
              tapasztalat
            </span>
          </div>
        </section>

        {/* Sheet — intro */}
        <div className="sheet">
          <div className="sk"></div>

          <section className="wrap ab">
            <div className="al">
              <Img imgKey="images/nyersacel" alt="Nyersacél lemez a műhelyben" />
              <div className="stat">
                <b>16+</b>
                <span>év szakmai tapasztalat</span>
                <small>Lakatosmunka és acélszerkezet-gyártás egy kivitelezőtől.</small>
              </div>
            </div>
            <div>
              <h2>Amit gyártunk és szerelünk.</h2>
              <p style={{ marginTop: 24 }}>
                Kapuk, korlátok, lépcsők, előtetők és műszaki biztonsági szerkezetek gyártását,
                javítását és helyszíni szerelését vállaljuk Egerben és Heves vármegyében.
              </p>
              <p>
                Minden szerkezetet saját műhelyünkben készítünk — a méretezéstől a vágáson és
                hegesztésen át a festésig —, majd a kész munkát a helyszínen építjük be.
              </p>
              <a className="pill" href="/#kapcsolat">
                Kérjen ajánlatot<i>→</i>
              </a>
            </div>
          </section>
        </div>

        {/* Process */}
        <section className="soft">
          <div className="sk"></div>
          <div className="wrap">
            <div className="ctr" style={{ maxWidth: 720, margin: "0 auto" }}>
              <h2>Műhelytől a helyszínig.</h2>
              <p style={{ marginTop: 16 }}>
                A munkát két lépésben végezzük: először a műhelyben gyártjuk a szerkezetet, utána a
                helyszínen szereljük be.
              </p>
            </div>
            <div className="mx" style={{ marginTop: "clamp(36px,5vw,64px)" }}>
              <div className="cd">
                <h3>1. Műhelyi gyártás</h3>
                <p>
                  A nyersacél lemezt méretre vágjuk, csiszoljuk, hegesztjük és festjük. Minden a
                  saját műhelyünkben készül, így a minőséget végig kézben tartjuk.
                </p>
              </div>
              <div className="cd">
                <h3>2. Helyszíni szerelés</h3>
                <p>
                  A kész szerkezetet darus teherautónkkal szállítjuk, és a helyszínen beépítjük,
                  rögzítjük. A szállítás és a szerelés összehangoltan történik.
                </p>
              </div>
              <div className="cd">
                <h3>Egyedi méretben</h3>
                <p>
                  Kapukat, korlátokat, lépcsőket és előtetőket egyedi méretre készítjük, az adott
                  helyszín és igények szerint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section
          className="wrap"
          style={{
            paddingBlock: "clamp(80px,10vw,150px) clamp(40px,5vw,80px)",
          }}
        >
          <div className="ctr" style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2>Műhelyi munkáink.</h2>
          </div>
          <div className="gr" style={{ marginTop: "clamp(28px,4vw,48px)" }}>
            <figure className="pj">
              <div className="im">
                <Img
                  imgKey="images/11-egyedi-platooldal.jpg"
                  alt="Egyedi platóoldal lakatosmunkával"
                />
              </div>
              <figcaption>
                <small>Műhelygyártás</small>
                <b>Piros festett platóoldal</b>
                <span>Méretre vágott, hegesztett és festett szerkezet a saját műhelyből.</span>
              </figcaption>
            </figure>
            <figure className="pj">
              <div className="im">
                <Img
                  imgKey="images/15-lemez-osszeallitasa.jpg"
                  alt="Lemez összeállítása a műhelyben"
                />
              </div>
              <figcaption>
                <small>Összeállítás</small>
                <b>Lemez összeállítása</b>
                <span>Előre vágott lemezek és profilok pontos összeállítása a műhelyünkben.</span>
              </figcaption>
            </figure>
            <figure className="pj">
              <div className="im">
                <Img
                  imgKey="images/14-hegesztett-acel-konzol.jpg"
                  alt="Hegesztett acél konzol a műhelyben"
                />
              </div>
              <figcaption>
                <small>Műhelyi hegesztés</small>
                <b>Hegesztett acél konzol</b>
                <span>
                  Acél konzol méretre vágása, hegesztése és összeállítása a saját műhelyünkben.
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Band — A saját darunk, saját kézben */}
        <section className="band">
          <Img imgKey="images/lakatosmunka-hero" alt="Lakatosmunka és hegesztés a műhelyben" />
          <div className="ghost" aria-hidden="true">
            Lakatosmunka
          </div>
          <div className="wrap bc">
            <div className="bt">
              <h2>Minden egy kézből, a méretezéstől a beépítésig.</h2>
              <p className="lead">
                A kapukat, korlátokat és lépcsőket a saját műhelyünkben méretre vágjuk és
                hegesztjük, a kész szerkezetet darus teherautónkkal szállítjuk és a helyszínen
                építjük be. Így a lakatosmunka és a helyszíni szerelés egy kézből, egy menetrendből
                történik; nem kell utólag darut vagy szerelőt keresnie.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="wrap" style={{ paddingBlock: "clamp(56px,7vw,110px)" }}>
          <div className="fq">
            <div>
              <h2>Gyakori kérdések.</h2>
              <p className="lead" style={{ marginTop: 20 }}>
                A leggyakoribb kérdések a lakatosmunkáról és a helyszíni szerelésről.
              </p>
              <div className="sup">
                <b>Kérdése van?</b>
                <p style={{ margin: "0 0 8px" }}>
                  Hívjon minket, vagy töltse ki az ajánlatkérő űrlapot.
                </p>
                <a className="pill" href="/#kapcsolat">
                  Ajánlatkérés<i>→</i>
                </a>
              </div>
            </div>
            <div>
              <details>
                <summary>Milyen lakatosmunkákat vállal?</summary>
                <p>
                  Kapukat, korlátokat, lépcsőket, előtetőket és műszaki biztonsági szerkezeteket
                  gyártunk és javítunk — egyedi méretben, az igények szerint.
                </p>
              </details>
              <details>
                <summary>Helyszíni szerelést is elvégez?</summary>
                <p>
                  Igen. A kész szerkezetet kiszállítjuk és a helyszínen beépítjük, rögzítjük. Saját
                  darus teherautóval dolgozunk, így a szállítást és a szerelést összehangoltan
                  oldjuk meg.
                </p>
              </details>
              <details>
                <summary>Hogyan kérhetek ajánlatot?</summary>
                <p>
                  Telefonáljon a {PHONE}-as számon, vagy töltse ki az alábbi űrlapot. Szívesen
                  felvesszük a munka részleteit.
                </p>
              </details>
              <details>
                <summary>Egerben és Heves vármegyében vállal munkát?</summary>
                <p>
                  Igen, Egerben és Heves vármegyében vállalunk lakatosmunkát és helyszíni szerelést.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Quote CTA */}
        <section
          className="wrap"
          style={{
            paddingBlock: "clamp(56px,7vw,110px) clamp(72px,9vw,140px)",
          }}
        >
          <div className="ct">
            <div>
              <h2>Kérjen ajánlatot.</h2>
              <p className="lead" style={{ marginTop: 24 }}>
                Vegye fel velünk a kapcsolatot, és megbeszéljük a munka részleteit. Hívjon, vagy
                töltse ki az űrlapot.
              </p>
              <a className="row" href="tel:+36705760108">
                <span className="go">→</span>
                <span>
                  <small>Telefon</small>
                  <b>{PHONE}</b>
                </span>
              </a>
            </div>
            <QuoteForm
              formId="ajanlatkeres-lakatosmunka-eger"
              formName="Ajánlatkérő űrlap – Lakatosmunka Eger"
            />
          </div>
        </section>

        <RelatedServices exclude="/lakatosmunka-eger" />
      </main>

      <SiteFooter current="/lakatosmunka-eger" />
    </div>
  );
}
