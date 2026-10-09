import { Experience, Project } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Faire",
    role: "Software Engineer Intern",
    icon: "/logos/faire.png",
    color: "#333333",
    link: "https://www.faire.com/",
  },
  {
    company: "Cineplex Digital Media",
    role: "Software Engineer Intern",
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
    id: "terra",
    title: "Terra",
    description: "AR Lego building game in real-world locations",
    image: "/projects/terra.png",
    date: "January 2025",
    technologies: ["Unity", "C#", "ARCore", "AR Foundation", "ProBuilder"],
    links: {
      github: "https://github.com/danielquzhao/terra",
      dorahacks: "https://dorahacks.io/buidl/21685",
    },
    overview:
      "Terra is an augmented reality game where your imagination shapes reality through creating buildings and landscapes in real-world locations. We made the outside world more fun by letting players place, rotate, and stack Lego-style blocks with intuitive touch controls.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Overview",
      },
      {
        type: "text",
        content: "We wanted to change the way people see the world by combining augmented reality with creative building mechanics. Our vision was simple: let anyone create structures tied to real-world locations, visible to anyone who visits that spot with the app.",
      },
      {
        type: "heading",
        level: 2,
        text: "Key Features",
      },
      {
        type: "text",
        content: "We built Terra to let users create buildings and landscapes tied to real-world GPS locations. We designed an intuitive interface where you simply pull out your phone to add blocks in 3D space. You can view your buildings from any angle and experience life-sized models seamlessly integrated into your environment.",
      },
      {
        type: "heading",
        level: 2,
        text: "Technical Implementation",
      },
      {
        type: "text",
        content: "We built Terra with Unity and C#, using ARCore and AR Foundation for robust AR functionality on Android devices. The core placement system we developed uses AR raycasting to detect planes and existing blocks, with a grid-snapping system (0.1m resolution) to ensure blocks align perfectly.",
      },
      {
        type: "code",
        language: "csharp",
        code: "Vector3 SnapToGrid(Vector3 position)\n{\n    float x = Mathf.Round(position.x / snapGridSize) * snapGridSize;\n    float y = Mathf.Round(position.y / snapGridSize) * snapGridSize;\n    float z = Mathf.Round(position.z / snapGridSize) * snapGridSize;\n    return new Vector3(x, y, z);\n}",
      },
      {
        type: "heading",
        level: 2,
        text: "Block Placement System",
      },
      {
        type: "text",
        content: "Our placement system intelligently handles two scenarios: placing blocks on AR-detected planes (ground, tables, walls) and stacking blocks on top of existing blocks. When you tap, the system first raycasts against existing blocks to enable stacking, then falls back to AR plane detection for new structures.",
      },
      {
        type: "text",
        content: "We also added block customization with three color options (blue, red, green), accessible through keyboard shortcuts or UI buttons. Each placed block is tracked in a list, enabling features like undo and clear-all functionality.",
      },
      {
        type: "heading",
        level: 2,
        text: "AR Foundation Integration",
      },
      {
        type: "text",
        content: "We leveraged Unity's AR Foundation framework with the ARCore XR Plugin for Android devices. The ARRaycastManager component handles plane detection and hit testing, allowing seamless interaction between virtual blocks and the physical environment.",
      },
      {
        type: "text",
        content: "We used Unity ProBuilder for creating the Lego-style block models, providing clean geometry optimized for mobile AR performance.",
      },
      {
        type: "heading",
        level: 2,
        text: "Design Goals",
      },
      {
        type: "text",
        content: "We designed Terra to be accessible and free–no paywalls, no complex tutorials. Our goal was to make AR building as intuitive as physical Lego: tap where you want a block, and it appears. The real-world location anchoring adds a social dimension, turning public spaces into collaborative canvases.",
      },
    ],
  },
  {
    id: "notation",
    title: "Notation",
    description: "PDF to LaTeX converter for mathematical documents",
    image: "/projects/notation.png",
    date: "January 2026",
    technologies: ["Ruby on Rails", "React", "TypeScript", "Gemini API", "KaTeX"],
    links: {
      github: "https://github.com/danielquzhao/notation",
      website: "https://mathtolatex.com/",
    },
    overview:
      "A modern web application for converting PDFs and images into LaTeX—the industry standard for mathematical and technical documents. Built with a Ruby on Rails backend and a React (Vite) frontend, powered by Google's Gemini API.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Overview",
      },
      {
        type: "text",
        content: "I built Notation to solve a common problem: converting scanned documents and images into editable LaTeX. Whether it's mathematical equations, technical papers, or complex formulas, Notation uses AI to intelligently extract content and format it as clean, compilable LaTeX code.",
      },
      {
        type: "heading",
        level: 2,
        text: "Key Features",
      },
      {
        type: "text",
        content: "Notation handles both PDF and image uploads, extracting content directly into LaTeX. It intelligently recognizes complex mathematical expressions and equations using Gemini 2.5 Flash. The app compiles LaTeX code into high-quality PDFs instantly using an integrated compilation service, all within a sleek, responsive UI with fluid micro-animations.",
      },
      {
        type: "heading",
        level: 2,
        text: "Architecture",
      },
      {
        type: "text",
        content: "The system is split into two main components: a Ruby on Rails API backend and a React frontend built with Vite. The backend handles file processing and LaTeX compilation, while the frontend provides the user interface with real-time rendering using KaTeX and react-pdf.",
      },
      {
        type: "heading",
        level: 2,
        text: "Content Extraction Pipeline",
      },
      {
        type: "text",
        content: "When a user uploads a file, the backend determines the MIME type and routes it to the appropriate extraction service: PdfToLatexService for PDFs or ImageToLatexService for images. Both services leverage Google's Gemini 2.5 Flash model for high-fidelity content extraction.",
      },
      {
        type: "code",
        language: "ruby",
        code: "def extract_content(file, mime_type)\n  case mime_type\n  when /pdf/\n    PdfToLatexService.new(file).convert\n  when /image/\n    ImageToLatexService.new(file).convert\n  else\n    raise \"Unsupported file type\"\n  end\nend",
      },
      {
        type: "text",
        content: "After extraction, the ContentFormattingService processes the raw output to ensure proper LaTeX formatting, handling edge cases like markdown code blocks and ensuring document structure is preserved.",
      },
      {
        type: "heading",
        level: 2,
        text: "LaTeX Compilation",
      },
      {
        type: "text",
        content: "The compilation endpoint takes LaTeX code and generates a PDF using the LatexCompilationService. I implemented real-time compilation so users can see their documents rendered immediately after extraction. The frontend automatically strips markdown code block markers before sending to the compiler.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frontend Experience",
      },
      {
        type: "text",
        content: "The React frontend features a dual-pane interface with two tabs: 'Rendered' and 'Raw Code'. Users can toggle between viewing the compiled PDF and inspecting the raw LaTeX source. I used react-pdf for PDF rendering with responsive sizing, and Framer Motion for smooth transitions between states.",
      },
      {
        type: "text",
        content: "The LaTeXViewer component automatically recompiles whenever the LaTeX content changes, providing instant visual feedback. Error handling shows clear messages when compilation fails, helping users debug their LaTeX syntax.",
      },
      {
        type: "heading",
        level: 2,
        text: "Deployment",
      },
      {
        type: "text",
        content: "I deployed Notation on Google Cloud Platform using Cloud Run for serverless scaling. The project includes a complete CI/CD pipeline with Google Cloud Build, automatically building and deploying both frontend and backend containers. Docker Compose is available for local development.",
      },
      {
        type: "heading",
        level: 2,
        text: "Technical Decisions",
      },
      {
        type: "text",
        content: "I chose Rails for the backend because it provides a solid foundation for API development with built-in conventions. Gemini 2.5 Flash offered the best balance of speed and accuracy for mathematical content extraction. For the frontend, Vite+React gave me fast hot module replacement during development, and KaTeX provided blazing-fast math rendering without the overhead of MathJax.",
      },
    ],
  },
  {
    id: "motionwave",
    title: "MotionWave",
    description: "Hand gesture-controlled musical instrument with AI harmony",
    image: "/projects/motionwave.png",
    date: "September 2025",
    technologies: ["Next.js", "TypeScript", "MediaPipe", "Web Audio API", "Web Workers"],
    links: {
      github: "https://github.com/danielquzhao/motionwave",
      website: "https://techto25.vercel.app/",
    },
    overview:
      "Control the rhythm with your hands. MotionWave is a gesture-based musical instrument that uses MediaPipe hand tracking for pitch control and a neural network for real-time 4-part SATB harmony generation.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Overview",
      },
      {
        type: "text",
        content: "I wanted to create a musical instrument that anyone could play, regardless of musical background. MotionWave uses your webcam to track your hands: move your dominant hand up and down to control pitch, and use your other hand to adjust volume. The magic happens when a neural network generates 4-part vocal harmony in real-time.",
      },
      {
        type: "heading",
        level: 2,
        text: "Key Features",
      },
      {
        type: "text",
        content: "The app uses MediaPipe's low-latency hand tracking for consistent gesture detection. An AI-powered neural network generates real-time 4-part SATB (Soprano, Alto, Tenor, Bass) harmony. I built a custom Web Audio API-based vocal synthesis engine with formant filtering for rich, vocal-like sound. The interface features a rotating vinyl record aesthetic with real-time hand landmark visualization and wave-based feedback.",
      },
      {
        type: "heading",
        level: 2,
        text: "Vocal Audio Engine",
      },
      {
        type: "text",
        content: "I designed a custom audio engine that synthesizes 4 simultaneous voices. Each voice uses two detuned oscillators (sawtooth + triangle) for richness, then passes through a bandpass filter tuned to different formant frequencies depending on voice type: 1200Hz for soprano, 900Hz for alto, 650Hz for tenor, and 400Hz for bass.",
      },
      {
        type: "code",
        language: "typescript",
        code: "private setupVocalFilter(voiceType: string): void {\n  let filterFreq: number;\n  switch (voiceType) {\n    case 'soprano': filterFreq = 1200; break;\n    case 'alto': filterFreq = 900; break;\n    case 'tenor': filterFreq = 650; break;\n    case 'bass': filterFreq = 400; break;\n  }\n  this.filterNode.type = 'bandpass';\n  this.filterNode.frequency.setValueAtTime(filterFreq, ...);\n}",
      },
      {
        type: "text",
        content: "Each voice gets an ADSR envelope with a quick 50ms attack and smooth 100ms release to avoid clicks. All four voices play simultaneously with equal volume, blending into a cohesive chord.",
      },
      {
        type: "heading",
        level: 2,
        text: "AI Harmony Generation",
      },
      {
        type: "text",
        content: "The harmony generation runs in a Web Worker to keep the UI at 60 FPS. When you play a melody note, the worker receives the MIDI pitch and the trained neural network predicts appropriate soprano, alto, tenor, and bass notes that harmonize with your input.",
      },
      {
        type: "text",
        content: "The model is served as WebAssembly for fast inference (harmonizermodule.wasm), with pre-trained weights loaded from harmonizerweights.bin. This keeps latency under 20ms for real-time responsiveness.",
      },
      {
        type: "heading",
        level: 2,
        text: "Hand Tracking Integration",
      },
      {
        type: "text",
        content: "I used MediaPipe Hands for robust, low-latency tracking. The app supports both left and right-handed users—you choose your dominant hand at startup. Your dominant hand's vertical position maps to pitch (higher = higher note), while your non-dominant hand controls volume.",
      },
      {
        type: "text",
        content: "Hand landmarks are visualized in real-time on the canvas, providing immediate visual feedback. The system maintains 60 FPS by offloading harmony generation to a separate thread.",
      },
      {
        type: "heading",
        level: 2,
        text: "Technical Architecture",
      },
      {
        type: "text",
        content: "Built with Next.js 15 and React 19, MotionWave uses the App Router for modern routing. TypeScript ensures type safety across the complex audio and ML logic. The harmonizer hook (useHarmonizer) manages the Web Worker lifecycle and message passing between the main thread and the harmony generation worker.",
      },
      {
        type: "text",
        content: "I styled the app with Tailwind CSS 4 to create a vintage, premium aesthetic with a beige background and vinyl record animations. The rotating record effect uses CSS animations optimized for smooth 60 FPS performance.",
      },
      {
        type: "heading",
        level: 2,
        text: "Design Goals",
      },
      {
        type: "text",
        content: "I wanted MotionWave to feel magical—like you're conducting an invisible choir. The combination of gesture control, AI harmony, and vocal synthesis creates an expressive instrument that's accessible to anyone with a webcam. No musical training required.",
      },
    ],
  },
  {
    id: "chordcraft",
    title: "ChordCraft",
    description: "Real-time piano to sheet music converter",
    image: "/projects/chordcraft.png",
    date: "January 2025",
    technologies: ["React", "Node.js", "Express", "MongoDB", "ABCJS"],
    links: {
      github: "https://github.com/danielquzhao/chordcraft",
      website: "https://chordcraft.onrender.com/",
    },
    overview:
      "A modern CRUD web application that transforms piano performances into beautiful sheet music in real-time. Play notes on the virtual keyboard and watch as they instantly convert to professional notation.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Overview",
      },
      {
        type: "text",
        content: "I built ChordCraft to solve a simple problem: capturing musical ideas before they disappear. The app features a virtual keyboard that responds to keypresses with sound, and instantly converts your playing into ABC notation that renders as professional sheet music. Everything you create is saved to MongoDB and tied to your account with JWT authentication.",
      },
      {
        type: "heading",
        level: 2,
        text: "Key Features",
      },
      {
        type: "text",
        content: "ChordCraft offers an interactive virtual piano that responds to keyboard input with realistic sound playback. Real-time notation converts key presses into ABC notation instantly, with dynamic sheet music rendering as you play. The composition management system lets you save, title, and organize your musical creations with full CRUD operations. JWT-based authentication protects your work with secure password hashing via bcrypt.",
      },
      {
        type: "heading",
        level: 2,
        text: "The Keyboard Experience",
      },
      {
        type: "text",
        content: "The virtual keyboard maps 17 piano keys to your computer keyboard (A-P and semicolon). Each key is mapped to a specific note in ABC notation, with support for both white and black keys (sharps). When you press a key, the app plays the corresponding audio sample and highlights the key visually.",
      },
      {
        type: "text",
        content: "I implemented a 200ms debounce system that groups simultaneous key presses into chords. Hold multiple keys and release them together to create a chord, which gets formatted as [C E G] in ABC notation. The system automatically adds bar lines after every 4 beats to create proper musical measures.",
      },
      {
        type: "heading",
        level: 2,
        text: "Real-time Sheet Music Rendering",
      },
      {
        type: "text",
        content: "I used ABCJS to render sheet music dynamically. As you play, the notation updates in real-time with professional formatting: 4 measures per line, proper spacing, and time signatures. The ABC notation format is converted to a full musical staff with clefs, key signatures, and measure boxes.",
      },
      {
        type: "code",
        language: "javascript",
        code: "const abcString = `X:1\nM:4/4\nL:1/4\nK:C\n${abcNotation}`;\n\nABCJS.renderAbc(\"sheet-music\", abcString, {\n  responsive: 'resize',\n  wrap: { preferredMeasuresPerLine: 4 },\n  staffwidth: 800\n});",
      },
      {
        type: "heading",
        level: 2,
        text: "Backend Architecture",
      },
      {
        type: "text",
        content: "The backend is a RESTful API built with Node.js and Express. I used MongoDB with Mongoose for flexible schema design. The Music model stores notation, title, description, and timestamps, with each piece linked to a user via userId reference.",
      },
      {
        type: "text",
        content: "Authentication is handled with JWT tokens. When users sign in, they receive a token that's validated on protected routes. The protect middleware verifies tokens and attaches user info to requests, ensuring users can only access and modify their own compositions.",
      },
      {
        type: "heading",
        level: 2,
        text: "CRUD Operations",
      },
      {
        type: "text",
        content: "ChordCraft implements full CRUD functionality for musical compositions. Users can create new pieces by playing on the keyboard and saving with a title and description. The saved compositions page displays all your work, sorted by creation date. You can edit titles and descriptions, or delete pieces you no longer want.",
      },
      {
        type: "text",
        content: "All database operations include authorization checks to ensure users can only interact with their own data. The frontend uses Axios to communicate with the API, with error handling and loading states managed through React state.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frontend State Management",
      },
      {
        type: "text",
        content: "I built the frontend with React and Vite for fast hot module replacement. The keyboard component tracks active keys, held keys (to prevent key repeat), and the current ABC notation string. React Router handles navigation between the home page, keyboard, and saved compositions.",
      },
      {
        type: "text",
        content: "The AuthContext provides global authentication state, making it easy to check if a user is logged in and protect routes. Toast notifications give immediate feedback for save operations, errors, and authentication events.",
      },
      {
        type: "heading",
        level: 2,
        text: "Design Philosophy",
      },
      {
        type: "text",
        content: "I wanted ChordCraft to be the lightweight assistant for composers and students—fast, simple, and focused. No complex DAW features, just a quick way to draft melodies and turn them into readable sheet music. The interface is clean with a piano graphic and floating musical notes to set the mood.",
      },
    ],
  },
];

