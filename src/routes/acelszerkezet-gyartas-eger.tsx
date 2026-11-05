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

const TITLE = "Acélszerkezet gyártás Eger – acélvázak | Grandnatural";
const DESC =
  "Ipari acélvázak, teherhordó szerkezetek és egyedi gépvázak gyártása és szerelése saját műhelyből Egerben. Kérjen ajánlatot: +36 70 576 0108.";

export const Route = createFileRoute("/acelszerkezet-gyartas-eger")({
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
    links: [{ rel: "canonical", href: canonicalUrl("/acelszerkezet-gyartas-eger") }],
  }),
  component: AcelszerekezetGyartasEger,
});

const PHONE = "+36 70 576 0108";

function AcelszerekezetGyartasEger() {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  return (
    <div className="grandnatural-root" ref={rootRef}>
      <JsonLd
        json={breadcrumbJsonLD([
          { name: "Főoldal", path: "/" },
          { name: "Szolgáltatások", path: "/szolgaltatasok" },
          { name: "Acélszerkezet gyártás Eger", path: "/acelszerkezet-gyartas-eger" },
        ])}
      />
      <JsonLd json={serviceJsonLD({ name: "Acélszerkezet gyártás Eger", description: DESC })} />
      <JsonLd
        json={faqPageJsonLD([
          {
            question: "Milyen acélszerkezeteket gyártanak?",
            answer:
              "Ipari acélvázakat, teherhordó szerkezeteket és egyedi gépvázakat gyártunk és szerelünk — egyedi méretben, az igények szerint.",
          },
          {
            question: "Egyedi méretre is elkészítik a szerkezetet?",
            answer:
              "Igen. Minden acélszerkezetet saját műhelyünkben, egyedi méretre készítünk — a nyersacéltól a festésig.",
          },
          {
            question: "A gyártás után a helyszíni szerelést is elvégzik?",
            answer:
              "Igen. A kész szerkezetet darus teherautónkkal kiszállítjuk és a helyszínen beépítjük, rögzítjük — a gyártás és a szerelés egy kivitelezőtől.",
          },
          {
            question: "Hogyan kérhetek ajánlatot acélszerkezetre?",
            answer:
              "Telefonáljon a +36 70 576 0108-as számon, vagy töltse ki az alábbi űrlapot. A munka részleteit egyeztetjük.",
          },
        ])}
      />
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + HERO_OVERLAY_CSS }} />

      <SiteNav current="/acelszerkezet-gyartas-eger" />

      <main>
        {/* Hero */}
        <section className="hero">
          <Img
            imgKey="images/csarnok-epites"
            alt="Acélvázas ipari csarnok építése"
            className="bg"
            loading="eager"
            fetchpriority="high"
            decoding="sync"
          />
          <div className="ovl" aria-hidden="true" />
          <div className="hin">
            <ServiceBreadcrumb current="Acélszerkezet gyártás Eger" />
            <h1>Acélszerkezet gyártás Eger</h1>
            <p>
              Ipari acélvázak, teherhordó szerkezetek és egyedi gépvázak gyártása és szerelése —
              saját műhelyből, egy kivitelezőtől.
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
              <Img
                imgKey="images/15-lemez-osszeallitasa.jpg"
                alt="Acél lemez összeállítása a műhelyben"
              />
              <div className="stat">
                <b>16+</b>
                <span>év szakmai tapasztalat</span>
                <small>Acélszerkezet-gyártás és helyszíni szerelés saját műhelyből.</small>
              </div>
            </div>
            <div>
              <h2>Saját műhelyben, egyedi gyártásban.</h2>
              <p style={{ marginTop: 24 }}>
                Ipari acélvázakat, teherhordó szerkezeteket és egyedi gépvázakat saját műhelyünkben
                gyártunk, majd a helyszínen szereljük be — Egerben és Heves vármegyében.
              </p>
              <p>
                A nyersacéltól a kész szerkezetig minden nálunk készül, így a gyártást és a
                helyszíni szerelést összehangoltan, egy kivitelezőtől kapja.
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
            <h2>Tudnivalók az acélszerkezet-gyártásról.</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Vállalunk acélszerkezet-gyártást és helyszíni szerelést Egerben és Heves vármegyében.
            </p>
            <div
              className="mx"
              style={{ marginTop: "clamp(28px,4vw,48px)", gridTemplateColumns: "1fr 1fr" }}
            >
              <div className="cd">
                <h3>Típusos munkák</h3>
                <p>
                  Ipari acélvázak, teherhordó szerkezetek és egyedi gépvázak gyártása és szerelése.
                </p>
              </div>
              <div className="cd">
                <h3>Anyagok</h3>
                <p>Nyersacél lemez, profilok, hegesztőanyagok és festékek.</p>
              </div>
              <div className="cd">
                <h3>Árazás</h3>
                <p>
                  Az árat a munka mérete, az anyag és a helyszín határozza meg, ezért egyedi
                  ajánlatot adunk.
                </p>
              </div>
              <div className="cd">
                <h3>Szolgáltatási terület</h3>
                <p>Eger és Heves vármegye.</p>
              </div>
              <div className="cd">
                <h3>Ajánlatkérés</h3>
                <p>Telefonon a +36 70 576 0108-as számon vagy az alábbi űrlapon.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="soft">
          <div className="sk"></div>
          <div className="wrap">
            <div className="ctr" style={{ maxWidth: 720, margin: "0 auto" }}>
              <h2>A műhelyben készül, a helyszínen épül be.</h2>
              <p style={{ marginTop: 16 }}>
                Az acélszerkezetet négy lépésben gyártjuk a saját műhelyünkben — nyersacéltól a
                festésig —, utána darus teherautónkkal a helyszínen építjük be.
              </p>
            </div>
            <div className="wl">
              <div className="wr">
                <h3>1. Nyersacél</h3>
                <p>
                  A munkát a nyersacél lemezek és profilek méretre vágásával, előkészítésével
                  kezdjük a saját műhelyünkben.
                </p>
              </div>
              <div className="wr">
                <h3>2. Hegesztés</h3>
                <p>
                  Az elemeket méretre hegesztjük, összekészítjük — a műhelyben végig kézben tartjuk
                  a minőséget.
                </p>
              </div>
              <div className="wr">
                <h3>3. Összeállítás</h3>
                <p>
                  A hegesztett elemeket összeállítjuk, ellenőrizzük, és előkészítjük a helyszíni
                  szereléshez.
                </p>
              </div>
              <div className="wr">
                <h3>4. Festés</h3>
                <p>
                  A kész szerkezetet festjük, felületkezeljük, majd darus teherautónkkal
                  kiszállítjuk és a helyszínen beépítjük.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="wrap" style={{ paddingBlock: "clamp(64px,8vw,120px)" }}>
          <div className="ctr" style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2>Kinek készítünk acélszerkezetet?</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Ipari megrendelőknek, kivitelezőknek és géptulajdonosoknak készítünk egyedi
              acélszerkezeteket — saját műhelyből, az adott igények szerint.
            </p>
          </div>
          <div className="mx" style={{ marginTop: "clamp(36px,5vw,64px)" }}>
            <div className="cd">
              <h3>Ipari csarnokok és acélvázak</h3>
              <p>
                Gyártér- és raktárcsarnokok acélszerkezetei, ipari acélvázak gyártása és szerelése
                egyedi méretben.
              </p>
            </div>
            <div className="cd">
              <h3>Teherhordó szerkezetek</h3>
              <p>
                Tartók, gerendák, oszlopok és egyéb teherhordó elemek gyártása és helyszíni
                szerelése.
              </p>
            </div>
            <div className="cd">
              <h3>Egyedi gépvázak</h3>
              <p>
                Egyedi gépvázak és egyedi acélszerkezetek gyártása saját műhelyből, a gép és a
                helyszín szerint.
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
            <h2>Kész acélszerkezetek a műhelyből.</h2>
          </div>
          <div className="gr" style={{ marginTop: "clamp(28px,4vw,48px)" }}>
            <figure className="pj">
              <div className="im">
                <Img
                  imgKey="images/09-elkeszult-acelvazas-ipari-csarnok.jpg"
                  alt="Elkészült acélvázas ipari csarnok"
                />
              </div>
              <figcaption>
                <small>Teherhordó szerkezet</small>
                <b>Acélvázas ipari csarnok</b>
                <span>
                  Egyedi gyártású, teherhordó acélszerkezet — a műhelyben hegesztve, a helyszínen
                  beépítve.
                </span>
              </figcaption>
            </figure>
            <figure className="pj">
              <div className="im">
                <Img
                  imgKey="images/acelszerkezet-epites.webp"
                  alt="Acélváz felállítása helyszíni szereléssel"
                />
              </div>
              <figcaption>
                <small>Helyszíni szerelés</small>
                <b>Acélváz szerelése</b>
                <span>
                  A műhelyben előre gyártott acélszerkezet helyszíni felállítása, illesztése és
                  rögzítése — darus teherautóval.
                </span>
              </figcaption>
            </figure>
            <figure className="pj">
              <div className="im">
                <Img
                  imgKey="images/emelos-acelszerkezes-epites.webp"
                  alt="Emelős acélszerkezet összeállítása a műhelyben"
                />
              </div>
              <figcaption>
                <small>Műhelyi összeállítás</small>
                <b>Lemez összeállítása</b>
                <span>
                  Emelős, teherhordó acélszerkezet és acélváz összeállítása a saját műhelyünkben — a
                  kész szerkezetig.
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Band — A saját darunk, saját kézben */}
        <section className="band">
          <Img imgKey="images/csarnok-epites" alt="Acélvázas ipari csarnok építése" />
          <div className="ghost" aria-hidden="true">
            Acél
          </div>
          <div className="wrap bc">
            <div className="bt">
              <h2>Minden egy kézből, a nyersacéltól a felállásig.</h2>
              <p className="lead">
                Az acélszerkezetet a saját műhelyünkben vágjuk, hegesztjük és festjük, majd darus
                teherautónkkal szállítjuk és a helyszínen építjük be. Mivel a gyártás, a daru és a
                szerelés mind nálunk marad, nem kell külön műhelyt és darut keresnie: egy
                felelőstől, egy menetrendből kapja az egészet.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="wrap" style={{ paddingBlock: "clamp(56px,7vw,110px)" }}>
          <div className="fq">
            <div>
              <h2>Gyakori kérdések az acélszerkezet-gyártásról.</h2>
              <p className="lead" style={{ marginTop: 20 }}>
                A leggyakoribb kérdések az egyedi acélszerkezet-gyártással és a helyszíni
                szereléssel kapcsolatban.
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
                <summary>Milyen acélszerkezeteket gyártanak?</summary>
                <p>
                  Ipari acélvázakat, teherhordó szerkezeteket és egyedi gépvázakat gyártunk és
                  szerelünk — egyedi méretben, az igények szerint.
                </p>
              </details>
              <details>
                <summary>Egyedi méretre is elkészítik a szerkezetet?</summary>
                <p>
                  Igen. Minden acélszerkezetet saját műhelyünkben, egyedi méretre készítünk — a
                  nyersacéltól a festésig.
                </p>
              </details>
              <details>
                <summary>A gyártás után a helyszíni szerelést is elvégzik?</summary>
                <p>
                  Igen. A kész szerkezetet darus teherautónkkal kiszállítjuk és a helyszínen
                  beépítjük, rögzítjük — a gyártás és a szerelés egy kivitelezőtől.
                </p>
              </details>
              <details>
                <summary>Hogyan kérhetek ajánlatot acélszerkezetre?</summary>
                <p>
                  Telefonáljon a {PHONE}-as számon, vagy töltse ki az alábbi űrlapot. A munka
                  részleteit egyeztetjük.
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
              <h2>Kérjen ajánlatot acélszerkezetre.</h2>
              <p className="lead" style={{ marginTop: 24 }}>
                Vegye fel velünk a kapcsolatot, és megbeszéljük az acélszerkezet gyártásának és
                szerelésének részleteit. Hívjon, vagy töltse ki az űrlapot.
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
              formId="ajanlatkeres-acelszerkezet-gyartas-eger"
              formName="Ajánlatkérő űrlap – Acélszerkezet gyártás Eger"
            />
          </div>
        </section>

        <RelatedServices exclude="/acelszerkezet-gyartas-eger" />
      </main>

      <SiteFooter current="/acelszerkezet-gyartas-eger" />
    </div>
  );
}
