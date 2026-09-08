export type PonudaProduct = {
  id: string;
  name: string;
  image: string;
  description?: string;
  price?: string;
  fit?: 'contain' | 'cover';
};

export type PonudaCategory = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  cover?: string;
  /** Odnos stranica okvira za fotografije, ako se razlikuje od uobicajenog 4:5. */
  ratio?: number;
  products: PonudaProduct[];
};

export const ponudaCategories: PonudaCategory[] = [
  {
    slug: 'prirodne-vocne-rakije',
    name: 'Prirodne voćne rakije',
    eyebrow: 'Kolekcija',
    description: 'Tradicionalne rakije od voća iz naših voćnjaka.',
    cover: '/prirodnavocnarakijanaslov.jpg',
    products: [
      {
        id: 'sljiva',
        name: 'Tradicionalna Šljiva',
        image: '/flasa-sljiva.jpg',
        description:
          'Rakija od zrelih šljiva, pažljivo destilisana i strpljivo odležana u hrastovom buretu – bogatog mirisa, punog ukusa i istinskog duha tradicije.',
        fit: 'cover'
      },
      {
        id: 'viljamovka',
        name: 'Viljamovka',
        image: '/flasa-viljamovka.jpg',
        description:
          'Rakija od pažljivo biranih, zrelih krušaka – raskošne arome, nježnog ukusa i mirisa koji osvaja već pri prvom susretu.',
        fit: 'cover'
      },
      {
        id: 'dunja',
        name: 'Dunja',
        image: '/flasa-dunja.jpg',
        description:
          'Rakija od zrelih, mirisnih dunja – bogate voćne arome, pitkog ukusa i prepoznatljive topline koja dugo ostaje na nepcu.',
        fit: 'cover'
      },
      {
        id: 'kajsija',
        name: 'Kajsija',
        image: '/flasa-kajsija.jpg',
        description:
          'Rakija od zrelih, sočnih kajsija – očaravajuće voćne arome, nježnog ukusa i mirisa koji u svakoj čašici donosi punoću ljeta.',
        fit: 'cover'
      }
    ]
  },
  {
    slug: 'premium-rakije',
    name: 'Premium rakije',
    eyebrow: 'Selekcija',
    description: 'Odležale rakije za posebne trenutke.',
    cover: '/premiumrakijanaslov.jpg',
    products: [
      {
        id: 'sljiva-prestige',
        name: 'Šljiva Prestige',
        image: '/rakija-sljiva-prestige.jpg',
        description:
          'Ekskluzivna prirodna voćna rakija pažljivo njegovana u hrastovom buretu punih sedam godina - za izuzetnu punoću, zrelost i profinjen karakter, plemenit ukus za prave hedoniste.',
        fit: 'cover'
      },
      {
        id: 'dunja-barrique',
        name: 'Dunja Barrique',
        image: '/rakija-dunja-barrique.jpg',
        description:
          'Vrhunska prirodna voćna rakija dunje oplemenjena odležavanjem u hrastovom buretu – elegantna, topla i profinjenog karaktera.',
        fit: 'cover'
      }
    ]
  },
  {
    slug: 'poklon-pakovanja',
    name: 'Poklon pakovanja',
    eyebrow: 'Pokloni',
    description: 'Paketi spremni za goste, slavlja i poslovne pažnje.',
    cover: '/Poklonpaketinaslovna.png',
    // Kutije su snimljene uspravnim kadrom, pa okvir prati oblik fotografije
    // umjesto uobicajenog 4:5 u kojem bi sa strane ostale prazne pruge.
    ratio: 640 / 1492,
    products: [
      {
        id: 'poklon-sljiva',
        name: 'Poklon paket Šljiva',
        image: '/poklon-paket-sljiva.jpg',
        fit: 'cover'
      },
      {
        id: 'poklon-viljamovka',
        name: 'Poklon paket Viljamovka',
        image: '/poklon-paket-viljamovka.jpg',
        fit: 'cover'
      },
      {
        id: 'poklon-dunja',
        name: 'Poklon paket Dunja',
        image: '/poklon-paket-dunja.jpg',
        fit: 'cover'
      },
      {
        id: 'poklon-kajsija',
        name: 'Poklon paket Kajsija',
        image: '/poklon-paket-kajsija.jpg',
        fit: 'cover'
      }
    ]
  }
];

export function getPonudaCategory(slug: string): PonudaCategory | undefined {
  return ponudaCategories.find((category) => category.slug === slug);
}
