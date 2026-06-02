<template>
  <section class="container min-h-screen flex items-center justify-center">
    <div class="hero__inner">
      <h1 class="hero__title">
        Turn complexity into <span class="hero__title-accent">clarity</span>.
      </h1>

      <p class="hero__lede">
        Stratify makes a SWOT analysis something you actually finish. Learn what each quadrant
        means, fill in your own in quick chips, and export a clean result - all in one calm place to
        think.
      </p>

      <NuxtLink :href="ROUTE_PATHS.swot.path">
        <Button size="lg">Start SWOT analysis</Button>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ROUTE_PATHS } from "~/shared/constants/route-paths";
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;
@use "~/shared/styles/abstracts/breakpoints" as *;
@use "~/shared/styles/abstracts/mixins" as *;
@use "~/shared/styles/abstracts/functions" as *;

.hero {
  padding-block: $space-20 $space-16;

  @include respond-to(lg) {
    padding-block: $space-24 $space-20;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: $space-6;
    text-align: center;
  }

  &__title {
    font-size: fluid(2rem, 3.75rem);
    line-height: $leading-tight;
    font-weight: $font-bold;
    letter-spacing: -0.025em;
    color: var(--text-primary);
    text-align: center;
  }

  &__title-accent {
    color: var(--accent);
  }

  &__lede {
    font-size: $text-lg;
    line-height: $leading-relaxed;
    color: var(--text-secondary);
    max-width: 42rem;
  }
}
</style>
