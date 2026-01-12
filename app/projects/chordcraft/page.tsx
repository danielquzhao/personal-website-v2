import { projects } from "@/data/portfolio";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { notFound } from "next/navigation";

export default function ChordCraftPage() {
    const project = projects.find((p) => p.id === "chordcraft");

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            <ProjectHeader project={project} />

            <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-0">
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <div className="space-y-0">
                        <h2 className="text-lg font-medium m-0 text-foreground">Overview</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            I built ChordCraft to solve a simple problem: capturing musical ideas before they disappear. The app features a virtual keyboard that responds to keypresses with sound, and instantly converts your playing into ABC notation that renders as professional sheet music. Everything you create is saved to MongoDB and tied to your account with JWT authentication.
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Key Features</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            ChordCraft offers an interactive virtual piano that responds to keyboard input with realistic sound playback. Real-time notation converts key presses into ABC notation instantly, with dynamic sheet music rendering as you play. The composition management system lets you save, title, and organize your musical creations with full CRUD operations. JWT-based authentication protects your work with secure password hashing via bcrypt.
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">The Keyboard Experience</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            The virtual keyboard maps 17 piano keys to your computer keyboard (A-P and semicolon). Each key is mapped to a specific note in ABC notation, with support for both white and black keys (sharps). When you press a key, the app plays the corresponding audio sample and highlights the key visually.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed m-0 pt-4">
                            I implemented a 200ms debounce system that groups simultaneous key presses into chords. Hold multiple keys and release them together to create a chord, which gets formatted as [C E G] in ABC notation. The system automatically adds bar lines after every 4 beats to create proper musical measures.
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Real-time Sheet Music Rendering</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            I used ABCJS to render sheet music dynamically. As you play, the notation updates in real-time with professional formatting: 4 measures per line, proper spacing, and time signatures. The ABC notation format is converted to a full musical staff with clefs, key signatures, and measure boxes.
                        </p>
                        <div className="my-8">
                            <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
                                <code className="language-javascript">
                                    {`const abcString = \`X:1\nM:4/4\nL:1/4\nK:C\n\${abcNotation}\`;

ABCJS.renderAbc("sheet-music", abcString, {
  responsive: 'resize',
  wrap: { preferredMeasuresPerLine: 4 },
  staffwidth: 800
});`}
                                </code>
                            </pre>
                        </div>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Backend Architecture</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            The backend is a RESTful API built with Node.js and Express. I used MongoDB with Mongoose for flexible schema design. The Music model stores notation, title, description, and timestamps, with each piece linked to a user via userId reference.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed m-0 pt-4">
                            Authentication is handled with JWT tokens. When users sign in, they receive a token that's validated on protected routes. The protect middleware verifies tokens and attaches user info to requests, ensuring users can only access and modify their own compositions.
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">CRUD Operations</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            ChordCraft implements full CRUD functionality for musical compositions. Users can create new pieces by playing on the keyboard and saving with a title and description. The saved compositions page displays all your work, sorted by creation date. You can edit titles and descriptions, or delete pieces you no longer want.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed m-0 pt-4">
                            All database operations include authorization checks to ensure users can only interact with their own data. The frontend uses Axios to communicate with the API, with error handling and loading states managed through React state.
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Frontend State Management</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            I built the frontend with React and Vite for fast hot module replacement. The keyboard component tracks active keys, held keys (to prevent key repeat), and the current ABC notation string. React Router handles navigation between the home page, keyboard, and saved compositions.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed m-0 pt-4">
                            The AuthContext provides global authentication state, making it easy to check if a user is logged in and protect routes. Toast notifications give immediate feedback for save operations, errors, and authentication events.
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Design Philosophy</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            I wanted ChordCraft to be the lightweight assistant for composers and students—fast, simple, and focused. No complex DAW features, just a quick way to draft melodies and turn them into readable sheet music. The interface is clean with a piano graphic and floating musical notes to set the mood.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
