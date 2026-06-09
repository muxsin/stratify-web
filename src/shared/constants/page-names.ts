export const PAGE_NAMES = {
  HOME: "home",
  SWOT: "swot",
  DOCS: "docs",
  DOCS_SWOT: "docs-swot",
} as const;

export type PageName = (typeof PAGE_NAMES)[keyof typeof PAGE_NAMES];
