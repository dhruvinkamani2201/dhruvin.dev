export interface CredentialSection {
  title: string;
  items: {
    title: string;
    subtitle: string;
    year?: string;
  }[];
}

export const credentialSections: CredentialSection[] = [
  {
    title: "Certifications",
    items: [
      {
        title: "Microsoft Certified: Azure Administrator Associate",
        subtitle: "Microsoft",
      },
      {
        title: "Microsoft Certified: Azure AI Fundamentals",
        subtitle: "Microsoft",
      },
      {
        title: "Microsoft Certified: Power Platform Fundamentals",
        subtitle: "Microsoft",
      },
      {
        title: "Scrum Fundamentals Certified",
        subtitle: "SCRUMstudy",
      },
    ],
  },

  {
    title: "Education",
    items: [
      {
        title: "M.S. Computer Science",
        subtitle: "University of Central Florida",
        year: "2022 – 2024",
      },
      {
        title: "B.E. Computer Science",
        subtitle: "Mumbai University",
        year: "2018 – 2022",
      },
    ],
  },
];