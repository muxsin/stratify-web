<template>
  <div>
    <SwotHeader :handleExportJson="handleExportJson" />
    <SwotCards :cards="cards" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { SwotCard } from "~/shared/types/swot/swot-cards.types";
import SwotHeader from "~/widgets/swot/header.vue";
import SwotCards from "~/widgets/swot/swot-cards.vue";

const cards = reactive<SwotCard[]>([
  {
    key: "S",
    name: "Strengths",
    description: "Internal positives",
    tooltip:
      "Strengths are internal factors that give your organization a competitive advantage — areas where you excel and consistently outperform competitors.",
    items: [],
    input: "",
  },
  {
    key: "W",
    name: "Weaknesses",
    description: "Internal negatives",
    tooltip:
      "Weaknesses are internal factors that put your organization at a disadvantage — areas where you fall short and need improvement to remain competitive.",
    items: [],
    input: "",
  },
  {
    key: "O",
    name: "Opportunities",
    description: "External positives",
    tooltip:
      "Opportunities are external factors your organization can exploit to its advantage — favorable trends, market gaps, or conditions you can capitalize on.",
    items: [],
    input: "",
  },
  {
    key: "T",
    name: "Threats",
    description: "External negatives",
    tooltip:
      "Threats are external factors that could harm your organization — competitors, regulations, economic shifts, or other environmental challenges to watch.",
    items: [],
    input: "",
  },
]);

function handleExportJson() {
  const carsAsString = JSON.stringify(cards, null, 2);
  const blob = new Blob([carsAsString], { type: "application/json" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "swot-analysis.json";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}
</script>
