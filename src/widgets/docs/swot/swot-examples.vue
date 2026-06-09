<template>
  <article class="swot-examples">
    <header class="swot-examples__header">
      <h1 class="swot-examples__title">SWOT Examples</h1>
      <p class="swot-examples__lead">
        The fastest way to understand a framework is to see it filled in. This page walks through a
        complete, real example quadrant by quadrant - so you can see what good SWOT thinking looks
        like before you try it yourself. After the walkthrough, you can browse and open all our demo
        boards in the interactive tool.
      </p>
    </header>

    <section class="swot-examples__section">
      <h2 class="swot-examples__section-title">Worked example - Starting a YouTube Channel</h2>
      <p class="swot-examples__text">
        Imagine someone deciding whether to start a YouTube channel around a topic they know well.
        They have no audience yet, some free time on weekends, and a laptop with basic editing
        software. Here is how their SWOT might look.
      </p>

      <div class="swot-examples__quadrant swot-examples__quadrant--s">
        <h3 class="swot-examples__quadrant-title">Strengths</h3>
        <p class="swot-examples__quadrant-meta">Internal - Positive</p>
        <p class="swot-examples__quadrant-body">
          Starting a YouTube channel costs almost nothing. The platform is free, a smartphone camera
          is enough to begin, and free editing software handles the basics. That low barrier to
          entry is a genuine strength - most people who want to start never do simply because they
          overestimate what is required.
        </p>
        <ul class="swot-examples__items">
          <li>Near-zero startup cost</li>
          <li>Instant global audience reach</li>
          <li>Builds a durable personal brand</li>
          <li>Passive ad-revenue potential</li>
          <li>Full creative control over content</li>
          <li>Evergreen videos earn for years</li>
        </ul>
        <p class="swot-examples__quadrant-note">
          Notice that all of these are things the creator controls or already has. That is what
          makes them internal - and therefore strengths.
        </p>
      </div>

      <div class="swot-examples__quadrant swot-examples__quadrant--w">
        <h3 class="swot-examples__quadrant-title">Weaknesses</h3>
        <p class="swot-examples__quadrant-meta">Internal - Negative</p>
        <p class="swot-examples__quadrant-body">
          Editing video is a real skill that takes months to develop. Early growth is almost always
          slow - most new channels gain fewer than 100 subscribers in the first three months. These
          are internal weaknesses, not external threats, because the creator can directly address
          them with effort, learning, or changed habits.
        </p>
        <ul class="swot-examples__items">
          <li>Steep editing and production learning curve</li>
          <li>Slow, inconsistent early growth</li>
          <li>Time-intensive to produce regularly</li>
          <li>Upload pressure leads to burnout</li>
          <li>Revenue swings month to month</li>
        </ul>
        <p class="swot-examples__quadrant-note">
          A common mistake here would be writing "algorithm changes" as a weakness. That is external
          - YouTube controls it, not the creator. It belongs in threats.
        </p>
      </div>

      <div class="swot-examples__quadrant swot-examples__quadrant--o">
        <h3 class="swot-examples__quadrant-title">Opportunities</h3>
        <p class="swot-examples__quadrant-meta">External - Positive</p>
        <p class="swot-examples__quadrant-body">
          The creator does not need to rely only on ad revenue. Brand sponsorships, merchandise,
          channel memberships, and repurposing videos into paid courses all exist as real income
          streams for established channels. These are external opportunities - they exist in the
          market regardless of what this particular creator does.
        </p>
        <ul class="swot-examples__items">
          <li>Brand sponsorships and paid deals</li>
          <li>Multiple income streams beyond ads</li>
          <li>Cross-post to Shorts, TikTok, and Reels</li>
          <li>Underserved niche communities</li>
          <li>Merch and channel-membership revenue</li>
          <li>Repurpose content into courses</li>
        </ul>
      </div>

      <div class="swot-examples__quadrant swot-examples__quadrant--t">
        <h3 class="swot-examples__quadrant-title">Threats</h3>
        <p class="swot-examples__quadrant-meta">External - Negative</p>
        <p class="swot-examples__quadrant-body">
          YouTube's algorithm is unpredictable. A change to how videos are recommended can cut a
          channel's reach overnight without any action from the creator. Copyright enforcement is
          similarly outside the creator's control. These are genuine external threats that any
          YouTube channel faces.
        </p>
        <ul class="swot-examples__items">
          <li>Algorithm changes cut reach overnight</li>
          <li>Intense competition for attention</li>
          <li>Copyright strikes and demonetization</li>
          <li>Audiences migrate to rival platforms</li>
          <li>Shifting ad rates and platform policies</li>
        </ul>
      </div>
    </section>

    <section class="swot-examples__section">
      <h2 class="swot-examples__section-title">What this example tells us</h2>
      <p class="swot-examples__text">
        Reading across the quadrants, a few strategic insights appear. The low startup cost
        (strength) directly counters the worry about upfront investment. But the time required
        (weakness) combined with the revenue unpredictability (weakness and threat) suggests this
        works best as a side project at first, not a full-time leap.
      </p>
      <p class="swot-examples__text">
        The opportunity to diversify income beyond ads is significant - it directly offsets the
        threat of shifting ad rates. A smart next step from this SWOT would be to plan for multiple
        revenue streams from the start, rather than depending on a single platform's ad program.
      </p>
    </section>

    <section class="swot-examples__section swot-examples__section--demos">
      <h2 class="swot-examples__section-title">Browse all demo analyses</h2>
      <p class="swot-examples__text">
        Below are all our demo boards. Hover any board and click "See full analysis" to open it in
        the tool, where you can explore, edit, and save your own copy.
      </p>
      <ExampleSwots />
    </section>

    <section class="swot-examples__section swot-examples__section--next">
      <h2 class="swot-examples__section-title">Ready to build your own?</h2>
      <p class="swot-examples__text">
        Open the
        <NuxtLink :href="ROUTE_PATHS.swot.path" class="swot-examples__link"> SWOT tool </NuxtLink>
        and start with a blank board. If you want a reminder of what belongs in each quadrant,
        revisit the
        <NuxtLink :href="ROUTE_PATHS['docs-swot-basics'].path" class="swot-examples__link">
          Basics
        </NuxtLink>
        page. For tips on getting the most out of your analysis, the
        <NuxtLink :href="ROUTE_PATHS['docs-swot-best-practices'].path" class="swot-examples__link">
          Best Practices
        </NuxtLink>
        page has specific, actionable guidance.
      </p>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ROUTE_PATHS } from "~/shared/constants/route-paths";
import ExampleSwots from "~/widgets/home/example-swots/example-swots.vue";
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;
@use "~/shared/styles/abstracts/mixins" as *;
@use "~/shared/styles/abstracts/animations" as *;
@use "~/shared/styles/abstracts/breakpoints" as *;

.swot-examples {
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

    &--demos {
      padding-top: $space-8;
      border-top: 1px solid var(--border);
    }

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

  &__quadrant {
    padding: $space-6;
    border-radius: $radius-lg;
    border: 1px solid var(--border);
    margin-bottom: $space-4;

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

  &__quadrant-title {
    margin: 0 0 $space-1;
    font-size: $text-lg;
    font-weight: $font-semibold;
    color: var(--text-primary);
  }

  &__quadrant-meta {
    margin: 0 0 $space-4;
    font-size: $text-xs;
    font-weight: $font-medium;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  &__quadrant-body {
    margin: 0 0 $space-3;
    font-size: $text-base;
    color: var(--text-secondary);
    line-height: $leading-loose;
  }

  &__items {
    margin: $space-3 0;
    padding-left: $space-5;
    color: var(--text-secondary);
    font-size: $text-sm;
    line-height: $leading-loose;

    li {
      margin-bottom: $space-1;
    }
  }

  &__quadrant-note {
    margin: $space-4 0 0;
    padding: $space-3 $space-4;
    background-color: var(--bg-elevated);
    border-radius: $radius-md;
    font-size: $text-sm;
    color: var(--text-muted);
    line-height: $leading-relaxed;
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
