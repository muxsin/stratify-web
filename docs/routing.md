# Routing

## Routing Constants

Never hardcode path strings. Always use `ROUTE_PATHS` from `src/shared/constants/route-paths.ts`.

### `src/shared/constants/page-names.ts`

```ts
export const PAGE_NAMES = {
  HOME: "home",
  LOGIN: "login",
  REGISTER: "register",
  DASHBOARD: "dashboard",
} as const;

export type PageName = (typeof PAGE_NAMES)[keyof typeof PAGE_NAMES];
```

### `src/shared/constants/route-paths.ts`

```ts
export const DOMAIN = "https://stratify.uz";

export const ROUTE_PATHS = {
  [PAGE_NAMES.HOME]: { name: PAGE_NAMES.HOME, path: "/" },
  [PAGE_NAMES.LOGIN]: { name: PAGE_NAMES.LOGIN, path: "/auth/login" },
  [PAGE_NAMES.REGISTER]: { name: PAGE_NAMES.REGISTER, path: "/auth/register" },
  [PAGE_NAMES.DASHBOARD]: { name: PAGE_NAMES.DASHBOARD, path: "/dashboard" },
} as const;
```

When adding a new route: add to `PAGE_NAMES` first, then add to `ROUTE_PATHS`.

---

## Rendering Strategy

### Route-level (`nuxt.config.ts`)

```ts
routeRules: {
  '/':          { ssr: true },   // SEO critical
  '/dashboard': { ssr: false },  // Private, no SEO
  '/auth/**':   { ssr: false },  // No SEO needed
}
```

Add a `routeRules` entry for every new route that needs non-default rendering.

### Component-level

```vue
<ClientOnly>
  <HeavyInteractiveWidget />
</ClientOnly>
```

Use `<ClientOnly>` for components that depend on browser APIs (localStorage, window, etc.) and cannot run on the server.
