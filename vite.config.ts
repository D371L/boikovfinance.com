import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';
import Sitemap from 'vite-plugin-sitemap';
import { getPrerenderRoutes } from './prerender/routes.js';
import { getSitemapLastmod } from './prerender/blog-sitemap.js';
import { buildHomeJsonLd } from './prerender/home-json-ld.js';
import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  OG_IMAGE_ALT,
  OG_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
} from './prerender/seo-shared.js';

function escapeHtmlAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Публичный URL для sitemap.xml и OG (GitHub Pages + CNAME). */
const SITE_HOST = 'https://boikovfinance.com';

// Дефолты для index.html / OG; переопределяются через .env или GitHub Actions secrets.
process.env.VITE_SITE_URL ??= SITE_URL;
process.env.VITE_APP_SITE_NAME ??= SITE_NAME;
process.env.VITE_APP_TITLE ??= HOME_TITLE;
process.env.VITE_APP_DESCRIPTION ??= HOME_DESCRIPTION;
process.env.VITE_OG_IMAGE ??= `${SITE_URL}${OG_IMAGE_PATH}`;
process.env.VITE_OG_IMAGE_ALT ??= OG_IMAGE_ALT;
process.env.VITE_TWITTER_SITE ??= '@boikovfinance';
process.env.VITE_TWITTER_CREATOR ??=
  process.env.VITE_TWITTER_SITE ?? '@boikovfinance';

process.env.VITE_APP_TITLE = escapeHtmlAttr(process.env.VITE_APP_TITLE);
process.env.VITE_APP_DESCRIPTION = escapeHtmlAttr(
  process.env.VITE_APP_DESCRIPTION
);
process.env.VITE_APP_SITE_NAME = escapeHtmlAttr(process.env.VITE_APP_SITE_NAME);
process.env.VITE_OG_IMAGE_ALT = escapeHtmlAttr(process.env.VITE_OG_IMAGE_ALT);
process.env.VITE_HOME_JSON_LD = JSON.stringify(buildHomeJsonLd()).replace(
  /</g,
  '\\u003c'
);
process.env.VITE_APP_LOGO_URL ??= '/favicon.png';

export default defineConfig(({ command }) => {
  // SSG: главная + блог только при production build (не в dev).
  const prerenderRoutes = command === 'build' ? getPrerenderRoutes() : [];

  return {
    base: '/',
    plugins: [
      react(),
      // robots.txt + sitemap.xml; lastmod блога — из mtime файлов seo/content/
      Sitemap({
        hostname: SITE_HOST,
        lastmod: getSitemapLastmod(),
        readable: true,
        generateRobotsTxt: true,
        priority: 0.8,
        changefreq: 'weekly',
      }),
      ...(prerenderRoutes.length > 0
        ? vitePrerenderPlugin({
            renderTarget: '#root',
            prerenderScript: path.resolve(__dirname, 'prerender/site.js'),
            additionalPrerenderRoutes: prerenderRoutes,
          })
        : []),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: parseInt(process.env.VITE_PORT || '3000'),
      // Заготовка под локальный API; на GitHub Pages не используется.
      proxy: {
        '/api': {
          target: `http://localhost:8000`,
          changeOrigin: true,
        },
      },
      watch: { usePolling: true, interval: 600 },
    },
    build: {
      rollupOptions: {
        output: {
          // Разделение vendor-чанков для кэширования браузером.
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'router-vendor': ['react-router-dom'],
            'ui-vendor': [
              '@radix-ui/react-accordion',
              '@radix-ui/react-alert-dialog',
              '@radix-ui/react-aspect-ratio',
              '@radix-ui/react-avatar',
              '@radix-ui/react-checkbox',
              '@radix-ui/react-collapsible',
              '@radix-ui/react-context-menu',
              '@radix-ui/react-dialog',
              '@radix-ui/react-dropdown-menu',
              '@radix-ui/react-hover-card',
              '@radix-ui/react-label',
              '@radix-ui/react-menubar',
              '@radix-ui/react-navigation-menu',
              '@radix-ui/react-popover',
              '@radix-ui/react-progress',
              '@radix-ui/react-radio-group',
              '@radix-ui/react-scroll-area',
              '@radix-ui/react-select',
              '@radix-ui/react-separator',
              '@radix-ui/react-slider',
              '@radix-ui/react-slot',
              '@radix-ui/react-switch',
              '@radix-ui/react-tabs',
              '@radix-ui/react-toast',
              '@radix-ui/react-toggle',
              '@radix-ui/react-toggle-group',
              '@radix-ui/react-tooltip',
            ],
            'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
            'utils-vendor': [
              'axios',
              'clsx',
              'tailwind-merge',
              'class-variance-authority',
              'date-fns',
              'lucide-react',
            ],
            'query-vendor': ['@tanstack/react-query'],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
  };
});
