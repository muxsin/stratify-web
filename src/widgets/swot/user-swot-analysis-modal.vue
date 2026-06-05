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

      <div v-if="allLocalStorageAnalysis?.length" class="analysis-list">
        <Button
          v-for="swotAA in allLocalStorageAnalysis"
          :key="swotAA?.key"
          variant="outline"
          class="analysis-list__item"
          @click="handleApplyAnalysis(swotAA?.key)"
        >
          {{ getAnalysisName(swotAA?.key) }}
        </Button>
      </div>

      <p v-else class="analysis-empty">You don't have any saved analyses yet.</p>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
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

const props = defineProps<{
  open: boolean;
  setOpen: (value: boolean) => void;
  allLocalStorageAnalysis: { key: string; value: SwotCard[] }[];
  handleGetSwotLocalStorage: () => void;
}>();

const selectedAnalysis = useQueryParams("name");

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
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;

.analysis-list {
  display: flex;
  flex-direction: column;
  gap: $space-2;

  &__item {
    width: 100%;
    justify-content: flex-start;
  }
}

.analysis-empty {
  padding: $space-4 0;
  text-align: center;
  color: var(--text-muted);
}
</style>
