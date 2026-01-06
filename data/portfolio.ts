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
    date: "December 2025",
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
        content: "During my internship at Cineplex Digital Media, we had a simple but ambitious question: Can we automate our current media label tagging system? Manual tagging is slow and boring. We wanted to build a machine that could watch a video and tell us not just what is in it, but where it is, when scenes change, and how it looks.",
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
        width: "30%",
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
        width: "50%",
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
        type: "heading",
        level: 2,
        text: "Web Visualization Tool",
      },
      {
        type: "image",
        url: "/projects/image-20251219-152804.png",
        alt: "Web Visualizer UI",
        width: "80%",
      },
      {
        type: "text",
        content: "JSON files are hard for humans to parse. I built a Next.js visualizer that serves as the 'player' for my data, syncing SVG bounding boxes with video playback and visualizing feature intensity on a scrubbable timeline.",
      },
      {
        type: "image",
        url: "/projects/image-20251219-153139.png",
        alt: "Timeline Exploration",
        width: "80%",
      },
      {
        type: "heading",
        level: 2,
        text: "The CLI",
      },
      {
        type: "image",
        url: "/projects/image-20251219-153626.png",
        alt: "CLI Tool Output",
        width: "80%",
      },
      {
        type: "text",
        content: "The tool was built to be flexible for developers. The main entry point is src/pipeline.py, which uses argparse to handle configuration.",
      },
      {
        type: "code",
        language: "bash",
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
    description: "Privacy-first multi-person tracking using LiDAR",
    image: "/projects/sentinel.png",
    date: "October 2025",
    technologies: ["Python", "Scikit-learn", "Next.js", "Flask", "Socket.IO"],
    links: {
      github: "https://github.com/danielquzhao/sentinel",
    },
    overview:
      "Sentinel is a real-time multi-person tracking system that uses a cheap laser scanner instead of cameras. It detects, counts, and tracks multiple people in proximity without any of the privacy concerns or lighting dependencies that come with video.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Background",
      },
      {
        type: "text",
        content: "One of the most important systems in digital out of home signs is the ability to count the number of people who were exposed. Currently, we use cameras at Cineplex Digital Media, however these have many privacy concerns which lead us to use third party services (Quividi) as a legal moat. Being able to count heads without cameras could allow us to not rely on these services.",
      },
      {
        type: "text",
        content: "LiDAR is an interesting technology because it does not detect identifying features, hence it is far better for privacy concerns. To explore this technology and its viability for people detection, I got my hands on an RPLiDAR A1 and used it to build Sentinel.",
      },
      {
        type: "heading",
        level: 2,
        text: "Architecture",
      },
      {
        type: "text",
        content: "Sentinel has three main parts: the LiDAR sensing perception pipeline, the ML training pipeline, and the web tool for visualization and control. It's a mixed Python/TypeScript workspace: the detection code and model live in Python, and the UI lives in a Next.js app.",
      },
      {
        type: "heading",
        level: 2,
        text: "Hardware Setup",
      },
      {
        type: "text",
        content: "The RPLidar A1 is a cheap 360° laser that connects via USB. It spins 5-10 times per second and measures distances at different angles. The laser can see up to 12 meters away, but the range is limited to 4 meters to focus on nearby people and reduce wall reflections.",
      },
      {
        type: "heading",
        level: 2,
        text: "Perception Pipeline",
      },
      {
        type: "image",
        url: "/projects/image-20251218-185416.png",
        alt: "Perception Pipeline Architecture",
        width: "80%",
      },
      {
        type: "text",
        content: "The perception pipeline runs continuously 5-10 times per second. The PersonDetector class wraps the entire pipeline and maintains its state between frames. Each laser scan is converted from polar coordinates to cartesian, then DBSCAN clusters nearby points into objects.",
      },
      {
        type: "heading",
        level: 2,
        text: "Feature Extraction & Classification",
      },
      {
        type: "text",
        content: "26 geometric features are extracted from each cluster including size (point count, width, height), shape (aspect ratio, elongation), density, and boundary properties. A Random Forest classifier trained on these features distinguishes people from furniture with ~90% accuracy.",
      },
      {
        type: "text",
        content: "Random Forest was chosen over neural networks because it's fast on CPU (sub-millisecond inference), handles the feature set well without much tuning, and provides built-in feature importances for debugging.",
      },
      {
        type: "heading",
        level: 2,
        text: "Tracking",
      },
      {
        type: "text",
        content: "Once people are detected, the tracker maintains consistent IDs across frames. It matches new detections to people from the previous frame, marks unmatched people as missing, and removes them after 5 frames (~1 second). New unmatched detections receive new IDs.",
      },
      {
        type: "heading",
        level: 2,
        text: "Dashboard",
      },
      {
        type: "image",
        url: "/projects/image-20251218-184906.png",
        alt: "Sentinel Dashboard",
        width: "80%",
      },
      {
        type: "text",
        content: "The web dashboard provides real-time visualization and debugging. It's built with Flask + Socket.IO on the backend and Next.js on the frontend. The frontend renders a live point cloud visualization with color-coded clusters (green = person, red = not-person) and per-person info cards showing ID, distance, confidence, and point count.",
      },
      {
        type: "image",
        url: "/projects/image-20251218-184952.png",
        alt: "Live tracking visualization",
        width: "80%",
      },
      {
        type: "heading",
        level: 2,
        text: "Results and Takeaways",
      },
      {
        type: "text",
        content: "Geometric features work surprisingly well. Rather than using end-to-end neural networks, 26 carefully designed geometric features successfully distinguish people from furniture with ~90% accuracy. The full pipeline runs at 50-100ms per frame on a laptop CPU, with clustering (DBSCAN) being the bottleneck at ~20ms.",
      },
      {
        type: "heading",
        level: 2,
        text: "Limitations and Next Steps",
      },
      {
        type: "text",
        content: "The system struggles with people partially blocked by furniture, very distant people (low point density), and similar-looking objects like backpacks on chairs. This is a natural limitation of 2D lidar. Future work may experiment with 3D lidar systems and training across frames to detect movement patterns rather than just frame-by-frame classification.",
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

