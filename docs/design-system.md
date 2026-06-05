# Design System — stratify-web

> The single reference for how Stratify looks and moves: colour tokens, type, spacing, the component library, and motion. Read this before adding or changing any UI.

See also: [styling.md](./styling.md) · [architecture.md](./architecture.md) · [conventions.md](./conventions.md)

---

## Principles

Stratify aims for a calm, focused workspace. A few rules keep it consistent:

- **Tokens only.** Never hardcode a colour. Use `var(--token-name)` so light and dark themes stay in sync.
- **Compose, don't reinvent.** Build screens from the shadcn-vue primitives in [`src/shared/components/ui/`](../src/shared/components/ui/). If a primitive is missing, install it from shadcn-vue rather than hand-rolling one.
- **One source of scale.** Spacing, radii, font sizes, shadows and z-index all come from SCSS variables in [`_variables.scss`](../src/shared/styles/abstracts/_variables.scss) — don't invent magic numbers.
- **Minimal motion.** Animations are short and purposeful, and always respect `prefers-reduced-motion`.
- **Responsive by default.** Design mobile-first and scale up with the `respond-to()` mixin.

---

## Colour Tokens

All colours are CSS custom properties defined in [`_tokens.scss`](../src/shared/styles/base/_tokens.scss). They flip automatically under `[data-theme="dark"]`. Full light/dark values live in [styling.md](./styling.md#design-tokens) — use this table to pick the right token.

| Group          | Tokens                                                              | Use for                                    |
| -------------- | ------------------------------------------------------------------- | ------------------------------------------ |
| **Brand**      | `--primary`, `--primary-light`                                      | Logo, primary headings, key emphasis       |
| **Accent**     | `--accent`, `--accent-hover`, `--accent-soft`, `--accent-muted`     | Links, focus rings, interactive accents    |
| **Background** | `--bg-base`, `--bg-surface`, `--bg-elevated`                        | Page, cards, raised panels (in that order) |
| **Border**     | `--border`, `--border-strong`                                       | Dividers, card outlines                    |
| **Text**       | `--text-primary`, `--text-secondary`, `--text-muted`, `--text-hint` | Headings → body → captions → placeholders  |
| **Status**     | `--success`, `--danger`, `--warning` (+ `-soft` fills)              | Validation, alerts, badges                 |

> There is no `--secondary` _colour_; the secondary text token is `--text-secondary`, and `--secondary` is a shadcn alias mapped to `--bg-elevated`. When you mean "the muted brand blue", reach for `--accent` family tokens.

shadcn-vue primitives read semantic aliases (`--background`, `--foreground`, `--primary`, `--card`, `--muted`, `--ring`, …) that are also defined in `_tokens.scss` and mapped onto the palette above. Retheme by editing `_tokens.scss` only — both systems follow.

---

## Typography

Three font families, loaded via `@nuxt/fonts` (see [`nuxt.config.ts`](../nuxt.config.ts)) and exposed as tokens in [`_typography.scss`](../src/shared/styles/base/_typography.scss):

| Token            | Family         | Used for                 |
| ---------------- | -------------- | ------------------------ |
| `--font-heading` | Hanken Grotesk | `h1`–`h6` (set globally) |
| `--font-sans`    | Inter          | Body text, UI            |
| `--font-mono`    | JetBrains Mono | Code, monospace data     |

Heading sizes, weights and line-heights are applied globally to `h1`–`h6` — prefer real heading tags over restyling. The size scale (`$text-xs` … `$text-5xl`), weights (`$font-regular` … `$font-bold`) and line-heights (`$leading-tight` … `$leading-loose`) come from [`_variables.scss`](../src/shared/styles/abstracts/_variables.scss). For large display text, use the `fluid()` function to scale smoothly across viewports (see the hero in [`landing-hero.vue`](../src/widgets/home/hero/landing-hero.vue)).

---

## Spacing, Radius, Shadow & Z-index

All from [`_variables.scss`](../src/shared/styles/abstracts/_variables.scss):

- **Spacing** — `$space-1` (4px) … `$space-24` (96px). Use for padding, margins and `gap`.
- **Radius** — `$radius-sm` … `$radius-2xl`, `$radius-full`. Components also read the `--radius` token (0.625rem).
- **Shadow** — `$shadow-sm` … `$shadow-2xl`. Keep elevation subtle; reserve large shadows for modals.
- **Z-index** — named scale (`$z-dropdown`, `$z-sticky`, `$z-overlay`, `$z-modal`, `$z-toast`, `$z-tooltip`). Never use raw numbers for stacking.

---

## Component Library

shadcn-vue primitives live in [`src/shared/components/ui/`](../src/shared/components/ui/) and are auto-imported with **no path prefix**. Currently installed:

`Badge` · `Button` · `Card` (+ header/title/description/content/footer/action) · `Dialog` · `DropdownMenu` · `Input` · `Tooltip`

Domain composites that aren't shadcn live in [`src/shared/components/custom/`](../src/shared/components/custom/): `StratifyLogo`, `ThemeToggle`.

**Where new UI goes** (full table in [conventions.md](./conventions.md#what-goes-where)):

- A shadcn primitive → install into `shared/components/ui/`.
- A reusable composite used in 2+ places → `shared/components/custom/`.
- A self-contained block with its own state / handlers / API → a `widget`.
- Page-level layout that assembles widgets → a `view`.

When you need a primitive that isn't installed, get approval, then:

```sh
npx shadcn-vue@latest add <component>
```

After install, rename the generated `PascalCase.vue` to `kebab-case.vue`, point its `index.ts` at the new name, and keep all Tailwind classes inside the file ([styling.md](./styling.md#shadcn-vue-rules)).

---

## Motion

Motion tokens and helpers live in [`abstracts/_animations.scss`](../src/shared/styles/abstracts/_animations.scss); the shared keyframes, utility classes and the reduced-motion guard are in [`base/_animations.scss`](../src/shared/styles/base/_animations.scss).

**Tokens**

- Durations — `$duration-fast` (150ms), `$duration-base` (200ms), `$duration-slow` (300ms).
- Easings — `$ease-out` (default), `$ease-in-out`, `$ease-spring` (gentle overshoot).

**Two ways to use it**

1. Ready-made utility classes in templates — `.animate-fade-in`, `.animate-fade-up`, `.animate-scale-in`.
2. Mixins in scoped SCSS — `@include transition-base(color, background-color);`, `@include fade-up();`, `@include scale-in();`.

**Guidelines**

- Micro-interactions (hover, focus, small state changes) → CSS transitions via `transition-base`.
- Enter / leave of lists, cards and modals → Vue `<Transition>` / `<TransitionGroup>` paired with the keyframes above.
- Keep it subtle: opacity and small translate/scale only. No long or bouncy motion on routine UI.
- The global `prefers-reduced-motion` guard already neutralises motion for users who opt out — don't fight it.

To add a new shared animation: add the `@keyframes` and a `.animate-*` class to `base/_animations.scss`, and (optionally) a mixin in `abstracts/_animations.scss`. Reuse before adding.

---

## Responsive

Mobile-first. Breakpoints (`$bp-sm` 640 … `$bp-2xl` 1536) and the `respond-to()` mixin live in [`abstracts/_breakpoints.scss`](../src/shared/styles/abstracts/_breakpoints.scss) and [`_mixins.scss`](../src/shared/styles/abstracts/_mixins.scss):

```scss
.panel {
  padding: $space-4;

  @include respond-to(lg) {
    padding: $space-8;
  }
}
```

Every screen must hold up from small mobile to wide desktop. Test the smallest width first.
