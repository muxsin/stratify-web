# Architecture — stratify-web

> FSD (Feature-Sliced Design) adapted for Nuxt 4 with TypeScript strict mode, pure SCSS, and shadcn-vue.

See also: [design-system.md](./design-system.md) · [styling.md](./styling.md) · [routing.md](./routing.md) · [conventions.md](./conventions.md)

---

## Stack

| Layer         | Tech                                                |
| ------------- | --------------------------------------------------- |
| Framework     | Nuxt 4                                              |
| Language      | TypeScript (strict)                                 |
| Styling       | Pure SCSS + Tailwind (shadcn only)                  |
| UI Primitives | shadcn-vue (reka-ui)                                |
| Icons         | @lucide/vue                                         |
| Image         | @nuxt/image                                         |
| SEO           | @nuxtjs/seo                                         |
| Fonts         | @nuxt/fonts (Hanken Grotesk, Inter, JetBrains Mono) |
| Utilities     | @vueuse/core                                        |
| DevTools      | @nuxt/devtools                                      |
| Package Mgr   | npm                                                 |
| Node          | v24.x                                               |

---

## Folder Structure

The tree below mixes folders that exist today with the layers that are reserved for
future work (`app/middleware`, `features/`, `entities/`). Empty layers are kept here so
new code lands in a predictable place.

```
stratify-web/
├── src/
│   ├── app/                          # App-level setup
│   │   ├── layouts/                  # Nuxt layouts (default.vue, docs.vue)
│   │   ├── middleware/               # Route guards, redirects (reserved)
│   │   └── plugins/                  # Third-party inits (reserved)
│   │
│   ├── pages/                        # File-based routing (thin route wrappers)
│   │   ├── index.vue                 # → stratify.uz/
│   │   └── swot/
│   │       └── index.vue             # → stratify.uz/swot
│   │
│   ├── views/                        # Page-level compositions
│   │   ├── home/
│   │   │   └── home-view.vue
│   │   └── swot/
│   │       └── swot-view.vue
│   │
│   ├── widgets/                      # Self-contained UI blocks
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   │   └── site-header.vue
│   │   │   └── footer/
│   │   │       └── site-footer.vue
│   │   ├── home/
│   │   │   └── hero/
│   │   │       └── landing-hero.vue
│   │   └── swot/
│   │       ├── header.vue
│   │       ├── swot-cards.vue
│   │       └── upload-file-modal.vue
│   │
│   ├── features/                     # Shared business logic (reserved)
│   ├── entities/                     # Domain models & types (reserved)
│   │
│   └── shared/                       # Cross-project reusable code
│       ├── components/
│       │   ├── ui/                   # shadcn-vue primitives
│       │   └── custom/               # Non-shadcn reusable components
│       ├── composables/              # Auto-imported reactive composables (useTheme)
│       ├── hooks/                    # Reusable logic helpers (useQueryParams) — imported explicitly
│       ├── utils/                    # Pure utility functions (cn)
│       ├── types/                    # TypeScript types, grouped per domain (types/swot/)
│       ├── constants/                # App-wide constants (route-paths, page-names, keys)
│       ├── mock/                     # Mock data fixtures, grouped per domain (mock/swot/)
│       ├── styles/                   # Full SCSS architecture
│       └── assets/
│
├── src/
│   └── error.vue                     # Nuxt error boundary — sits at src/ root, outside FSD layers
├── public/
├── docs/
├── nuxt.config.ts
└── CLAUDE.md
```

> `shared/composables/` is auto-imported (see `imports.dirs` in `nuxt.config.ts`); `shared/hooks/`
> is **not** — import its helpers explicitly, e.g. `import { useQueryParams } from "~/shared/hooks/use-query-params"`.

---

## Nuxt Root Conventions

Some files live at `src/` root and are **outside the FSD layer graph** — they are Nuxt framework contracts, not application code:

| File            | Purpose                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| `src/error.vue` | Global error boundary. Rendered by Nuxt for all unhandled errors (404, 500, …). Uses `NuxtLayout` and `clearError`. |

These files may import from `shared/` but nothing should import them.

---

## Layer Rules

### `pages/` — Routing Only

One file = one route. Imports **one view component only**. Only `definePageMeta` allowed here — no logic, no styles, no API calls.

```vue
<!-- src/pages/swot/index.vue -->
<template>
  <SwotView />
</template>

<script setup lang="ts">
import SwotView from "~/views/swot/swot-view.vue";
</script>
```

Page-level SEO (`useSeoMeta`) and `definePageMeta` also belong here — see [`pages/index.vue`](../src/pages/index.vue). Use `definePageMeta({ layout: "docs" })` to switch to the docs layout for documentation pages.

### `views/` — Page Compositions

Assembles widgets into page layout. Handles grid, spacing, centering. Minimal coordination state between widgets only. No API calls, no forms directly.

### `widgets/` — UI Blocks

Self-contained: owns state, handlers, API calls. Uses `shared/components/ui/` primitives. If it has `ref`, `useForm`, or API calls → it's a widget. Sub-components that belong only to this widget stay inside its folder.

### `features/` — Shared Business Logic

Composables used by **multiple widgets**. If used in only one widget → keep it in that widget. No UI components.

### `entities/` — Domain Models

TypeScript types, interfaces, enums per domain entity. No UI, no API calls — pure data shapes.

### `shared/` — Reusable Code

No dependency on any layer above. shadcn-vue components live in `shared/components/ui/`. Generic composables, hooks, utils, types, constants, styles.

- `composables/` — auto-imported reactive composables (e.g. `useTheme`).
- `hooks/` — reusable logic helpers, imported explicitly (e.g. `useQueryParams`).
- `types/` — TypeScript shapes grouped per domain (e.g. `types/swot/swot-cards.types.ts`).

---

## Import Rules (Strict)

```
pages     → views
views     → widgets, shared
widgets   → features, entities, shared
features  → entities, shared
entities  → shared
shared    → nothing above
```

**Never import upward.** A widget never imports from views. A feature never imports from widgets.
