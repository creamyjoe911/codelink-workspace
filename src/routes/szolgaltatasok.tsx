import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { SITE_CSS, HERO_OVERLAY_CSS } from "@/lib/grandnatural-content";
import { useLazyImages, PLACEHOLDER } from "@/hooks/use-lazy-images";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav, SITE_LOGO_SVG } from "@/components/site-nav";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLD, canonicalUrl, OG_IMAGE } from "@/lib/seo-schema";

const TITLE = "Szolgáltatások | Grandnatural — Eger, Heves vármegye";
const DESC =
  "Lakatosmunka, acélszerkezet gyártás, daruzás és felújítás Egerben és Heves vármegyében, egy kivitelezőtől. Kérjen ajánlatot: +36 70 576 0108.";

export const Route = createFileRoute("/szolgaltatasok")({
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
    links: [{ rel: "canonical", href: canonicalUrl("/szolgaltatasok") }],
  }),
  component: Szolgaltatasok,
});

const PHONE = "+36 70 576 0108";
const HERO_KEY = "images/szolgaltatasok";

function Szolgaltatasok() {
  const rootRef = useRef<HTMLDivElement>(null);
  useLazyImages(rootRef);
  useReveal(rootRef);

  const logoImg = SITE_LOGO_SVG;

  const services = [
    {
      href: "/lakatosmunka-eger",
      title: "Lakatosmunka Egerben",
      img: "images/04-elkeszult-piros-festett-platooldal.jpg",
      alt: "Elkészült, piros festett platóoldal",
      summary:
        "Kapuk, korlátok, lépcsők, előtetők és biztonsági szerkezetek gyártása és helyszíni szerelése saját műhelyből.",
    },
    {
      href: "/acelszerkezet-gyartas-eger",
      title: "Acélszerkezet gyártás Egerben",
      img: "images/05-nyers-acel-lemez-a-muhelyben.jpg",
      alt: "Nyers acél lemez a műhelyben",
      summary:
        "Ipari acélvázak, teherhordó szerkezetek és egyedi gépvázak műhelyi gyártása és helyszíni szerelése.",
    },
    {
      href: "/daruzas-es-fuvarozas-eger",
      title: "Daruzás és fuvarozás Egerben",
      img: "images/06-daruval-emelt-betonlap.jpg",
      alt: "Daruval emelt betonlap",
      summary:
        "Építőanyagok, nehézgépek, csarnok- és betonelemek darus rakodása és szállítása saját MAN darus teherautóval.",
    },
    {
      href: "/felujitas-es-karbantartas-eger",
      title: "Felújítás és karbantartás Egerben",
      img: "images/08-felujitott-lakoter-uj-burkolattal.jpg",
      alt: "Felújított lakótér új burkolattal",
      summary:
        "Magán- és ipari ingatlanok felújítása, karbantartása, javítási és korszerűsítési munkálatok.",
    },
  ];

  return (
    <div className="grandnatural-root" ref={rootRef}>
      <JsonLd
        json={breadcrumbJsonLD([
          { name: "Főoldal", path: "/" },
          { name: "Szolgáltatások", path: "/szolgaltatasok" },
        ])}
      />
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + HERO_OVERLAY_CSS }} />

      <SiteNav current="/szolgaltatasok" />

      <main>
        {/* Hero */}
        <section className="hero">
          <img
            className="bg"
            src={PLACEHOLDER}
            data-src={HERO_KEY}
            alt="Grandnatural szolgáltatások és géppark"
          />
          <div className="ovl" aria-hidden="true" />
          <div className="hin">
            <h1>Szolgáltatások</h1>
            <p>
              Lakatosmunka, acélszerkezet gyártás, daruzás és felújítás Egerben és Heves vármegyében
              — építés, acélgyártás, daruzás és kivitelezés egy kivitelezőtől, saját műhelyből és
              saját daruval.
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
              <img
                loading="lazy"
                src={PLACEHOLDER}
                data-src="images/novenykert"
                alt="Grandnatural szolgáltatások és géppark"
              />
              <div className="stat">
                <b>16+</b>
                <span>év szakmai tapasztalat</span>
                <small>Építés, acélgyártás, daruzás és kivitelezés egy kézből.</small>
              </div>
            </div>
            <div>
              <h2>EGY kivitelező, négy szolgáltatás.</h2>
              <p style={{ marginTop: 24 }}>
                A Grandnaturalnál a műhely, a daru és a helyszíni munka egy kézből van —
                lakatosmunkát, acélszerkezet-gyártást, daruzást és felújítást egy kivitelezőtől
                kapja Egerben és Heves vármegyében.
              </p>
              <p>
                Minden szolgáltatás saját műhelyből indul, és saját daru teherautóval ér a
                helyszínre — így a gyártás és a szerelés összehangoltan, egy felelőstől.
              </p>
              <a className="pill" href="/#kapcsolat">
                Kérjen ajánlatot<i>→</i>
              </a>
            </div>
          </section>
        </div>

        {/* Service cards */}
        <section className="soft">
          <div className="sk"></div>
          <div className="wrap">
            <div className="ctr" style={{ maxWidth: 720, margin: "0 auto" }}>
              <h2>Mit vállalunk?</h2>
              <p style={{ marginTop: 16 }}>
                A lakatosmunkától a felújításig — minden a saját műhelyünkben készül, és a
                helyszínen szereljük be.
              </p>
            </div>
            <div className="mx" style={{ marginTop: "clamp(36px,5vw,64px)" }}>
              {services.map((s) => (
                <a
                  key={s.href + s.title}
                  className="pj"
                  href={s.href}
                  style={{ textDecoration: "none" }}
                >
                  <div className="im">
                    <img loading="lazy" src={PLACEHOLDER} data-src={s.img} alt={s.alt} />
                  </div>
                  <figcaption>
                    <h3>{s.title}</h3>
                    <p>{s.summary}</p>
                    <span className="pill" style={{ marginTop: 12 }}>
                      Részletek<i>→</i>
                    </span>
                  </figcaption>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Felújítás és karbantartás mention */}
        <section className="wrap" style={{ paddingBlock: "clamp(48px,6vw,90px)" }}>
          <div className="ctr" style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <h2>Felújítás és karbantartás is.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              A lakatosmunka és az acélszerkezet-gyártás mellett felújítási és karbantartási
              munkákat is vállalunk — a kisebb javításoktól a teljes felújításig, saját műhely és
              daru teherautó támogatással.
            </p>
          </div>
        </section>

        {/* Miért a Grandnatural? */}
        <section className="soft">
          <div className="sk"></div>
          <div className="wrap">
            <div
              className="ctr rv"
              style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}
            >
              <h2>Miért a Grandnatural?</h2>
              <p style={{ marginTop: 16 }}>
                Egy kivitelező, aki a műhelytől a helyszínig mindent saját kézben tart.
              </p>
            </div>
            <div className="wl">
              <div className="wr rv">
                <h3>Saját darus teherautó</h3>
                <p>Daruzást és szállítást saját géppel végzünk, így összehangoltan dolgozunk.</p>
              </div>
              <div className="wr rv">
                <h3>Több szakma, egy kivitelező</h3>
                <p>Építés, felújítás, lakatosmunka és acélszerkezet gyártás egy kézből.</p>
              </div>
              <div className="wr rv">
                <h3>Műhelytől a helyszínig</h3>
                <p>A szerkezeteket saját műhelyben készítjük, és a helyszínen szereljük.</p>
              </div>
              <div className="wr rv">
                <h3>Helyben dolgozunk</h3>
                <p>Egerben és Heves vármegyében vállalunk munkát.</p>
              </div>
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
                Vegye fel velünk a kapcsolatot, és megbeszéljük a szolgáltatások részleteit. Hívjon,
                vagy töltse ki az űrlapot.
              </p>
              <a className="row" href="tel:+36705760108">
                <span className="go">→</span>
                <span>
                  <small>Telefon</small>
                  <b>{PHONE}</b>
                </span>
              </a>
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
              <a href="/felujitas-es-karbantartas-eger">Felújítás és karbantartás</a>
              <a href="/szolgaltatasok">Összes szolgáltatás</a>
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
