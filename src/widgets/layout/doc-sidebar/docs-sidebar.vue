<template>
  <nav class="docs-sidebar">
    <ul class="docs-sidebar__list">
      <template v-for="item in DOCS_SIDEBAR_ITEMS" :key="item.label">
        <li v-if="item.type === 'link'" class="docs-sidebar__item">
          <NuxtLink
            :to="item.path"
            class="docs-sidebar__link"
            exact-active-class="docs-sidebar__link--active"
          >
            {{ item.label }}
          </NuxtLink>
        </li>

        <li v-else-if="item.type === 'group'" class="docs-sidebar__section">
          <span class="docs-sidebar__section-label">{{ item.label }}</span>
          <ul class="docs-sidebar__sublist">
            <li v-for="subItem in item.subItems" :key="subItem.path" class="docs-sidebar__item">
              <NuxtLink
                :to="subItem.path"
                class="docs-sidebar__link"
                exact-active-class="docs-sidebar__link--active"
              >
                {{ subItem.label }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { DOCS_SIDEBAR_ITEMS } from "~/shared/constants/docs/sidebar-items";
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;
@use "~/shared/styles/abstracts/mixins" as *;
@use "~/shared/styles/abstracts/animations" as *;

.docs-sidebar {
  position: sticky;
  top: $space-4;
  width: 240px;
  min-width: 240px;
  max-height: calc(100vh - #{$space-8});
  overflow-y: auto;
  padding: $space-4;
//   background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: $radius-lg;

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: $space-1;
  }

  &__item {
    list-style: none;
  }

  &__link {
    display: block;
    padding: $space-2 $space-3;
    border-radius: $radius-md;
    color: var(--text-secondary);
    font-size: $text-sm;
    text-decoration: none;
    @include transition-base(color, background-color);

    &:hover {
      color: var(--text-primary);
      background-color: var(--bg-elevated);
    }

    &--active {
      color: var(--accent);
      background-color: var(--accent-muted);
      font-weight: $font-medium;
    }
  }

  &__section {
    list-style: none;
    margin-top: $space-4;

    &:first-child {
      margin-top: 0;
    }
  }

  &__section-label {
    display: block;
    padding: $space-1 $space-3;
    font-size: $text-xs;
    font-weight: $font-semibold;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: $space-1;
  }

  &__sublist {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: $space-1;
  }
}
</style>
