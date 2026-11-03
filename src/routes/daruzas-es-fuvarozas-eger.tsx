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

export const Route = createFileRoute("/daruzas-es-fuvarozas-eger")({
  head: () => ({
    meta: [
      { title: "Daruzás és fuvarozás Eger | Grandnatural" },
      {
        name: "description",
        content:
          "Darus rakodás és szállítás saját MAN darus teherautóval Egerben és Heves vármegyében. Építőanyag, nehézgép, csarnok- és betonelem emelés, fuvarozás.",
      },
      { property: "og:title", content: "Daruzás és fuvarozás Eger | Grandnatural" },
      {
        property: "og:description",
        content:
          "Darus rakodás és szállítás saját MAN darus teherautóval Egerben és Heves vármegyében. Építőanyag, nehézgép, csarnok- és betonelem emelés, fuvarozás.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/daruzas-es-fuvarozas-eger") }],
  }),
  component: DaruzasEsFuvarozasEger,
});

const PHONE = "+36 70 576 0108";
const HERO_KEY = "/images/daruzas-es-fuvarozas-eger-background.webp";
const MAN_KEY = "images/13-man-teherauto-fulkeje-felujitas-utan.jpg";
const LIFT_KEY = "images/06-daruval-emelt-betonlap.jpg";
const INSTALL_KEY = "images/10-acelvaz-szerelese-darus-teherautoval.jpg";

function DaruzasEsFuvarozasEger() {
  const rootRef = useRef<HTMLDivElement>(null);

  // The hero is the only above-the-fold photo, so it is inlined for an
  // immediate first paint; every other photo on this page is lazy-loaded.
  const logoImg = SITE_LOGO_SVG;
  const heroImg = HERO_KEY;
  useLazyImages(rootRef);

  return (
    <div className="grandnatural-root" ref={rootRef}>
      <JsonLd
        json={breadcrumbJsonLD([
          { name: "Főoldal", path: "/" },
          { name: "Szolgáltatások", path: "/szolgaltatasok" },
          { name: "Daruzás és fuvarozás Eger", path: "/daruzas-es-fuvarozas-eger" },
        ])}
      />
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS }} />

      <SiteNav current="/daruzas-es-fuvarozas-eger" />

      <main>
        {/* Hero */}
        <section className="hero">
          <img
            className="bg"
            src={heroImg}
            alt="Grandnatural MAN darus teherautója és géppark — daruzás és fuvarozás Egerben"
          />
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
              <img
                loading="lazy"
                src={PLACEHOLDER}
                data-src={LIFT_KEY}
                alt="Daruval emelt betonlap — darus rakodás és telepítés Egerben"
              />
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
                <img
                  loading="lazy"
                  src={PLACEHOLDER}
                  data-src={LIFT_KEY}
                  alt="Darus emelés és betonelem telepítés — darus rakodás Egerben"
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
                <img
                  loading="lazy"
                  src={PLACEHOLDER}
                  data-src={INSTALL_KEY}
                  alt="Acélszerkezet és nehéz elem beemelése darus teherautóval a helyszínen"
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
                <img
                  loading="lazy"
                  src={PLACEHOLDER}
                  data-src={MAN_KEY}
                  alt="MAN darus teherautó fülkéje felújítás után — daruzás és fuvarozás Egerben"
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

        {/* Band — A saját darunk, saját kézben */}
        <section className="band">
          <img loading="lazy" src={PLACEHOLDER} data-src={HERO_KEY} alt="" />
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
                  Az emelendő-szállítandó terhelő darab, a helyszín és a kívánt időpont segít pontos
                  ajánlatot adni. Ezeket telefonon vagy az űrlapon egyeztethetjük.
                </p>
              </details>
              <details>
                <summary>Hogyan lehet időpontot foglalni?</summary>
                <p>
                  Telefonáljon a {PHONE}-as számon, vagy töltse ki az ajánlatkérő űrlapot a
                  főoldalon. A helyszínt és a feladatot egyeztetve foglalunk időpontot.
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
              <a href="/csarnokepites-heves-varmegye">Csarnoképítés</a>
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
