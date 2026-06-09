<template>
  <article class="swot-how-to">
    <header class="swot-how-to__header">
      <h1 class="swot-how-to__title">How to Use the SWOT Tool</h1>
      <p class="swot-how-to__lead">
        Stratify's SWOT tool gives you a 2x2 board where you can build, save, and export a complete
        analysis. This page walks you through every part of the tool, step by step, so you can get
        from a blank board to a finished analysis without guessing.
      </p>
    </header>

    <section class="swot-how-to__section">
      <h2 class="swot-how-to__section-title">Step 1 - Open the tool</h2>
      <p class="swot-how-to__text">
        Go to the
        <NuxtLink :href="ROUTE_PATHS.swot.path" class="swot-how-to__link">SWOT tool</NuxtLink>. You
        will see four cards arranged in a 2x2 grid - one for each quadrant: Strengths, Weaknesses,
        Opportunities, and Threats. The board starts empty and ready for your input.
      </p>
    </section>

    <section class="swot-how-to__section">
      <h2 class="swot-how-to__section-title">Step 2 - Name your analysis</h2>
      <p class="swot-how-to__text">
        At the top of the page, there is a text field that says "Name your SWOT analysis". Type a
        clear, specific name here before you start adding items. A good name makes it easy to find
        the analysis later and reminds you of the subject at a glance.
      </p>
      <div class="swot-how-to__callout">
        <p class="swot-how-to__callout-text">
          Good names are specific. "Coffee shop - Jan 2025" is more useful than "My business". The
          name becomes part of the URL so your analysis is bookmarkable and shareable.
        </p>
      </div>
    </section>

    <section class="swot-how-to__section">
      <h2 class="swot-how-to__section-title">Step 3 - Add items to each quadrant</h2>
      <p class="swot-how-to__text">
        Each card has an input field at the bottom. Click it, type your item, then press
        <strong>Enter</strong> or click the send button to add it. The item appears as a chip inside
        the card. Repeat for as many items as you need.
      </p>
      <p class="swot-how-to__text">
        Work through all four quadrants. There is no required order, but many people find it natural
        to start with Strengths, then Weaknesses, then move to the external factors. Each quadrant
        also has a short description and an info tooltip to remind you what belongs there.
      </p>
      <div class="swot-how-to__steps">
        <div class="swot-how-to__step">
          <span class="swot-how-to__step-num">1</span>
          <p class="swot-how-to__step-text">Click the input at the bottom of the quadrant card</p>
        </div>
        <div class="swot-how-to__step">
          <span class="swot-how-to__step-num">2</span>
          <p class="swot-how-to__step-text">Type your item - keep it short and specific</p>
        </div>
        <div class="swot-how-to__step">
          <span class="swot-how-to__step-num">3</span>
          <p class="swot-how-to__step-text">Press Enter or click the arrow button to add it</p>
        </div>
        <div class="swot-how-to__step">
          <span class="swot-how-to__step-num">4</span>
          <p class="swot-how-to__step-text">Repeat across all four quadrants</p>
        </div>
      </div>
    </section>

    <section class="swot-how-to__section">
      <h2 class="swot-how-to__section-title">Step 4 - Edit and remove items</h2>
      <p class="swot-how-to__text">
        To remove a single item, hover over its chip and click the X button that appears. To remove
        all items from a quadrant at once, click the "Clear all" button in the card header - it
        appears automatically when a card has at least one item.
      </p>
    </section>

    <section class="swot-how-to__section">
      <h2 class="swot-how-to__section-title">Step 5 - Save and revisit your analysis</h2>
      <p class="swot-how-to__text">
        Click the <strong>Saved</strong> button in the header to open a panel of all your saved
        analyses. Select any entry to load it back onto the board. Your analyses are stored in your
        browser's local storage, so they persist between sessions as long as you use the same
        browser.
      </p>
      <div class="swot-how-to__callout">
        <p class="swot-how-to__callout-text">
          Because analyses are saved in your browser, they are not shared between devices or other
          people. Use the JSON export (below) if you want to back up or transfer your work.
        </p>
      </div>
    </section>

    <section class="swot-how-to__section">
      <h2 class="swot-how-to__section-title">Export your analysis</h2>
      <p class="swot-how-to__text">
        Click the <strong>Export</strong> button in the header to save your work in two formats:
      </p>
      <ul class="swot-how-to__list">
        <li>
          <strong>As image</strong> - downloads a snapshot of your board, ready to paste into a
          slide deck or document.
        </li>
        <li>
          <strong>As JSON</strong> - downloads a structured data file of your analysis. Use this to
          back up your work, move it to another device, or share it with someone else.
        </li>
      </ul>
    </section>

    <section class="swot-how-to__section">
      <h2 class="swot-how-to__section-title">Import a saved analysis</h2>
      <p class="swot-how-to__text">
        Click <strong>Import</strong> in the header and select a JSON file exported from the tool.
        The board will load all four quadrants from the file. This is the fastest way to pick up
        where you left off on a different device, or to review an analysis someone else has shared
        with you.
      </p>
    </section>

    <section class="swot-how-to__section swot-how-to__section--next">
      <h2 class="swot-how-to__section-title">Next steps</h2>
      <p class="swot-how-to__text">
        Now you know how to use the tool. The next question is how to use it well. The
        <NuxtLink :href="ROUTE_PATHS['docs-swot-basics'].path" class="swot-how-to__link">
          Basics
        </NuxtLink>
        page explains what belongs in each quadrant if you are unsure. When you are ready to level
        up, the
        <NuxtLink :href="ROUTE_PATHS['docs-swot-best-practices'].path" class="swot-how-to__link">
          Best Practices
        </NuxtLink>
        page covers tips for getting real value from your analysis.
      </p>
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

.swot-how-to {
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

    &--next {
      padding-top: $space-8;
      border-top: 1px solid var(--border);
    }
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
    margin: 0 0 $space-4;
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

  &__callout {
    margin-top: $space-2;
    padding: $space-4 $space-5;
    background-color: var(--bg-surface);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent);
    border-radius: $radius-md;
  }

  &__callout-text {
    margin: 0;
    color: var(--text-muted);
    font-size: $text-sm;
    line-height: $leading-loose;
  }

  &__steps {
    display: flex;
    flex-direction: column;
    gap: $space-3;
    margin-top: $space-5;
  }

  &__step {
    display: flex;
    align-items: flex-start;
    gap: $space-4;
    padding: $space-4 $space-5;
    background-color: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: $radius-lg;
  }

  &__step-num {
    flex-shrink: 0;
    width: 1.75rem;
    height: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--accent-muted);
    color: var(--accent);
    font-size: $text-sm;
    font-weight: $font-bold;
    border-radius: $radius-full;
  }

  &__step-text {
    margin: 0;
    padding-top: 2px;
    color: var(--text-secondary);
    font-size: $text-base;
    line-height: $leading-normal;
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
