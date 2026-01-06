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
    title: "Media Analysis Engine",
    description: "Automated media analysis tool",
    image: "/projects/mediaanalysisengine.png",
    date: "December 2024",
    technologies: ["Python", "C++", "FFmpeg"],
    links: {
      github: "https://github.com/danielquzhao",
    },
    overview:
      "A high-performance tool for analyzing media streams and files, providing detailed insights into encoding parameters and quality metrics.",
  },
  {
    id: "project-2",
    title: "Sentinel",
    description: "Real-time security monitoring",
    image: "/projects/sentinel.png",
    date: "November 2024",
    technologies: ["Go", "Kubernetes", "Prometheus"],
    links: {
      github: "https://github.com/danielquzhao",
    },
    overview:
      "A distributed monitoring system designed for high-availability environments, providing real-time alerts and security analysis.",
  },
  {
    id: "project-3",
    title: "Notation",
    description: "Interactive musical notation editor",
    image: "/projects/notation.png",
    date: "October 2024",
    technologies: ["TypeScript", "React", "WebAudio API"],
    links: {
      github: "https://github.com/danielquzhao",
    },
    overview:
      "A web-based musical notation editor that allows users to create, play back, and share sheet music in real-time.",
  },
  {
    id: "project-4",
    title: "ChordCraft",
    description: "Intelligent musical companion",
    image: "/projects/chordcraft.png",
    date: "August 2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/danielquzhao",
    },
    metrics: "Featured on Product Hunt",
    overview:
      "An AI-powered music platform that helps musicians discover chords, practice scales, and compose music with ease.",
  },
  {
    id: "project-5",
    title: "Terra",
    description: "Real-time environmental analytics",
    image: "/projects/terra.png",
    date: "October 2024",
    technologies: ["Next.js", "TypeScript", "Python", "TensorFlow"],
    links: {
      website: "https://example.com",
      github: "https://github.com/danielquzhao",
    },
    metrics: "10,000+ active users",
    overview:
      "A comprehensive analytics dashboard that leverages machine learning to provide real-time insights and predictions for environmental metrics.",
  },
  {
    id: "project-6",
    title: "MotionWave",
    description: "Dynamic gesture-based controller",
    image: "/projects/motionwave.png",
    date: "June 2024",
    technologies: ["C++", "Python", "OpenCV"],
    links: {
      github: "https://github.com/danielquzhao",
    },
    overview:
      "A computer vision system that translates human gestures into control signals for digital interfaces and robotics.",
  },
];

