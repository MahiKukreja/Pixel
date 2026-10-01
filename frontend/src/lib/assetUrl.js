// Resolves a /public asset against the deploy base path.
// CRA inlines process.env.PUBLIC_URL at build time, so this works both on a
// root domain and under a subpath like /Pixel on GitHub Pages.
const BASE = process.env.PUBLIC_URL || '';

export function assetUrl(path) {
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}

export default assetUrl;
