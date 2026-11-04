// SEO structured-data helpers for the Grandnatural site.
//
// SITE_URL is the published production origin. Update it here (one place)
// when a custom domain is attached — every route's canonical link and every
// JSON-LD @id/item URL is derived from it.
export const SITE_URL = "https://grandnatural.hu";

export function canonicalUrl(path = "/"): string {
  return SITE_URL + (path.startsWith("/") ? path : `/${path}`);
}

// LocalBusiness schema for the homepage. No street address or postal code:
// Grandnatural is a service-area contractor (works on-site across Eger and
// Heves vármegye), so the PostalAddress only carries locality/region/country.
// areaServed is a City + an AdministrativeArea (the service territory);
// sameAs links the verified Facebook page. image is the site's main hero
// photo. No openingHours, geo coordinates, priceRange, ratings, or reviews.
export const LOCAL_BUSINESS_JSONLD: string = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Grandnatural Kft.",
  url: canonicalUrl("/"),
  image: `${SITE_URL}/images/grandnatural-hero.webp`,
  telephone: "+36 70 576 0108",
  email: "grandnatural2010@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Eger",
    addressRegion: "Heves",
    addressCountry: "HU",
  },
  areaServed: [
    { "@type": "City", name: "Eger" },
    { "@type": "AdministrativeArea", name: "Heves vármegye" },
  ],
  sameAs: ["https://www.facebook.com/profile.php?id=61589404299906"],
  description:
    "Építés, felújítás, lakatosmunka, acélszerkezet-gyártás, daruzás és egyedi kivitelezés Egerben és Heves vármegyében — saját műhelyből és darus teherautóval, egy kivitelezőtől.",
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

// Service schema for a service landing page. `name` is the page's H1,
// `description` is the page's meta description. areaServed and provider are
// shared across every service page — the provider references the homepage
// LocalBusiness @id.
export function serviceJsonLD(opts: { name: string; description: string }): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    areaServed: ["Eger", "Heves vármegye"],
    provider: { "@id": `${SITE_URL}/#business` },
  });
}
