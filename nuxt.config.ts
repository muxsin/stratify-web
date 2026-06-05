import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-09-15",

  srcDir: "src",

  devtools: { enabled: true },

  modules: ["@nuxt/image", "@nuxtjs/seo", "@nuxt/fonts", "@nuxt/eslint"],

  eslint: {
    config: {
      stylistic: false,
    },
  },

  dir: {
    layouts: "app/layouts",
    middleware: "app/middleware",
    plugins: "app/plugins",
    pages: "pages",
  },

  components: [
    { path: "~/shared/components", pathPrefix: false, extensions: ["vue"] },
    { path: "~/widgets", pathPrefix: false, extensions: ["vue"] },
    { path: "~/views", pathPrefix: false, extensions: ["vue"] },
  ],

  imports: {
    dirs: ["shared/composables"],
  },

  css: ["~/shared/styles/main.scss", "~/shared/styles/tw-plugins.css"],

  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },

  fonts: {
    families: [
      { name: "Inter", provider: "google", weights: [400, 500, 600, 700] },
      { name: "JetBrains Mono", provider: "google", weights: [400, 500] },
      { name: "Hanken Grotesk", provider: "google", weights: [400, 500, 600, 700, 800] },
    ],
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
    },
  },

  site: {
    url: "https://stratify.uz",
    name: "Stratify",
    description:
      "Stratify is a clean toolkit for learning and applying business strategy frameworks like SWOT, PESTLE, Porter's Five Forces, BCG Matrix and Ansoff Matrix — explanations, examples, and interactive tools in one place.",
    defaultLocale: "en",
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
      ],
    },
  },

  routeRules: {
    "/": { ssr: true },
    "/swot": { ssr: false },
  },
});
