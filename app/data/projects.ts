export type Variant = "tower" | "terrace" | "pavilion" | "court";

export type Project = {
  slug: string;
  name: string;
  suburb: string;
  city: string;
  type: string;
  status: "Selling" | "Under construction" | "Completed" | "Coming soon";
  year: string;
  variant: Variant;
  homes: number;
  storeys: number;
  summary: string;
  details: string;
};

// Placeholder content — replace with Farnsworth's real projects.
export const projects: Project[] = [
  {
    slug: "the-ledger",
    name: "The Ledger",
    suburb: "Richmond",
    city: "Melbourne",
    type: "Residential tower",
    status: "Selling",
    year: "2027",
    variant: "tower",
    homes: 142,
    storeys: 24,
    summary: "A slender tower of 142 residences above a restored brick warehouse.",
    details:
      "The Ledger keeps the original warehouse facade and lets a precise concrete tower rise behind it. Every residence is dual-aspect, with deep reveals, oversized glazing and a palette of stone, timber and black steel.",
  },
  {
    slug: "stepworks",
    name: "Stepworks",
    suburb: "Newtown",
    city: "Sydney",
    type: "Terraced apartments",
    status: "Under construction",
    year: "2026",
    variant: "terrace",
    homes: 64,
    storeys: 8,
    summary: "Stepped apartments with a planted terrace on every level.",
    details:
      "Stepworks folds down the slope of its site so that each home gets sky, a private terrace and morning sun. Communal gardens and a rooftop kitchen sit at the top of the stair.",
  },
  {
    slug: "the-pavilion",
    name: "The Pavilion",
    suburb: "Brighton",
    city: "Melbourne",
    type: "Boutique residences",
    status: "Completed",
    year: "2025",
    variant: "pavilion",
    homes: 18,
    storeys: 3,
    summary: "Eighteen low-rise homes arranged around a colonnaded garden.",
    details:
      "A quiet building of generous proportions. Long horizontal slabs, a rhythm of columns and a central garden court give The Pavilion the calm of a private estate.",
  },
  {
    slug: "common-ground",
    name: "Common Ground",
    suburb: "Fitzroy",
    city: "Melbourne",
    type: "Mixed-use precinct",
    status: "Coming soon",
    year: "2028",
    variant: "court",
    homes: 210,
    storeys: 12,
    summary: "Two towers, a public arcade and a new laneway for the neighbourhood.",
    details:
      "Common Ground gives something back to the street: a covered arcade, ground-floor makers' studios and a courtyard open to everyone, with 210 homes above.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
