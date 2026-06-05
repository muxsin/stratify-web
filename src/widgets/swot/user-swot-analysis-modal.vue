<template>
  <Dialog :open="open" @update:open="setOpen">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle class="import-modal__title">Import SWOT Analysis</DialogTitle>
        <DialogDescription class="import-modal__desc">
          Upload a JSON file exported from Stratify to restore your SWOT analysis.
        </DialogDescription>
      </DialogHeader>

      <div v-for="swotAA in allLocalStorageAnalysis" :key="swotAA?.key">
        <Button variant="outline" @click="handleApplyAnalysis(swotAA?.key)">{{
          swotAA?.key
        }}</Button>
      </div>
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

function handleApplyAnalysis(swotAAKey: string) {
  const formatedAnalysisTitle = swotAAKey.slice(7);
  selectedAnalysis.value = formatedAnalysisTitle;
  props.handleGetSwotLocalStorage();
  props.setOpen(false);
}
</script>
