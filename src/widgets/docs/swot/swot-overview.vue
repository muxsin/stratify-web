<template>
  <article class="swot-overview">
    <header class="swot-overview__header">
      <h1 class="swot-overview__title">SWOT Analysis</h1>
      <p class="swot-overview__lead">
        SWOT is a structured way to think clearly about any situation - a business, a project, a
        career decision, or an idea. It asks four simple questions: what is working for you, what is
        holding you back, what outside chances could you take, and what outside risks should you
        watch out for.
      </p>
    </header>

    <section class="swot-overview__section">
      <h2 class="swot-overview__section-title">The four quadrants at a glance</h2>
      <p class="swot-overview__text">
        Every SWOT analysis is a 2x2 grid. The top row looks inward - things you control. The bottom
        row looks outward - things happening around you.
      </p>
      <div class="swot-overview__grid">
        <div class="swot-overview__quadrant swot-overview__quadrant--s">
          <span class="swot-overview__quadrant-tag">Internal - Positive</span>
          <strong class="swot-overview__quadrant-name">Strengths</strong>
          <p class="swot-overview__quadrant-desc">
            Advantages and resources already in your favour
          </p>
        </div>
        <div class="swot-overview__quadrant swot-overview__quadrant--w">
          <span class="swot-overview__quadrant-tag">Internal - Negative</span>
          <strong class="swot-overview__quadrant-name">Weaknesses</strong>
          <p class="swot-overview__quadrant-desc">Gaps, limitations, or areas that need work</p>
        </div>
        <div class="swot-overview__quadrant swot-overview__quadrant--o">
          <span class="swot-overview__quadrant-tag">External - Positive</span>
          <strong class="swot-overview__quadrant-name">Opportunities</strong>
          <p class="swot-overview__quadrant-desc">
            Outside trends or circumstances you could benefit from
          </p>
        </div>
        <div class="swot-overview__quadrant swot-overview__quadrant--t">
          <span class="swot-overview__quadrant-tag">External - Negative</span>
          <strong class="swot-overview__quadrant-name">Threats</strong>
          <p class="swot-overview__quadrant-desc">
            Outside risks that could harm your position or plans
          </p>
        </div>
      </div>
    </section>

    <section class="swot-overview__section">
      <h2 class="swot-overview__section-title">When to use it</h2>
      <p class="swot-overview__text">
        SWOT is useful whenever you need to make a decision with incomplete information and want to
        think through it systematically. Common situations include starting a business or side
        project, evaluating a career move, planning a product launch, or reviewing how a team or
        organisation is performing.
      </p>
      <p class="swot-overview__text">
        It works best when you are honest - especially about weaknesses. A SWOT filled with only
        positives tells you very little.
      </p>
    </section>

    <section class="swot-overview__section">
      <h2 class="swot-overview__section-title">How to use this guide</h2>
      <p class="swot-overview__text">
        This guide takes you from zero to a complete, useful analysis in four parts. Work through
        them in order, or jump to the section you need.
      </p>
      <div class="swot-overview__status">
        <p class="swot-overview__status-text">
          When you are ready to build your own analysis, open the
          <NuxtLink :href="ROUTE_PATHS.swot.path" class="swot-overview__link">
            interactive SWOT tool
          </NuxtLink>
          and follow along.
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

.swot-overview {
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

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $space-3;
    margin-top: $space-5;

    @include respond-to(sm) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__quadrant {
    padding: $space-5;
    border-radius: $radius-lg;
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: $space-2;

    &--s {
      background-color: var(--success-soft);
      border-color: var(--success);
    }

    &--w {
      background-color: var(--danger-soft);
      border-color: var(--danger);
    }

    &--o {
      background-color: var(--accent-muted);
      border-color: var(--accent-soft);
    }

    &--t {
      background-color: var(--warning-soft);
      border-color: var(--warning);
    }
  }

  &__quadrant-tag {
    font-size: $text-xs;
    font-weight: $font-medium;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  &__quadrant-name {
    font-size: $text-base;
    font-weight: $font-semibold;
    color: var(--text-primary);
  }

  &__quadrant-desc {
    margin: 0;
    font-size: $text-sm;
    color: var(--text-secondary);
    line-height: $leading-relaxed;
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

  &__link {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 3px;

    @include transition-base(color);

    &:hover {
      color: var(--accent-hover);
    }
  }
}
</style>
