import { next } from '@vercel/functions';

const USERNAME = 'drasko';
const PASSWORD = 'rakija2026';

function unauthorized(): Response {
  return new Response('Potrebna je autentifikacija.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Rakija Davidovic", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export default function middleware(request: Request): Response {
  const header = request.headers.get('authorization');

  if (!header?.startsWith('Basic ')) {
    return unauthorized();
  }

  let decoded: string;
  try {
    decoded = atob(header.slice('Basic '.length));
  } catch {
    return unauthorized();
  }

  const separator = decoded.indexOf(':');
  if (separator === -1) {
    return unauthorized();
  }

  const username = decoded.slice(0, separator);
  const password = decoded.slice(separator + 1);

  if (username !== USERNAME || password !== PASSWORD) {
    return unauthorized();
  }

  return next();
}
