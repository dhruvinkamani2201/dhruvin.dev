export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      "C#",
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "SQL",
    ],
  },
  {
    title: "Backend",
    skills: [
      ".NET",
      ".NET Core",
      "ASP.NET",
      "REST APIs",
      "Node.js",
      "NestJS",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Cloud",
    skills: [
      "Azure",
      "AWS",
      "Google Cloud",
      "Azure AI",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "TensorFlow",
      "OpenCV",
      "MediaPipe",
      "CNN",
      "LLMs",
      "RAG",
    ],
  },
  {
    title: "Databases",
    skills: [
      "SQL Server",
      "MySQL",
      "SQLite",
      "Oracle",
    ],
  },
];