import { createFileRoute } from "@tanstack/react-router";
import { SITE_IMAGES, SITE_CSS } from "@/lib/grandnatural-content";

export const Route = createFileRoute("/lakatosmunka-eger")({
  head: () => ({
    meta: [
      { title: "Lakatosmunka Eger | Grandnatural" },
      {
        name: "description",
        content:
          "Kapuk, korlátok, lépcsők, előtetők és műszaki biztonsági szerkezetek gyártása és helyszíni szerelése Egerben. Kérjen ajánlatot: +36 70 576 0108.",
      },
      { property: "og:title", content: "Lakatosmunka Eger | Grandnatural" },
      {
        property: "og:description",
        content:
          "Kapuk, korlátok, lépcsők, előtetők és műszaki biztonsági szerkezetek gyártása és helyszíni szerelése Egerben. Kérjen ajánlatot: +36 70 576 0108.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;800&display=swap",
      },
    ],
  }),
  component: LakatosmunkaEger,
});

const PHONE = "+36 70 576 0108";

function LakatosmunkaEger() {
  const logoImg = SITE_IMAGES["images/01-grandnatural.png"];
  const heroImg = SITE_IMAGES["images/05-nyers-acel-lemez-a-muhelyben.jpg"];
  const paintedImg = SITE_IMAGES["images/04-elkeszult-piros-festett-platooldal.jpg"];
  const customImg = SITE_IMAGES["images/11-egyedi-platooldal.jpg"];
  const installImg = SITE_IMAGES["images/10-acelvaz-szerelese-darus-teherautoval.jpg"];

  return (
    <div className="grandnatural-root">
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS }} />

      <header className="nav">
        <a href="/">
          <img src={logoImg} alt="Grandnatural" />
        </a>
        <nav>
          <a href="/#rolunk">Rólunk</a>
          <a href="/#szolg">Szolgáltatások</a>
          <a href="/#muhely">Műhelymunka</a>
          <a href="/lakatosmunka-eger" aria-current="page">
            Lakatosmunka
          </a>
          <a href="/acelszerkezet-gyartas-eger">Acélszerkezet</a>
          <a href="/daruzas-es-fuvarozas-eger">Daruzás</a>
          <a href="/#referenciak">Referenciák</a>
          <a href="/#kapcsolat">Kapcsolat</a>
        </nav>
        <a className="pill" href="/#kapcsolat">
          Ajánlatkérés<i>→</i>
        </a>
      </header>
      <a className="call" href="tel:+36705760108">
        Hívjon: {PHONE}
      </a>

      <main>
        {/* Hero */}
        <section className="hero">
          <img
            className="bg"
            src={heroImg}
            alt="Nyers acél lemez a műhelyben — lakatosmunka Egerben"
          />
          <div className="hin">
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
              <img src={customImg} alt="Egyedi lakatosmunkával készült platóoldal" />
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
            <h2>Kész munkák a műhelyből.</h2>
          </div>
          <div className="gr" style={{ marginTop: "clamp(28px,4vw,48px)" }}>
            <figure className="pj">
              <div className="im">
                <img
                  loading="lazy"
                  src={paintedImg}
                  alt="Elkészült, piros festett platóoldal — lakatosmunka Egerben"
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
                <img
                  loading="lazy"
                  src={customImg}
                  alt="Egyedi lakatosmunkával készült platóoldal"
                />
              </div>
              <figcaption>
                <small>Egyedi munka</small>
                <b>Egyedi platóoldal</b>
                <span>Helyszínre szabott, egyedi méretű lakatosmunka.</span>
              </figcaption>
            </figure>
            <figure className="pj">
              <div className="im">
                <img
                  loading="lazy"
                  src={installImg}
                  alt="Acélváz szerelése darus teherautóval a helyszínen"
                />
              </div>
              <figcaption>
                <small>Helyszíni szerelés</small>
                <b>Acélváz szerelése</b>
                <span>A kész szerkezet darus teherautóval történő helyszíni beépítése.</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Band — quote */}
        <section className="band">
          <img loading="lazy" src={heroImg} alt="" />
          <div className="ghost" aria-hidden="true">
            Lakatosmunka
          </div>
          <div className="wrap bc">
            <div className="slc">
              <h3>Saját műhely, saját daru</h3>
              <p style={{ margin: 0, padding: "0 4px" }}>
                A vágástól a beépítésig minden nálunk készül.
              </p>
            </div>
            <div className="bt">
              <h2>Egy munka, egy kézből.</h2>
              <p className="lead">
                A tervezéstől a beépítésig minden saját kézben tartunk — így a lakatosmunka és a
                helyszíni szerelés összehangoltan, egy kivitelezőtől történik.
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
                  Telefonáljon a {PHONE}-as számon, vagy töltse ki az ajánlatkérő űrlapot a
                  főoldalon. Szívesen felvesszük a munka részleteit.
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
