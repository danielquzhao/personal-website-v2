export interface Experience {
  company: string;
  role: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  technologies: string[];
  links?: {
    website?: string;
    github?: string;
  };
  metrics?: string;
  overview?: string;
}

