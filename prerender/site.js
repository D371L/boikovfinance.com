import React from 'react';
import { renderToString } from 'react-dom/server';
import { Route, Routes } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import BlogRoutes from '../src/blog-routes';
import { getBlogPost, getPostSeoMeta } from '../src/lib/blog';
import { getHomePrerenderHtml } from './home-html.js';
import {
  HOME_TITLE,
  SITE_NAME,
  resolveOgImageUrl,
} from './seo-shared.js';

function normalizePath(url) {
  if (!url || url === '/') {
    return '/';
  }
  return url.endsWith('/') ? url : `${url}/`;
}

function metaElement(attribute, key, content) {
  if (!content) {
    return null;
  }
  return {
    type: 'meta',
    props: {
      [attribute]: key,
      content,
    },
  };
}

function getBlogHeadElements(url) {
  const slug = url
    .replace(/^\/blog\/?/, '')
    .replace(/\/+$/, '')
    .replace(/^\/+/, '');

  const post = slug ? getBlogPost(slug) : null;
  const seoMeta = getPostSeoMeta(post);
  const ogImage = resolveOgImageUrl(seoMeta.ogImage);
  const twitterImage = resolveOgImageUrl(seoMeta.twitterImage ?? seoMeta.ogImage);

  const elements = [
    {
      type: 'meta',
      props: {
        name: 'prerender-static-page',
        content: 'blog',
      },
    },
    metaElement('name', 'description', seoMeta.description),
    metaElement('name', 'keywords', seoMeta.keywords),
    metaElement('property', 'og:url', seoMeta.url),
    metaElement('property', 'og:site_name', seoMeta.siteName),
    metaElement('property', 'og:title', seoMeta.ogTitle),
    metaElement('property', 'og:description', seoMeta.ogDescription),
    metaElement('property', 'og:image', ogImage),
    metaElement('property', 'og:image:alt', seoMeta.ogImageAlt),
    metaElement('property', 'og:type', seoMeta.ogType),
    metaElement('name', 'twitter:card', seoMeta.twitterCard),
    metaElement('name', 'twitter:site', seoMeta.twitterSite),
    metaElement('name', 'twitter:creator', seoMeta.twitterCreator),
    metaElement('name', 'twitter:title', seoMeta.twitterTitle),
    metaElement('name', 'twitter:description', seoMeta.twitterDescription),
    metaElement('name', 'twitter:image', twitterImage),
    metaElement('name', 'twitter:image:alt', seoMeta.twitterImageAlt),
    metaElement('property', 'article:published_time', seoMeta.publishedTime),
    ...(seoMeta.tags ?? []).map((tag) =>
      metaElement('property', 'article:tag', tag),
    ),
  ].filter(Boolean);

  return {
    title: seoMeta.title,
    lang: seoMeta.lang,
    elements: new Set(elements),
  };
}

function getHomeHeadElements() {
  return {
    title: HOME_TITLE,
    lang: 'he',
    elements: new Set([
      {
        type: 'meta',
        props: {
          name: 'prerender-static-page',
          content: 'home',
        },
      },
    ]),
  };
}

function getHeadElements(url) {
  const path = normalizePath(url);
  if (path === '/') {
    return getHomeHeadElements();
  }
  if (path.startsWith('/blog')) {
    return getBlogHeadElements(path);
  }
  return undefined;
}

export async function prerender({ url }) {
  const path = normalizePath(url);

  if (path === '/') {
    return {
      html: getHomePrerenderHtml(),
      head: getHomeHeadElements(),
    };
  }

  const html = renderToString(
    React.createElement(
      StaticRouter,
      { location: path },
      React.createElement(
        Routes,
        null,
        React.createElement(
          Route,
          { path: '/blog/*', element: React.createElement(BlogRoutes) },
        ),
      ),
    ),
  );

  const slug = path
    .replace(/^\/blog\/?/, '')
    .replace(/\/+$/, '')
    .replace(/^\/+/, '');
  const is404 = slug && !getBlogPost(slug);

  return {
    html,
    head: getHeadElements(path),
    ...(is404 ? { statusCode: 404 } : {}),
  };
}
