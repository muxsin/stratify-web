<template>
  <section class="container py-5 flex items-center justify-between gap-5 flex-wrap md:flex-nowrap">
    <Input class="md:max-w-[50%]" placeholder="Name your swot analysis..." />

    <div class="flex items-center gap-3">
      <Button variant="ghost"> <FolderDown class="size-4" /> Import</Button>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost"> <FolderUp class="size-4" /> Export</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>as image</DropdownMenuItem>
          <DropdownMenuItem @click="handleExportJson">as JSON</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FolderDown, FolderUp } from "@lucide/vue";
import Button from "~/shared/components/ui/button/button.vue";
import Input from "~/shared/components/ui/input/Input.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/shared/components/ui/dropdown-menu";

defineProps<{ handleExportJson: () => void }>();
</script>
