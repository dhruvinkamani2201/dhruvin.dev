export interface Project {
  featured: boolean;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  highlights?: string[];

  overview?: string;
  architecture?: string;
  challenges?: string;
  impact?: string;
}