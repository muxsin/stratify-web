# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
- Composables in `~/shared/composables/` are auto-imported.
- Only `.vue` files are scanned for components — sibling `index.ts` barrels (e.g. inside shadcn-vue primitives) are not registered as components.

New shared components → `shared/components/ui/` (shadcn primitives) or `shared/components/custom/` (domain composites). Page-level UI → `views/`. Self-contained UI blocks with state/handlers/API → `widgets/`.

## Routing

Always use `ROUTE_PATHS` from `src/shared/constants/route-paths.ts` — never hardcode paths. Update `page-names.ts` and `route-paths.ts` when adding a route. Full routing constants and SSR/SPA rules: @docs/routing.md

## Styling & Theming

Full SCSS architecture, design tokens, and shadcn-vue rules: @docs/styling.md

Key gotchas:

- **SCSS abstracts not globally injected** — components must `@use '~/shared/styles/abstracts/variables' as *;` themselves
- **Tailwind only inside `shared/components/ui/`** — everything else uses pure SCSS
- Theme via `useTheme()` only — never touch `document.documentElement` directly
- Use CSS tokens (`var(--bg-base)`, `var(--text-primary)`) — never hardcode colors

## Storage keys

All localStorage keys, cookie names, and sessionStorage keys must be constants in `src/shared/constants/keys.ts` — never inline string literals. See @docs/conventions.md

## Conventions

Naming rules, SFC block order, and "what goes where" reference: @docs/conventions.md

SFC block order in every `.vue` file: **`<template>` → `<script>` → `<style>`**. The only exception is `src/shared/components/ui/**` (shadcn-vue CLI output — leave its layout as-is).

## Other

- `npm install` runs `nuxt prepare` (postinstall). Never commit `.nuxt/`, `.output/`, or `.nitro/`.
- This directory is not currently a git repo — don't assume `git` commands will work.
