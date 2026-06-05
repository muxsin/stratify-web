# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Docs — read the right one

- @docs/architecture.md — FSD layers, folder structure, import rules. Read when deciding **where** code goes.
- @docs/routing.md — route constants, SSR/`routeRules`, page SEO. Read when **adding/changing a route**.
- @docs/styling.md — SCSS architecture, design tokens, shadcn rules. Read when **writing styles**.
- @docs/design-system.md — colours, type, spacing, components, motion. Read when **building or changing UI**.
- @docs/conventions.md — naming, SFC order, storage keys, commits, "what goes where". Read for **project rules**.

## Stack

Nuxt 4 (Vue 3) + TypeScript (strict) + Tailwind CSS v4 + SCSS. Source lives under `src/` (`srcDir: "src"`). Path aliases `~/*` and `@/*` both resolve to `src/*`.

No test framework is configured — don't assume `npm test` exists.

Linting and formatting: `@nuxt/eslint` (flat config in `eslint.config.mjs`) + Prettier (`.prettierrc`). After non-trivial edits, run `npm run lint` and `npm run format:check`; use `npm run lint:fix` and `npm run format` to apply fixes. Prettier rules are pinned (double quotes, semicolons, `printWidth: 100`) — match them in new files.

## Project layout

Feature-Sliced Design with Nuxt overrides. Full layer rules and import graph: @docs/architecture.md

Layers under `src/`: `app/`, `pages/`, `views/`, `widgets/`, `features/`, `entities/`, `shared/`.

Custom `dir` config puts `layouts/`, `middleware/`, `plugins/` under `src/app/` (not project root).

`views/` is intentional: `pages/` files are thin route wrappers; all page UI lives in `src/views/<page-name>/`.

## Auto-imports

- Components in `~/shared/components/**`, `~/widgets/**`, and `~/views/**` are auto-registered with **no path prefix**. Avoid name collisions.
- Composables in `~/shared/composables/` are auto-imported. `~/shared/hooks/` is **not** auto-imported — import its helpers explicitly (e.g. `useQueryParams`).
- Domain TypeScript types live in `~/shared/types/<domain>/` (e.g. `types/swot/`).
- Only `.vue` files are scanned for components — sibling `index.ts` barrels (e.g. inside shadcn-vue primitives) are not registered as components.

New shared components → `shared/components/ui/` (shadcn primitives) or `shared/components/custom/` (domain composites). Page-level UI → `views/`. Self-contained UI blocks with state/handlers/API → `widgets/`.

## Routing

Always use `ROUTE_PATHS` from `src/shared/constants/route-paths.ts` — never hardcode paths. Update `page-names.ts` and `route-paths.ts` when adding a route. Full routing constants and SSR/SPA rules: @docs/routing.md

## Styling & Theming

Full SCSS architecture, design tokens, and shadcn-vue rules: @docs/styling.md
Colour/type/motion reference for building UI: @docs/design-system.md

Key gotchas:

- **SCSS abstracts not globally injected** — components must `@use '~/shared/styles/abstracts/variables' as *;` themselves
- **Tailwind only inside `shared/components/ui/`** — everything else uses pure SCSS
- Theme via `useTheme()` only — never touch `document.documentElement` directly
- Use CSS tokens (`var(--bg-base)`, `var(--text-primary)`) — never hardcode colors
- Motion: reuse `$duration-*`/`$ease-*` tokens, `transition-base` mixin, and `.animate-*` utilities from `_animations.scss` — the global `prefers-reduced-motion` guard already neutralises motion on opt-out

## Storage keys

All localStorage keys, cookie names, and sessionStorage keys must be constants in `src/shared/constants/keys.ts` — never inline string literals. See @docs/conventions.md

## Conventions

Naming rules, SFC block order, commit message format, and "what goes where" reference: @docs/conventions.md

Commit message format enforced by husky + commitlint: `type: description` (e.g. `feat: add SWOT tool`). Valid types: `feat fix docs style refactor perf test build ci chore revert`.

SFC block order in every `.vue` file: **`<template>` → `<script>` → `<style>`**. The only exception is `src/shared/components/ui/**` (shadcn-vue CLI output — leave its layout as-is).

## Other

- `npm install` runs `nuxt prepare` (postinstall). Never commit `.nuxt/`, `.output/`, or `.nitro/`.
- This is a git repository (default branch `main`). Husky hooks run on commit: `pre-commit` runs `npm run lint`, `commit-msg` runs commitlint — both must pass.
