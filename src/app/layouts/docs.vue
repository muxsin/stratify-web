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
  min-height: 100vh;
  background-color: var(--bg-base);
}

.layout {
  display: flex;
  align-items: start;
  gap: 20px;
  max-width: 1600px;
  margin: auto;
  padding: 16px;
}
</style>
