<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <StratifyLogo size="sm" />
      <a target="blank" href="https://t.me/muxsinjohn">developer</a>
      <p class="site-footer__copy">© {{ year }} Stratify. Turn complexity into clarity.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;
@use "~/shared/styles/abstracts/breakpoints" as *;
@use "~/shared/styles/abstracts/mixins" as *;

.site-footer {
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border);

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: $space-3;
    padding-block: $space-4;
    text-align: center;

    @include respond-to(md) {
      flex-direction: row;
      text-align: left;
    }
  }

  &__copy {
    font-size: $text-sm;
    color: var(--text-muted);
  }
}
</style>
