<template>
  <Dialog :open="open" @update:open="setOpen">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Saved Analyses</DialogTitle>
        <DialogDescription>
          Open a previously saved SWOT analysis to pick up where you left off.
        </DialogDescription>
      </DialogHeader>

      <div v-if="analyses.length" class="analysis-list">
        <div v-for="swotAA in analyses" :key="swotAA?.key" class="analysis-list__row">
          <Button
            variant="outline"
            class="analysis-list__open"
            @click="handleApplyAnalysis(swotAA?.key)"
          >
            {{ getAnalysisName(swotAA?.key) }}
          </Button>
          <Button
            variant="outline"
            size="icon"
            class="analysis-list__remove"
            aria-label="Remove analysis"
            @click="handleRemoveSwotAnalysis(swotAA?.key)"
          >
            <X class="size-4" />
          </Button>
        </div>
      </div>

      <p v-else class="analysis-empty">You don't have any saved analyses yet.</p>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { X } from "@lucide/vue";
import Button from "~/shared/components/ui/button/button.vue";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/shared/components/ui/dialog";
import { useQueryParams } from "~/shared/hooks/use-query-params";
import type { SwotCard } from "~/shared/types/swot/swot-cards.types";
import { removeLocalStorageItem } from "~/shared/utils/local-storage";

const props = defineProps<{
  open: boolean;
  setOpen: (value: boolean) => void;
  allLocalStorageAnalysis: { key: string; value: SwotCard[] }[];
  handleGetSwotLocalStorage: () => void;
}>();

const selectedAnalysis = useQueryParams("name");

const analyses = ref([...props.allLocalStorageAnalysis]);
watch(
  () => props.allLocalStorageAnalysis,
  (next) => {
    analyses.value = [...next];
  },
);

function getAnalysisName(swotAAKey: string) {
  const name = swotAAKey.slice(7);
  return name === "unknown" ? "Untitled analysis" : name.split("-").join(" ");
}

function handleApplyAnalysis(swotAAKey: string) {
  const formatedAnalysisTitle = swotAAKey.slice(7);
  selectedAnalysis.value = formatedAnalysisTitle;
  props.handleGetSwotLocalStorage();
  props.setOpen(false);
}

function handleRemoveSwotAnalysis(key: string) {
  removeLocalStorageItem(key);
  analyses.value = analyses.value.filter((item) => item.key !== key);
}
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;

.analysis-list {
  display: flex;
  flex-wrap: wrap;
  gap: $space-2;

  &__row {
    display: flex;
    align-items: center;
    gap: $space-2;
    width: fit-content;
  }

  &__open {
    justify-content: flex-start;
  }

  &__remove {
    flex-shrink: 0;
  }
}

.analysis-empty {
  padding: $space-4 0;
  text-align: center;
  color: var(--text-muted);
}
</style>
