<template>
  <Dialog :open="open" @update:open="setOpen">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription> This action cannot be undone. </DialogDescription>
      </DialogHeader>

      <div>
        <form @submit.prevent="handleFormSubmit">
          <input ref="uploadedFile" type="file" accept=".json,application/json" />

          <Button type="submit">submit</Button>
        </form>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
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
  handleSubmit: (jsonFileContent: SwotCard[]) => void;
  uploadFileError: string;
}>();

const uploadedFile = ref<HTMLInputElement>();
const swotFileName = useQueryParams("name");

function handleFormSubmit() {
  const file = uploadedFile.value?.files?.[0];

  if (!file) return;
  swotFileName.value = file.name
    .replace(/\.json$/i, "")
    .split("-")
    .join(" ");
  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const parsedJson = JSON.parse(e.target?.result as string);
      props.handleSubmit(parsedJson);
    } catch (error) {
      console.log("error in reader", error);
    }
  };
  reader.readAsText(file);
}
</script>
