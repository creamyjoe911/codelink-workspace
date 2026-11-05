// Central map from the site's internal image keys to their real static file
// paths under /public/images, with intrinsic dimensions. Every <img> on the
// site reads its src/width/height directly from here — no data-src placeholder,
// no runtime swap. File names are ASCII only.
export type ImgInfo = { src: string; width: number; height: number };

export const IMAGE_PATHS: Record<string, ImgInfo> = {
  "images/03-betonozas-az-alapon-mogotte-ket-betonkev.jpg": {
    src: "/images/03-betonozas-az-alapon-mogotte-ket-betonkev.jpg.webp",
    width: 800,
    height: 1000,
  },
  "images/04-elkeszult-piros-festett-platooldal.jpg": {
    src: "/images/04-elkeszult-piros-festett-platooldal.jpg.webp",
    width: 800,
    height: 600,
  },
  "images/05-nyers-acel-lemez-a-muhelyben.jpg": {
    src: "/images/05-nyers-acel-lemez-a-muhelyben.jpg.webp",
    width: 800,
    height: 1067,
  },
  "images/06-daruval-emelt-betonlap.jpg": {
    src: "/images/06-daruval-emelt-betonlap.jpg.webp",
    width: 800,
    height: 1067,
  },
  "images/08-felujitott-lakoter-uj-burkolattal.jpg": {
    src: "/images/08-felujitott-lakoter-uj-burkolattal.jpg.webp",
    width: 800,
    height: 600,
  },
  "images/09-elkeszult-acelvazas-ipari-csarnok.jpg": {
    src: "/images/09-elkeszult-acelvazas-ipari-csarnok.jpg.webp",
    width: 800,
    height: 600,
  },
  "images/10-acelvaz-szerelese-darus-teherautoval.jpg": {
    src: "/images/10-acelvaz-szerelese-darus-teherautoval.jpg.webp",
    width: 1000,
    height: 563,
  },
  "images/11-egyedi-platooldal.jpg": {
    src: "/images/11-egyedi-platooldal.jpg.webp",
    width: 800,
    height: 600,
  },
  "images/12-man-teherauto-fulkeje-felujitas-elott.jpg": {
    src: "/images/12-man-teherauto-fulkeje-felujitas-elott.jpg.webp",
    width: 800,
    height: 600,
  },
  "images/12-man-teherauto-fulkeje-felujitas-elott.jpg": {
    src: "/images/12-man-teherauto-fulkeje-felujitas-elott.jpg.webp",
    width: 800,
    height: 600,
  },
  "images/13-man-teherauto-fulkeje-felujitas-utan.jpg": {
    src: "/images/13-man-teherauto-fulkeje-felujitas-utan.jpg.webp",
    width: 800,
    height: 600,
  },
  "images/14-hegesztett-acel-konzol.jpg": {
    src: "/images/14-hegesztett-acel-konzol.jpg.webp",
    width: 800,
    height: 1066,
  },
  "images/15-lemez-osszeallitasa.jpg": {
    src: "/images/15-lemez-osszeallitasa.jpg.webp",
    width: 800,
    height: 1066,
  },
  "images/17-ipari-csarnok-kivitelezese.jpg": {
    src: "/images/09-elkeszult-acelvazas-ipari-csarnok.jpg.webp",
    width: 800,
    height: 600,
  },
  "images/18-helyszini-acelszereles-es-felallitas.jpg": {
    src: "/images/15-lemez-osszeallitasa.jpg.webp",
    width: 800,
    height: 1066,
  },
  "images/19-kulso-felujitas-kivitelezes-kozben.jpg": {
    src: "/images/19-kulso-felujitas-kivitelezes-kozben.webp",
    width: 770,
    height: 492,
  },
  "images/20-lakoingatlan-kulso-felujitasa.jpg": {
    src: "/images/20-lakoingatlan-kulso-felujitasa.webp",
    width: 770,
    height: 490,
  },
  "images/21-belso-felujitas-kivitelezes-kozben.jpg": {
    src: "/images/21-belso-felujitas-kivitelezes-kozben.webp",
    width: 770,
    height: 490,
  },
  "images/22-csaladi-haz-felujitasa.jpg": {
    src: "/images/22-csaladi-haz-felujitasa.webp",
    width: 770,
    height: 490,
  },
  "images/23-egyedi-platooldal-keszitese.jpg": {
    src: "/images/11-egyedi-platooldal.jpg.webp",
    width: 800,
    height: 600,
  },
  "images/24-teherauto-felepitmeny-felujitas-es-lakat.jpg": {
    src: "/images/24-teherauto-felepitmeny-felujitas-es-lakat.webp",
    width: 800,
    height: 1066,
  },
  "images/25-egyedi-nehezacel-szerkezet-gyartasa.jpg": {
    src: "/images/10-acelvaz-szerelese-darus-teherautoval.jpg.webp",
    width: 1000,
    height: 563,
  },
  "images/26-hegesztett-acelszerelveny-es-bordazott-i.jpg": {
    src: "/images/14-hegesztett-acel-konzol.jpg.webp",
    width: 800,
    height: 1066,
  },
  "images/27-muhelyi-szerkezet-elokeszites-es-hegeszt.jpg": {
    src: "/images/05-nyers-acel-lemez-a-muhelyben.jpg.webp",
    width: 800,
    height: 1067,
  },
  "images/28-darus-emeles-es-betonelem-telepites.jpg": {
    src: "/images/06-daruval-emelt-betonlap.jpg.webp",
    width: 800,
    height: 1067,
  },
  "images/16-munkaink-referenciak.jpg": {
    src: "/images/szolgaltatasok.webp",
    width: 800,
    height: 600,
  },
  "images/csarnok-epites": {
    src: "/images/csarnok-epites.webp",
    width: 2048,
    height: 1536,
  },
  "images/szolgaltatasok": {
    src: "/images/szolgaltatasok.webp",
    width: 1922,
    height: 1080,
  },
  "images/nyersacel": {
    src: "/images/05-nyers-acel-lemez-a-muhelyben.jpg.webp",
    width: 800,
    height: 1067,
  },
  "images/novenykert": {
    src: "/images/novenykert.webp",
    width: 1200,
    height: 900,
  },
  "images/Javitastol-a-teljes-felujitasig.webp": {
    src: "/images/Javitastol-a-teljes-felujitasig.webp",
    width: 2048,
    height: 1536,
  },
  "images/acelszerkezet-epites.webp": {
    src: "/images/acelszerkezet-epites.webp",
    width: 2048,
    height: 1536,
  },
  "images/emelos-acelszerkezes-epites.webp": {
    src: "/images/emelos-acelszerkezes-epites.webp",
    width: 2048,
    height: 1536,
  },
  "images/lakatosmunka-hero": {
    src: "/images/lakatosmunka-hero.webp",
    width: 1900,
    height: 1425,
  },
};

// Homepage hero photo (used directly on / and reused as the Daruzás hero).
export const HERO_IMAGE: ImgInfo = {
  src: "/images/grandnatural-hero.webp",
  width: 1983,
  height: 793,
};
