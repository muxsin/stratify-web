<template>
  <SwotOverviewView />
</template>

<script setup lang="ts">
import SwotOverviewView from "~/views/docs/swot/swot-overview-view.vue";

definePageMeta({ layout: "docs" });

useSeoMeta({
  title: "SWOT Analysis - Stratify Docs",
  description:
    "Learn what SWOT analysis is, how its four quadrants work, and when to use it to make better decisions.",
});
</script>
