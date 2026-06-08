export const PAGE_NAMES = {
  HOME: "home",
  SWOT: "swot",
  DOCS: "docs",
} as const;

export type PageName = (typeof PAGE_NAMES)[keyof typeof PAGE_NAMES];
