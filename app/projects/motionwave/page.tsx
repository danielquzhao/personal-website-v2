import { projects } from "@/data/portfolio";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { notFound } from "next/navigation";

export default function MotionWavePage() {
    const project = projects.find((p) => p.id === "motionwave");

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
                            We wanted to create a musical instrument that anyone could play, regardless of musical background. MotionWave uses your webcam to track your hands: move your dominant hand up and down to control pitch, and use your other hand to adjust volume. A neural network generates 4-part vocal harmony to accompany your melody in real time.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Key Features</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The app uses MediaPipe's low-latency hand tracking for consistent gesture detection. An AI-powered neural network generates real-time 4-part SATB (Soprano, Alto, Tenor, Bass) harmony. For sound output, we built a custom Web Audio API-based vocal synthesis engine with formant filtering.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">AI Harmony Generation</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The harmony generation runs in a Web Worker to keep the UI at 60 FPS. When you play a melody note, the worker receives the MIDI pitch and the trained neural network predicts appropriate soprano, alto, tenor, and bass notes that harmonize with your input.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The model is served as WebAssembly for fast inference (harmonizermodule.wasm), with pre-trained weights loaded from harmonizerweights.bin. This keeps latency under 20ms for real-time responsiveness.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Hand Tracking Integration</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            I used MediaPipe Hands for robust, low-latency tracking. The app supports both left and right-handed users—you choose your dominant hand at startup. Your dominant hand's vertical position maps to pitch (higher = higher note), while your non-dominant hand controls volume.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Hand landmarks are visualized in real-time on the canvas, providing immediate visual feedback. The system maintains 60 FPS by offloading harmony generation to a separate thread.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Frontend</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Built with Next.js 15 and React 19, MotionWave uses the App Router for modern routing. TypeScript ensures type safety across the complex audio and ML logic. The harmonizer hook (useHarmonizer) manages the Web Worker lifecycle and message passing between the main thread and the harmony generation worker.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            I styled the app with Tailwind CSS 4 to create a vintage, premium aesthetic with a beige background and vinyl record animations. The rotating record effect uses CSS animations optimized for smooth 60 FPS performance.
                        </p>
                        <h2 className="text-xl font-medium text-foreground">Credits</h2>
                        <div className="text-base text-muted-foreground leading-relaxed">
                            This project was built for TechTO 2025 by:
                            <ul className="list-disc list-inside marker:text-muted-foreground">
                                <li>
                                    <a
                                        href="https://www.antran.dev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline text-muted-foreground transition-colors"
                                    >
                                        An Tran
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
