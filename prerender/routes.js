import { getBlogRoutes } from './blog-routes.js';

export function getPrerenderRoutes() {
  return ['/', ...getBlogRoutes()];
}
