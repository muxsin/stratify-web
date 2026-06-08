import { ROUTE_PATHS } from "~/shared/constants/route-paths";

export const DOCS_FRAMEWORKS = [
  {
    title: "SWOT Analysis",
    subtitle: "Strengths · Weaknesses · Opportunities · Threats",
    description:
      "A foundational framework for evaluating internal strengths and weaknesses alongside external opportunities and threats. Use it to assess a business, project, or idea from four angles at once.",
    path: ROUTE_PATHS.swot.path,
  },
] as const;
