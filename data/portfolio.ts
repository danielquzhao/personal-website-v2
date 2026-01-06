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
      "The A2D Media Analysis Engine is a CLI tool that decomposes media files into a structured JSON report containing temporal segments, object bounding boxes, and visual feature metrics. It combines multimodal LLMs with pixel-perfect object tracking to automate media tagging.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Background",
      },
      {
        type: "text",
        content: "We started with a simple but ambitious question: Can we automate our current media label tagging system? Manual tagging is slow and boring. We wanted to build a machine that could watch a video and tell us not just what is in it, but where it is, when scenes change, and how it looks.",
      },
      {
        type: "text",
        content: "The goal was to build a pipeline that combines two things: High-Level Semantic Understanding (using Google's Gemini 2.5 Flash) and Pixel-Perfect Object Tracking (using Meta's SAM 3).",
      },
      {
        type: "heading",
        level: 2,
        text: "Architecture",
      },
      {
        type: "text",
        content: "The system architecture is composed of five key components: Shot Detection, Object Detection, Semantic Analysis, Visual Features, and the Web Visualization Tool.",
      },
      {
        type: "image",
        url: "/projects/image-20251219-150246.png",
        alt: "System Architecture",
      },
      {
        type: "heading",
        level: 2,
        text: "Shot Detection",
      },
      {
        type: "image",
        url: "/projects/image-20251219-145902.png",
        alt: "Shot Detection Visualization",
      },
      {
        type: "text",
        content: "Early experiments with standard approaches like global luminance changes or PySceneDetect struggled with soft cuts. The most effective solution was using Gemini 2.5 Flash to identify frame indices where distinct visual cuts occur, catching semantic cuts that pixel-based methods might miss.",
      },
      {
        type: "heading",
        level: 2,
        text: "Object Detection",
      },
      {
        type: "image",
        url: "/projects/image-20251219-151839.png",
        alt: "Object Detection & Tracking",
      },
      {
        type: "text",
        content: "I used SAM 3 for zero-shot tracking. It natively supports text prompts (e.g., 'face', 'product', 'logo') to detect and track objects through time. To handle VRAM constraints, I implemented a 'chunking' strategy, processing segments in batches of 30 frames.",
      },
      {
        type: "heading",
        level: 2,
        text: "Semantic Analysis & Visual Features",
      },
      {
        type: "text",
        content: "I used Gemini to classify attributes like Camera Shot (Close up, Wide), Setting (Indoor, Office), and Ad Attributes. Low-level visual signals like color palette (K-Means), brightness, contrast, and motion energy were computed using OpenCV and Scikit-learn.",
      },
      {
        type: "image",
        url: "/projects/image-removebg-preview.png",
        alt: "Visual Features Overview",
      },
      {
        type: "heading",
        level: 2,
        text: "Web Visualization Tool",
      },
      {
        type: "image",
        url: "/projects/image-20251219-152804.png",
        alt: "Web Visualizer UI",
      },
      {
        type: "text",
        content: "JSON files are hard for humans to parse. I built a Next.js visualizer that serves as the 'player' for my data, syncing SVG bounding boxes with video playback and visualizing feature intensity on a scrubbable timeline.",
      },
      {
        type: "image",
        url: "/projects/image-20251219-153139.png",
        alt: "Timeline Exploration",
      },
      {
        type: "heading",
        level: 2,
        text: "The CLI",
      },
      {
        type: "image",
        url: "/projects/image.png",
        alt: "CLI Tool Output",
      },
      {
        type: "code",
        language: "bash",
        fileName: "Usage Examples",
        code: "python src/pipeline.py --input assets/video.mp4 --output output/report.json\n\npython src/pipeline.py \\\n  --input assets/video.mp4 \\\n  --prompt \"red car\" --prompt \"driver\" \\\n  --camera-shot-label \"drone shot\" \\\n  --setting-label \"highway\"",
      },
      {
        type: "heading",
        level: 2,
        text: "Results & Limitations",
      },
      {
        type: "text",
        content: "LLMs are surprisingly good shot detectors, often identifying logical scene breaks that align with human intuition. Hybrid pipelines combining broad LLM knowledge with specialized vision models like SAM work exceptionally well.",
      },
      {
        type: "text",
        content: "Future steps include investigating local LLM alternatives to reduce cloud costs, wrapping the orchestrator in a REST API, and optimizing the architecture for long-form video processing.",
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

