import saas from "@/assets/work-saas.jpg";
import fashion from "@/assets/work-fashion.jpg";
import fintech from "@/assets/work-fintech.jpg";
import architecture from "@/assets/work-architecture.jpg";
import restaurant from "@/assets/work-restaurant.jpg";
import fitness from "@/assets/work-fitness.jpg";
import maisonLumiere from "@/assets/work-maison-lumiere.png";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  image: string;
  width: number;
  height: number;
  span?: "tall" | "wide" | "normal";
  blurb: string;
  website?: string;
};

export const projects: Project[] = [
  {
    slug: "maison-lumiere",
    title: "A fragrance house, bottled in light",
    client: "Maison Lumiere",
    category: "E-commerce · Fragrance",
    year: "2026",
    image: maisonLumiere,
    width: 3599,
    height: 1832,
    span: "wide",
    blurb: "E-commerce experience for a Parisian fragrance house composing rare scents.",
    website: "https://perfumed-pages-shop.vercel.app/",
  },
  {
    slug: "halcyon",
    title: "A dashboard you actually want to open",
    client: "Halcyon Analytics",
    category: "SaaS · Web App",
    year: "2025",
    image: saas,
    width: 1024,
    height: 1280,
    span: "tall",
    blurb: "Marketing site + product UI for a B2B analytics startup. +212% trial signups in 60 days.",
  },
  {
    slug: "atelier",
    title: "Editorial commerce for a quiet luxury label",
    client: "Atelier Nord",
    category: "E-commerce · Fashion",
    year: "2025",
    image: fashion,
    width: 1024,
    height: 768,
    span: "wide",
    blurb: "Headless Shopify build with editorial storytelling. 3.4× AOV on launch collection.",
  },
  {
    slug: "northcard",
    title: "Banking that feels like a product, not a portal",
    client: "Northcard",
    category: "Fintech · Mobile",
    year: "2024",
    image: fintech,
    width: 1024,
    height: 1024,
    blurb: "Brand, web, and app shell for a Series A challenger bank.",
  },
  {
    slug: "monolith",
    title: "Architecture, presented like architecture",
    client: "Monolith Studio",
    category: "Portfolio · Studio",
    year: "2024",
    image: architecture,
    width: 1024,
    height: 1400,
    span: "tall",
    blurb: "Editorial portfolio for an award-winning architecture practice.",
  },
  {
    slug: "lumen",
    title: "A restaurant brand that books itself out",
    client: "Lumen Kitchen",
    category: "Hospitality · Brand",
    year: "2025",
    image: restaurant,
    width: 1024,
    height: 768,
    span: "wide",
    blurb: "Brand system, site, and reservation flow. Fully booked within 2 weeks of launch.",
  },
  {
    slug: "frame",
    title: "Training plans, redesigned around the athlete",
    client: "Frame Fitness",
    category: "Mobile App · Wellness",
    year: "2024",
    image: fitness,
    width: 1024,
    height: 1100,
    blurb: "Onboarding, paywall, and dashboard for a top-50 health app.",
  },
];