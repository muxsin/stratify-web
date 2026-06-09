<template>
  <SwotExamplesView />
</template>

<script setup lang="ts">
import SwotExamplesView from "~/views/docs/swot/swot-examples-view.vue";

definePageMeta({ layout: "docs" });

useSeoMeta({
  title: "SWOT Examples - Stratify Docs",
  description:
    "A complete worked SWOT example with quadrant-by-quadrant commentary, plus eight interactive demo boards you can open and explore in the tool.",
});
</script>
