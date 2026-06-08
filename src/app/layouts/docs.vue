<template>
  <div class="docs-page">
    <div class="layout">
      <DocsSidebar />
      <main>
        <slot />
      </main>
    </div>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import DocsSidebar from "~/widgets/layout/doc-sidebar/docs-sidebar.vue";
import SiteFooter from "~/widgets/layout/footer/site-footer.vue";
</script>

<style lang="scss" scoped>
.docs-page {
  background-color: var(--bg-base);
}

.layout {
  min-height: 100vh;
  display: flex;
  align-items: start;
  gap: 20px;
  max-width: 1720px;
  margin: auto;
  padding: 16px;
}
</style>
