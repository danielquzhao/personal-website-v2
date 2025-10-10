import { Experience, Project } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Cineplex",
    role: "Software Developer",
    icon: "/logos/cineplex.png",
    color: "#004ccd",
    link: "https://www.cdmexperiences.com/",
  },
  {
    company: "Waterloo Aerial Robotics Group",
    role: "Software Developer",
    icon: "/logos/warg.png",
    color: "#E5E7EB",
    link: "https://www.uwarg.com/",
  },
  {
    company: "Waterloo Reality Labs",
    role: "Software Developer",
    icon: "/logos/wrl.png",
    color: "#F5F2E8",
    link: "https://uwrealitylabs.com/",
  },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "AI-Powered Dashboard",
    description: "Real-time analytics platform",
    image: "/projects/project1.jpg",
    date: "October 2024",
    technologies: ["Next.js", "TypeScript", "Python", "TensorFlow"],
    links: {
      website: "https://example.com",
      github: "https://github.com/danielquzhao",
    },
    metrics: "10,000+ active users",
    overview:
      "A comprehensive analytics dashboard that leverages machine learning to provide real-time insights and predictions for business metrics.",
  },
  {
    id: "project-2",
    title: "Mobile Fitness App",
    description: "Track your workouts and progress",
    image: "/projects/project2.jpg",
    date: "August 2024",
    technologies: ["React Native", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/danielquzhao",
    },
    metrics: "Featured on App Store",
    overview:
      "A mobile application that helps users track their fitness journey with personalized workout plans and progress tracking.",
  },
  {
    id: "project-3",
    title: "E-commerce Platform",
    description: "Modern online shopping experience",
    image: "/projects/project3.jpg",
    date: "June 2024",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    links: {
      website: "https://example.com",
    },
    overview:
      "A full-featured e-commerce platform with seamless checkout experience and inventory management.",
  },
  {
    id: "project-4",
    title: "Design System",
    description: "Component library for rapid development",
    image: "/projects/project4.jpg",
    date: "April 2024",
    technologies: ["React", "Storybook", "Tailwind CSS"],
    links: {
      github: "https://github.com/danielquzhao",
    },
    overview:
      "A comprehensive design system and component library used across multiple products.",
  },
  {
    id: "project-5",
    title: "Social Media Analytics",
    description: "Track engagement and growth",
    image: "/projects/project5.jpg",
    date: "March 2024",
    technologies: ["Vue.js", "GraphQL", "Redis"],
    overview:
      "Analytics tool for social media managers to track performance across multiple platforms.",
  },
  {
    id: "project-6",
    title: "Developer Tools",
    description: "CLI for productivity enhancement",
    image: "/projects/project6.jpg",
    date: "January 2024",
    technologies: ["Go", "Docker", "Kubernetes"],
    links: {
      github: "https://github.com/danielquzhao",
    },
    metrics: "500+ GitHub stars",
    overview:
      "A suite of command-line tools designed to improve developer productivity and streamline workflows.",
  },
];

