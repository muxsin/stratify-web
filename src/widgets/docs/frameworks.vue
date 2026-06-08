<template>
  <section class="frameworks">
    <h2 class="frameworks__title">Frameworks</h2>
    <div class="frameworks__grid">
      <NuxtLink
        v-for="framework in DOCS_FRAMEWORKS"
        :key="framework.title"
        :href="framework.path"
        class="frameworks__link"
      >
        <Card class="frameworks__card">
          <CardHeader>
            <CardTitle>{{ framework.title }}</CardTitle>
            <CardDescription>{{ framework.subtitle }}</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="frameworks__card-text">{{ framework.description }}</p>
          </CardContent>
        </Card>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DOCS_FRAMEWORKS } from "~/shared/constants/docs/framworks";
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;
@use "~/shared/styles/abstracts/mixins" as *;
@use "~/shared/styles/abstracts/animations" as *;

.frameworks {
  &__title {
    margin: 0 0 $space-6;
    color: var(--text-primary);
    font-size: $text-xl;
    font-weight: $font-semibold;
  }

  &__grid {
    display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: $space-4;
  }

  &__link {
    text-decoration: none;

    &:hover .frameworks__card {
      border-color: var(--accent);
      box-shadow: $shadow-md;
    }
  }

  &__card {
    height: 100%;
    border-color: var(--border);
    background-color: var(--bg-surface);

    @include transition-base(border-color, box-shadow);
  }

  &__card-text {
    margin: 0;
    color: var(--text-muted);
    font-size: $text-sm;
    line-height: $leading-loose;
  }
}
</style>
