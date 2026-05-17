import { useEffect } from 'react';
import type { PageSeoMeta } from '@/lib/seo';

type MetaDefinition = {
  attribute: 'name' | 'property';
  key: string;
  value?: string;
};

function ensureMetaTag(attribute: 'name' | 'property', key: string) {
  let tag = document.head.querySelector(
    `meta[${attribute}="${key}"]`,
  ) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  return tag;
}

function ensureCanonicalLink(href: string) {
  let link = document.head.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }

  const previousHref = link.href;
  link.href = href;
  return { link, previousHref };
}

export function usePageSeo(meta: PageSeoMeta) {
  useEffect(() => {
    const previousTitle = document.title;
    const canonical = ensureCanonicalLink(meta.canonicalUrl);
    const definitions: MetaDefinition[] = [
      { attribute: 'name', key: 'description', value: meta.description },
      { attribute: 'name', key: 'robots', value: 'index, follow' },
      { attribute: 'property', key: 'og:title', value: meta.ogTitle },
      { attribute: 'property', key: 'og:description', value: meta.ogDescription },
      { attribute: 'property', key: 'og:type', value: meta.ogType },
      { attribute: 'property', key: 'og:url', value: meta.ogUrl },
      { attribute: 'property', key: 'og:site_name', value: meta.ogSiteName },
      { attribute: 'property', key: 'og:locale', value: meta.ogLocale },
      { attribute: 'property', key: 'og:image', value: meta.ogImage },
      {
        attribute: 'property',
        key: 'og:image:width',
        value: String(meta.ogImageWidth),
      },
      {
        attribute: 'property',
        key: 'og:image:height',
        value: String(meta.ogImageHeight),
      },
      { attribute: 'property', key: 'og:image:alt', value: meta.ogImageAlt },
      { attribute: 'name', key: 'twitter:card', value: meta.twitterCard },
      { attribute: 'name', key: 'twitter:site', value: meta.twitterSite },
      { attribute: 'name', key: 'twitter:creator', value: meta.twitterCreator },
      { attribute: 'name', key: 'twitter:title', value: meta.twitterTitle },
      {
        attribute: 'name',
        key: 'twitter:description',
        value: meta.twitterDescription,
      },
      { attribute: 'name', key: 'twitter:image', value: meta.twitterImage },
      {
        attribute: 'name',
        key: 'twitter:image:alt',
        value: meta.twitterImageAlt,
      },
    ];

    const previousValues = definitions.map(({ attribute, key, value }) => {
      if (!value) {
        return null;
      }
      const tag = ensureMetaTag(attribute, key);
      const previousContent = tag.content;
      tag.content = value;
      return { tag, previousContent };
    });

    document.title = meta.title;

    return () => {
      document.title = previousTitle;
      canonical.link.href = canonical.previousHref;
      previousValues.forEach((entry) => {
        if (!entry) {
          return;
        }
        entry.tag.content = entry.previousContent;
      });
    };
  }, [meta]);
}
