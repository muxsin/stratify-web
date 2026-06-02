# Stratify

> **Stratify — Turn complexity into clarity.**

Stratify is a clean, minimal web platform that helps individuals, students and business professionals **learn and apply business strategy frameworks**. Instead of searching through scattered resources, Stratify brings everything into one place: from understanding what a framework is, to actually using it interactively.

## What it offers

Explore frameworks like **SWOT**, **PESTLE**, **Porter's Five Forces**, **BCG Matrix**, **Ansoff Matrix** and more — each with clear explanations, real-world examples, when to use them, and pros & cons. Interactive tools let users fill in their own data and export results as PDF or image.

## Who it's for

- **Beginners** who want to learn strategy.
- **Students** working on business cases.
- **Entrepreneurs** analyzing their business.
- **Professionals** who need quick reference tools.

## How it feels

Minimal and structured. Nothing overwhelming. Warm cream backgrounds with deep navy typography in light mode, deep navy surfaces with soft blue accents in dark mode. Every page is easy to scan, understand, and use.

## What makes it different

It's not just a reference site — it's a full toolkit. You learn, then you do. Educational content sits right next to interactive tools, so there is no gap between understanding and applying.

---

## Stack

| Layer         | Tech                                |
| ------------- | ----------------------------------- |
| Framework     | Nuxt 4 (Vue 3)                      |
| Language      | TypeScript (strict)                 |
| Styling       | Pure SCSS + Tailwind (shadcn only)  |
| UI Primitives | shadcn-vue + reka-ui                |
| Icons         | @lucide/vue                         |
| Image         | @nuxt/image                         |
| SEO           | @nuxtjs/seo                         |
| Fonts         | @nuxt/fonts (Inter, JetBrains Mono) |
| Package Mgr   | npm                                 |
| Node          | v24.x                               |

## Project structure

Feature-Sliced Design (FSD) adapted for Nuxt 4. Full layer rules and import graph in [`docs/architecture.md`](./docs/architecture.md).

```
src/
├── app/        # layouts, middleware, plugins, providers
├── pages/      # thin route wrappers (file-based routing)
├── views/      # page compositions
├── widgets/    # self-contained UI blocks (state, handlers, API)
├── features/   # shared business logic (composables only)
├── entities/   # domain types and models
└── shared/     # cross-project reusable code
```

## Getting started

```sh
git init           # required before npm install (husky needs a git repo)
npm install        # installs deps, runs `nuxt prepare` and registers husky hooks
npm run dev        # start dev server on http://localhost:3000
npm run build      # build for production
npm run preview    # preview the production build
```

### Quality

```sh
npm run lint           # eslint
npm run lint:fix       # eslint --fix
npm run format         # prettier --write
npm run format:check   # prettier --check
```

> No test framework is configured.

### Commit messages

Commits are enforced by **husky** + **commitlint**. The format is `type: description`:

```
feat: add SWOT interactive tool
fix: correct dark mode token on card border
docs: update styling guide
refactor: extract framework list into constant
chore: upgrade nuxt to 4.5.0
```

Full type list and examples: [`docs/conventions.md`](./docs/conventions.md#commit-messages)

## Conventions in a sentence

- **File and folder names are always kebab-case.** No exceptions.
- **shadcn-vue components live in `src/shared/components/ui/`.** Anything you install with the shadcn-vue CLI lands there; supporting helpers go in the matching shared subfolder.
- **Tailwind is allowed only inside `src/shared/components/ui/`.** Every other style uses pure SCSS with explicit `@use` imports.
- **Routing constants** live in `src/shared/constants/route-paths.ts`. Never hardcode a route string.
- **Storage keys** live in `src/shared/constants/keys.ts`. Never hardcode a `localStorage` key.
- **Design tokens** live in `src/shared/styles/base/_tokens.scss`. Reference via `var(--token-name)`. Never hardcode a color.
- **Dark mode** is toggled by setting `data-theme="dark"` on `<html>` through `useTheme()`. Never touch `document.documentElement` directly.

More: [`docs/architecture.md`](./docs/architecture.md) · [`docs/routing.md`](./docs/routing.md) · [`docs/styling.md`](./docs/styling.md) · [`docs/conventions.md`](./docs/conventions.md)

## License

Proprietary — all rights reserved.
