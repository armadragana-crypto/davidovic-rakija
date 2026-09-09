import { pitanja } from '../data/pitanja';
import { ponudaCategories } from '../data/ponudaCategories';
import { storyBlocks } from '../data/storyBlocks';

export const SAJT = 'https://davidovicrakija.com';
export const OG_SLIKA = `${SAJT}/premiumsljivanaslovna.png`;

export type SeoStrana = {
  put: string;
  naslov: string;
  opis: string;
  tijelo: string;
};

function odlomci(naslov: string, tekst: string) {
  return `<h2>${naslov}</h2><p>${tekst}</p>`;
}

const prica = storyBlocks.map((b) => odlomci(b.title, b.body)).join('');

const ponudaHtml = ponudaCategories
  .map((k) => {
    const proizvodi = k.products
      .map((p) => `<li><strong>${p.name}</strong>${p.description ? ` — ${p.description}` : ''}</li>`)
      .join('');
    return `<h2>${k.name}</h2><p>${k.description}</p><ul>${proizvodi}</ul>`;
  })
  .join('');

const faqHtml = pitanja
  .map((p) => `<h2>${p.question}</h2><p>${p.answer}</p>`)
  .join('');

export const stranice: SeoStrana[] = [
  {
    put: '/',
    naslov: 'Rakija Davidović | Premium Rakija Banja Luka | Tradicija od 1984',
    opis: 'Uživajte u bogatstvu tradicije i okusa rakije Davidović. Premium rakija od šljive, kajsije, dunje i kruške. Dostava u Banjoj Luci.',
    tijelo: `
      <h1>Rakija Davidović</h1>
      <p>Premium voćne rakije iz Hrvaćana, u porodičnoj tradiciji od 1984.</p>
      <h2>Naša priča</h2>
      ${prica}
      <h2>Naša ponuda</h2>
      <p>Četiri flaše u kojima se ogleda četrdeset godina naše destilacije.</p>
      ${ponudaHtml}
      <h2>Kontakt</h2>
      <p>Hrvaćani bb, 78430 Prnjavor, Bosna i Hercegovina. Telefon 065 531 545, svakim danom od 08 do 20h.</p>
    `
  },
  {
    put: '/o-nama',
    naslov: 'O nama | Rakija Davidović',
    opis: 'Priča o destileriji Davidović u selu Hrvaćani kod Prnjavora: voćnjak, tradicija od 1984. i način proizvodnje.',
    tijelo: `<h1>Naša priča</h1>${prica}`
  },
  {
    put: '/ponuda',
    naslov: 'Ponuda | Rakija Davidović',
    opis: 'Prirodne voćne rakije, premium selekcija i poklon pakovanja destilerije Davidović.',
    tijelo: `<h1>Ponuda</h1>${ponudaHtml}`
  },
  ...ponudaCategories.map((k) => ({
    put: `/ponuda/${k.slug}`,
    naslov: `${k.name} | Rakija Davidović`,
    opis: k.description,
    tijelo: `<h1>${k.name}</h1><p>${k.description}</p><ul>${k.products
      .map((p) => `<li><strong>${p.name}</strong>${p.description ? ` — ${p.description}` : ''}</li>`)
      .join('')}</ul>`
  })),
  {
    put: '/galerija',
    naslov: 'Galerija | Rakija Davidović',
    opis: 'Voćnjaci u Hrvaćanima, berba, destilerija i rakije koje iz svega toga nastanu.',
    tijelo: `<h1>Iz naših voćnjaka</h1><p>Voćnjaci u Hrvaćanima, berba, destilerija i rakije koje iz svega toga nastanu.</p>`
  },
  {
    put: '/kontakt',
    naslov: 'Kontakt | Rakija Davidović',
    opis: 'Javite se destileriji Davidović. Hrvaćani bb, 78430 Prnjavor. Telefon 065 531 545.',
    tijelo: `
      <h1>Kontaktirajte nas</h1>
      <p>Tu smo za sva vaša pitanja, narudžbe i sugestije.</p>
      <p>Telefon: 065 531 545, svakim danom od 08 do 20h.</p>
      <p>Adresa: Hrvaćani bb, 78430 Prnjavor, Bosna i Hercegovina.</p>
    `
  },
  {
    put: '/faq',
    naslov: 'Često postavljana pitanja | Rakija Davidović',
    opis: 'Odgovori na najčešća pitanja o rakiji Davidović, destilaciji i posjeti destileriji.',
    tijelo: `<h1>Često postavljana pitanja</h1>${faqHtml}`
  }
];

export function nadjiStranu(put: string) {
  const cist = put.replace(/\/$/, '') || '/';
  return stranice.find((s) => s.put === cist) ?? stranice[0];
}

export function jsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Distillery',
    name: 'Rakija Davidović',
    url: SAJT,
    foundingDate: '1984',
    telephone: '+38765531545',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hrvaćani bb',
      postalCode: '78430',
      addressLocality: 'Prnjavor',
      addressCountry: 'BA'
    },
    sameAs: [
      'https://www.instagram.com/davidovicrakija/',
      'https://www.facebook.com/people/Rakija-Davidovi%C4%87/61593745606353/'
    ]
  };
}
