<template>
  <div>
    <SwotHeader
      :handleExportJson="handleExportJson"
      :setUploadFileModalOpen="setUploadFileModalOpen"
    />
    <SwotCards :cards="cards" />

    <UploadFileModal
      :open="isUploadFileModalOpen"
      :setOpen="setUploadFileModalOpen"
      :handleSubmit="handleImportJson"
      :uploadFileError="uploadFileError"
    />

    <UserAnalysisModal
      :open="isUserAnalysisModalOpen"
      :setOpen="setUserAnalysisModalOpen"
      :allLocalStorageAnalysis="allLocalStorageAnalysis"
      :handleGetSwotLocalStorage="handleGetSwotLocalStorage"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, ref, watchEffect, watch } from "vue";
import { useQueryParams } from "~/shared/hooks/use-query-params";
import type { SwotCard } from "~/shared/types/swot/swot-cards.types";
import {
  getAllLocalStorageItems,
  getLocalStorage,
  setLocalStorage,
} from "~/shared/utils/local-storage";
import SwotHeader from "~/widgets/swot/header.vue";
import SwotCards from "~/widgets/swot/swot-cards.vue";
import UploadFileModal from "~/widgets/swot/upload-file-modal.vue";
import UserAnalysisModal from "~/widgets/swot/user-analysis-modal.vue";

const isUploadFileModalOpen = ref(false);
const setUploadFileModalOpen = (value: boolean) => {
  isUploadFileModalOpen.value = value;
};
const uploadFileError = ref();
const swotFileName = useQueryParams("name");
const formattedFileName = computed(() => swotFileName.value.split(" ").join("-"));
const localStorageCards = computed(() =>
  getLocalStorage(`swotAA-${formattedFileName.value || "unknown"}`),
);
const allLocalStorageAnalysis = getAllLocalStorageItems("swotAA");
const isUserAnalysisModalOpen = ref(false);
const setUserAnalysisModalOpen = (value: boolean) => {
  isUserAnalysisModalOpen.value = value;
};

const cards = reactive<SwotCard[]>([
  {
    key: "S",
    name: "Strengths",
    description: "Internal positives",
    tooltip:
      "Strengths are internal factors that give your organization a competitive advantage - areas where you excel and consistently outperform competitors.",
    items: [],
    input: "",
  },
  {
    key: "W",
    name: "Weaknesses",
    description: "Internal negatives",
    tooltip:
      "Weaknesses are internal factors that put your organization at a disadvantage - areas where you fall short and need improvement to remain competitive.",
    items: [],
    input: "",
  },
  {
    key: "O",
    name: "Opportunities",
    description: "External positives",
    tooltip:
      "Opportunities are external factors your organization can exploit to its advantage - favorable trends, market gaps, or conditions you can capitalize on.",
    items: [],
    input: "",
  },
  {
    key: "T",
    name: "Threats",
    description: "External negatives",
    tooltip:
      "Threats are external factors that could harm your organization - competitors, regulations, economic shifts, or other environmental challenges to watch.",
    items: [],
    input: "",
  },
]);

watchEffect(() => {
  if (allLocalStorageAnalysis?.length > 0) {
    isUserAnalysisModalOpen.value = true;
  }
});

watchEffect(() => {
  handleGetSwotLocalStorage();
});

watch(
  () => cards?.map((card) => card?.items),
  () => {
    setLocalStorage(`swotAA-${formattedFileName.value || "unknown"}`, JSON.stringify(cards));
  },
  {
    deep: true,
  },
);

function handleExportJson() {
  const carsAsString = JSON.stringify(cards, null, 2);
  const blob = new Blob([carsAsString], { type: "application/json" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${formattedFileName.value || "swot-analysis"}.json`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

function handleImportJson(jsonFileContent: SwotCard[]) {
  cards.splice(0, cards.length, ...jsonFileContent);
  setUploadFileModalOpen(false);
}

function handleGetSwotLocalStorage() {
  console.log("localStorageCards.value:", localStorageCards.value);
  if (Array.isArray(localStorageCards.value)) {
    cards.splice(0, cards.length, ...localStorageCards.value);
  }
}
</script>
