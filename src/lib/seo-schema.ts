// SEO structured-data helpers for the Grandnatural site.
//
// SITE_URL is the published production origin. Update it here (one place)
// when a custom domain is attached — every route's canonical link and every
// JSON-LD @id/item URL is derived from it.
export const SITE_URL = "https://codelink-workspace.vibepreview.app";

export function canonicalUrl(path = "/"): string {
  return SITE_URL + (path.startsWith("/") ? path : `/${path}`);
}

// LocalBusiness schema for the homepage. No street address or postal code:
// Grandnatural is a service-area contractor (works on-site across Eger and
// Heves vármegye), so the PostalAddress only carries locality/region/country.
// areaServed lists the real service territory. No opening hours, geo
// coordinates, ratings, or reviews per the spec.
export const LOCAL_BUSINESS_JSONLD: string = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Grandnatural Kft.",
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
});

// BreadcrumbList schema for a page. `crumbs` is the trail from the homepage
// (which is always the first item) to the current page, in order. Every URL
// is built as an absolute URL from SITE_URL.
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
