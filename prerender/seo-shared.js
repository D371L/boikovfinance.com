/** Shared SEO constants for prerender (Node, no Vite env at parse time). */
export const SITE_URL = (
  process.env.VITE_SITE_URL || 'https://boikovfinance.com'
).replace(/\/+$/, '');

export const SITE_NAME = 'ארטיום בויקוב | FINDERS';

export const HOME_TITLE = 'ארטיום בויקוב | מלווה משקיעי נדל״ן בחיפה | FINDERS';

export const HOME_DESCRIPTION =
  'מלווה משקיעי נדל״ן בחיפה והסביבה. מאתר נכסים מתחת למחיר השוק, בודק כדאיות עסקאות ומנהל משא ומתן. FINDERS – מוצאים את העסקה שאחרים מפספסים.';

export const OG_IMAGE_PATH = '/assets/og-default.jpg';

export const OG_IMAGE_ALT =
  'ארטיום בויקוב – מלווה משקיעי נדל״ן, FINDERS חיפה';

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
