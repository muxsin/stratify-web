import { PAGE_NAMES } from "./page-names";

export const DOMAIN = "https://stratify.uz";

export const ROUTE_PATHS = {
  [PAGE_NAMES.HOME]: { name: PAGE_NAMES.HOME, path: "/" },
  [PAGE_NAMES.SWOT]: { name: PAGE_NAMES.SWOT, path: "/swot" },
} as const;
