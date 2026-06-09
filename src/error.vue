<template>
  <NuxtLayout name="default">
    <div class="error-page">
      <div class="error-page__content animate-fade-up">
        <span class="error-page__code">{{ error.statusCode }}</span>
        <h1 class="error-page__title">{{ title }}</h1>
        <p class="error-page__message">{{ message }}</p>
        <div class="error-page__actions">
          <NuxtLink
            :to="ROUTE_PATHS.home.path"
            class="error-page__btn error-page__btn--primary"
            @click="handleGoHome"
          >
            Go home
          </NuxtLink>
          <button class="error-page__btn error-page__btn--secondary" @click="handleGoBack">
            Go back
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";
import { ROUTE_PATHS } from "~/shared/constants/route-paths";

const props = defineProps<{ error: NuxtError }>();

const title = computed(() => {
  if (props.error.statusCode === 404) return "Page not found";
  if (props.error.statusCode === 403) return "Access denied";
  if (props.error.statusCode === 500) return "Something went wrong";
  return "An error occurred";
});

const message = computed(
  () =>
    props.error.message ||
    "We could not find what you were looking for. Please check the URL or go back home.",
);

function handleGoHome() {
  clearError({ redirect: ROUTE_PATHS.home.path });
}

function handleGoBack() {
  clearError();
  history.back();
}
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;
@use "~/shared/styles/abstracts/mixins" as *;
@use "~/shared/styles/abstracts/breakpoints" as *;
@use "~/shared/styles/abstracts/animations" as *;

.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 140px);
  padding: $space-8 $space-4;

  &__content {
    text-align: center;
    max-width: 480px;
  }

  &__code {
    display: block;
    font-size: 96px;
    font-weight: $font-bold;
    line-height: 1;
    color: var(--accent);
    letter-spacing: -0.04em;
    margin-bottom: $space-4;

    @include respond-to(md) {
      font-size: 128px;
    }
  }

  &__title {
    font-size: $text-2xl;
    font-weight: $font-semibold;
    color: var(--text-primary);
    margin: 0 0 $space-3;

    @include respond-to(md) {
      font-size: $text-3xl;
    }
  }

  &__message {
    font-size: $text-base;
    color: var(--text-muted);
    line-height: $leading-relaxed;
    margin: 0 0 $space-8;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $space-3;
    flex-wrap: wrap;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: $space-2 $space-5;
    border-radius: $radius-md;
    font-size: $text-sm;
    font-weight: $font-medium;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid transparent;
    @include transition-base(color, background-color, border-color);

    &--primary {
      background-color: var(--accent);
      color: #fff;
      border-color: var(--accent);

      &:hover {
        background-color: var(--accent-hover);
        border-color: var(--accent-hover);
      }
    }

    &--secondary {
      background-color: transparent;
      color: var(--text-secondary);
      border-color: var(--border-strong);

      &:hover {
        background-color: var(--bg-elevated);
        color: var(--text-primary);
      }
    }
  }
}
</style>
