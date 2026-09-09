import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import type { Plugin } from 'vite';
import { jsonLd, OG_SLIKA, SAJT, stranice, type SeoStrana } from './stranice';

function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function ubaci(ljuska: string, strana: SeoStrana) {
  const url = `${SAJT}${strana.put === '/' ? '/' : strana.put}`;
  const shema = JSON.stringify(jsonLd());

  let html = ljuska;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(strana.naslov)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${esc(strana.opis)}" />`
  );
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`);
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${esc(strana.naslov)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${esc(strana.opis)}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${OG_SLIKA}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${esc(strana.naslov)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${esc(strana.opis)}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${OG_SLIKA}" />`
  );

  const dodatak = `
    <script type="application/ld+json">${shema}</script>
    <noscript>
      <article>${strana.tijelo}</article>
    </noscript>
  `;

  if (html.includes('<!-- ZA-CITACE -->')) {
    html = html.replace(/<!-- ZA-CITACE -->[\s\S]*?<!-- \/ZA-CITACE -->/, `<!-- ZA-CITACE -->${dodatak}<!-- /ZA-CITACE -->`);
  } else {
    html = html.replace('</body>', `${dodatak}</body>`);
  }

  return html;
}

/* Poslije Viteovog builda: ista ljuska aplikacije, ali svaka ruta dobije
   svoj naslov, opis i tekst u noscript — fallback ako JS nije pokrenut.
   React i dalje crta u #root, pa se hero i animacije ne diraju. */
export function zaCitace(): Plugin {
  return {
    name: 'za-citace',
    apply: 'build',
    closeBundle() {
      const dist = join(process.cwd(), 'dist');
      const ljuska = readFileSync(join(dist, 'index.html'), 'utf8');

      for (const strana of stranice) {
        const html = ubaci(ljuska, strana);
        const datoteka =
          strana.put === '/'
            ? join(dist, 'index.html')
            : join(dist, strana.put.slice(1), 'index.html');
        mkdirSync(dirname(datoteka), { recursive: true });
        writeFileSync(datoteka, html);
      }
    }
  };
}
