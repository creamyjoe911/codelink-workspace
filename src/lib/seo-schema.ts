// SEO structured-data helpers for the Grandnatural site.
//
// CANONICAL_BASE is the published production origin. Update it here (one place)
// when a custom domain is attached — every route's canonical link and every
// JSON-LD @id/item URL is derived from it.
export const CANONICAL_BASE = "https://codelink-workspace.vibepreview.app";

export function canonicalUrl(path = "/"): string {
  return CANONICAL_BASE + (path.startsWith("/") ? path : `/${path}`);
}

// LocalBusiness schema for the homepage. No street address or postal code:
// Grandnatural is a service-area contractor (works on-site across Eger and
// Heves vármegye), so the PostalAddress only carries locality/region/country.
// areaServed lists the real service territory. openingHours reflects
// Monday-Friday 08:00-17:00.
export const LOCAL_BUSINESS_JSONLD: string = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${canonicalUrl("/")}/#business`,
  name: "Grandnatural Kft.",
  description:
    "Építés, felújítás, acélszerkezetek, lakatosmunkák, daruzás és egyedi kivitelezés Egerben és Heves vármegyében. Saját darus teherautó, több mint 16 év tapasztalat.",
  url: canonicalUrl("/"),
  telephone: "+36 70 576 0108",
  email: "grandnatural2010@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Eger",
    addressRegion: "Heves",
    addressCountry: "HU",
  },
  areaServed: ["Eger", "Heves vármegye"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  openingHours: "Mo-Fr 08:00-17:00",
});

// BreadcrumbList schema for a page. `crumbs` is the trail from the homepage
// (which is always the first item) to the current page, in order.
export function breadcrumbJsonLD(crumbs: ReadonlyArray<{ name: string; path: string }>): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: canonicalUrl(c.path),
    })),
  });
}
