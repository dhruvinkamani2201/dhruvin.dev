export interface Experience {
  employer: string;
  client?: string;
  role: string;
  period: string;
  location: string;
  technologies: string[];
  achievements: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    employer: "Softsmart Consulting",
    client: "Department of Health Care Services",
    role: "Software Engineer",
    period: "Sep 2025 – Mar 2026",
    location: "Remote",
    technologies: [
      ".NET",
      "SQL Server",
      "Azure",
      "PowerShell",
      "SSIS",
    ],
    achievements: [
      "Developed enterprise healthcare software.",
      "Automated reporting workflows.",
      "Improved operational efficiency through backend enhancements.",
    ],
  },
  {
    employer: "Softsmart Consulting",
    client: "The Walt Disney Company",
    role: "Software Engineer",
    period: "Mar 2025 – Sep 2025",
    location: "Remote",
    technologies: [
      "C#",
      ".NET",
      "SQL",
      "Power BI",
    ],
    achievements: [
      "Reduced ETL reporting from two weeks to under one minute.",
      "Built automated data pipelines.",
      "Improved reporting accuracy.",
    ],
  },
  {
    employer: "Softsmart Consulting",
    client: "EMC Insurance",
    role: "Software Engineer",
    period: "Oct 2024 – Mar 2025",
    location: "Remote",
    technologies: [
      ".NET Core",
      "C#",
      "AWS Lambda",
      "REST API",
      "Guidewire",
    ],
    achievements: [
      "Developed REST APIs.",
      "Integrated Guidewire services.",
      "Built cloud-native insurance workflows.",
    ],
  },
  {
    employer: "Arizona Beverages",
    role: "Controls Engineering Intern",
    period: "May 2023 – Aug 2023",
    location: "New Jersey",
    technologies: [
      "Ignition",
      "PLC",
      "MES",
      "SQL",
    ],
    achievements: [
      "Designed HMI dashboards.",
      "Integrated MES reporting.",
      "Improved manufacturing visibility.",
    ],
  },
];