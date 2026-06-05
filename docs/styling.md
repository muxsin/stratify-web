# Styling

See also: [design-system.md](./design-system.md) — colour/type/motion reference for building UI.

## SCSS Architecture

```
src/shared/styles/
├── abstracts/            # No CSS output — tools only
│   ├── _variables.scss   # SCSS variables: spacing, font sizes, radii, shadows, z-index
│   ├── _mixins.scss      # flex-center, respond-to, truncate, line-clamp
│   ├── _functions.scss   # rem(), fluid()
│   ├── _breakpoints.scss # $bp-sm: 640px, $bp-md: 768px, etc.
│   ├── _animations.scss  # motion tokens (durations, easings) + transition/enter mixins
│   └── _index.scss       # @forwards all abstracts
├── base/
│   ├── _reset.scss       # Box-sizing, margin reset
│   ├── _typography.scss  # Font families, size scale
│   ├── _tokens.scss      # CSS custom properties (light + dark)
│   └── _animations.scss  # shared @keyframes, .animate-* utilities, reduced-motion guard
├── layout/
│   └── _grid.scss        # Container, grid utilities
├── tw-plugins.css        # Tailwind v4 entry + dark-variant rewire (loaded separately)
└── main.scss             # Entry point — imports all SCSS partials
```

`main.scss` import order:

```scss
@use "abstracts/variables" as *;
@use "abstracts/functions" as *;
@use "abstracts/mixins" as *;
@use "abstracts/breakpoints" as *;
@use "abstracts/animations" as *;

@use "base/tokens";
@use "base/reset";
@use "base/typography";
@use "base/animations";

@use "layout/grid";
```

> `main.scss` and `tw-plugins.css` are both registered in `nuxt.config.ts` (`css: [...]`).

**SCSS abstracts are not globally injected.** Each component that needs variables or mixins must import them explicitly:

```scss
@use "~/shared/styles/abstracts/variables" as *;
@use "~/shared/styles/abstracts/mixins" as *;
```

---

## Design Tokens

Defined as CSS custom properties in `src/shared/styles/base/_tokens.scss`. Always use `var(--token-name)` — never hardcode color values.

### Light Mode (`:root`)

```css
--primary: #0d1f4e;
--primary-light: #1e3a8a;
--accent: #3b6fd4;
--accent-hover: #6b97e8;
--accent-soft: #93b4f0;
--accent-muted: #ddeafc;

--bg-base: #faf7f2;
--bg-surface: #f3efe8;
--bg-elevated: #ede7dc;
--border: #e8e2d9;
--border-strong: #d8d0c4;

--text-primary: #0d1f4e;
--text-secondary: #2d3e5f;
--text-muted: #4a5568;
--text-hint: #8898aa;

--success: #16a34a;
--success-soft: #dcfce7;
--danger: #dc2626;
--danger-soft: #fee2e2;
--warning: #d97706;
--warning-soft: #fef3c7;
```

### Dark Mode (`[data-theme="dark"]`)

```css
--primary: #93b4f0;
--primary-light: #6b97e8;
--accent: #4a7fe0;
--accent-hover: #3b6fd4;
--accent-soft: #1e3a8a;
--accent-muted: #122660;

--bg-base: #0e1525;
--bg-surface: #121d33;
--bg-elevated: #182540;
--border: #1f2f50;
--border-strong: #2a3f68;

--text-primary: #edf2ff;
--text-secondary: #bdd0f5;
--text-muted: #8898bb;
--text-hint: #4a5e80;

--success: #22c55e;
--success-soft: #052e16;
--danger: #ef4444;
--danger-soft: #450a0a;
--warning: #f59e0b;
--warning-soft: #3d1f00;
```

Dark mode is toggled by setting `data-theme="dark"` on `<html>`. Use `useTheme()` — never set it directly.

---

## shadcn-vue Rules

- All shadcn-vue components live in `src/shared/components/ui/` — one folder per component (e.g. `ui/button/button.vue`)
- **Tailwind is used only inside `shared/components/ui/`** — all other styling uses pure SCSS
- Customize by editing the component file directly — never override from outside
- Use `cn()` from `src/shared/utils/cn.ts` (clsx + tailwind-merge) to compose class names inside these components

### CLI installation

`components.json` is pre-configured so `npx shadcn-vue@latest add <component>` writes new primitives into `src/shared/components/ui/<name>/`. Aliases:

| Alias         | Resolves to              |
| ------------- | ------------------------ |
| `components`  | `@/shared/components`    |
| `ui`          | `@/shared/components/ui` |
| `utils`       | `@/shared/utils/cn`      |
| `lib`         | `@/shared`               |
| `composables` | `@/shared/composables`   |

After install:

- Rename generated `PascalCase.vue` files to `kebab-case.vue` to match the project naming convention.
- Update the matching `index.ts` to point at the renamed file.
- Keep all Tailwind utility classes inside the file — never reach into a primitive from outside.

### Shadcn ↔ Stratify token bridge

shadcn-vue components reference semantic tokens (`--background`, `--foreground`, `--primary`, `--card`, `--muted`, `--ring`, ...). These are defined in `_tokens.scss` and mapped to the Stratify palette so the two systems stay in sync — you only need to edit `_tokens.scss` to retheme both. Tailwind's `dark:` variant is re-wired in `tw-plugins.css` to follow `[data-theme="dark"]` instead of the default `.dark` class.

---

## Motion

Motion tokens (`$duration-*`, `$ease-*`), the `transition-base` mixin, shared `@keyframes`, the `.animate-*` utility classes, and the global `prefers-reduced-motion` guard live in `abstracts/_animations.scss` and `base/_animations.scss`. Full guidance — when to use a CSS transition vs a Vue `<Transition>`, and how to add a new shared animation — is in [design-system.md](./design-system.md#motion).
