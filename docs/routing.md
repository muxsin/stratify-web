# Routing

## Routing Constants

Never hardcode path strings. Always use `ROUTE_PATHS` from `src/shared/constants/route-paths.ts`.

### `src/shared/constants/page-names.ts`

```ts
export const PAGE_NAMES = {
  HOME: "home",
  SWOT: "swot",
} as const;

export type PageName = (typeof PAGE_NAMES)[keyof typeof PAGE_NAMES];
```

### `src/shared/constants/route-paths.ts`

```ts
export const DOMAIN = "https://stratify.uz";

export const ROUTE_PATHS = {
  [PAGE_NAMES.HOME]: { name: PAGE_NAMES.HOME, path: "/" },
  [PAGE_NAMES.SWOT]: { name: PAGE_NAMES.SWOT, path: "/swot" },
} as const;
```

When adding a new route: add to `PAGE_NAMES` first, then add to `ROUTE_PATHS`. In templates, link with `ROUTE_PATHS.<name>.path` (e.g. `<NuxtLink :href="ROUTE_PATHS.swot.path">`).

---

## Rendering Strategy

Routes are server-rendered by default. Only add a `routeRules` entry when a route needs
something other than the default. Current config (`nuxt.config.ts`):

```ts
routeRules: {
  '/': { ssr: true },     // SEO critical
  '/swot': { ssr: false }, // interactive tool, no public SEO need
}
```

Example of opting a private/interactive route out of SSR:

```ts
routeRules: {
  '/dashboard': { ssr: false }, // private, no SEO
}
```

Add a `routeRules` entry for every new route that needs non-default rendering.

### Page SEO

Set per-page metadata with `useSeoMeta` in the page wrapper (not the view). Site-wide
defaults (`url`, `name`, `description`, `defaultLocale`) come from the `site` block in
`nuxt.config.ts`, managed by `@nuxtjs/seo`. See [`pages/index.vue`](../src/pages/index.vue).

```ts
useSeoMeta({
  title: "Stratify — Turn complexity into clarity",
  description: "Learn business strategy frameworks…",
});
```

### Component-level

```vue
<ClientOnly>
  <HeavyInteractiveWidget />
</ClientOnly>
```

Use `<ClientOnly>` for components that depend on browser APIs (localStorage, window, etc.) and cannot run on the server.
