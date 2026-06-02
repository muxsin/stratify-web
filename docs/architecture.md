# Architecture — stratify-web

> FSD (Feature-Sliced Design) adapted for Nuxt 4 with TypeScript strict mode, pure SCSS, and shadcn-vue.

See also: [styling.md](./styling.md) · [routing.md](./routing.md) · [conventions.md](./conventions.md)

---

## Stack

| Layer         | Tech                                |
| ------------- | ----------------------------------- |
| Framework     | Nuxt 4                              |
| Language      | TypeScript (strict)                 |
| Styling       | Pure SCSS + Tailwind (shadcn only)  |
| UI Primitives | shadcn-vue (reka-ui)                |
| Icons         | @lucide/vue                         |
| Image         | @nuxt/image                         |
| SEO           | @nuxtjs/seo                         |
| Fonts         | @nuxt/fonts (Inter, JetBrains Mono) |
| DevTools      | @nuxt/devtools                      |
| Package Mgr   | npm                                 |
| Node          | v24.x                               |

---

## Folder Structure

```
stratify-web/
├── src/
│   ├── app/                          # App-level setup
│   │   ├── layouts/                  # Nuxt layouts (default.vue, auth.vue)
│   │   ├── middleware/               # Route guards, redirects
│   │   ├── plugins/                  # Third-party inits
│   │   └── providers/               # Vue app-level providers
│   │
│   ├── pages/                        # File-based routing (Nuxt auto-routing)
│   │   ├── index.vue                 # → domain.com/
│   │   ├── auth/
│   │   │   ├── login.vue             # → domain.com/auth/login
│   │   │   └── register.vue          # → domain.com/auth/register
│   │   └── dashboard/
│   │       └── index.vue             # → domain.com/dashboard
│   │
│   ├── views/                        # Page-level compositions
│   │   ├── home/
│   │   │   └── home-view.vue
│   │   ├── auth/
│   │   │   └── login-view.vue
│   │   └── dashboard/
│   │       └── dashboard-view.vue
│   │
│   ├── widgets/                      # Self-contained UI blocks
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   │   └── site-header.vue
│   │   │   └── footer/
│   │   │       └── site-footer.vue
│   │   └── dashboard/
│   │       └── stats-panel/
│   │           └── stats-panel.vue
│   │
│   ├── features/                     # Shared business logic
│   │   └── auth/
│   │       ├── composables/
│   │       │   └── use-login.ts
│   │       └── index.ts
│   │
│   ├── entities/                     # Domain models & types
│   │   └── user/
│   │       ├── types/
│   │       │   └── user.types.ts
│   │       └── index.ts
│   │
│   └── shared/                       # Cross-project reusable code
│       ├── components/
│       │   ├── ui/                   # shadcn-vue primitives
│       │   └── custom/               # Non-shadcn reusable components
│       ├── composables/              # Generic utility composables
│       ├── utils/                    # Pure utility functions
│       ├── types/                    # Global TypeScript types
│       ├── constants/                # App-wide constants
│       ├── styles/                   # Full SCSS architecture
│       └── assets/
│
├── public/
├── docs/
├── nuxt.config.ts
└── CLAUDE.md
```

---

## Layer Rules

### `pages/` — Routing Only

One file = one route. Imports **one view component only**. Only `definePageMeta` allowed here — no logic, no styles, no API calls.

```vue
<!-- src/pages/auth/login.vue -->
<template>
  <LoginView />
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth" });
</script>
```

### `views/` — Page Compositions

Assembles widgets into page layout. Handles grid, spacing, centering. Minimal coordination state between widgets only. No API calls, no forms directly.

### `widgets/` — UI Blocks

Self-contained: owns state, handlers, API calls. Uses `shared/components/ui/` primitives. If it has `ref`, `useForm`, or API calls → it's a widget. Sub-components that belong only to this widget stay inside its folder.

### `features/` — Shared Business Logic

Composables used by **multiple widgets**. If used in only one widget → keep it in that widget. No UI components.

### `entities/` — Domain Models

TypeScript types, interfaces, enums per domain entity. No UI, no API calls — pure data shapes.

### `shared/` — Reusable Code

No dependency on any layer above. shadcn-vue components live in `shared/components/ui/`. Generic composables, utils, types, constants, styles.

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
