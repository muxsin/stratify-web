export type SidebarLink = {
  type: "link";
  label: string;
  path: string;
};

export type SidebarSection = {
  type: "group";
  label: string;
  subItems: SidebarLink[];
};

export type SidebarItem = SidebarLink | SidebarSection;

export const DOCS_SIDEBAR_ITEMS: SidebarItem[] = [
  { type: "link", label: "Introduction", path: "/docs" },
  {
    type: "group",
    label: "SWOT",
    subItems: [
      { type: "link", label: "Intro", path: "/docs/swot" },
      { type: "link", label: "Basics", path: "/docs/swot/basics" },
      { type: "link", label: "How to Use", path: "/docs/swot/how-to-use" },
      { type: "link", label: "Best Practices", path: "/docs/swot/best-practices" },
      { type: "link", label: "Examples", path: "/docs/swot/examples" },
    ],
  },
];
