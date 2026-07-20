export interface Project {
  title: string;
  category: string;
  description: string;
  impact: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "APT – Your Personal Trainer",
    category: "AI Computer Vision",
    description:
      "Built an AI-powered personal trainer that uses pose estimation to count repetitions and provide exercise feedback in real time.",
    impact:
      "Enabled users to perform workouts with automatic form tracking and rep counting without wearable devices.",
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "TensorFlow",
    ],
    github: "https://github.com/dhruvinkamani2201",
  },

  {
    title: "Disney ETL Automation",
    category: "Enterprise Data Engineering",
    description:
      "Designed an automated ETL pipeline that transformed raw operational data into business-ready reports.",
    impact:
      "Reduced report generation time from two weeks to under one minute.",
    technologies: [
      ".NET",
      "SQL Server",
      "Power BI",
      "Azure",
    ],
  },

  {
    title: "Speech Emotion Recognition",
    category: "Machine Learning",
    description:
      "Developed a CNN model capable of identifying human emotions from speech audio.",
    impact:
      "Achieved 87.24% classification accuracy across multiple emotion classes.",
    technologies: [
      "Python",
      "TensorFlow",
      "CNN",
      "Librosa",
    ],
  },
];