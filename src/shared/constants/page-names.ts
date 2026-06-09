export const PAGE_NAMES = {
  HOME: "home",
  SWOT: "swot",
  DOCS: "docs",
  DOCS_SWOT: "docs-swot",
  DOCS_SWOT_BASICS: "docs-swot-basics",
  DOCS_SWOT_HOW_TO: "docs-swot-how-to",
  DOCS_SWOT_BEST_PRACTICES: "docs-swot-best-practices",
} as const;

export type PageName = (typeof PAGE_NAMES)[keyof typeof PAGE_NAMES];
