// Shared top navigation for the Grandnatural site.
//
// Top-level items: Rólunk, Szolgáltatások, Műhelymunka, Referenciák, Kapcsolat.
// "Szolgáltatások" links to the hub page (/szolgaltatasok) and opens a dropdown
// listing only the four service landing pages — they are NOT listed as separate
// top-level items. On desktop (fine pointer) the dropdown opens on hover and
// stays open while the pointer moves onto it (an invisible 12px bridge spans the
// gap between the trigger and the menu). On touch it toggles on tap and closes
// when tapping elsewhere. Under 960px the inline menu is hidden and a hamburger
// opens a full panel with every top-level link plus the four service sub-links.
import { useEffect, useRef, useState } from "react";

// Inline SVG logo (under 2 KB) — replaces the base64 PNG so site-nav pulls in
// no image data at all. Matches the site's Barlow type + teal accent.
export const SITE_LOGO_SVG =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="48" viewBox="0 0 220 48" fill="none">` +
      `<rect x="2" y="6" width="36" height="36" rx="9" fill="#1fb5a4"/>` +
      `<path d="M14 34V14h12.5v4.6H19.6v3.4h6.4v4.6h-6.4V34H14z" fill="#04201c"/>` +
      `<text x="48" y="22" font-family="Barlow,Arial,sans-serif" font-size="17" font-weight="800" fill="#0e1a18">Grandnatural</text>` +
      `<text x="48" y="36" font-family="Barlow,Arial,sans-serif" font-size="9" font-weight="600" letter-spacing="1.5" fill="#1fb5a4">ACÉL · DARU · KIVITELEZÉS</text>` +
      `</svg>`,
  );

const SERVICE_LINKS = [
  { href: "/lakatosmunka-eger", label: "Lakatosmunka" },
  { href: "/acelszerkezet-gyartas-eger", label: "Acélszerkezet gyártás" },
  { href: "/daruzas-es-fuvarozas-eger", label: "Daruzás és fuvarozás" },
  { href: "/csarnokepites-heves-varmegye", label: "Csarnoképítés" },
] as const;

// Invisible bridge so the pointer can travel from the Szolgáltatások trigger
// down onto the .ddm menu without leaving .dd:hover (which would snap it shut).
// It is a child box of .ddm, so hovering it keeps .dd:hover alive. It only
// captures pointer events while the menu is open (closed .ddm is
// visibility:hidden / pointer-events:none).
const NAV_CSS = `.nav .ddm::before{content:"";position:absolute;left:0;right:0;top:-12px;height:12px}`;

type Props = { current: string };

export function SiteNav({ current }: Props) {
  const [ddOpen, setDdOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCoarse, setIsCoarse] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  // Touch vs mouse: on coarse pointers the trigger toggles the dropdown on tap
  // (and the sub-links navigate); on fine pointers the trigger itself navigates
  // to the hub while hover reveals the dropdown.
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const upd = () => setIsCoarse(mq.matches);
    upd();
    mq.addEventListener("change", upd);
    return () => mq.removeEventListener("change", upd);
  }, []);

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
      <style dangerouslySetInnerHTML={{ __html: NAV_CSS }} />
      <header className="nav" ref={rootRef as any}>
        <a href="/" className="nav-home" aria-label="Grandnatural főoldal">
          <img src={SITE_LOGO_SVG} alt="Grandnatural" />
        </a>
        <nav className={menuOpen ? "open" : undefined}>
          <a href="/#rolunk">Rólunk</a>
          <span
            className="dd"
            onMouseEnter={() => setDdOpen(true)}
            onMouseLeave={() => setDdOpen(false)}
          >
            <a
              href="/szolgaltatasok"
              aria-current={isSzolg ? "page" : undefined}
              aria-expanded={ddOpen}
              aria-haspopup="true"
              onClick={(e) => {
                if (isCoarse) {
                  e.preventDefault();
                  setDdOpen((v) => !v);
                }
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
