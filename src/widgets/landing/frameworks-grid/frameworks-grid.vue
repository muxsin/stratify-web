<template>
  <section id="frameworks" class="frameworks">
    <div class="container">
      <header class="frameworks__head">
        <h2 class="frameworks__title">Frameworks, one place.</h2>
        <p class="frameworks__lede">
          Each framework comes with a plain-English explanation, when to use it, real-world examples
          and a tool to fill in your own.
        </p>
      </header>

      <ul class="frameworks__grid">
        <li v-for="fw in frameworks" :key="fw.slug" class="frameworks__item">
          <Card class="frameworks__card">
            <CardHeader>
              <CardTitle>{{ fw.name }}</CardTitle>
              <CardDescription>{{ fw.tagline }}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Badge variant="secondary">{{ fw.bestFor }}</Badge>
            </CardFooter>
          </Card>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
type FrameworkPreview = {
  slug: string;
  name: string;
  tagline: string;
  bestFor: string;
};

const frameworks: FrameworkPreview[] = [
  {
    slug: "swot",
    name: "SWOT",
    tagline: "Strengths, Weaknesses, Opportunities, Threats.",
    bestFor: "Quick internal/external scan",
  },
  {
    slug: "pestle",
    name: "PESTLE",
    tagline: "Political, Economic, Social, Tech, Legal, Environmental.",
    bestFor: "Macro environment scan",
  },
  {
    slug: "porter-five-forces",
    name: "Porter's Five Forces",
    tagline: "Map industry competition and structural attractiveness.",
    bestFor: "Industry analysis",
  },
  {
    slug: "bcg-matrix",
    name: "BCG Matrix",
    tagline: "Classify products by market share and growth.",
    bestFor: "Portfolio decisions",
  },
  {
    slug: "ansoff-matrix",
    name: "Ansoff Matrix",
    tagline: "Choose growth strategies along product and market axes.",
    bestFor: "Growth planning",
  },
  {
    slug: "value-chain",
    name: "Value Chain",
    tagline: "Break down activities that create value.",
    bestFor: "Operational analysis",
  },
];
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;
@use "~/shared/styles/abstracts/breakpoints" as *;
@use "~/shared/styles/abstracts/mixins" as *;

.frameworks {
  padding-block: $space-16 $space-24;

  &__head {
    display: flex;
    flex-direction: column;
    gap: $space-3;
    margin-bottom: $space-10;
    max-width: 48rem;
  }

  &__title {
    font-size: $text-3xl;
    font-weight: $font-bold;
    color: var(--text-primary);
    letter-spacing: -0.02em;

    @include respond-to(md) {
      font-size: $text-4xl;
    }
  }

  &__lede {
    font-size: $text-base;
    color: var(--text-secondary);
    line-height: $leading-relaxed;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-4;

    @include respond-to(sm) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include respond-to(lg) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &__item {
    display: flex;
  }

  &__card {
    width: 100%;
    transition: border-color 0.15s ease;

    &:hover {
      border-color: var(--accent);
    }
  }
}
</style>
