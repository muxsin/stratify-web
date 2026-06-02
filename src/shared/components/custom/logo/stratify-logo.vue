<template>
  <NuxtLink
    :to="ROUTE_PATHS.home.path"
    class="logo"
    :data-size="size ?? 'md'"
    aria-label="Stratify"
  >
    <span class="logo__mark" aria-hidden="true">▲</span>
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
    color: var(--accent);
    transform: translateY(1px);
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
