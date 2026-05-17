/** Shared SEO constants for prerender (Node, no Vite env at parse time). */
export const SITE_URL = (
  process.env.VITE_SITE_URL || 'https://boikovfinance.com'
).replace(/\/+$/, '');

export const SITE_NAME = 'ארטיום בויקוב';

export const HOME_TITLE = 'ארטיום בויקוב | יועץ משכנתאות בישראל';

export const HOME_DESCRIPTION =
  'יועץ משכנתאות מנוסה שעוזר לך להשיג את הריבית הנמוכה ביותר. ייעוץ ראשוני ללא תשלום וללא התחייבות. ליווי אישי מול כל הבנקים.';

export const OG_IMAGE_PATH = '/assets/og-default.jpg';

export const OG_IMAGE_ALT =
  'ארטיום בויקוב – יועץ משכנתאות, ייעוץ משכנתאות בישראל';

export function resolveAbsoluteUrl(pathOrUrl) {
  if (!pathOrUrl) {
    return undefined;
  }
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  const normalized = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${normalized}`;
}

export function resolveOgImageUrl(imagePath) {
  return resolveAbsoluteUrl(imagePath ?? OG_IMAGE_PATH);
}
