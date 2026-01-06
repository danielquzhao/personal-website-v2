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
    id: "media-analysis-engine",
    title: "A2D Media Analysis Engine",
    description: "AI-powered video and image analysis pipeline",
    image: "/projects/mediaanalysisengine.png",
    date: "December 2024",
    technologies: ["Python", "PyTorch", "Next.js", "Google Gemini API", "Segment Anything Model"],
    links: {
      github: "https://github.com/danielquzhao/a2d-media-analysis-engine",
    },
    overview:
      "Can we automate media tagging? I built a pipeline that combines Gemini 2.5 Flash for scene understanding with Meta's SAM 3 for pixel-perfect object tracking, turning videos into structured JSON reports with temporal segments and bounding boxes.",
    content: [
      {
        type: "text",
        content: "Manual tagging is slow and boring. I wanted to build a machine that could watch a video and tell me not just what's in it, but where things are, when scenes change, and how it looks—automatically.",
      },
      {
        type: "heading",
        level: 2,
        text: "The Problem",
      },
      {
        type: "text",
        content: "Detecting hard cuts is easy, but soft cuts—dissolves, wipes, rapid pans—are notoriously difficult for traditional computer vision. I tried PySceneDetect and various heuristics, but they struggled with false positives. The solution? Throw the problem at an LLM. Gemini 2.5 Flash identifies semantic cuts that pixel-based methods miss.",
      },
      {
        type: "heading",
        level: 2,
        text: "Zero-Shot Object Tracking",
      },
      {
        type: "text",
        content: "Finding arbitrary objects without pre-training presents a classic dilemma: Speed, Effectiveness, or Zero-Shot—pick two. YOLO is fast but limited to pre-trained classes. Grounding DINO has great zero-shot capabilities but is too slow for video. SAM 3's release changed everything—it natively supports text prompts for video tracking. The challenge? It's heavy. I implemented a chunking strategy: split segments into 30-frame batches, run inference, stream results, clear VRAM, repeat.",
      },
      {
        type: "image",
        url: "/projects/mediaanalysisengine.png",
        alt: "Media Analysis Engine UI",
        caption: "Web visualizer with synced playback, real-time bounding boxes, and timeline exploration.",
      },
      {
        type: "heading",
        level: 2,
        text: "What I Learned",
      },
      {
        type: "text",
        content: "LLMs are surprisingly good shot detectors—Gemini identifies logical scene breaks that align with human intuition. Hybrid pipelines work: combining the broad knowledge of an LLM with the specialized vision of SAM creates something greater than the sum of its parts. I built a Next.js visualizer for debugging because JSON files don't help when you need to see bounding boxes moving in real-time.",
      },
    ],
  },
  {
    id: "sentinel",
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
    content: [
      {
        type: "text",
        content: "Sentinel is a robust security monitoring solution built to handle the demands of modern cloud-native environments. It provides real-time visibility into infrastructure health and security posture.",
      },
      {
        type: "heading",
        level: 2,
        text: "System Architecture",
      },
      {
        type: "text",
        content: "Built on a distributed microservices architecture, Sentinel leverages Go for its high-performance processing capabilities and Kubernetes for seamless scalability.",
      },
      {
        type: "image",
        url: "/projects/sentinel.png",
        alt: "Sentinel Dashboard",
        caption: "The Sentinel security dashboard providing real-time threat analysis.",
      },
      {
        type: "heading",
        level: 2,
        text: "Key Performance Metrics",
      },
      {
        type: "metrics",
        items: [
          { label: "Throughput", value: "50k req/s" },
          { label: "Latency", value: "< 10ms" },
          { label: "Uptime", value: "99.99%" },
        ],
      },
    ],
  },
  {
    id: "terra",
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
    id: "notation",
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
    id: "motionwave",
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
  {
    id: "chordcraft",
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
];

