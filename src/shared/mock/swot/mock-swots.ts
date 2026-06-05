import type { SwotCard } from "~/shared/types/swot/swot-cards.types";

function createSwotCards(
  strengths: string[],
  weaknesses: string[],
  opportunities: string[],
  threats: string[],
): SwotCard[] {
  return [
    {
      key: "S",
      name: "Strengths",
      description: "Internal positives",
      tooltip:
        "Strengths are internal factors that give your organization a competitive advantage - areas where you excel and consistently outperform competitors.",
      items: strengths,
      input: "",
    },
    {
      key: "W",
      name: "Weaknesses",
      description: "Internal negatives",
      tooltip:
        "Weaknesses are internal factors that put your organization at a disadvantage - areas where you fall short and need improvement to remain competitive.",
      items: weaknesses,
      input: "",
    },
    {
      key: "O",
      name: "Opportunities",
      description: "External positives",
      tooltip:
        "Opportunities are external factors your organization can exploit to its advantage - favorable trends, market gaps, or conditions you can capitalize on.",
      items: opportunities,
      input: "",
    },
    {
      key: "T",
      name: "Threats",
      description: "External negatives",
      tooltip:
        "Threats are external factors that could harm your organization - competitors, regulations, economic shifts, or other environmental challenges to watch.",
      items: threats,
      input: "",
    },
  ];
}

export const MOCK_SWOTS: { key: string; value: SwotCard[] }[] = [
  {
    key: "swotAA-Remote-Work",
    value: createSwotCards(
      [
        "No commute saves time and money",
        "Flexible schedule around personal life",
        "Access to a global talent pool",
        "Lower office and overhead costs",
        "Quieter environment for deep focus",
      ],
      [
        "Harder to build team culture",
        "Isolation and loneliness over time",
        "Blurred work-life boundaries",
        "Communication delays across time zones",
        "Slower onboarding for new hires",
      ],
      [
        "Hire talent regardless of location",
        "Expand into lower-cost living regions",
        "Reduce expensive real-estate footprint",
        "Growing remote-first tooling ecosystem",
      ],
      [
        "Return-to-office mandates by competitors",
        "Cybersecurity risks on home networks",
        "Time-zone fragmentation of teams",
        "Weaker employer brand visibility",
      ],
    ),
  },
  {
    key: "swotAA-Electric-Vehicles",
    value: createSwotCards(
      [
        "Zero tailpipe emissions",
        "Lower running and maintenance costs",
        "Instant torque and quiet ride",
        "Convenient overnight home charging",
        "Fewer moving parts to fail",
      ],
      [
        "High upfront purchase price",
        "Limited driving range anxiety",
        "Long charging times versus refueling",
        "Battery degradation over the years",
        "Sparse charging in rural areas",
      ],
      [
        "Government subsidies and tax breaks",
        "Rapidly expanding charging networks",
        "Falling battery production costs",
        "Growing consumer climate awareness",
      ],
      [
        "Volatile lithium and cobalt supply",
        "Grid strain from mass charging",
        "Strong legacy automaker competition",
        "Policy shifts rolling back subsidies",
      ],
    ),
  },
  {
    key: "swotAA-Learning-a-New-Language",
    value: createSwotCards(
      [
        "Boosts memory and cognition",
        "Opens new career opportunities",
        "Easier travel and cultural connection",
        "Deepens first-language understanding",
      ],
      [
        "Requires consistent daily practice",
        "Slow and often discouraging progress",
        "Easy to forget without regular use",
        "Pronunciation is hard for adults",
      ],
      [
        "Free apps and online resources",
        "Language-exchange communities worldwide",
        "Affordable remote tutoring marketplaces",
        "Immersion through streaming media",
      ],
      [
        "Motivation fades over time",
        "Real-time AI translation reduces need",
        "Few speaking partners available locally",
        "Busy schedules crowd out practice",
      ],
    ),
  },
  {
    key: "swotAA-Solar-Energy",
    value: createSwotCards(
      [
        "Renewable and abundant resource",
        "Low operating costs after install",
        "Reduces monthly electricity bills",
        "Silent and emission-free generation",
        "Scales from rooftop to solar farm",
      ],
      [
        "High initial installation cost",
        "Output depends on weather and season",
        "No generation at night",
        "Needs significant roof or land space",
        "Storage batteries remain expensive",
      ],
      [
        "Government rebates and incentives",
        "Falling panel manufacturing costs",
        "Growing home-battery adoption",
        "Rising grid electricity prices",
      ],
      [
        "Policy and subsidy uncertainty",
        "Cheap fossil-fuel competition",
        "Supply-chain bottlenecks for panels",
        "Slow grid-connection approvals",
      ],
    ),
  },
  {
    key: "swotAA-Starting-a-YouTube-Channel",
    value: createSwotCards(
      [
        "Near-zero startup cost",
        "Global audience reach",
        "Builds a lasting personal brand",
        "Passive ad-revenue potential",
        "Full creative freedom over content",
      ],
      [
        "Steep learning curve for editing",
        "Inconsistent and slow early growth",
        "Time-intensive content production",
        "Burnout from constant upload pressure",
      ],
      [
        "Brand sponsorship and deals",
        "Multiple revenue streams beyond ads",
        "Cross-posting to Shorts and TikTok",
        "Underserved niche communities",
      ],
      [
        "Algorithm changes cut reach overnight",
        "Intense competition among creators",
        "Copyright strikes and demonetization",
        "Audiences migrating to rival platforms",
      ],
    ),
  },
  {
    key: "swotAA-Artificial-Intelligence",
    value: createSwotCards(
      [
        "Automates repetitive tasks",
        "Processes data at massive scale",
        "Available around the clock",
        "Improves rapidly with more data",
        "Personalizes user experiences",
      ],
      [
        "Can hallucinate false information",
        "Opaque black-box decision making",
        "High compute and energy cost",
        "Reflects biases in training data",
      ],
      [
        "New products across every industry",
        "Productivity gains for workers",
        "Accessibility tools for disabilities",
        "Faster scientific research",
      ],
      [
        "Tightening regulation and compliance",
        "Public backlash over job displacement",
        "Misuse for deepfakes and fraud",
        "Data-privacy and copyright lawsuits",
      ],
    ),
  },
  {
    key: "swotAA-Space-Tourism",
    value: createSwotCards(
      [
        "Unique once-in-a-lifetime experience",
        "Strong high-net-worth demand",
        "Powerful media and marketing buzz",
        "Drives reusable-rocket innovation",
      ],
      [
        "Extremely high ticket prices",
        "Serious safety and health risks",
        "Tiny addressable market",
        "Massive capital requirements",
      ],
      [
        "Falling launch costs over time",
        "Future orbital hotels and stations",
        "Government and research contracts",
        "Maturing private spaceflight industry",
      ],
      [
        "A single accident halts demand",
        "Heavy regulatory scrutiny",
        "Criticism over carbon emissions",
        "Downturns cut luxury spending",
      ],
    ),
  },
  {
    key: "swotAA-Urban-Vertical-Farming",
    value: createSwotCards(
      [
        "Grows food close to cities",
        "Uses far less water",
        "Year-round weather-independent yield",
        "No pesticides needed indoors",
        "Tiny land footprint",
      ],
      [
        "High energy use for lighting",
        "Expensive to build and operate",
        "Limited mostly to leafy greens",
        "Requires specialised technical expertise",
      ],
      [
        "Rising demand for local produce",
        "Falling LED and automation costs",
        "Repurposing vacant urban buildings",
        "Interest in supply-chain resilience",
      ],
      [
        "Cheap conventional-farm competition",
        "Volatile electricity prices",
        "High-profile startup failures",
        "Slow consumer price acceptance",
      ],
    ),
  },
];
