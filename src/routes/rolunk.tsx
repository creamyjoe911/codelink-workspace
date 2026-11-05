import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { SITE_CSS, HERO_OVERLAY_CSS } from "@/lib/grandnatural-content";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { Img } from "@/components/img";
import { breadcrumbJsonLD, aboutPageJsonLD, canonicalUrl, OG_IMAGE } from "@/lib/seo-schema";

const TITLE = "Rólunk – Grandnatural Kft., Eger";
const DESC =
  "A Grandnatural Kft. acélszerkezet-gyártással, lakatosmunkával, daruzással és kivitelezéssel foglalkozik Egerben és Heves vármegyében — saját műhelyből, saját darus teherautóval.";

const PHONE = "+36 70 576 0108";

// The team — placeholders to be replaced with real names and positions.
const team = [
  { name: "[NÉV]", role: "[POZÍCIÓ]" },
  { name: "[NÉV]", role: "[POZÍCIÓ]" },
  { name: "[NÉV]", role: "[POZÍCIÓ]" },
];

// How we work — a 5-step process from inquiry to handover.
const steps = [
  {
    h: "1. Ajánlatkérés",
    p: "Felvesszük Önnel a kapcsolatot telefonon vagy az űrlapon, és megbeszéljük a munka részleteit, a helyszínt és az igényeket.",
  },
  {
    h: "2. Felvétel és tervezés",
    p: "Egyeztetünk a méretekről, az anyagokról és a kivitelezés menetrendjéről, majd ár-ajánlatot készítünk.",
  },
  {
    h: "3. Műhelyi gyártás",
    p: "A szerkezetet saját műhelyünkben méretre vágjuk, hegesztjük és előkészítjük a helyszíni szereléshez.",
  },
  {
    h: "4. Helyszíni szerelés",
    p: "A kész szerkezetet darus teherautónkkal szállítjuk, és a helyszínen beépítjük, rögzítjük.",
  },
  {
    h: "5. Átadás",
    p: "A munkát átadjuk, és ellenőrizzük, hogy minden a megállapodásnak megfelelően elkészült-e.",
  },
];

export const Route = createFileRoute("/rolunk")({
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
    links: [{ rel: "canonical", href: canonicalUrl("/rolunk") }],
  }),
  component: Rolunk,
});

function Rolunk() {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  return (
    <div className="grandnatural-root" ref={rootRef}>
      <JsonLd
        json={breadcrumbJsonLD([
          { name: "Főoldal", path: "/" },
          { name: "Rólunk", path: "/rolunk" },
        ])}
      />
      <JsonLd
        json={aboutPageJsonLD({ name: "Rólunk – Grandnatural Kft., Eger", description: DESC })}
      />
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + HERO_OVERLAY_CSS }} />

      <SiteNav current="/rolunk" />

      <main>
        {/* Hero */}
        <section className="hero">
          <Img
            imgKey="images/grandnatural-hero"
            alt="Grandnatural Kft. — acélszerkezet-gyártás és daruzás a helyszínen"
            className="bg"
            loading="eager"
            fetchpriority="high"
            decoding="sync"
          />
          <div className="ovl" aria-hidden="true" />
          <div className="hin">
            <h1>Rólunk</h1>
            <p>
              Acélszerkezet-gyártás, lakatosmunka, daruzás és kivitelezés Egerben és Heves
              vármegyében — saját műhelyből, egy kivitelezőtől.
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

        {/* Sheet — Who we are */}
        <div className="sheet">
          <div className="sk"></div>
          <section className="wrap ab">
            <div className="al">
              <Img
                imgKey="images/05-nyers-acel-lemez-a-muhelyben.jpg"
                alt="Nyersacél lemez a műhelyben"
              />
              <div className="stat">
                <b>[ALAPÍTÁS ÉVE]</b>
                <span>alapítástól</span>
                <small>Grandnatural Kft., Eger</small>
              </div>
            </div>
            <div>
              <h2>Kik vagyunk.</h2>
              <p style={{ marginTop: 24 }}>
                A Grandnatural Kft. [ALAPÍTÁS ÉVE] óta végez acélszerkezet-gyártást, lakatosmunkát,
                daruzást és kivitelezést. Székhelyünk Egerben található, a munkáit pedig Egerben és
                Heves vármegyében vállaljuk.
              </p>
              <p>
                Saját műhelyünkben gyártjuk a szerkezeteket, és saját darus teherautóval szállítjuk,
                szereljük be a helyszínen — így a munkát egy kézből, egy kivitelezőtől végigviszik.
              </p>
              <a className="pill" href="/#kapcsolat">
                Kérjen ajánlatot<i>→</i>
              </a>
            </div>
          </section>
        </div>

        {/* The team */}
        <section className="soft">
          <div className="sk"></div>
          <div className="wrap">
            <div className="ctr rv" style={{ maxWidth: 720, margin: "0 auto" }}>
              <h2>A csapat.</h2>
              <p style={{ marginTop: 16 }}>
                A munkát saját műhelyünkben és saját gépparkkal végezzük — [NÉV – POZÍCIÓ] és
                munkatársai.
              </p>
            </div>
            <div className="mx rv" style={{ marginTop: "clamp(36px,5vw,64px)" }}>
              {team.map((m, i) => (
                <div className="cd" key={i}>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications and equipment */}
        <section
          className="wrap"
          style={{ paddingBlock: "clamp(80px,10vw,150px) clamp(40px,5vw,80px)" }}
        >
          <div className="ctr rv" style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2>Képesítések és géppark.</h2>
            <p style={{ marginTop: 16 }}>
              A munkát a szükséges képesítésekkel és saját gépparkkal végezzük.
            </p>
          </div>
          <div className="mx rv" style={{ marginTop: "clamp(28px,4vw,48px)" }}>
            <div className="cd">
              <h3>Képesítések</h3>
              <p>[PÉLDÁUL EN 1090 – HA RENDELKEZIK VELE]</p>
            </div>
            <div className="cd">
              <h3>Saját darus teherautó</h3>
              <p>[DARU TÍPUSA ÉS TEHERBÍRÁSA]</p>
            </div>
            <div className="cd">
              <h3>Géppark</h3>
              <p>[GÉPPARK]</p>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="band">
          <Img
            imgKey="images/grandnatural-hero"
            alt="Grandnatural — helyszíni acélszerelés és daruzás"
            className="bg"
            loading="lazy"
            decoding="async"
          />
          <div className="ghost" aria-hidden="true">
            Grandnatural
          </div>
          <div className="wrap bc">
            <div className="bt">
              <h2>Hogyan dolgozunk.</h2>
              <p className="lead">
                Az ajánlatkéréstől az átadásig minden lépést egy kézből végzünk — a műhelyi
                gyártástól a helyszíni szerelésig.
              </p>
            </div>
          </div>
        </section>

        <section className="wrap" style={{ paddingBlock: "clamp(56px,7vw,110px)" }}>
          <div className="mx rv">
            {steps.map((s, i) => (
              <div className="cd" key={i}>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact details + opening hours */}
        <section
          className="wrap"
          style={{
            paddingBlock: "clamp(56px,7vw,110px) clamp(72px,9vw,140px)",
          }}
        >
          <div className="ct rv">
            <div>
              <h2>Kapcsolat.</h2>
              <p className="lead" style={{ marginTop: 24 }}>
                Vegye fel velünk a kapcsolatot, és megbeszéljük a munka részleteit.
              </p>
              <a className="row" href="tel:+36705760108">
                <span className="go">→</span>
                <span>
                  <small>Telefon</small>
                  <b>{PHONE}</b>
                </span>
              </a>
              <div style={{ marginTop: 28 }}>
                <b>Nyitvatartás:</b>
                <br />
                Hétfő–Péntek 8:00–17:00
                <br />
                <b>Cím:</b> Eger, Heves vármegye
              </div>
            </div>
            <div>
              <h3>Ajánlatkérő űrlap</h3>
              <p style={{ marginTop: 16 }}>
                Töltse ki az űrlapot a főoldalon, és hamarosan felvesszük Önnel a kapcsolatot.
              </p>
              <p style={{ marginTop: 24 }}>
                <a className="pill" href="/#kapcsolat">
                  Ugrás az űrlaphoz<i>→</i>
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter current="/rolunk" />
    </div>
  );
}
