<template>
  <section class="container py-5 flex items-center justify-between gap-5 flex-wrap md:flex-nowrap">
    <div class="flex items-center gap-3 w-full md:max-w-[50%]">
      <NuxtLink :href="ROUTE_PATHS.home.path">
        <Button variant="outline" size="icon" aria-label="Back to home">
          <ArrowLeft class="size-4" />
        </Button>
      </NuxtLink>
      <Input v-model="swotName" class="flex-1" placeholder="Name your swot analysis..." />
    </div>

    <div class="flex items-center gap-3">
      <Button variant="outline" @click="setUploadFileModalOpen">
        <FolderDown class="size-4" /> Import</Button
      >

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline"> <FolderUp class="size-4" /> Export</Button>
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
import { ArrowLeft, FolderDown, FolderUp } from "@lucide/vue";
import Button from "~/shared/components/ui/button/button.vue";
import Input from "~/shared/components/ui/input/Input.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/shared/components/ui/dropdown-menu";
import { useQueryParams } from "~/shared/hooks/use-query-params";
import { ROUTE_PATHS } from "~/shared/constants/route-paths";

defineProps<{ handleExportJson: () => void; setUploadFileModalOpen: (value: boolean) => void }>();

const swotName = useQueryParams("name");
</script>
