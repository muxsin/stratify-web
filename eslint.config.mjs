// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-config-prettier";

export default withNuxt(prettier).override("nuxt/vue/rules", {
  files: ["src/shared/components/ui/**/*.vue"],
  rules: {
    "vue/require-default-prop": "off",
  },
});
