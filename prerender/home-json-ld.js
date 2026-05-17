import { faqs } from './faqs.js';
import {
  HOME_DESCRIPTION,
  OG_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
  resolveOgImageUrl,
} from './seo-shared.js';

const PHONE_TEL = '+972543319843';

export function buildHomeJsonLd() {
  const url = `${SITE_URL}/`;
  const image = resolveOgImageUrl(OG_IMAGE_PATH);
  const logo = resolveOgImageUrl('/assets/logo.png');

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
          streetAddress: 'שד מנחם בגין 135',
          addressLocality: 'טירת הכרמל',
          addressCountry: 'IL',
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
