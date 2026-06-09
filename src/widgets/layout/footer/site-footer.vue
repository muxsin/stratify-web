<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <StratifyLogo size="sm" />

      <nav class="site-footer__nav" aria-label="Footer">
        <NuxtLink :href="ROUTE_PATHS.home.path" class="site-footer__nav-link">Home</NuxtLink>
        <NuxtLink :href="ROUTE_PATHS.swot.path" class="site-footer__nav-link">SWOT</NuxtLink>
        <NuxtLink :href="ROUTE_PATHS.docs.path" class="site-footer__nav-link">Docs</NuxtLink>
      </nav>

      <div class="site-footer__meta">
        <a target="_blank" href="https://t.me/muxsinjohn" class="site-footer__dev-link"
          >developer</a
        >
        <p class="site-footer__copy">© {{ year }} Stratify. Turn complexity into clarity.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ROUTE_PATHS } from "~/shared/constants/route-paths";

const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;
@use "~/shared/styles/abstracts/mixins" as *;
@use "~/shared/styles/abstracts/breakpoints" as *;
@use "~/shared/styles/abstracts/animations" as *;

.site-footer {
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border);

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-4;
    padding-block: $space-5;
    text-align: center;

    @include respond-to(md) {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  }

  &__nav {
    display: flex;
    gap: $space-5;
  }

  &__nav-link {
    font-size: $text-sm;
    color: var(--text-muted);
    text-decoration: none;
    @include transition-base(color);

    &:hover {
      color: var(--text-secondary);
    }
  }

  &__meta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-1;

    @include respond-to(md) {
      align-items: flex-end;
    }
  }

  &__dev-link {
    font-size: $text-sm;
    color: var(--text-muted);
    text-decoration: none;
    @include transition-base(color);

    &:hover {
      color: var(--text-secondary);
    }
  }

  &__copy {
    font-size: $text-sm;
    color: var(--text-muted);
  }
}
</style>
