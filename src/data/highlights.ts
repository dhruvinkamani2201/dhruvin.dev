import { Award, Building2, Clock3, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Highlight {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
}

export const highlights: Highlight[] = [
  {
    title: "ETL Automation",
    value: "2 Weeks → < 1 Minute",
    subtitle: "Disney Reporting Platform",
    icon: Clock3,
  },
  {
    title: "Enterprise Clients",
    value: "4",
    subtitle: "Government & Fortune 500",
    icon: Building2,
  },
  {
    title: "Cloud Platforms",
    value: "Azure • AWS • GCP",
    subtitle: "Production Experience",
    icon: Cloud,
  },
  {
    title: "Microsoft Certifications",
    value: "4",
    subtitle: "Azure Administrator, AI & Power Platform",
    icon: Award,
  },
];