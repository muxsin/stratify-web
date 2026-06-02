import { PAGE_NAMES } from "./page-names";

export const DOMAIN = "https://stratify.uz";

export const ROUTE_PATHS = {
  [PAGE_NAMES.HOME]: { name: PAGE_NAMES.HOME, path: "/" },
  [PAGE_NAMES.LOGIN]: { name: PAGE_NAMES.LOGIN, path: "/auth/login" },
  [PAGE_NAMES.REGISTER]: { name: PAGE_NAMES.REGISTER, path: "/auth/register" },
  [PAGE_NAMES.DASHBOARD]: { name: PAGE_NAMES.DASHBOARD, path: "/dashboard" },
} as const;
