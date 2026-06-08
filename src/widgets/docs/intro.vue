<template>
  <article class="docs-intro">
    <header class="docs-intro__header">
      <h1 class="docs-intro__title">Welcome to Stratify</h1>
      <p class="docs-intro__lead">
        Stratify is a clean toolkit for learning and applying business strategy frameworks. It
        brings together explanations, real-world examples, and interactive tools in one focused
        place - so you can understand a framework and put it to work without switching between tabs.
      </p>
    </header>

    <section class="docs-intro__section">
      <h2 class="docs-intro__section-title">What's available now</h2>
      <p class="docs-intro__text">
        Right now, Stratify covers
        <NuxtLink :href="ROUTE_PATHS.swot.path" class="docs-intro__link">SWOT Analysis</NuxtLink>
        - a simple but powerful framework for evaluating Strengths, Weaknesses, Opportunities, and
        Threats. You can read through the guide, explore real examples, and use the interactive tool
        to build your own analysis.
      </p>
      <div class="docs-intro__status">
        <p class="docs-intro__status-text">
          More frameworks and tools are on the way. This documentation will grow as each one ships.
        </p>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ROUTE_PATHS } from "~/shared/constants/route-paths";
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;
@use "~/shared/styles/abstracts/mixins" as *;
@use "~/shared/styles/abstracts/animations" as *;
@use "~/shared/styles/abstracts/breakpoints" as *;

.docs-intro {
  padding: $space-6 0;

  &__header {
    margin-bottom: $space-10;
    padding-bottom: $space-8;
    border-bottom: 1px solid var(--border);
  }

  &__title {
    margin: 0 0 $space-4;
    color: var(--text-primary);
    font-size: $text-3xl;
    font-weight: $font-bold;
    line-height: $leading-tight;
  }

  &__lead {
    margin: 0;
    color: var(--text-secondary);
    font-size: $text-lg;
    line-height: $leading-loose;
  }

  &__section {
    margin-bottom: $space-10;
  }

  &__section-title {
    margin: 0 0 $space-3;
    color: var(--text-primary);
    font-size: $text-xl;
    font-weight: $font-semibold;
    line-height: $leading-tight;
  }

  &__text {
    margin: 0 0 $space-4;
    color: var(--text-secondary);
    font-size: $text-base;
    line-height: $leading-loose;
  }

  &__list {
    margin: 0;
    padding-left: $space-5;
    color: var(--text-secondary);
    font-size: $text-base;
    line-height: $leading-loose;

    li {
      margin-bottom: $space-2;

      strong {
        color: var(--text-primary);
        font-weight: $font-semibold;
      }
    }
  }

  &__link {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 3px;

    @include transition-base(color);

    &:hover {
      color: var(--accent-hover);
    }
  }

  &__status {
    margin-top: $space-4;
    padding: $space-4 $space-5;
    background-color: var(--bg-surface);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent);
    border-radius: $radius-md;
  }

  &__status-text {
    margin: 0;
    color: var(--text-muted);
    font-size: $text-sm;
    line-height: $leading-loose;
  }
}
</style>
