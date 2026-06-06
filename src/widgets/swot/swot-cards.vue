<template>
  <TooltipProvider>
    <section class="swot-grid max-w-450 mx-auto w-full p-3">
      <div v-for="card in cards" :key="card.key" class="swot-card" :data-quadrant="card.key">
        <div class="swot-card__header">
          <div class="swot-card__title-row">
            <span class="swot-card__dot" aria-hidden="true" />
            <h3 class="swot-card__title">
              <span class="swot-card__letter">{{ card.key }}</span>
              <span class="swot-card__dash">-</span>
              <span class="swot-card__name">{{ card.name }}</span>
            </h3>
          </div>
          <div class="swot-card__header-right">
            <span class="swot-card__count" :aria-label="`${card.items.length} items`">
              {{ card.items.length }}
            </span>
            <Button
              v-if="card.items.length && !isReadonly"
              type="button"
              variant="ghost"
              size="sm"
              aria-label="Clear all items"
              @click="clearItems(card)"
            >
              Clear all
            </Button>
          </div>
        </div>

        <div class="swot-card__desc-row">
          <span class="swot-card__desc">{{ card.description }}</span>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button type="button" variant="ghost" size="icon-xs" aria-label="More information">
                <Info :size="14" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" class="swot-card__tooltip">
              {{ card.tooltip }}
            </TooltipContent>
          </Tooltip>
        </div>

        <TransitionGroup v-if="card.items.length" tag="div" name="chip" class="swot-card__items">
          <div v-for="(item, i) in card.items" :key="i" class="swot-card__item">
            <span>{{ item }}</span>
            <Button
              v-if="!isReadonly"
              size="icon-xs"
              variant="ghost"
              :aria-label="`Remove ${item}`"
              @click="removeItem(card, i)"
            >
              <X class="size-3" />
            </Button>
          </div>
        </TransitionGroup>
        <div v-else class="swot-card__empty">
          <Plus v-if="!isReadonly" class="size-4" />
          <span v-if="isReadonly">No {{ card.name.toLowerCase() }} yet.</span>
          <span v-else>No {{ card.name.toLowerCase() }} yet - add one below.</span>
        </div>

        <div v-if="!isReadonly" class="swot-card__footer">
          <div class="swot-card__input-wrapper">
            <Input
              v-model="card.input"
              placeholder="Add item..."
              class="swot-card__input"
              @keydown.enter="submitItem(card)"
            />
            <Button
              v-if="card.input.trim()"
              class="swot-card__send-btn"
              aria-label="Add item"
              size="icon-xs"
              variant="ghost"
              @click="submitItem(card)"
            >
              <SendHorizontal class="size-5 -rotate-45" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  </TooltipProvider>
</template>

<script setup lang="ts">
import { Info, Plus, SendHorizontal, X } from "@lucide/vue";
import { Input } from "~/shared/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/shared/components/ui/tooltip";
import Button from "~/shared/components/ui/button/button.vue";
import type { SwotCard } from "~/shared/types/swot/swot-cards.types";

defineProps<{ cards: SwotCard[]; isReadonly?: boolean }>();

function submitItem(card: SwotCard) {
  const trimmed = card.input.trim();
  if (!trimmed) return;
  card.items.push(trimmed);
  card.input = "";
}

function removeItem(card: SwotCard, index: number) {
  card.items.splice(index, 1);
}

function clearItems(card: SwotCard) {
  card.items = [];
}
</script>

<style lang="scss" scoped>
@use "~/shared/styles/abstracts/variables" as *;
@use "~/shared/styles/abstracts/animations" as *;

.swot-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $space-4;
  min-height: 100%;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.swot-card {
  display: flex;
  flex-direction: column;
  min-height: 320px;
  max-height: 550px;
  overflow-y: auto;
  background-color: var(--bg-base);
  border: 1px solid var(--border);
  border-left: 4px solid var(--q-accent);
  border-radius: $radius-xl;
  box-shadow: $shadow-sm;
  @include transition-base(box-shadow);

  &:hover {
    box-shadow: $shadow-md;
  }

  @media (max-width: 767px) {
    min-height: 260px;
  }

  // Per-quadrant accent + soft tint, consumed via --q-* tokens below
  &[data-quadrant="S"] {
    --q-accent: var(--success);
    --q-soft: var(--success-soft);
  }

  &[data-quadrant="W"] {
    --q-accent: var(--danger);
    --q-soft: var(--danger-soft);
  }

  &[data-quadrant="O"] {
    --q-accent: var(--accent);
    --q-soft: var(--accent-muted);
  }

  &[data-quadrant="T"] {
    --q-accent: var(--warning);
    --q-soft: var(--warning-soft);
  }

  // Header band
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $space-2;
    position: sticky;
    top: 0;
    z-index: $z-raised;
    padding: $space-3 $space-5;
    background-color: var(--q-soft);
    border-bottom: 1px solid var(--border);
  }

  &__title-row {
    display: flex;
    align-items: center;
    gap: $space-2;
  }

  &__dot {
    width: 8px;
    height: 8px;
    border-radius: $radius-full;
    background-color: var(--q-accent);
    flex-shrink: 0;
  }

  &__title {
    display: flex;
    align-items: center;
    gap: $space-1;
    margin: 0;
    font-size: $text-xs;
    font-weight: $font-bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1;
  }

  &__letter {
    color: var(--q-accent);
  }

  &__dash,
  &__name {
    color: var(--text-primary);
  }

  &__header-right {
    display: flex;
    align-items: center;
    gap: $space-2;
    flex-shrink: 0;
  }

  &__count {
    min-width: 1.5rem;
    padding: $space-1 $space-2;
    font-size: $text-xs;
    font-weight: $font-semibold;
    text-align: center;
    color: var(--text-muted);
    background-color: var(--bg-base);
    border-radius: $radius-full;
  }

  // Description + info icon
  &__desc-row {
    display: flex;
    align-items: center;
    gap: $space-1;
    padding: $space-3 $space-5 $space-2;
  }

  &__desc {
    font-size: $text-sm;
    color: var(--text-muted);
    line-height: $leading-snug;
  }

  // Items list
  &__items {
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
    flex: 1;
    align-content: flex-start;
    padding: 0 $space-5 $space-3;
  }

  &__item {
    display: inline-flex;
    align-items: center;
    gap: $space-1;
    width: fit-content;
    padding: $space-1 $space-1 $space-1 $space-3;
    font-size: $text-sm;
    line-height: $leading-normal;
    color: var(--text-secondary);
    background-color: var(--q-soft);
    border: 1px solid var(--border-strong);
    border-radius: $radius-lg;
    word-break: break-word;
    @include transition-base(background-color, border-color);

    &:hover {
      border-color: var(--q-accent);
    }
  }

  // Empty state
  &__empty {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: $space-2;
    padding: $space-4 $space-5;
    color: var(--text-hint);
    text-align: center;
    font-size: $text-sm;
  }

  // Footer input area
  &__footer {
    margin-top: auto;
    padding: $space-3 $space-5;
    border-top: 1px solid var(--border);
    position: sticky;
    bottom: 0;
    z-index: $z-raised;
    background-color: var(--bg-base);
  }

  &__input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: $radius-lg;
    @include transition-base(box-shadow);

    &:focus-within {
      box-shadow: 0 0 0 2px var(--accent-soft);
    }
  }

  &__input {
    padding-right: 2.25rem;
  }

  &__send-btn {
    position: absolute;
    right: $space-2;
    top: 50%;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: $space-1;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--accent);
    border-radius: $radius-sm;
    @include transition-base(color, background-color);

    &:hover {
      color: var(--accent-hover);
      background-color: var(--accent-muted);
    }
  }

  &__tooltip {
    max-width: 240px;
    white-space: normal;
    line-height: $leading-normal;
  }
}

// Item enter/leave motion — TransitionGroup name="chip"
.chip-enter-active,
.chip-leave-active {
  transition:
    opacity $duration-base $ease-out,
    transform $duration-base $ease-out;
}

.chip-enter-from,
.chip-leave-to {
  opacity: 0;
  transform: translateY(0.4rem) scale(0.96);
}
</style>
