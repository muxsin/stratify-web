<template>
  <ClientOnly>
    <button
      type="button"
      class="theme-toggle"
      :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
      @click="toggleTheme"
    >
      <Sun v-if="isDark" :size="18" />
      <Moon v-else :size="18" />
    </button>
    <template #fallback>
      <span class="theme-toggle theme-toggle--placeholder" aria-hidden="true" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Moon, Sun } from "@lucide/vue";

const { isDark, toggleTheme } = useTheme();
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;

.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: $radius-md;
  color: var(--text-primary);
  background-color: transparent;
  border: 1px solid var(--border);
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease;

  &:hover {
    background-color: var(--bg-elevated);
    border-color: var(--border-strong);
  }

  &--placeholder {
    background-color: transparent;
  }
}
</style>
