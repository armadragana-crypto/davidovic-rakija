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
        image: '/sljivabezpozadine.png',
        description: 'Šljiva iz domaćih voćnjaka, odležala u hrastu.'
      },
      {
        id: 'viljamovka',
        name: 'Viljamovka',
        image: '/viljamovkabezpozadine.png',
        description: 'Zrela viljamovka destilovana u malim serijama.'
      },
      {
        id: 'dunja',
        name: 'Dunja',
        image: '/dunjabezpozadine.png',
        description: 'Rakija od ručno biranih dunja.'
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
    products: [
      {
        id: 'poklon-sljiva',
        name: 'Poklon paket Šljiva',
        image: '/poklonpaketsljiva.png'
      },
      {
        id: 'poklon-viljamovka',
        name: 'Poklon paket Viljamovka',
        image: '/poklonpaketviljamovka.png'
      },
      {
        id: 'poklon-dunja',
        name: 'Poklon paket Dunja',
        image: '/poklonpaketdunja.png'
      },
      {
        id: 'poklon-kajsija',
        name: 'Poklon paket Kajsija',
        image: '/poklonpaketkajsija.png'
      }
    ]
  }
];

export function getPonudaCategory(slug: string): PonudaCategory | undefined {
  return ponudaCategories.find((category) => category.slug === slug);
}
