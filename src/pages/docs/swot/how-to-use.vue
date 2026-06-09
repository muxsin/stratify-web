<template>
  <SwotHowToUseView />
</template>

<script setup lang="ts">
import SwotHowToUseView from "~/views/docs/swot/swot-how-to-use-view.vue";

definePageMeta({ layout: "docs" });

useSeoMeta({
  title: "How to Use the SWOT Tool - Stratify Docs",
  description:
    "Step-by-step guide to building a SWOT analysis in Stratify: naming, adding items, saving, exporting, and importing.",
});
</script>
