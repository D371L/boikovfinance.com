import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  SITE_NAME,
} from './seo-shared.js';

/** Crawler-visible fallback inside #root before React mounts. */
export function getHomePrerenderHtml() {
  return `<main id="seo-fallback" lang="he" dir="rtl" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0">
  <h1>${HOME_TITLE}</h1>
  <p>${HOME_DESCRIPTION}</p>
  <p>${SITE_NAME} – מלווה משקיעי נדל״ן בחיפה</p>
</main>`;
}
