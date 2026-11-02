import { createFileRoute } from "@tanstack/react-router";
import { SITE_CSS } from "@/lib/grandnatural-content";
import { SITE_LAZY_IMAGES } from "@/lib/grandnatural-lazy-images";
import { RelatedServices } from "@/components/related-services";
import { ServiceBreadcrumb } from "@/components/service-breadcrumb";
import { SiteNav, SITE_LOGO_SVG } from "@/components/site-nav";

export const Route = createFileRoute("/csarnokepites-heves-varmegye")({
  head: () => ({
    meta: [
      { title: "Csarnoképítés Heves vármegye | Grandnatural" },
      {
        name: "description",
        content:
          "Acélvázas ipari csarnokok kivitelezése, szendvicspaneles burkolás és tetőszerkezetek szerelése Heves vármegyében. Saját műhelyből, egy kivitelezőtől. +36 70 576 0108.",
      },
      { property: "og:title", content: "Csarnoképítés Heves vármegye | Grandnatural" },
      {
        property: "og:description",
        content:
          "Acélvázas ipari csarnokok kivitelezése, szendvicspaneles burkolás és tetőszerkezetek szerelése Heves vármegyében. Saját műhelyből, egy kivitezelőtől. +36 70 576 0108.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;800&display=swap",
      },
    ],
  }),
  component: CsarnokepitesHevesVarmegye,
});

const PHONE = "+36 70 576 0108";

function CsarnokepitesHevesVarmegye() {
  const logoImg = SITE_LOGO_SVG;
  const heroImg = SITE_LAZY_IMAGES["images/17-ipari-csarnok-kivitelezese.jpg"]!.src;
  const builtImg = SITE_LAZY_IMAGES["images/09-elkeszult-acelvazas-ipari-csarnok.jpg"]!.src;
  const onsiteImg = SITE_LAZY_IMAGES["images/18-helyszini-acelszereles-es-felallitas.jpg"]!.src;

  return (
    <div className="grandnatural-root">
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS }} />

      <SiteNav current="/csarnokepites-heves-varmegye" />

      <main>
        {/* Hero */}
        <section className="hero">
          <img
            className="bg"
            src={heroImg}
            alt="Ipari csarnok kivitelezése — acélvázas csarnoképítés Heves vármegyében"
          />
          <div className="hin">
            <ServiceBreadcrumb current="Csarnoképítés Heves vármegye" />
            <h1>Csarnoképítés Heves vármegye</h1>
            <p>
              Acélvázas épületek kivitelezése, szendvicspaneles burkolás és tetőszerkezetek
              szerelése — saját műhelyből és darus géppel, egy kivitelezőtől.
            </p>
            <a className="pill" href="/#kapcsolat">
              Ajánlatkérés<i>→</i>
            </a>
          </div>
          <div className="badge">
            <b>16+</b>
            <span>
              év szakmi
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
                src={builtImg}
                alt="Elkészült acélvázas ipari csarnok — teherhordó acélvázas csarnoképítés"
              />
              <div className="stat">
                <b>16+</b>
                <span>év szakmi tapasztalat</span>
                <small>Csarnoképítés saját műhelyből és darus géppel, egy kivitelezőtől.</small>
              </div>
            </div>
            <div>
              <h2>Egy csarnok, elejétől a végéig.</h2>
              <p style={{ marginTop: 24 }}>
                Egy ipari csarnokot elejétől a végéig nálunk vezetünk: az acélvázat saját
                műhelyünkben gyártjuk, majd darus teherautónkkal a helyszínen felállítjuk, a
                szendvicspanelekkel burkoljuk, és a tetőszerkezetet beépítjük.
              </p>
              <p>
                Mivel a műhely, a daru és a helyszíni szerelés mind a miénk, a csarnok kivitelezését
                nem több alvállalkozóra bontjuk — egy kézből, egy menetrendből történik, Heves
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
              <h2>A váztól a kész csarnokig.</h2>
              <p style={{ marginTop: 16 }}>
                A csarnokot négy lépésben építjük — az acélváz műhelyi gyártásától a
                szendvicspaneles burkolásig és a tetőszerkezet szereléséig.
              </p>
            </div>
            <div className="wl">
              <div className="wr">
                <h3>1. Acélváz gyártása</h3>
                <p>
                  A csarnok acélvázát — oszlopokat, gerendákat, kötőzművet — saját műhelyünkben
                  gyártjuk: méretre vágjuk, hegesztjük és festjük.
                </p>
              </div>
              <div className="wr">
                <h3>2. Helyszíni felállítás</h3>
                <p>
                  A kész acélvázat darus teherautónkkal szállítjuk és a helyszínen felállítjuk,
                  rögzítjük — a szállítás és a szerelés összehangoltan történik.
                </p>
              </div>
              <div className="wr">
                <h3>3. Szendvicspaneles burkolás</h3>
                <p>
                  A felállított vázat szendvicspanelekkel burkoljuk — falak és héjazat a
                  hőszigetelt, kész burkolatig.
                </p>
              </div>
              <div className="wr">
                <h3>4. Tetőszerkezet szerelése</h3>
                <p>
                  A tetőszerkezetet beépítjük, rögzítjük — így a csarnok a váztól a fedélig egy
                  kivitelezőtől készül el.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why one contractor */}
        <section className="wrap" style={{ paddingBlock: "clamp(64px,8vw,120px)" }}>
          <div className="ctr" style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2>Miért érdemes egy kivitezelőt?</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              A csarnoképítésnél a műhely, a daru és a helyszíni munka gyakran külön kivitelezőhöz
              tartozik. Nálunk mind egy kézből történik — és ez egyszerűbbé teszi a teljes
              projektet.
            </p>
          </div>
          <div className="mx" style={{ marginTop: "clamp(36px,5vw,64px)" }}>
            <div className="cd">
              <h3>Saját műhely</h3>
              <p>
                Az acélvázat a saját műhelyünkben gyártjuk, így a vágástól a hegesztésig és a
                festésig minden nálunk készül — nem külsős gyártóra bízzuk.
              </p>
            </div>
            <div className="cd">
              <h3>Saját darus gép</h3>
              <p>
                A felállítást és a beemelést saját darus teherautóval végezzük, így a szállítás és a
                szerelés menetrendjét a projekthez igazítjuk — nem külsős gépre várunk.
              </p>
            </div>
            <div className="cd">
              <h3>Egy helyszíni csapat</h3>
              <p>
                A helyszíni szerelést, a burkolást és a tető beépítését ugyanaz a csapat végzi — egy
                kapcsolattartó, egy menetrend, egy felelős a váztól a kész csarnokig.
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
            <h2>Csarnoképítés a műhelytől a helyszínig.</h2>
          </div>
          <div className="gr" style={{ marginTop: "clamp(28px,4vw,48px)" }}>
            <figure className="pj">
              <div className="im">
                <img
                  loading="lazy"
                  src={heroImg}
                  alt="Ipari csarnok kivitelezése — acélvázas csarnok építése Heves vármegyében"
                />
              </div>
              <figcaption>
                <small>Csarnoképítés</small>
                <b>Ipari csarnok kivitelezése</b>
                <span>
                  Acélvázas ipari csarnok kivitelezése a váz felállításától a kész szerkezetig.
                </span>
              </figcaption>
            </figure>
            <figure className="pj">
              <div className="im">
                <img
                  loading="lazy"
                  src={onsiteImg}
                  alt="Helyszíni acélszerelés és felállítás darus teherautóval"
                />
              </div>
              <figcaption>
                <small>Helyszíni szerelés</small>
                <b>Helyszíni acélszerelés és felállítás</b>
                <span>
                  A műhelyben gyártott acélszerkezet darus teherautóval történő helyszíni
                  felállítása és rögzítése.
                </span>
              </figcaption>
            </figure>
            <figure className="pj">
              <div className="im">
                <img
                  loading="lazy"
                  src={builtImg}
                  alt="Elkészült acélvázas ipari csarnok — teherhordó acélszerkezet"
                />
              </div>
              <figcaption>
                <small>Kész csarnok</small>
                <b>Elkészült acélvázas csarnok</b>
                <span>
                  A felállított acélváztól a kész csarnokig — teherhordó acélszerkezet egy
                  kivitelezőtől.
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Band — quote */}
        <section className="band">
          <img loading="lazy" src={heroImg} alt="" />
          <div className="ghost" aria-hidden="true">
            Csarnoképítés
          </div>
          <div className="wrap bc">
            <div className="slc">
              <h3>Saját műhely, saját daru</h3>
              <p style={{ margin: 0, padding: "0 4px" }}>
                A váztól a fedélig minden nálunk készül.
              </p>
            </div>
            <div className="bt">
              <h2>Egy csarnok, egy kivitezelő.</h2>
              <p className="lead">
                Az acélváz gyártásától a felállításon és a szendvicspaneles burkoláson át a
                tetőszerkezet beépítéséig minden saját kézben van — így a csarnok kivitelezése egy
                menetrendből, egy felelőstől történik.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="wrap" style={{ paddingBlock: "clamp(56px,7vw,110px)" }}>
          <div className="fq">
            <div>
              <h2>Gyakori kérdések a csarnoképítésről.</h2>
              <p className="lead" style={{ marginTop: 20 }}>
                A leggyakoribb kérdések az ipari csarnokok kivitelezésével kapcsolatban.
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
                <summary>Mit vállal a csarnoképítésnél?</summary>
                <p>
                  Az acélvázas épület teljes kivitelezését — az acélváz műhelyi gyártásától a
                  helyszíni felállításon és a szendvicspaneles burkoláson át a tetőszerkezet
                  beépítéséig.
                </p>
              </details>
              <details>
                <summary>Saját daruval dolgoznak a helyszínen?</summary>
                <p>
                  Igen. A felállítást és a beemelést saját darus teherautóval végezzük, így a
                  szállítást és a helyszíni szerelést egy menetrendhez igazítjuk.
                </p>
              </details>
              <details>
                <summary>Heves vármegyében vállal csarnoképítést?</summary>
                <p>
                  Igen, Egerben és Heves vármegyében vállaljuk ipari csarnokok acélvázas
                  kivitelezését — saját műhelyből, saját darus géppel.
                </p>
              </details>
              <details>
                <summary>Hogyan kérhetek ajánlatot csarnoképítésre?</summary>
                <p>
                  Telefonáljon a {PHONE}-as számon, vagy töltse ki az ajánlatkérő űrlapot a
                  főoldalon. A csarnok méretét és a kivitelezés részleteit egyeztetjük.
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
              <h2>Kérjen ajánlatot csarnoképítésre.</h2>
              <p className="lead" style={{ marginTop: 24 }}>
                Vegye fel velünk a kapcsolatot, és megbeszéljük a csarnok kivitelezésének
                részleteit. Hívjon, vagy töltse ki az űrlapot.
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

        <RelatedServices exclude="/csarnokepites-heves-varmegye" />
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
              <a href="/#szolg">Kivitelezés</a>
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
