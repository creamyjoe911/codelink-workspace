import { createFileRoute } from "@tanstack/react-router";
import { SITE_INLINE_IMAGES, SITE_CSS } from "@/lib/grandnatural-content";
import { SITE_LAZY_IMAGES } from "@/lib/grandnatural-lazy-images";
import { SiteNav, SITE_LOGO_SVG } from "@/components/site-nav";

export const Route = createFileRoute("/szolgaltatasok")({
  head: () => ({
    meta: [
      { title: "Szolgáltatások | Grandnatural — Eger, Heves vármegye" },
      {
        name: "description",
        content:
          "Acélszerkezet, daruzás és kivitelezés Egerben — lakatosmunka, acélgyártás, daruzás és csarnoképítés egy kivitelezőtől. Kérjen ajánlatot: +36 70 576 0108.",
      },
      {
        property: "og:title",
        content: "Szolgáltatások | Grandnatural — Eger, Heves vármegye",
      },
      {
        property: "og:description",
        content:
          "Acélszerkezet, daruzás és kivitelezés Egerben — lakatosmunka, acélgyártás, daruzás és csarnoképítés egy kivitelezőtől.",
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
  component: Szolgaltatasok,
});

const PHONE = "+36 70 576 0108";

function Szolgaltatasok() {
  const logoImg = SITE_LOGO_SVG;
  const heroImg = SITE_INLINE_IMAGES["images/02-grandnatural-darus-teherautoja-es-geppar.jpg"]!.src;
  const lakatosImg = SITE_LAZY_IMAGES["images/04-elkeszult-piros-festett-platooldal.jpg"]!.src;
  const acelImg = SITE_LAZY_IMAGES["images/05-nyers-acel-lemez-a-muhelyben.jpg"]!.src;
  const daruImg = SITE_LAZY_IMAGES["images/06-daruval-emelt-betonlap.jpg"]!.src;
  const csarnokImg = SITE_LAZY_IMAGES["images/07-alapozas-betonozasa.jpg"]!.src;

  const services = [
    {
      href: "/lakatosmunka-eger",
      title: "Lakatosmunka",
      img: lakatosImg,
      alt: "Elkészült, piros festett platóoldal — lakatosmunka Egerben",
      summary:
        "Kapuk, korlátok, lépcsők, előtetők és biztonsági szerkezetek gyártása és helyszíni szerelése saját műhelyből.",
    },
    {
      href: "/acelszerkezet-gyartas-eger",
      title: "Acélszerkezet gyártás",
      img: acelImg,
      alt: "Nyers acél lemez a műhelyben — acélszerkezet gyártás Egerben",
      summary:
        "Ipari acélvázak, teherhordó szerkezetek és egyedi gépvázak műhelyi gyártása és helyszíni szerelése.",
    },
    {
      href: "/daruzas-es-fuvarozas-eger",
      title: "Daruzás és fuvarozás",
      img: daruImg,
      alt: "Daruval emelt betonlap — darus rakodás és telepítés Egerben",
      summary:
        "Építőanyagok, nehézgépek, csarnok- és betonelemek darus rakodása és szállítása saját MAN darus teherautóval.",
    },
    {
      href: "/csarnokepites-heves-varmegye",
      title: "Csarnoképítés",
      img: csarnokImg,
      alt: "Alapozás és betonozás — csarnoképítés Heves vármegyében",
      summary:
        "Acélvázas ipari csarnokok kivitelezése, szendvicspaneles burkolás és tetőszerkezetek szerelése.",
    },
  ];

  return (
    <div className="grandnatural-root">
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS }} />

      <SiteNav current="/szolgaltatasok" />

      <main>
        {/* Hero */}
        <section className="hero">
          <img
            className="bg"
            src={heroImg}
            alt="Grandnatural darus teherautója és géppark — szolgáltatások Egerben"
          />
          <div className="hin">
            <h1>Szolgáltatások</h1>
            <p>
              Acélszerkezet, daruzás és kivitelezés Egerben — építés, acélgyártás, daruzás és
              csarnoképítés egy kivitelezőtől, saját műhelyből és saját daruval.
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

        {/* Sheet — intro */}
        <div className="sheet">
          <div className="sk"></div>

          <section className="wrap ab">
            <div className="al">
              <img
                src={heroImg}
                alt="Grandnatural darus teherautója és géppark — szolgáltatások Egerben"
              />
              <div className="stat">
                <b>16+</b>
                <span>év szakmi tapasztalat</span>
                <small>Építés, acélgyártás, daruzás és kivitelezés egy kézből.</small>
              </div>
            </div>
            <div>
              <h2>EGY kivitelező, négy szolgáltatás.</h2>
              <p style={{ marginTop: 24 }}>
                A Grandnaturalnál a műhely, a daru és a helyszíni munka egy kézből van —
                lakatosmunkát, acélszerkezet-gyártást, daruzást és csarnoképítést egy kivitelezőtől
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
              <h2>Négy szolgáltatás, egy kivitelező.</h2>
              <p style={{ marginTop: 16 }}>
                A lakatosmunkától a csarnoképítésig — minden a saját műhelyünkben készül, és a
                helyszínen szereljük be.
              </p>
            </div>
            <div className="mx" style={{ marginTop: "clamp(36px,5vw,64px)" }}>
              {services.map((s) => (
                <a
                  key={s.href}
                  className="cd cd-link"
                  href={s.href}
                  style={{ textDecoration: "none" }}
                >
                  <div className="im">
                    <img loading="lazy" src={s.img} alt={s.alt} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <span className="pill" style={{ marginTop: 12 }}>
                    Részletek<i>→</i>
                  </span>
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
              <a href="/csarnokepites-heves-varmegye">Csarnoképítés</a>
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
