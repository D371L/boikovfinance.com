import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { loadRuntimeConfig } from './lib/config.ts';

function hideAppSplash() {
  const splash = document.getElementById('app-splash');
  if (!splash) return;
  splash.classList.add('app-splash--exit');
  const remove = () => splash.remove();
  splash.addEventListener('transitionend', remove, { once: true });
  window.setTimeout(remove, 550);
}

// Load runtime configuration before rendering the app
async function initializeApp() {
  // Prerendered blog pages are served as pure static HTML for SEO.
  // Intentionally skip React mounting so the crawler-facing markup stays
  // lightweight and self-contained — no client-side hydration needed.
  if (
    document
      .querySelector('meta[name="prerender-static-page"]')
      ?.getAttribute('content') === 'blog'
  ) {
    hideAppSplash();
    return;
  }

  try {
    await loadRuntimeConfig();
  } catch (error) {
    console.warn('Runtime configuration error, using defaults:', error);
  }

  // Render the app
  createRoot(document.getElementById('root')!).render(<App />);

  requestAnimationFrame(() => {
    requestAnimationFrame(hideAppSplash);
  });
}

// Initialize the app
initializeApp();
