export type FaqItem = {
  question: string;
  answer: string;
};

// Keep in sync with prerender/faqs.js (used for build-time JSON-LD).
export { faqs } from '../../prerender/faqs.js';
