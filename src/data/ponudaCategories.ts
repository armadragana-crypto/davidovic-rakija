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
        description: 'Šljiva iz domaćih voćnjaka, odležala u hrastu.',
        fit: 'cover'
      },
      {
        id: 'viljamovka',
        name: 'Viljamovka',
        image: '/flasa-viljamovka.jpg',
        description: 'Zrela viljamovka destilovana u malim serijama.',
        fit: 'cover'
      },
      {
        id: 'dunja',
        name: 'Dunja',
        image: '/flasa-dunja.jpg',
        description: 'Rakija od ručno biranih dunja.',
        fit: 'cover'
      },
      {
        id: 'kajsija',
        name: 'Kajsija',
        image: '/flasa-kajsija.jpg',
        description: 'Kajsija ubrana u punoj zrelosti, destilovana istog dana.',
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
        description: 'Prirodna voćna rakija odležala 7 godina.',
        fit: 'cover'
      },
      {
        id: 'dunja-barrique',
        name: 'Dunja Barrique',
        image: '/rakija-dunja-barrique.jpg',
        description: 'Dunja njegovana u hrastovim buradima.',
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
