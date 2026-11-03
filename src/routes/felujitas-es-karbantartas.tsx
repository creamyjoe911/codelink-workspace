import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { SITE_CSS } from "@/lib/grandnatural-content";
import { useLazyImages, PLACEHOLDER } from "@/hooks/use-lazy-images";
import { RelatedServices } from "@/components/related-services";
import { QuoteForm } from "@/components/quote-form";
import { ServiceBreadcrumb } from "@/components/service-breadcrumb";
import { SiteNav, SITE_LOGO_SVG } from "@/components/site-nav";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLD, canonicalUrl } from "@/lib/seo-schema";

export const Route = createFileRoute("/felujitas-es-karbantartas")({
  head: () => ({
    meta: [
      { title: "Felújítás és karbantartás Eger | Grandnatural" },
      {
        name: "description",
        content:
          "Magán- és ipari ingatlanok felújítása, karbantartása, javítása és korszerűsítése Egerben és Heves vármegyében. Saját műhelyből, egy kivitelezőtől. +36 70 576 0108.",
      },
      { property: "og:title", content: "Felújítás és karbantartás Eger | Grandnatural" },
      {
        property: "og:description",
        content:
          "Magán- és ipari ingatlanok felújítása, karbantartása, javítása és korszerűsítése Egerben és Heves vármegyében. Saját műhelyből, egy kivitelezőtől.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/felujitas-es-karbantartas") }],
  }),
  component: FelujitasEsKarbantartas,
});

const PHONE = "+36 70 576 0108";
const HERO_KEY = "images/08-felujitott-lakoter-uj-burkolattal.jpg";
const INTRO_KEY = "images/Javitastol-a-teljes-felujitasig.webp";
const EXTERIOR_KEY = "images/19-kulso-felujitas-kivitelezes-kozben.jpg";
const FACADE_KEY = "images/20-lakoingatlan-kulso-felujitasa.jpg";
const FINISHED_KEY = "images/22-csaladi-haz-felujitasa.jpg";

function FelujitasEsKarbantartas() {
  const rootRef = useRef<HTMLDivElement>(null);
  useLazyImages(rootRef);

  const logoImg = SITE_LOGO_SVG;

  return (
    <div className="grandnatural-root" ref={rootRef}>
      <JsonLd
        json={breadcrumbJsonLD([
          { name: "Főoldal", path: "/" },
          { name: "Szolgáltatások", path: "/szolgaltatasok" },
          { name: "Felújítás és karbantartás", path: "/felujitas-es-karbantartas" },
        ])}
      />
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS }} />

      <SiteNav current="/felujitas-es-karbantartas" />

      <main>
        {/* Hero */}
        <section className="hero">
          <img
            className="bg"
            src={PLACEHOLDER}
            data-src={HERO_KEY}
            alt="Felújított lakótér új burkolattal — felújítás és karbantartás Egerben"
          />
          <div className="hin">
            <ServiceBreadcrumb current="Felújítás és karbantartás" />
            <h1>Felújítás és karbantartás Eger</h1>
            <p>
              Magán- és ipari ingatlanok felújítása, karbantartása, javítása és korszerűsítése —
              belső és külső munkákkal, saját műhelyből és daruval, egy kivitelezőtől.
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

        {/* Sheet — overview */}
        <div className="sheet">
          <div className="sk"></div>

          <section className="wrap ab">
            <div className="al">
              <img
                loading="lazy"
                src={PLACEHOLDER}
                data-src={INTRO_KEY}
                alt="Javítástól a teljes felújításig — felújítás és karbantartás Egerben"
              />
              <div className="stat">
                <b>16+</b>
                <span>év szakmai tapasztalat</span>
                <small>Felújítás és karbantartás saját műhelyből, egy kivitelezőtől.</small>
              </div>
            </div>
            <div>
              <h2>A javítástól a teljes felújításig.</h2>
              <p style={{ marginTop: 24 }}>
                Kisebb javításoktól a teljes ingatlan-felújításig vállalunk belső és külső munkákat:
                falak, burkolatok, vakolatok előkészítése és kivitelezése, korszerűsítés és
                karbantartás. A munkát a saját műhelyünk és gépparkunk támogatja, így a lakatos- és
                acélmunkákat is egy kézből kapja.
              </p>
              <p>
                Mivel a műhely, a daru és a helyszíni csapat mind a miénk, a felújítást nem több
                alvállalkozóra bontjuk — egy menetrendből, egy felelőstől történik, Egerben és Heves
                vármegyében.
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
              <h2>Hogyan zajlik egy felújítás?</h2>
              <p style={{ marginTop: 16 }}>
                A felújítást felméréssel és előkészítéssel indítjuk, majd a kivitelezést és a
                befejező munkálatokat egy menetrendből végezzük.
              </p>
            </div>
            <div className="wl">
              <div className="wr">
                <h3>1. Felmérés és tervezés</h3>
                <p>
                  Helyszíni felmérés után egyeztetjük a munkák körét és sorrendjét — a kisebb
                  javításoktól a teljes felújításig.
                </p>
              </div>
              <div className="wr">
                <h3>2. Előkészítés</h3>
                <p>
                  Falak, burkolatok és felületek előkészítése: bontás, gipszelés, vakolás, alapozás
                  — a megfelelő alap a tartós kivitelezéshez.
                </p>
              </div>
              <div className="wr">
                <h3>3. Kivitelezés</h3>
                <p>
                  Belső és külső munkák kivitelezése: burkolás, festés, korszerűsítés — a lakatos-
                  és acélmunkákat saját műhelyből egészítjük ki.
                </p>
              </div>
              <div className="wr">
                <h3>4. Befejezés és karbantartás</h3>
                <p>
                  A befejező munkálatok és az átadás után karbantartást is vállalunk, hogy az
                  ingatlan állapota hosszan megmaradjon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery — 3 cards */}
        <section
          className="wrap"
          style={{
            paddingBlock: "clamp(40px,5vw,80px) clamp(80px,10vw,150px)",
          }}
        >
          <div className="ctr" style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2>Felújítási munkáinkból.</h2>
          </div>
          <div className="gr" style={{ marginTop: "clamp(28px,4vw,48px)" }}>
            <figure className="pj">
              <div className="im">
                <img
                  loading="lazy"
                  src={PLACEHOLDER}
                  data-src={EXTERIOR_KEY}
                  alt="Külső felújítás kivitelezés közben — homlokzat előkészítése és javítása"
                />
              </div>
              <figcaption>
                <small>Külső felújítás</small>
                <b>Külső felújítás kivitelezés közben</b>
                <span>
                  Családi ház külső felújítási és kivitelezési munkái folyamat közben — homlokzati
                  javítás, előkészítés és befejezés.
                </span>
              </figcaption>
            </figure>
            <figure className="pj">
              <div className="im">
                <img
                  loading="lazy"
                  src={PLACEHOLDER}
                  data-src={FACADE_KEY}
                  alt="Családi ház külső felújítása — javítás és korszerűsítés"
                />
              </div>
              <figcaption>
                <small>Külső felújítás</small>
                <b>Családi ház külső felújítása</b>
                <span>
                  Családi ház külső javítási, korszerűsítési és befejező munkálatai — a felületek
                  előkészítésétől a kész burkolatig.
                </span>
              </figcaption>
            </figure>
            <figure className="pj">
              <div className="im">
                <img
                  loading="lazy"
                  src={PLACEHOLDER}
                  data-src={FINISHED_KEY}
                  alt="Felújított óvoda kész állapotban — óvoda felújítása"
                />
              </div>
              <figcaption>
                <small>Kész felújítás</small>
                <b>Felújított óvoda</b>
                <span>
                  Felújított és korszerűsített óvoda kész állapotban — a javítástól a befejező
                  munkálatokig egy kézből.
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* FAQ */}
        <section className="wrap" style={{ paddingBlock: "clamp(56px,7vw,110px)" }}>
          <div className="fq">
            <div>
              <h2>Gyakori kérdések a felújításról.</h2>
              <p className="lead" style={{ marginTop: 20 }}>
                A leggyakoribb kérdések a felújítási és karbantartási munkákról.
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
                <summary>Milyen felújítási munkákat vállal?</summary>
                <p>
                  Magán- és ipari ingatlanok belső és külső felújítását, karbantartását, javítását
                  és korszerűsítését — a kisebb javításoktól a teljes felújításig.
                </p>
              </details>
              <details>
                <summary>A lakatos- és acélmunkákat is elvégzi?</summary>
                <p>
                  Igen. A felújítás során felmerülő lakatos- és acélszerkezeti munkákat saját
                  műhelyünkben gyártjuk és a helyszínen szereljük — egy kivitelezőtől.
                </p>
              </details>
              <details>
                <summary>Egerben és Heves vármegyében vállal felújítást?</summary>
                <p>
                  Igen, Egerben és Heves vármegyében vállalunk felújítási és karbantartási munkákat
                  — saját műhelyből és darus géppel.
                </p>
              </details>
              <details>
                <summary>Hogyan kérhetek ajánlatot felújításra?</summary>
                <p>
                  Telefonáljon a {PHONE}-as számon, vagy töltse ki az ajánlatkérő űrlapot a
                  főoldalon. A munkák körét és sorrendjét egyeztetjük.
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
              <h2>Kérjen ajánlatot felújításra.</h2>
              <p className="lead" style={{ marginTop: 24 }}>
                Vegye fel velünk a kapcsolatot, és megbeszéljük a felújítás részleteit. Hívjon, vagy
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
              formId="ajanlatkeres-felujitas-es-karbantartas"
              formName="Ajánlatkérő űrlap – Felújítás és karbantartás"
            />
          </div>
        </section>

        <RelatedServices exclude="/felujitas-es-karbantartas" />
      </main>

      {/* Footer */}
      <footer className="foot">
        <div className="wrap">
          <div className="cta">
            <h2>Kész az új projekt?</h2>
            <div>
              <a className="pill" href="tel:+36705760108">
                Hívjon: {PHONE}
                <i>→</i>
              </a>
              <a className="pill o" href="/#kapcsolat">
                Ajánlatkérés<i>→</i>
              </a>
            </div>
          </div>
          <div className="fc">
            <div>
              <img src={logoImg} alt="Grandnatural" />
              <p>
                Acélszerkezetek, lakatosmunkák, daruzás és kivitelezés Egerben, Heves vármegyében.
              </p>
            </div>
            <div>
              <b>Szolgáltatások</b>
              <a href="/lakatosmunka-eger">Lakatosmunkák</a>
              <a href="/acelszerkezet-gyartas-eger">Acélszerkezetek</a>
              <a href="/daruzas-es-fuvarozas-eger">Daruzás és fuvarozás</a>
              <a href="/felujitas-es-karbantartas">Felújítás és karbantartás</a>
              <a href="/szolgaltatasok">Kivitelezés</a>
            </div>
            <div>
              <b>Kapcsolat</b>
              <a href="tel:+36705760108">{PHONE}</a>
              <a href="/#kapcsolat">Ajánlatkérés</a>
              <a href="/#referenciak">Referenciák</a>
            </div>
          </div>
          <div className="gh" aria-hidden="true">
            Grandnatural
          </div>
          <div className="cp">
            <span>© {new Date().getFullYear()} Grandnatural Kft.</span>
            <span>Eger, Heves vármegye</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
