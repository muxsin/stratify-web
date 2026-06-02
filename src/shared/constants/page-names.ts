export const PAGE_NAMES = {
  HOME: "home",
  LOGIN: "login",
  REGISTER: "register",
  DASHBOARD: "dashboard",
} as const;

export type PageName = (typeof PAGE_NAMES)[keyof typeof PAGE_NAMES];
