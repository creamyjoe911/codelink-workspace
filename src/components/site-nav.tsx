// Shared top navigation for the Grandnatural site.
//
// - The "Szolgáltatások" item links to the Szolgáltatások page and opens a
//   dropdown listing the four service landing pages. On desktop it opens on
//   hover; on touch it toggles on tap (preventDefault on the first tap, the
//   sub-links navigate on tap).
// - Under 960px the inline menu + pill are hidden by SITE_CSS and a
//   hamburger button opens a full readable panel containing every nav link
//   plus the four service links and the call button.
//
// The styles live in SITE_CSS (the `.nav .dd*`, `.mb`, `.mbx` rules appended
// after the original nav CSS).
import { useEffect, useRef, useState } from "react";
import { SITE_IMAGES } from "@/lib/grandnatural-content";

const SERVICE_LINKS = [
  { href: "/lakatosmunka-eger", label: "Lakatosmunka" },
  { href: "/acelszerkezet-gyartas-eger", label: "Acélszerkezet gyártás" },
  { href: "/daruzas-es-fuvarozas-eger", label: "Daruzás és fuvarozás" },
  { href: "/csarnokepites-heves-varmegye", label: "Csarnoképítés" },
] as const;

type Props = { current: string };

export function SiteNav({ current }: Props) {
  const logoImg = SITE_IMAGES["images/01-grandnatural.png"];
  const [ddOpen, setDdOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setDdOpen(false);
        setMenuOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDdOpen(false);
        setMenuOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth > 960) setMenuOpen(false);
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isSzolg = current === "/szolgaltatasok";

  return (
    <>
      <header className="nav" ref={rootRef as any}>
        <a href="/" className="nav-home" aria-label="Grandnatural főoldal">
          <img src={logoImg} alt="Grandnatural" />
        </a>
        <nav className={menuOpen ? "open" : undefined}>
          <a href="/#rolunk">Rólunk</a>
          <span className="dd">
            <a
              href="/szolgaltatasok"
              aria-current={isSzolg ? "page" : undefined}
              aria-expanded={ddOpen}
              aria-haspopup="true"
              onClick={(e) => {
                e.preventDefault();
                setDdOpen((v) => !v);
              }}
            >
              Szolgáltatások
            </a>
            <span className={`ddm${ddOpen ? " show" : ""}`}>
              {SERVICE_LINKS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  aria-current={current === s.href ? "page" : undefined}
                  onClick={() => {
                    setDdOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  {s.label}
                </a>
              ))}
            </span>
          </span>
          <a href="/#muhely">Műhelymunka</a>
          <a
            href="/lakatosmunka-eger"
            aria-current={current === "/lakatosmunka-eger" ? "page" : undefined}
          >
            Lakatosmunka
          </a>
          <a
            href="/acelszerkezet-gyartas-eger"
            aria-current={current === "/acelszerkezet-gyartas-eger" ? "page" : undefined}
          >
            Acélszerkezet
          </a>
          <a
            href="/daruzas-es-fuvarozas-eger"
            aria-current={current === "/daruzas-es-fuvarozas-eger" ? "page" : undefined}
          >
            Daruzás
          </a>
          <a
            href="/csarnokepites-heves-varmegye"
            aria-current={current === "/csarnokepites-heves-varmegye" ? "page" : undefined}
          >
            Csarnoképítés
          </a>
          <a href="/#referenciak">Referenciák</a>
          <a href="/#kapcsolat">Kapcsolat</a>
        </nav>
        <a className="pill" href="/#kapcsolat">
          Ajánlatkérés<i>→</i>
        </a>
        <button
          type="button"
          className={`mb${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Menü bezárása" : "Menü megnyitása"}
          aria-expanded={menuOpen}
          aria-controls="navmenu"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((v) => !v);
            setDdOpen(false);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <a className="call" href="tel:+36705760108">
        Hívjon: +36 70 576 0108
      </a>

      {menuOpen && (
        <div
          className="mbx"
          id="navmenu"
          role="dialog"
          aria-modal="false"
          aria-label="Navigáció"
          onClick={() => setMenuOpen(false)}
        >
          <nav className="mbn" onClick={(e) => e.stopPropagation()} aria-label="Fő navigáció">
            <a href="/#rolunk" onClick={() => setMenuOpen(false)}>
              Rólunk
            </a>
            <a
              href="/szolgaltatasok"
              aria-current={isSzolg ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Szolgáltatások
            </a>
            <div className="mbg">
              {SERVICE_LINKS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  aria-current={current === s.href ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {s.label}
                </a>
              ))}
            </div>
            <a href="/#muhely" onClick={() => setMenuOpen(false)}>
              Műhelymunka
            </a>
            <a href="/lakatosmunka-eger" onClick={() => setMenuOpen(false)}>
              Lakatosmunka
            </a>
            <a href="/acelszerkezet-gyartas-eger" onClick={() => setMenuOpen(false)}>
              Acélszerkezet
            </a>
            <a href="/daruzas-es-fuvarozas-eger" onClick={() => setMenuOpen(false)}>
              Daruzás
            </a>
            <a href="/csarnokepites-heves-varmegye" onClick={() => setMenuOpen(false)}>
              Csarnoképítés
            </a>
            <a href="/#referenciak" onClick={() => setMenuOpen(false)}>
              Referenciák
            </a>
            <a href="/#kapcsolat" onClick={() => setMenuOpen(false)}>
              Kapcsolat
            </a>
            <a className="mbcall" href="tel:+36705760108">
              Hívjon: +36 70 576 0108
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
