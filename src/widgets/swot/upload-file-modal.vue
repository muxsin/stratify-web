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

      <form class="import-modal__form" @submit.prevent="handleFormSubmit">
        <label
          class="import-modal__drop-zone"
          :class="{ 'import-modal__drop-zone--selected': selectedFile }"
        >
          <input
            ref="uploadedFile"
            type="file"
            accept=".json,application/json"
            class="import-modal__file-input"
            @change="onFileChange"
          />
          <div class="import-modal__drop-content">
            <FolderDown class="import-modal__drop-icon" aria-hidden="true" />
            <span v-if="selectedFile" class="import-modal__file-name">{{ selectedFile }}</span>
            <span v-else class="import-modal__drop-hint">
              Click to choose a <strong>.json</strong> file
            </span>
          </div>
        </label>

        <p v-if="uploadFileError" class="import-modal__error">{{ uploadFileError }}</p>

        <DialogFooter class="import-modal__footer">
          <Button type="button" variant="ghost" @click="() => setOpen(false)">Cancel</Button>
          <Button type="submit" :disabled="!selectedFile">Import</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FolderDown } from "@lucide/vue";
import Button from "~/shared/components/ui/button/button.vue";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
const selectedFile = ref<string>("");
const swotFileName = useQueryParams("name");

function onFileChange() {
  selectedFile.value = uploadedFile.value?.files?.[0]?.name ?? "";
}

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

<style lang="scss" scoped>
.import-modal {
  &__title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: 0.01em;
  }

  &__desc {
    font-size: 0.8125rem;
    color: var(--text-muted);
    line-height: 1.5;
    margin-top: 0.25rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__drop-zone {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px dashed var(--border-strong);
    border-radius: 0.625rem;
    background-color: var(--bg-surface);
    padding: 2rem 1.5rem;
    cursor: pointer;
    transition:
      border-color 0.15s ease,
      background-color 0.15s ease;

    &:hover {
      border-color: var(--accent);
      background-color: var(--bg-elevated);
    }

    &--selected {
      border-color: var(--accent);
      border-style: solid;
      background-color: var(--accent-muted);
    }
  }

  &__file-input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }

  &__drop-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
    pointer-events: none;
  }

  &__drop-icon {
    width: 2rem;
    height: 2rem;
    color: var(--accent);
    flex-shrink: 0;
  }

  &__drop-hint {
    font-size: 0.8125rem;
    color: var(--text-muted);
    text-align: center;
    line-height: 1.5;

    strong {
      color: var(--text-secondary);
      font-weight: 600;
    }
  }

  &__file-name {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-align: center;
    word-break: break-all;
  }

  &__error {
    font-size: 0.8125rem;
    color: var(--danger);
    background-color: var(--danger-soft);
    border: 1px solid var(--danger);
    border-radius: 0.375rem;
    padding: 0.5rem 0.75rem;
    margin: 0;
  }

  &__footer {
    margin-top: 0.25rem;
  }
}
</style>
