import { projects } from "@/data/portfolio";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { notFound } from "next/navigation";

export default function ChordCraftPage() {
    const project = projects.find((p) => p.id === "chordcraft");

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            <ProjectHeader project={project} />

            <article className="max-w-4xl mx-auto px-6 py-0 md:px-12">
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <section className="space-y-4">
                        <h2 className="text-xl font-medium text-foreground">Overview</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            We built ChordCraft to allow users to capture their musical ideas before they disappear. The app features a virtual keyboard that responds to keypresses with sound, and instantly converts your playing into ABC notation that renders as sheet music. Everything you create is saved to MongoDB and tied to your account with user authentication.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Key Features</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            ChordCraft features an interactive virtual piano that maps 17 keys to your computer keyboard, including support for chords via a 200ms debounce system. As you play, the app provides real-time sound playback and visual highlights while instantly converting your input into ABC notation.
                        </p>
                        <figure className="relative flex justify-center overflow-hidden border border-black/5 shadow-sm my-1 max-w-[85%] mx-auto">
                            <img
                                src="/projects/image-20260112-033518.png"
                                alt="ChordCraft Dashboard Visualization"
                                className="w-full h-auto max-h-[500px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </figure>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            ABCJS is used to render dynamic sheet music as you play, with measures, clefs, and key signatures. The system also includes full CRUD operations for saving and organizing compositions, protected by user authentication.
                        </p>
                        <figure className="relative flex justify-center overflow-hidden border border-black/5 shadow-sm my-1 max-w-[85%] mx-auto">
                            <img
                                src="/projects/image-20260112-033602.png"
                                alt="ChordCraft Saved Compositions"
                                className="w-full h-auto max-h-[500px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </figure>

                        <h2 className="text-xl font-medium text-foreground">Backend Architecture</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The backend was built with Node.js and Express, utilizing MongoDB with Mongoose for flexible schema design. We implemented full CRUD functionality to manage musical compositions, where pieces are stored with their notation, titles, and descriptions. Each entry is linked to a specific user via userId reference to ensure data integrity and privacy.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Authentication is handled with JWT tokens validated through custom protect middleware. This middleware verifies tokens and attaches user information to incoming requests. The frontend communicates with this API via Axios, with comprehensive error handling and loading states managed through React state for a responsive user experience.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Frontend</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            We built the frontend with React and Vite. The keyboard component tracks active keys, held keys, and the current ABC notation string. The AuthContext provides global authentication state, making it easy to check if a user is logged in and protect routes. Toast notifications give feedback for save operations, errors, and authentication events.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Credits</h2>
                        <div className="text-base text-muted-foreground leading-relaxed">
                            This project was built for GeeseHacks 2025 by:
                            <ul className="list-disc list-inside marker:text-muted-foreground">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/robloxian/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline text-muted-foreground transition-colors"
                                    >
                                        Ivy Cho
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/henry-hung-360857197/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline text-muted-foreground transition-colors"
                                    >
                                        Henry Hung
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/ryan-xiaoo/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline text-muted-foreground transition-colors"
                                    >
                                        Ryan Xiao
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.danielquzhao.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline text-muted-foreground transition-colors"
                                    >
                                        Daniel Zhao
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </article>
        </main>
    );
}
