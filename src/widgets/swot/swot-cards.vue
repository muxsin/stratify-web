<template>
  <TooltipProvider>
    <section class="swot-grid max-w-[1800px] mx-auto w-full p-3">
      <div v-for="card in cards" :key="card.key" class="swot-card" :data-quadrant="card.key">
        <div class="swot-card__header">
          <div class="swot-card__title-row">
            <span class="swot-card__dot" aria-hidden="true" />
            <h3 class="swot-card__title">
              <span class="swot-card__letter">{{ card.key }}</span>
              <span class="swot-card__dash">—</span>
              <span class="swot-card__name">{{ card.name }}</span>
            </h3>
          </div>
          <div class="swot-card__header-right">
            <span class="swot-card__count" :aria-label="`${card.items.length} items`">
              {{ card.items.length }}
            </span>
            <button
              v-if="card.items.length"
              type="button"
              class="swot-card__clear-btn"
              aria-label="Clear all items"
              @click="clearItems(card)"
            >
              Clear all
            </button>
          </div>
        </div>

        <div class="swot-card__desc-row">
          <span class="swot-card__desc">{{ card.description }}</span>
          <Tooltip>
            <TooltipTrigger as-child>
              <button type="button" class="swot-card__info-btn" aria-label="More information">
                <Info :size="14" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" class="swot-card__tooltip">
              {{ card.tooltip }}
            </TooltipContent>
          </Tooltip>
        </div>

        <div v-if="card.items.length" class="swot-card__items">
          <div v-for="(item, i) in card.items" :key="i" class="swot-card__item">
            <span>{{ item }}</span>
            <button
              type="button"
              class="swot-card__remove-btn"
              :aria-label="`Remove ${item}`"
              @click="removeItem(card, i)"
            >
              <X :size="12" />
            </button>
          </div>
        </div>

        <div class="swot-card__footer">
          <div class="swot-card__input-wrapper">
            <Input
              v-model="card.input"
              placeholder="Add item..."
              class="swot-card__input"
              @keydown.enter="submitItem(card)"
            />
            <button
              v-if="card.input.trim()"
              type="button"
              class="swot-card__send-btn"
              aria-label="Add item"
              @click="submitItem(card)"
            >
              <SendHorizontal :size="15" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </TooltipProvider>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { Info, SendHorizontal, X } from "@lucide/vue";
import { Input } from "~/shared/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/shared/components/ui/tooltip";

interface SwotCard {
  key: "S" | "W" | "O" | "T";
  name: string;
  description: string;
  tooltip: string;
  items: string[];
  input: string;
}

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
.swot-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  min-height: 100%;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.swot-card {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-left-width: 4px;
  min-height: 320px;

  // Avoid double borders in the grid
  &:nth-child(1),
  &:nth-child(2) {
    border-bottom: none;
  }

  &:nth-child(odd) {
    border-right: none;
  }

  @media (max-width: 767px) {
    min-height: 260px;
    border-right: 1px solid var(--border) !important;
    border-left-width: 4px;

    &:not(:last-child) {
      border-bottom: none;
    }
  }

  // Quadrant accent colors
  &[data-quadrant="S"] {
    border-left-color: var(--success);

    .swot-card__dot {
      background-color: var(--success);
    }

    .swot-card__letter {
      color: var(--success);
    }
  }

  &[data-quadrant="W"] {
    border-left-color: var(--danger);

    .swot-card__dot {
      background-color: var(--danger);
    }

    .swot-card__letter {
      color: var(--danger);
    }
  }

  &[data-quadrant="O"] {
    border-left-color: var(--accent);

    .swot-card__dot {
      background-color: var(--accent);
    }

    .swot-card__letter {
      color: var(--accent);
    }
  }

  &[data-quadrant="T"] {
    border-left-color: var(--warning);

    .swot-card__dot {
      background-color: var(--warning);
    }

    .swot-card__letter {
      color: var(--warning);
    }
  }

  // Header row
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  &__title-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  &__title {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    margin: 0;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1;
  }

  &__dash,
  &__name {
    color: var(--text-primary);
  }

  &__header-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  &__count {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-hint);
  }

  &__clear-btn {
    padding: 0.125rem 0.5rem;
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--text-hint);
    background: none;
    border: 1px solid var(--border);
    border-radius: 0.375rem;
    cursor: pointer;
    letter-spacing: 0.02em;
    transition:
      color 0.15s ease,
      border-color 0.15s ease,
      background-color 0.15s ease;

    &:hover {
      color: var(--danger);
      border-color: var(--danger);
      background-color: var(--danger-soft);
    }
  }

  // Description + info icon
  &__desc-row {
    display: flex;
    align-items: center;
    gap: 0.375rem;
  }

  &__desc {
    font-size: 0.8125rem;
    color: var(--text-muted);
    line-height: 1.4;
  }

  &__info-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-hint);
    flex-shrink: 0;
    transition: color 0.15s ease;

    &:hover {
      color: var(--text-muted);
    }
  }

  // Items list
  &__items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    flex: 1;
    align-content: flex-start;
  }

  &__item {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    width: fit-content;
    padding: 0.3rem 0.5rem 0.3rem 0.75rem;
    font-size: 0.8125rem;
    line-height: 1.5;
    color: var(--text-secondary);
    background-color: var(--bg-elevated);
    border: 1px solid var(--border-strong);
    border-radius: 0.5rem;
    word-break: break-word;
    transition:
      background-color 0.15s ease,
      border-color 0.15s ease;

    &:hover {
      background-color: var(--bg-surface);
    }
  }

  &__remove-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 0.125rem;
    color: var(--text-hint);
    background: none;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition:
      color 0.15s ease,
      background-color 0.15s ease;

    &:hover {
      color: var(--danger);
      background-color: var(--danger-soft);
    }
  }

  // Footer input area
  &__footer {
    margin-top: auto;
    padding-top: 0.5rem;
    border-top: 1px solid var(--border);
  }

  &__input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__input {
    padding-right: 2.25rem;
  }

  &__send-btn {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--accent);
    border-radius: 0.25rem;
    transition:
      color 0.15s ease,
      background-color 0.15s ease;

    &:hover {
      color: var(--accent-hover);
      background-color: var(--accent-muted);
    }
  }

  &__tooltip {
    max-width: 240px;
    white-space: normal;
    line-height: 1.5;
  }
}
</style>
