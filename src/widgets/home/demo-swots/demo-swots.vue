<template>
  <section class="demo-swots container">
    <header class="demo-swots__head">
      <h2 class="demo-swots__title">Learn from our demo SWOT analyses</h2>
      <p class="demo-swots__lede">
        Browse real examples to see how a finished SWOT looks in Stratify. Hover any board and open
        it in the tool to explore and edit your own copy.
      </p>
    </header>

    <div class="demo-swots__grid">
      <article v-for="demo in MOCK_SWOTS" :key="demo.key" class="demo">
        <h3 class="demo__title">{{ getDisplayName(demo.key) }}</h3>

        <div class="demo__board">
          <SwotCards :cards="demo.value" is-readonly />
          <div class="demo__overlay">
            <Button size="lg" @click="openDemo(demo)">
              <ArrowUpRight class="size-4" /> See full analysis
            </Button>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from "@lucide/vue";
import Button from "~/shared/components/ui/button/button.vue";
import { ROUTE_PATHS } from "~/shared/constants/route-paths";
import { MOCK_SWOTS } from "~/shared/mock/swot/mock-swots";
import type { SwotCard } from "~/shared/types/swot/swot-cards.types";
import { setLocalStorage } from "~/shared/utils/local-storage";

function getDisplayName(key: string) {
  return key.replace("swotAA-", "").split("-").join(" ");
}

function openDemo(demo: { key: string; value: SwotCard[] }) {
  setLocalStorage(demo.key, JSON.stringify(demo.value));
  navigateTo({ path: ROUTE_PATHS.swot.path, query: { name: getDisplayName(demo.key) } });
}
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;
@use "~/shared/styles/abstracts/breakpoints" as *;
@use "~/shared/styles/abstracts/mixins" as *;
@use "~/shared/styles/abstracts/animations" as *;

.demo-swots {
  padding-block: $space-16;

  @include respond-to(lg) {
    padding-block: $space-20;
  }

  &__head {
    max-width: 42rem;
    margin: 0 auto $space-10;
    display: flex;
    flex-direction: column;
    gap: $space-3;
    text-align: center;
  }

  &__title {
    font-size: $text-3xl;
    font-weight: $font-bold;
    color: var(--text-primary);
  }

  &__lede {
    font-size: $text-lg;
    line-height: $leading-relaxed;
    color: var(--text-secondary);
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-8;

    @include respond-to(xl) {
      grid-template-columns: 1fr 1fr;
    }
  }
}

.demo {
  display: flex;
  flex-direction: column;
  gap: $space-4;
  padding: $space-5;
  border: 1px solid var(--border);
  border-radius: $radius-2xl;
  background-color: var(--bg-surface);
  box-shadow: $shadow-sm;
  @include transition-base(box-shadow, border-color, transform);

  &:hover {
    border-color: var(--border-strong);
    box-shadow: $shadow-lg;
    transform: translateY(-2px);
  }

  &__title {
    font-size: $text-xl;
    font-weight: $font-semibold;
    color: var(--text-primary);
  }

  &__board {
    position: relative;
    overflow: hidden;
    border-radius: $radius-xl;
  }

  &__overlay {
    display: flex;
    justify-content: center;
    margin-top: $space-4;
  }
}

// Pointer devices: float the CTA over the full board and reveal it on hover/focus.
@media (hover: hover) {
  .demo__overlay {
    position: absolute;
    inset: 0;
    z-index: $z-overlay;
    align-items: center;
    margin-top: 0;
    background: color-mix(in srgb, var(--bg-base) 45%, transparent);
    backdrop-filter: blur(2px);
    opacity: 0;
    pointer-events: none;
    @include transition-base(opacity);
  }

  .demo__board:hover .demo__overlay,
  .demo__board:focus-within .demo__overlay {
    opacity: 1;
    pointer-events: auto;
  }
}
</style>
