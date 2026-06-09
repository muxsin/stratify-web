# Routing

## Routing Constants

Never hardcode path strings. Always use `ROUTE_PATHS` from `src/shared/constants/route-paths.ts`.

### `src/shared/constants/page-names.ts`

```ts
export const PAGE_NAMES = {
  HOME: "home",
  SWOT: "swot",
  DOCS: "docs",
  DOCS_SWOT: "docs-swot",
  DOCS_SWOT_BASICS: "docs-swot-basics",
  DOCS_SWOT_HOW_TO: "docs-swot-how-to",
  DOCS_SWOT_BEST_PRACTICES: "docs-swot-best-practices",
  DOCS_SWOT_EXAMPLES: "docs-swot-examples",
} as const;

export type PageName = (typeof PAGE_NAMES)[keyof typeof PAGE_NAMES];
```

### `src/shared/constants/route-paths.ts`

```ts
export const DOMAIN = "https://stratify.uz";

export const ROUTE_PATHS = {
  [PAGE_NAMES.HOME]: { name: PAGE_NAMES.HOME, path: "/" },
  [PAGE_NAMES.SWOT]: { name: PAGE_NAMES.SWOT, path: "/swot" },
  [PAGE_NAMES.DOCS]: { name: PAGE_NAMES.DOCS, path: "/docs" },
  [PAGE_NAMES.DOCS_SWOT]: { name: PAGE_NAMES.DOCS_SWOT, path: "/docs/swot" },
  [PAGE_NAMES.DOCS_SWOT_BASICS]: { name: PAGE_NAMES.DOCS_SWOT_BASICS, path: "/docs/swot/basics" },
  [PAGE_NAMES.DOCS_SWOT_HOW_TO]: {
    name: PAGE_NAMES.DOCS_SWOT_HOW_TO,
    path: "/docs/swot/how-to-use",
  },
  [PAGE_NAMES.DOCS_SWOT_BEST_PRACTICES]: {
    name: PAGE_NAMES.DOCS_SWOT_BEST_PRACTICES,
    path: "/docs/swot/best-practices",
  },
  [PAGE_NAMES.DOCS_SWOT_EXAMPLES]: {
    name: PAGE_NAMES.DOCS_SWOT_EXAMPLES,
    path: "/docs/swot/examples",
  },
} as const;
```

When adding a new route: add to `PAGE_NAMES` first, then add to `ROUTE_PATHS`. In templates, link with `ROUTE_PATHS.<name>.path` (e.g. `<NuxtLink :href="ROUTE_PATHS.swot.path">`).

---

## Rendering Strategy

**All routes are prerendered.** The entire site is built to static HTML at deploy time via a single catch-all rule in `nuxt.config.ts`:

```ts
routeRules: {
  "/**": { prerender: true }, // entire site — built at deploy time
}
```

This means every page is generated once at build and served as static HTML — no server-side rendering per request. This is appropriate because all current content (tools, docs, landing) is user-agnostic and benefits from instant delivery.

**Consequence for new routes:** new pages are automatically prerendered with no extra config needed. If a future route requires per-request server rendering (e.g. personalised or auth-gated content), override it explicitly:

```ts
routeRules: {
  "/**": { prerender: true },
  "/dashboard": { ssr: true }, // override for dynamic per-user content
}
```

Use `<ClientOnly>` for any component that depends on browser APIs (localStorage, window) — they cannot run during prerender.

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
