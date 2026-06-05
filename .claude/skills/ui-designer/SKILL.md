---
name: ui-designer
description: Use when adding or updating UI in stratify-web — pages, views, widgets, or shared components (layout, styling, theming, animation, responsiveness, page SEO). Enforces the project's design system, FSD architecture, token colours, and shadcn-vue reuse. Do NOT use for pure logic/data work with no UI.
---

# UI Designer

Build and update Stratify UI that matches the design system and architecture. Stay token-efficient: open only the specific doc section a rule points to — never read all docs up front.

## Hard rules (never break)

1. **Colours** — only token colours via `var(--...)`. Never hardcode a hex/rgb. Pick the right token from [design-system.md → Colour Tokens](../../../docs/design-system.md#colour-tokens). Note: it's `--accent` / `--text-secondary` — there is no `--secondary` colour.
2. **Components** — reuse the shadcn-vue primitives in `~/shared/components/ui/` and the composites in `~/shared/components/custom/`. Don't hand-roll a primitive that shadcn-vue offers.
3. **Missing primitive** — if a needed primitive isn't installed, **stop and ask the user** before running `npx shadcn-vue@latest add <name>`. Never install on your own, and don't invent your own version of it.
4. **Reuse threshold** — if a piece of UI is used in 2+ places, extract it into a reusable component (`shared/components/custom/`), don't duplicate.
5. **Architecture** — follow the layer and import rules; put each thing in the right place. Check [architecture.md → Layer Rules / Import Rules](../../../docs/architecture.md#layer-rules) and [conventions.md → What Goes Where](../../../docs/conventions.md#what-goes-where).
6. **Don't change functionality.** Touch only the UI you were asked to change. If a fix requires changing behaviour, or you hit an error in existing code, **stop and give the user a short plan**, then wait for approval.
7. **Scope** — only edit the place you were asked about. If something else clearly needs updating, ask first.
8. **Images** — if an image is needed but none is provided, use `StratifyLogo` in its place and add `<!-- todo: update image -->`.

## Styling

- Pure SCSS everywhere except inside `shared/components/ui/` (Tailwind only there). See [styling.md → shadcn-vue Rules](../../../docs/styling.md#shadcn-vue-rules).
- Use the scale variables, not raw numbers: `$space-*`, `$text-*`, `$radius-*`, `$shadow-*`, `$z-*`. Import abstracts per file: `@use "~/shared/styles/abstracts/variables" as *;` (and `mixins` / `breakpoints` as needed).
- Theme only via `useTheme()` — never touch `document.documentElement`.

## Responsive

Mobile-first; design the smallest width first, then scale up with `@include respond-to(lg) { ... }`. Every screen must hold from small mobile to wide desktop. See [design-system.md → Responsive](../../../docs/design-system.md#responsive).

## Motion (minimalist, reusable)

Reuse the existing system — don't write one-off keyframes. See [design-system.md → Motion](../../../docs/design-system.md#motion).

- Micro-interactions (hover/focus): `@include transition-base(color, background-color);`.
- Enter/leave (lists, cards, modals): Vue `<Transition>` / `<TransitionGroup>` with the shared keyframes.
- Ready-made utilities in templates: `.animate-fade-in`, `.animate-fade-up`, `.animate-scale-in`.
- Keep it subtle (opacity + small translate/scale). The global `prefers-reduced-motion` guard already handles opt-out — don't fight it.
- Need a new shared animation? Add the `@keyframes` + `.animate-*` to `base/_animations.scss` (and an optional mixin in `abstracts/_animations.scss`). Reuse before adding.

## Pages — SEO & performance

When the work is a page/route, see [routing.md](../../../docs/routing.md):

- Route the page through a thin `pages/` wrapper → one `views/` component ([Layer Rules](../../../docs/architecture.md#layer-rules)).
- Set `useSeoMeta` in the page wrapper ([Page SEO](../../../docs/routing.md#page-seo)). Pages stay SSR unless there's a reason not to (`routeRules`).
- Use semantic HTML (real `h1`–`h6`, `nav`, `section`), `@nuxt/image` for images, and `<ClientOnly>` only for browser-only widgets.
- Always link routes with `ROUTE_PATHS.<name>.path` — never a hardcoded string.

## Writing copy

All user-facing text in **English**, formal but natural — write like a person, not a robot. Keep words simple; avoid jargon and overly difficult terms.

## Conventions

kebab-case files/folders; SFC order `<template>` → `<script>` → `<style>` (except `ui/` shadcn files). Details: [conventions.md](../../../docs/conventions.md).

## After editing

Run `npm run lint` and `npm run format:check` (fix with `npm run lint:fix` / `npm run format`).
