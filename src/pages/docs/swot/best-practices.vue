<template>
  <SwotBestPracticesView />
</template>

<script setup lang="ts">
import SwotBestPracticesView from "~/views/docs/swot/swot-best-practices-view.vue";

definePageMeta({ layout: "docs" });

useSeoMeta({
  title: "SWOT Best Practices - Stratify Docs",
  description:
    "Tips and common mistakes for SWOT analysis: be specific, keep internal and external factors separate, balance quadrants, and turn findings into action.",
});
</script>
