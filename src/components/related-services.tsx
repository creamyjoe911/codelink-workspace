// Shared "Kapcsolódó szolgáltatásaink" section rendered at the bottom of each
// service landing page. Links to the other three service pages with descriptive
// Hungarian anchor text.
const SERVICES = [
  {
    href: "/lakatosmunka-eger",
    label: "Lakatosmunkák Egerben",
    desc: "Kapuk, korlátok, lépcsők, előtetők és biztonsági szerkezetek gyártása és helyszíni szerelése.",
  },
  {
    href: "/acelszerkezet-gyartas-eger",
    label: "Acélszerkezet gyártás Egerben",
    desc: "Ipari acélvázak, teherhordó szerkezetek és egyedi gépvázak műhelyi gyártása és szerelése.",
  },
  {
    href: "/daruzas-es-fuvarozas-eger",
    label: "Daruzás és fuvarozás Egerben",
    desc: "Építőanyagok, nehézgépek, csarnok- és betonelemek darus rakodása és szállítása saját géppel.",
  },
  {
    href: "/csarnokepites-heves-varmegye",
    label: "Csarnoképítés Heves vármegyében",
    desc: "Acélvázas ipari csarnokok kivitelezése, szendvicspaneles burkolás és tetőszerkezetek szerelése.",
  },
] as const;

export function RelatedServices({ exclude }: { exclude: string }) {
  const others = SERVICES.filter((s) => s.href !== exclude);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ".cd-link:hover{border-color:var(--teal)}" }} />
      <section className="wrap" style={{ paddingBlock: "clamp(56px,7vw,110px)" }}>
        <div className="ctr" style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2>Kapcsolódó szolgáltatásaink.</h2>
          <p className="lead" style={{ marginTop: 20 }}>
            A Grandnaturalnál a műhely, a daru és a helyszíni munka egy kézből van — nézze meg a
            többi szolgáltatásunkat is.
          </p>
        </div>
        <div className="mx" style={{ marginTop: "clamp(36px,5vw,64px)" }}>
          {others.map((s) => (
            <a key={s.href} className="cd cd-link" href={s.href} style={{ textDecoration: "none" }}>
              <h3>{s.label}</h3>
              <p>{s.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
