import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { SITE_CSS, HERO_OVERLAY_CSS } from "@/lib/grandnatural-content";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav, SITE_LOGO_SVG } from "@/components/site-nav";
import { JsonLd } from "@/components/json-ld";
import { Img } from "@/components/img";
import { breadcrumbJsonLD, canonicalUrl, OG_IMAGE } from "@/lib/seo-schema";

const TITLE = "Referenciák – elkészült munkáink Egerben | Grandnatural";
const DESC =
  "Referenciák: acélvázas csarnokok, helyszíni acélszerelés, lakatosmunkák és daruzás Egerben és Heves vármegyében — saját műhelyből és darus teherautóval.";

export const Route = createFileRoute("/referenciak")({
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
    links: [{ rel: "canonical", href: canonicalUrl("/referenciak") }],
  }),
  component: Referenciak,
});

const PHONE = "+36 70 576 0108";

// The 12 reference projects, moved out of the homepage's hidden <main> into a
// real, indexable page. Each card has an image, a short Hungarian description,
// and a [HELYSZÍN] location placeholder to be filled in per project later.
const projects = [
  {
    img: "images/17-ipari-csarnok-kivitelezese.jpg",
    alt: "Acélvázas ipari csarnok kivitelezése",
    tag: "Csarnoképítés",
    title: "Ipari csarnok kivitelezése",
    desc: "Acélvázas ipari épület kivitelezése, szerkezeti és külső lemezburkolási munkálatokkal.",
  },
  {
    img: "images/18-helyszini-acelszereles-es-felallitas.jpg",
    alt: "Helyszíni acélszerelés és felállítás",
    tag: "Acélszerelés",
    title: "Helyszíni acélszerelés és felállítás",
    desc: "Acél lemezek és tartószerkezetek helyszíni összeállítása, illesztése és hegesztése.",
  },
  {
    img: "images/19-kulso-felujitas-kivitelezes-kozben.jpg",
    alt: "Külső felújítás kivitelezés közben",
    tag: "Homlokzati felújítás",
    title: "Külső felújítás kivitelezés közben",
    desc: "Családi ház külső felújítási és kivitelezési munkái folyamat közben.",
  },
  {
    img: "images/20-lakoingatlan-kulso-felujitasa.jpg",
    alt: "Lakóingatlan külső felújítása",
    tag: "Külső felújítás",
    title: "Lakóingatlan külső felújítása",
    desc: "Lakóingatlan külső javítási, korszerűsítési és befejező munkálatai.",
  },
  {
    img: "images/21-belso-felujitas-kivitelezes-kozben.jpg",
    alt: "Belső felújítás kivitelezés közben",
    tag: "Belső munkálatok",
    title: "Belső felújítás kivitelezés közben",
    desc: "Belső terek felújítása, előkészítési és kivitelezési munkálatokkal.",
  },
  {
    img: "images/22-csaladi-haz-felujitasa.jpg",
    alt: "Óvoda felújítása kész állapotban",
    tag: "Kész felújítás",
    title: "Óvoda felújítása",
    desc: "Óvoda felújítása és korszerűsítése kész állapotban.",
  },
  {
    img: "images/23-egyedi-platooldal-keszitese.jpg",
    alt: "Egyedi platóoldal készítése",
    tag: "Lakatosipar",
    title: "Egyedi platóoldal készítése",
    desc: "Egyedi fém platóoldal kialakítása, lakatosipari és felületkezelési munkákkal.",
  },
  {
    img: "images/24-teherauto-felepitmeny-felujitas-es-lakat.jpg",
    alt: "Teherautó felépítmény felújítás és lakatolás",
    tag: "Műhelymunka",
    title: "Teherautó felépítmény felújítás és lakatolás",
    desc: "Plató és fém vázszerkezet precíz vágása, csiszolása és hegesztése műhelyünkben.",
  },
  {
    img: "images/25-egyedi-nehezacel-szerkezet-gyartasa.jpg",
    alt: "Egyedi nehézacél szerkezet gyártása",
    tag: "Egyedi acél",
    title: "Egyedi nehézacél szerkezet gyártása",
    desc: "Teherhordó acélváz és szerkezet összeállítása, emelése és helyszíni szerelése darus teherautóval.",
  },
  {
    img: "images/26-hegesztett-acelszerelveny-es-bordazott-i.jpg",
    alt: "Hegesztett acélszerelvény és bordázott idom",
    tag: "Precíziós hegesztés",
    title: "Hegesztett acélszerelvény és bordázott idom",
    desc: "Nagy teherbírású, varratkezelt és illesztett profilok gyártása és összeállítása.",
  },
  {
    img: "images/27-muhelyi-szerkezet-elokeszites-es-hegeszt.jpg",
    alt: "Műhelyi szerkezet-előkészítés és hegesztés",
    tag: "Összeállítás",
    title: "Műhelyi szerkezet-előkészítés és hegesztés",
    desc: "Fém alaplemezek, tartókonzolok és profilok előkészítése összeállításhoz.",
  },
  {
    img: "images/28-darus-emeles-es-betonelem-telepites.jpg",
    alt: "Darus emelés és betonelem telepítés",
    tag: "Saját géppark",
    title: "Darus emelés és betonelem telepítés",
    desc: "Saját MAN darus teherautóval végzett nehézgép- és betonelem-beemelési művelet a helyszínen.",
  },
];

function Referenciak() {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  return (
    <div className="grandnatural-root" ref={rootRef}>
      <JsonLd
        json={breadcrumbJsonLD([
          { name: "Főoldal", path: "/" },
          { name: "Referenciák", path: "/referenciak" },
        ])}
      />
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + HERO_OVERLAY_CSS }} />

      <SiteNav current="/referenciak" />

      <main>
        {/* Hero */}
        <section className="hero">
          <Img
            imgKey="images/16-munkaink-referenciak.jpg"
            alt="Grandnatural munkáink referenciái"
            className="bg"
            loading="eager"
            fetchpriority="high"
            decoding="sync"
          />
          <div className="ovl" aria-hidden="true" />
          <div className="hin">
            <h1>Referenciák</h1>
            <p>
              Válogatás építőipari, lakatosipari és daruzási munkáinkból Egerben és Heves
              vármegyében.
            </p>
            <a className="pill" href="/#kapcsolat">
              Ajánlatkérés<i>→</i>
            </a>
          </div>
          <div className="badge">
            <b>12</b>
            <span>
              bemutatott
              <br />
              munka
            </span>
          </div>
        </section>

        {/* Gallery */}
        <div className="sheet">
          <div className="sk"></div>
          <section className="wrap gal">
            <div
              className="ctr rv"
              style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}
            >
              <h2>Elkészült munkáink.</h2>
              <p className="lead" style={{ marginTop: 16 }}>
                Tizenkét projekt a műhelyből és a helyszínről — acélszerkezetek, lakatosmunkák,
                felújítások és daruzás.
              </p>
            </div>
            <div className="gr" style={{ marginTop: "clamp(28px,4vw,48px)" }}>
              {projects.map((p) => (
                <figure className="pj rv" key={p.title}>
                  <div className="im">
                    <Img imgKey={p.img} alt={p.alt} />
                  </div>
                  <figcaption>
                    <small>{p.tag}</small>
                    <b>{p.title}</b>
                    <span>{p.desc}</span>
                    <small style={{ marginTop: 10, display: "block", fontWeight: 700 }}>
                      Helyszín: [HELYSZÍN]
                    </small>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>

        {/* Quote CTA */}
        <section
          className="wrap"
          style={{
            paddingBlock: "clamp(56px,7vw,110px) clamp(72px,9vw,140px)",
          }}
        >
          <div className="ct">
            <div>
              <h2>Tetszik, amit lát?</h2>
              <p className="lead" style={{ marginTop: 24 }}>
                Vegye fel velünk a kapcsolatot, és megbeszéljük a munka részleteit. Hívjon, vagy
                töltse ki az űrlapot a főoldalon.
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
              <img src={SITE_LOGO_SVG} alt="Grandnatural Kft." />
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
              <a href="/referenciak" aria-current="page">
                Referenciák
              </a>
            </div>
          </div>
          <div className="gh" aria-hidden="true">
            Grandnatural Kft.
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
