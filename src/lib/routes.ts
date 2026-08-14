import type { View } from '../types/display';

// Single source of truth for View <-> URL mapping, shared by kiosk.ts's
// client-side pushState router and (indirectly, by convention) the Astro
// page filenames under src/pages/ that each route resolves to.
export const VIEW_PATHS: Record<View, string> = {
  home: '/',
  pyare: '/panj-pyare',
  takhts: '/panj-takht',
  quiz: '/quiz',
  learn: '/learn-sikhi',
  about: '/about',
  resources: '/resources',
  leaflets: '/leaflets',
  timeline: '/timeline',
};

const PATH_VIEWS: Partial<Record<string, View>> = Object.fromEntries(
  (Object.entries(VIEW_PATHS) as [View, string][]).map(([view, path]) => [path, view]),
);

export function viewForPath(pathname: string): View | undefined {
  return PATH_VIEWS[pathname];
}
