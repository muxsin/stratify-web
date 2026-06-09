export const PAGE_NAMES = {
  HOME: "home",
  SWOT: "swot",
  DOCS: "docs",
  DOCS_SWOT: "docs-swot",
  DOCS_SWOT_BASICS: "docs-swot-basics",
} as const;

export type PageName = (typeof PAGE_NAMES)[keyof typeof PAGE_NAMES];
