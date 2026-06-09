import { PAGE_NAMES } from "./page-names";

export const DOMAIN = "https://stratify.uz";

export const ROUTE_PATHS = {
  [PAGE_NAMES.HOME]: { name: PAGE_NAMES.HOME, path: "/" },
  [PAGE_NAMES.SWOT]: { name: PAGE_NAMES.SWOT, path: "/swot" },
  [PAGE_NAMES.DOCS]: { name: PAGE_NAMES.DOCS, path: "/docs" },
  [PAGE_NAMES.DOCS_SWOT]: { name: PAGE_NAMES.DOCS_SWOT, path: "/docs/swot" },
  [PAGE_NAMES.DOCS_SWOT_BASICS]: { name: PAGE_NAMES.DOCS_SWOT_BASICS, path: "/docs/swot/basics" },
  [PAGE_NAMES.DOCS_SWOT_HOW_TO]: {
    name: PAGE_NAMES.DOCS_SWOT_HOW_TO,
    path: "/docs/swot/how-to-use",
  },
  [PAGE_NAMES.DOCS_SWOT_BEST_PRACTICES]: {
    name: PAGE_NAMES.DOCS_SWOT_BEST_PRACTICES,
    path: "/docs/swot/best-practices",
  },
} as const;
