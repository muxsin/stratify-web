<template>
  <section class="hero">
    <div class="container hero__inner">
      <span class="hero__eyebrow">Strategy toolkit</span>

      <h1 class="hero__title">
        Turn business complexity into <span class="hero__title-accent">clarity</span>.
      </h1>

      <p class="hero__lede">
        Learn the frameworks that shape strategy — SWOT, PESTLE, Porter's Five Forces, BCG Matrix,
        Ansoff Matrix and more. Then use them. Interactive tools, real-world examples and a clean
        place to think.
      </p>

      <div class="hero__cta">
        <Button as="a" href="#frameworks" size="lg">Explore frameworks</Button>
        <Button as="a" href="#about" size="lg" variant="outline">What is Stratify?</Button>
      </div>
    </div>
  </section>
</template>

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
    align-items: flex-start;
    gap: $space-6;
    max-width: 56rem;
  }

  &__eyebrow {
    display: inline-block;
    padding: $space-1 $space-3;
    border: 1px solid var(--border-strong);
    border-radius: $radius-full;
    font-size: $text-xs;
    font-weight: $font-medium;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--text-secondary);
    background-color: var(--bg-surface);
  }

  &__title {
    font-size: fluid(2rem, 3.75rem);
    line-height: $leading-tight;
    font-weight: $font-bold;
    letter-spacing: -0.025em;
    color: var(--text-primary);
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

  &__cta {
    display: flex;
    flex-wrap: wrap;
    gap: $space-3;
    margin-top: $space-2;
  }
}
</style>
