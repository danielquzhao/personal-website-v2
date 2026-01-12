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
                            We wanted to create a musical instrument that anyone could play, regardless of musical background. MotionWave uses your webcam to track your hands: move your dominant hand up and down to control pitch, and use your other hand to adjust volume. A 4-part harmony is generated to accompany your melody in real time.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Technical Details</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            We built the project using Next.js, TypeScript, and Tailwind CSS. The app uses MediaPipe for accurate hand tracking. Then, using the location of your hands, the app controls sound output.
                        </p>

                        <p className="text-base text-muted-foreground leading-relaxed">
                            An AI-powered neural network generates real-time 4-part SATB (Soprano, Alto, Tenor, Bass) harmony. This runs in a Web Worker to keep the UI at 60 FPS. When you play a melody note, the worker receives the MIDI pitch and the trained neural network predicts appropriate soprano, alto, tenor, and bass notes that harmonize with your input.
                        </p>
                        <figure className="relative flex justify-center overflow-hidden border border-black/5 shadow-sm my-1 max-w-[85%] mx-auto">
                            <img
                                src="/projects/image-20260112-031146.png"
                                alt="MotionWave Landmark Visualization"
                                className="w-full h-auto max-h-[500px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </figure>

                        <p className="text-base text-muted-foreground leading-relaxed">
                            The model is served as WebAssembly for fast inference (harmonizermodule.wasm), with pre-trained weights loaded from harmonizerweights.bin. This helps keep latency under 20ms for real-time responsiveness.
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
