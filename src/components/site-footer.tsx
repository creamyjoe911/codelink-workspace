// Shared footer for every page. Renders the CTA bar, the company info
// columns (logo + description, services, contact + company details), the
// giant watermark, and the copyright line. Used by the service/hub pages and
// the references page; the homepage keeps its own raw-HTML footer in
// grandnatural-content.ts (kept in sync with this component).
import { SITE_LOGO_SVG } from "@/components/site-nav";

const PHONE = "+36 70 576 0108";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61589404299906";

export function SiteFooter({ current }: { current?: string }) {
  const year = new Date().getFullYear();
  return (
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
            <a href="mailto:grandnatural2010@gmail.com">grandnatural2010@gmail.com</a>
            <a href="/#kapcsolat">Ajánlatkérés</a>
            <a href="/referenciak">Referenciák</a>
            <a href="/rolunk">Rólunk</a>
          </div>
          <div>
            <b>Grandnatural Kft.</b>
            <p style={{ margin: 0 }}>
              Eger és Heves vármegye
              <br />
              Hétfő–Péntek 8:00–17:00
              <br />
              Adószám: [ADÓSZÁM]
              <br />
              Cégjegyzékszám: [CÉGJEGYZÉKSZÁM]
            </p>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="gh" aria-hidden="true">
        Grandnatural Kft.
      </div>
      <div className="wrap">
        <div className="cp">
          <span>© {year} Grandnatural Kft.</span>
          <span>Eger és Heves vármegye</span>
        </div>
      </div>
    </footer>
  );
}
