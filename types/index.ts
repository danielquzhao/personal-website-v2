export interface Experience {
  company: string;
  role: string;
  icon?: string;
  color?: string;
  link?: string;
}

export type ContentBlock =
  | { type: 'text'; content: string }
  | { type: 'image'; url: string; caption?: string; alt?: string; width?: string }
  | { type: 'heading'; level: 2 | 3 | 4; text: string }
  | { type: 'code'; code: string; language: string; fileName?: string }
  | { type: 'metrics'; items: { label: string; value: string; icon?: string }[] };

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
    dorahacks?: string;
  };
  metrics?: string;
  overview?: string;
  content?: ContentBlock[];
}

