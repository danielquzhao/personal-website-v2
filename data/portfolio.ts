import { Experience, Project } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Cineplex Digital Media",
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
    title: "Terra",
    description: "Real-time analytics platform",
    image: "/projects/terra.png",
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
    title: "ChordCraft",
    description: "Track your workouts and progress",
    image: "/projects/chordcraft.png",
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
    title: "TrashMap",
    description: "Modern online shopping experience",
    image: "/projects/trashmap.png",
    date: "June 2024",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    links: {
      website: "https://example.com",
    },
    overview:
      "A full-featured e-commerce platform with seamless checkout experience and inventory management.",
  },
];

