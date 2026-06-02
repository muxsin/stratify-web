<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
});
</script>

<style lang="scss">
html {
  background-color: var(--bg-base);
  color: var(--text-primary);
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

body {
  background-color: var(--bg-base);
}
</style>
