<template>
  <NuxtLink
    :to="ROUTE_PATHS.home.path"
    class="logo"
    :data-size="size ?? 'md'"
    aria-label="Stratify"
  >
    <svg class="logo__mark" viewBox="0 0 48 48" aria-hidden="true">
      <rect x="20" y="8" width="20" height="8.5" rx="4.25" fill="currentColor" />
      <rect x="8" y="19.75" width="32" height="8.5" rx="4.25" fill="var(--accent)" />
      <rect x="8" y="31.5" width="20" height="8.5" rx="4.25" fill="currentColor" />
    </svg>
    <span class="logo__word">Stratify</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ROUTE_PATHS } from "~/shared/constants/route-paths";

defineProps<{
  size?: "sm" | "md" | "lg";
}>();
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;

.logo {
  display: inline-flex;
  align-items: baseline;
  gap: $space-2;
  font-weight: $font-bold;
  letter-spacing: -0.02em;
  color: var(--text-primary);

  &__mark {
    width: 1.1em;
    height: 1.1em;
    flex-shrink: 0;
    color: var(--text-primary);
  }

  &[data-size="sm"] {
    font-size: $text-base;
  }
  &[data-size="md"] {
    font-size: $text-lg;
  }
  &[data-size="lg"] {
    font-size: $text-2xl;
  }
}
</style>
