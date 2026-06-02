<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <StratifyLogo size="md" />

      <nav class="site-header__nav" aria-label="Primary">
        <NuxtLink :href="ROUTE_PATHS.home.path">{{ ROUTE_PATHS.home.name }}</NuxtLink>
        <NuxtLink :href="ROUTE_PATHS.swot.path">{{ ROUTE_PATHS.swot.name }}</NuxtLink>
      </nav>

      <div class="site-header__actions">#@</div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ROUTE_PATHS } from "~/shared/constants/route-paths";
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;
@use "~/shared/styles/abstracts/breakpoints" as *;
@use "~/shared/styles/abstracts/mixins" as *;

.site-header {
  position: sticky;
  top: 0;
  z-index: $z-sticky;
  background-color: color-mix(in oklab, var(--bg-base) 85%, transparent);
  backdrop-filter: saturate(140%) blur(10px);
  border-bottom: 1px solid var(--border);

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $space-6;
    height: 4rem;
  }

  &__nav {
    display: none;
    gap: $space-6;
    font-size: $text-sm;
    color: var(--text-secondary);

    @include respond-to(md) {
      display: inline-flex;
    }

    a {
      transition: color 0.15s ease;

      &:hover {
        color: var(--text-primary);
      }
    }
  }

  &__actions {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
  }
}
</style>
