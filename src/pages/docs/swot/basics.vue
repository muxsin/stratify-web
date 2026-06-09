<template>
  <SwotBasicsView />
</template>

<script setup lang="ts">
import SwotBasicsView from "~/views/docs/swot/swot-basics-view.vue";

definePageMeta({ layout: "docs" });

useSeoMeta({
  title: "SWOT Basics - Stratify Docs",
  description:
    "Learn what each SWOT quadrant means - Strengths, Weaknesses, Opportunities, and Threats - with plain-language definitions and real examples.",
});
</script>
