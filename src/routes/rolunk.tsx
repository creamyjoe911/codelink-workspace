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
  "A Grandnatural Kft. acélszerkezet-gyártással, lakatosmunkával, daruzással és fuvarozással, felújítással és karbantartással foglalkozik Egerben és Heves vármegyében — saját műhelyből, egy kivitelezőtől.";

const PHONE = "+36 70 576 0108";
const EMAIL = "grandnatural2010@gmail.com";

// The four service areas, each linking to its own page.
const services = [
  {
    href: "/lakatosmunka-eger",
    label: "Lakatosmunka",
    desc: "Kapuk, korlátok, lépcsők és biztonsági szerkezetek gyártása és helyszíni szerelése.",
  },
  {
    href: "/acelszerkezet-gyartas-eger",
    label: "Acélszerkezet gyártás",
    desc: "Ipari acélvázak, teherhordó szerkezetek és egyedi gépvázak műhelyi gyártása és szerelése.",
  },
  {
    href: "/daruzas-es-fuvarozas-eger",
    label: "Daruzás és fuvarozás",
    desc: "Darus rakodás és szállítás saját teherautóval — építőanyagok, nehézgépek, csarnok- és betonelemek.",
  },
  {
    href: "/felujitas-es-karbantartas-eger",
    label: "Felújítás és karbantartás",
    desc: "Magán- és ipari ingatlanok felújítása, karbantartása és korszerűsítése.",
  },
];

// How we work — a general 5-step process from inquiry to handover.
const steps = [
  {
    h: "1. Ajánlatkérés",
    p: "Felvesszük Önnel a kapcsolatot telefonon vagy az űrlapon, és megbeszéljük a munka részleteit, a helyszínt és az igényeket.",
  },
  {
    h: "2. Tervezés és egyeztetés",
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
      { name: "author", content: "Grandnatural Kft." },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:url", content: canonicalUrl("/rolunk") },
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
            imgKey="images/szolgaltatasok"
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
        </section>

        {/* Sheet — Ki vagyunk */}
        <div className="sheet">
          <div className="sk"></div>
          <section className="wrap ab">
            <div className="al">
              <Img
                imgKey="images/Javitastol-a-teljes-felujitasig"
                alt="Felújítás a teljes befejezésig — egy kézből"
              />
            </div>
            <div className="rv">
              <h2>Kik vagyunk.</h2>
              <p style={{ marginTop: 24 }}>
                A Grandnatural Kft. acélszerkezet-gyártással, lakatosmunkával, daruzással és
                fuvarozással, valamint felújítással és karbantartással foglalkozik. A munkáinkat
                Egerben és Heves vármegyében végezzük.
              </p>
              <p>
                A szerkezeteket saját műhelyünkben gyártjuk, és saját darus teherautóval szállítjuk,
                szereljük be a helyszínen — így a munkát egy kézből, egy kivitelezőtől végigvisszük.
              </p>
              <a className="pill" href="/#kapcsolat">
                Kérjen ajánlatot<i>→</i>
              </a>
            </div>
          </section>
        </div>

        {/* Mivel foglalkozunk — four service cards, each linking to its page */}
        <section className="soft">
          <div className="sk"></div>
          <div className="wrap">
            <div className="ctr rv" style={{ maxWidth: 720, margin: "0 auto" }}>
              <h2>Mivel foglalkozunk.</h2>
              <p style={{ marginTop: 16 }}>
                Négy szolgáltatási terület, egy kivitelezőtől — a műhelytől a helyszínig.
              </p>
            </div>
            <div className="mx rv" style={{ marginTop: "clamp(36px,5vw,64px)" }}>
              {services.map((s) => (
                <a key={s.href} className="cd" href={s.href} style={{ textDecoration: "none" }}>
                  <h3>{s.label}</h3>
                  <p>{s.desc}</p>
                  <span className="go">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Fuvarozás */}
        <section className="band">
          <Img
            imgKey="images/grandnatural-hero"
            alt="Grandnatural darus teherautója áruszállítás közben"
            className="bg"
            loading="lazy"
            decoding="async"
          />
          <div className="ghost" aria-hidden="true">
            Fuvarozás
          </div>
          <div className="wrap bc">
            <div className="bt rv">
              <h2>Fuvarozás.</h2>
              <p className="lead">
                Áruszállítás és fuvarozás 3,5–40 tonnáig, az igényekhez igazodó járműkapacitással.
              </p>
            </div>
          </div>
        </section>

        {/* Hogyan dolgozunk */}
        <section
          className="wrap"
          style={{ paddingBlock: "clamp(80px,10vw,150px) clamp(40px,5vw,80px)" }}
        >
          <div className="ctr rv" style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2>Hogyan dolgozunk.</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Az ajánlatkéréstől az átadásig minden lépést egy kézből végzünk — a műhelyi gyártástól
              a helyszíni szerelésig.
            </p>
          </div>
          <div className="mx rv" style={{ marginTop: "clamp(36px,5vw,64px)" }}>
            {steps.map((s, i) => (
              <div className="cd" key={i}>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Elérhetőség */}
        <section
          className="wrap"
          style={{
            paddingBlock: "clamp(56px,7vw,110px) clamp(72px,9vw,140px)",
          }}
        >
          <div className="ct rv">
            <div>
              <h2>Elérhetőség.</h2>
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
              <a className="row" href={`mailto:${EMAIL}`}>
                <span className="go">✉</span>
                <span>
                  <small>E-mail</small>
                  <b>{EMAIL}</b>
                </span>
              </a>
              <div style={{ marginTop: 28 }}>
                <b>Nyitvatartás:</b>
                <br />
                Hétfő–Péntek 8:00–17:00
                <br />
                <b>Helyszín:</b> Eger és Heves vármegye
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
