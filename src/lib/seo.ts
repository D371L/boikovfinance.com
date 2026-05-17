import { faqs } from '@/data/faqs';
import { PHONE_TEL } from '@/lib/contact';

export const SITE_URL = (
  import.meta.env.VITE_SITE_URL?.trim() || 'https://boikovfinance.com'
).replace(/\/+$/, '');

export const SITE_NAME =
  import.meta.env.VITE_APP_SITE_NAME?.trim() || 'ארטיום בויקוב';

export const HOME_TITLE =
  import.meta.env.VITE_APP_TITLE?.trim() ||
  'ארטיום בויקוב | יועץ משכנתאות בישראל';

export const HOME_DESCRIPTION =
  import.meta.env.VITE_APP_DESCRIPTION?.trim() ||
  'יועץ משכנתאות מנוסה שעוזר לך להשיג את הריבית הנמוכה ביותר. ייעוץ ראשוני ללא תשלום וללא התחייבות. ליווי אישי מול כל הבנקים.';

export const OG_IMAGE_PATH = '/assets/og-default.jpg';

export const OG_IMAGE_ALT =
  import.meta.env.VITE_OG_IMAGE_ALT?.trim() ||
  'ארטיום בויקוב – יועץ משכנתאות, ייעוץ משכנתאות בישראל';

export const TWITTER_SITE =
  import.meta.env.VITE_TWITTER_SITE?.trim() || '@boikovfinance';

export const TWITTER_CREATOR =
  import.meta.env.VITE_TWITTER_CREATOR?.trim() || TWITTER_SITE;

export const BUSINESS_ADDRESS = {
  streetAddress: 'שד מנחם בגין 135',
  addressLocality: 'טירת הכרמל',
  addressCountry: 'IL',
} as const;

export type PageSeoMeta = {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  ogUrl: string;
  ogSiteName: string;
  ogLocale: string;
  ogImage: string;
  ogImageWidth: number;
  ogImageHeight: number;
  ogImageAlt: string;
  twitterCard: string;
  twitterSite: string;
  twitterCreator: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  twitterImageAlt: string;
};

export function getAbsoluteUrl(pathname: string): string {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${SITE_URL}${normalized}`;
}

export function resolveMediaUrl(pathOrUrl?: string): string | undefined {
  if (!pathOrUrl) {
    return undefined;
  }
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  return getAbsoluteUrl(pathOrUrl);
}

export function buildHomeSeoMeta(): PageSeoMeta {
  const canonicalUrl = getAbsoluteUrl('/');
  const ogImage = resolveMediaUrl(OG_IMAGE_PATH)!;

  return {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    canonicalUrl,
    ogTitle: HOME_TITLE,
    ogDescription: HOME_DESCRIPTION,
    ogType: 'website',
    ogUrl: canonicalUrl,
    ogSiteName: SITE_NAME,
    ogLocale: 'he_IL',
    ogImage,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: OG_IMAGE_ALT,
    twitterCard: 'summary_large_image',
    twitterSite: TWITTER_SITE,
    twitterCreator: TWITTER_CREATOR,
    twitterTitle: HOME_TITLE,
    twitterDescription: HOME_DESCRIPTION,
    twitterImage: ogImage,
    twitterImageAlt: OG_IMAGE_ALT,
  };
}

export function buildHomeJsonLd() {
  const url = getAbsoluteUrl('/');
  const image = resolveMediaUrl(OG_IMAGE_PATH);
  const logo = resolveMediaUrl('/assets/logo.png');

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${url}#website`,
        url,
        name: SITE_NAME,
        inLanguage: 'he-IL',
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${url}#business`,
        name: SITE_NAME,
        url,
        image,
        logo,
        telephone: PHONE_TEL,
        email: 'artium07@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: BUSINESS_ADDRESS.streetAddress,
          addressLocality: BUSINESS_ADDRESS.addressLocality,
          addressCountry: BUSINESS_ADDRESS.addressCountry,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Israel',
        },
        availableLanguage: ['Hebrew'],
        priceRange: '$$',
        description: HOME_DESCRIPTION,
      },
      {
        '@type': 'Person',
        '@id': `${url}#person`,
        name: SITE_NAME,
        jobTitle: 'יועץ משכנתאות',
        url,
        image,
        telephone: PHONE_TEL,
        worksFor: {
          '@id': `${url}#business`,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
