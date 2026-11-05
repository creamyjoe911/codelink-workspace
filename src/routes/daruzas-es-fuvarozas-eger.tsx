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
import { HERO_IMAGE } from "@/lib/image-paths";
import {
  breadcrumbJsonLD,
  canonicalUrl,
  serviceJsonLD,
  faqPageJsonLD,
  OG_IMAGE,
} from "@/lib/seo-schema";

const TITLE = "Daruzás és fuvarozás Eger – darus rakodás | Grandnatural";
const DESC =
  "Darus rakodás és szállítás saját MAN darus teherautóval Egerben és Heves vármegyében. Kérjen ajánlatot: +36 70 576 0108.";

export const Route = createFileRoute("/daruzas-es-fuvarozas-eger")({
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
    links: [{ rel: "canonical", href: canonicalUrl("/daruzas-es-fuvarozas-eger") }],
  }),
  component: DaruzasEsFuvarozasEger,
});

const PHONE = "+36 70 576 0108";

function DaruzasEsFuvarozasEger() {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  return (
    <div className="grandnatural-root" ref={rootRef}>
      <JsonLd
        json={breadcrumbJsonLD([
          { name: "Főoldal", path: "/" },
          { name: "Szolgáltatások", path: "/szolgaltatasok" },
          { name: "Daruzás és fuvarozás Eger", path: "/daruzas-es-fuvarozas-eger" },
        ])}
      />
      <JsonLd json={serviceJsonLD({ name: "Daruzás és fuvarozás Eger", description: DESC })} />
      <JsonLd
        json={faqPageJsonLD([
          {
            question: "Mit lehet daruzni és szállítani?",
            answer:
              "Építőanyagokat, nehézgépeket, csarnok- és betonelemeket emelünk és szállítunk — saját darus teherautóval, Egerben és Heves vármegyében.",
          },
          {
            question: "Saját daruval dolgoznak?",
            answer:
              "Igen. Saját MAN darus teherautóval végzünk daruzást és fuvarozást, így a rakodást és a szállítást összehangoltan, egy kivitelezőtől kapja.",
          },
          {
            question: "Milyen adat kell az ajánlatkéréshez?",
            answer:
              "Az emelendő vagy szállítandó teher típusa és súlya, a helyszín és a kívánt időpont segít a pontos ajánlat elkészítésében. Ezeket telefonon vagy az űrlapon egyeztethetjük.",
          },
          {
            question: "Hogyan lehet időpontot foglalni?",
            answer:
              "Telefonáljon a +36 70 576 0108-as számon, vagy töltse ki az alábbi űrlapot. A helyszínt és a feladatot egyeztetve foglalunk időpontot.",
          },
        ])}
      />
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + HERO_OVERLAY_CSS }} />

      <SiteNav current="/daruzas-es-fuvarozas-eger" />

      <main>
        {/* Hero — same photo as the homepage hero */}
        <section className="hero">
          <img
            className="bg"
            src={HERO_IMAGE.src}
            width={HERO_IMAGE.width}
            height={HERO_IMAGE.height}
            alt="Grandnatural MAN darus teherautója és géppark"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
          <div className="ovl" aria-hidden="true" />
          <div className="hin">
            <ServiceBreadcrumb current="Daruzás és fuvarozás Eger" />
            <h1>Daruzás és fuvarozás Eger</h1>
            <p>
              Építőanyagok, nehézgépek, csarnok- és betonelemek darus rakodása és szállítása — saját
              MAN darus teherautóval, Egerben és Heves vármegyében.
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

        {/* Sheet — what we lift and transport */}
        <div className="sheet">
          <div className="sk"></div>

          <section className="wrap ab">
            <div className="al">
              <Img imgKey="images/06-daruval-emelt-betonlap.jpg" alt="Daruval emelt betonlap" />
              <div className="stat">
                <b>16+</b>
                <span>év szakmai tapasztalat</span>
                <small>Daruzás és fuvarozás saját darus teherautóval, egy kivitelezőtől.</small>
              </div>
            </div>
            <div>
              <h2>Saját darussal, egy kézből.</h2>
              <p style={{ marginTop: 24 }}>
                Darus rakodást és szállítást saját MAN darus teherautóval végzünk — így a helyszíni
                emelést, rakodást és fuvarozást összehangoltan, egy kivitelezőtől kapja.
              </p>
              <p>
                Építőanyagokat, nehézgépeket, csarnok- és betonelemeket emelünk és szállítunk
                Egerben és Heves vármegyében. Mivel a daru a sajátunk, a menetrendet és a munkát a
                miénkhez igazítjuk.
              </p>
              <a className="pill" href="/#kapcsolat">
                Kérjen ajánlatot<i>→</i>
              </a>
            </div>
          </section>
        </div>

        {/* Tudnivalók */}
        <section className="wrap" style={{ paddingBlock: "clamp(48px,6vw,90px)" }}>
          <div className="ctr" style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2>Tudnivalók a daruzásról és fuvarozásról.</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Mennyibe kerül a daruzás Egerben? Az ár a teher típusától és súlyától, a helyszíntől
              és a kívánt időponttól függ — pontos árat telefonon vagy űrlapon egyeztetünk.
            </p>
            <div
              className="mx"
              style={{ marginTop: "clamp(28px,4vw,48px)", gridTemplateColumns: "1fr 1fr" }}
            >
              <div className="cd">
                <h3>Típusos munkák</h3>
                <p>
                  Építőanyagok, nehézgépek, csarnok- és betonelemek darus rakodás és szállítás —
                  [FELSOROLÁS]
                </p>
              </div>
              <div className="cd">
                <h3>Anyagok</h3>
                <p>[ANYAGOK] — építőanyagok, betonelemek, acélszerkezetek, nehézgépek.</p>
              </div>
              <div className="cd">
                <h3>Átfutási idő</h3>
                <p>[IDŐ] — kis szállítások 1–2 nap, nagy emelések 1–3 nap.</p>
              </div>
              <div className="cd">
                <h3>Árat befolyásoló tényezők</h3>
                <p>
                  [MÉRET, ANYAG, SZERELÉS, SZÁLLÍTÁS] — daru teherbírása [TONNA], kinyúlás [MÉTER],
                  jármű [TÍPUS, ÉVJÁRAT].
                </p>
              </div>
              <div className="cd">
                <h3>Ajánlatkérés</h3>
                <p>[TELEFON / ŰRLAP] — telefonon vagy az alábbi űrlapon kérhet árajánlatot.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What we lift */}
        <section className="soft">
          <div className="sk"></div>
          <div className="wrap">
            <div className="ctr" style={{ maxWidth: 720, margin: "0 auto" }}>
              <h2>Amit emelünk és szállítunk.</h2>
              <p style={{ marginTop: 16 }}>
                Saját darus teherautóval rakodunk és szállítunk — a helyszíni emeléstől a
                fuvarozásig.
              </p>
            </div>
            <div className="mx" style={{ marginTop: "clamp(36px,5vw,64px)" }}>
              <div className="cd">
                <h3>Építőanyag és betonelem</h3>
                <p>
                  Építőanyagok, csarnok- és betonelemek darus rakodása, emelése és helyszíni
                  telepítése.
                </p>
              </div>
              <div className="cd">
                <h3>Nehézgép és szerkezet</h3>
                <p>
                  Nehézgépek és acélszerkezetek emelése, beemelése és szállítása — saját darussal.
                </p>
              </div>
              <div className="cd">
                <h3>Helyszíni rakodás</h3>
                <p>
                  A darus rakodást és a szállítást összehangoltan végezzük, így a munka egy
                  menetrendből történik.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="wrap" style={{ paddingBlock: "clamp(64px,8vw,120px)" }}>
          <div className="ctr" style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2>Hol vállalunk daruzást és fuvarozást?</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Egerben és Heves vármegyében vállalunk darus rakodást és szállítást — saját darus
              teherautóval, a helyszínhez igazítva.
            </p>
          </div>
          <div className="mx" style={{ marginTop: "clamp(36px,5vw,64px)" }}>
            <div className="cd">
              <h3>Eger</h3>
              <p>
                Egerben és közvetlen környékén vállalunk daruzást, rakodást és fuvarozást — saját
                géppel, rugalmasan időpontban.
              </p>
            </div>
            <div className="cd">
              <h3>Heves vármegye</h3>
              <p>
                Heves vármegye teljes területén dolgozunk: a megye településein vállalunk darus
                emelést és szállítást.
              </p>
            </div>
            <div className="cd">
              <h3>Saját daru, egy menetrend</h3>
              <p>
                Mivel a darus teherautó a sajátunk, a rakodást, az emelést és a fuvarozást egy
                kivitelezőhöz igazítjuk — nem külsős géptől függünk.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section
          className="wrap"
          style={{
            paddingBlock: "clamp(40px,5vw,80px) clamp(80px,10vw,150px)",
          }}
        >
          <div className="ctr" style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2>Darus emelés és rakodás a helyszínen.</h2>
          </div>
          <div className="gr" style={{ marginTop: "clamp(28px,4vw,48px)" }}>
            <figure className="pj">
              <div className="im">
                <Img
                  imgKey="images/06-daruval-emelt-betonlap.jpg"
                  alt="Darus emelés és betonelem telepítés"
                />
              </div>
              <figcaption>
                <small>Darus emelés</small>
                <b>Betonelem telepítés</b>
                <span>
                  Daruval emelt betonlap, betonelem helyszíni telepítése — saját darus teherautóval.
                </span>
              </figcaption>
            </figure>
            <figure className="pj">
              <div className="im">
                <Img
                  imgKey="images/10-acelvaz-szerelese-darus-teherautoval.jpg"
                  alt="Acélszerkezet beemelése darus teherautóval"
                />
              </div>
              <figcaption>
                <small>Helyszíni beemelés</small>
                <b>Acélszerkezet beemelése</b>
                <span>
                  Nehéz acélelem és szerkezet darus teherautóval történő helyszíni beemelése.
                </span>
              </figcaption>
            </figure>
            <figure className="pj">
              <div className="im">
                <Img
                  imgKey="images/13-man-teherauto-fulkeje-felujitas-utan.jpg"
                  alt="MAN darus teherautó fülkéje felújítás után"
                />
              </div>
              <figcaption>
                <small>Saját gép</small>
                <b>MAN darus teherautó</b>
                <span>
                  Saját darus teherautóval végezzük a rakodást és a szállítást — egy kivitelezőtől.
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Band — A saját darunk, saját kézben (uses the page hero photo) */}
        <section className="band">
          <img
            src={HERO_IMAGE.src}
            width={HERO_IMAGE.width}
            height={HERO_IMAGE.height}
            alt="MAN darus teherautó daruzás és fuvarozás közben"
            loading="lazy"
            decoding="async"
          />
          <div className="ghost" aria-hidden="true">
            Daruzás
          </div>
          <div className="wrap bc">
            <div className="slc">
              <h3>Saját darus teherautó</h3>
              <p style={{ margin: 0, padding: "0 4px" }}>
                A daru a sajátunk — a rakodást és a szállítást egy menetrendből végezzük.
              </p>
            </div>
            <div className="bt">
              <h2>A saját darunk, saját kézben.</h2>
              <p className="lead">
                A darus teherautónk fülkéjét is mi újítottuk fel — az előkészítéstől az elkészült
                állapotig. Mivel a daru a sajátunk, a menetrendet és a munkát a miénkhez igazítjuk,
                nem külsős géptől függünk.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="wrap" style={{ paddingBlock: "clamp(56px,7vw,110px)" }}>
          <div className="fq">
            <div>
              <h2>Gyakori kérdések a daruzásról és fuvarozásról.</h2>
              <p className="lead" style={{ marginTop: 20 }}>
                A leggyakoribb kérdések a darus rakodásról, emelésről és szállításról.
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
                <summary>Mit lehet daruzni és szállítani?</summary>
                <p>
                  Építőanyagokat, nehézgépeket, csarnok- és betonelemeket emelünk és szállítunk —
                  saját darus teherautóval, Egerben és Heves vármegyében.
                </p>
              </details>
              <details>
                <summary>Saját daruval dolgoznak?</summary>
                <p>
                  Igen. Saját MAN darus teherautóval végzünk daruzást és fuvarozást, így a rakodást
                  és a szállítást összehangoltan, egy kivitelezőtől kapja.
                </p>
              </details>
              <details>
                <summary>Milyen adat kell az ajánlatkéréshez?</summary>
                <p>
                  Az emelendő vagy szállítandó teher típusa és súlya, a helyszín és a kívánt időpont
                  segít a pontos ajánlat elkészítésében. Ezeket telefonon vagy az űrlapon
                  egyeztethetjük.
                </p>
              </details>
              <details>
                <summary>Hogyan lehet időpontot foglalni?</summary>
                <p>
                  Telefonáljon a {PHONE}-as számon, vagy töltse ki az alábbi űrlapot. A helyszínt és
                  a feladatot egyeztetve foglalunk időpontot.
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
              <h2>Kérjen ajánlatot daruzásra.</h2>
              <p className="lead" style={{ marginTop: 24 }}>
                Vegye fel velünk a kapcsolatot, és megbeszéljük a daruzás és fuvarozás részleteit.
                Hívjon, vagy töltse ki az űrlapot.
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
              formId="ajanlatkeres-daruzas-es-fuvarozas-eger"
              formName="Ajánlatkérő űrlap – Daruzás és fuvarozás Eger"
            />
          </div>
        </section>

        <RelatedServices exclude="/daruzas-es-fuvarozas-eger" />
      </main>

      <SiteFooter current="/daruzas-es-fuvarozas-eger" />
    </div>
  );
}
