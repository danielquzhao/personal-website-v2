import { projects } from "@/data/portfolio";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { notFound } from "next/navigation";

export default function MotionWavePage() {
    const project = projects.find((p) => p.id === "motionwave");

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
                            I wanted to create a musical instrument that anyone could play, regardless of musical background. MotionWave uses your webcam to track your hands: move your dominant hand up and down to control pitch, and use your other hand to adjust volume. The magic happens when a neural network generates 4-part vocal harmony in real-time.
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Key Features</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            The app uses MediaPipe's low-latency hand tracking for consistent gesture detection. An AI-powered neural network generates real-time 4-part SATB (Soprano, Alto, Tenor, Bass) harmony. I built a custom Web Audio API-based vocal synthesis engine with formant filtering for rich, vocal-like sound. The interface features a rotating vinyl record aesthetic with real-time hand landmark visualization and wave-based feedback.
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Vocal Audio Engine</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            I designed a custom audio engine that synthesizes 4 simultaneous voices. Each voice uses two detuned oscillators (sawtooth + triangle) for richness, then passes through a bandpass filter tuned to different formant frequencies depending on voice type: 1200Hz for soprano, 900Hz for alto, 650Hz for tenor, and 400Hz for bass.
                        </p>
                        <div className="my-8">
                            <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
                                <code className="language-typescript">
                                    {`private setupVocalFilter(voiceType: string): void {
  let filterFreq: number;
  switch (voiceType) {
    case 'soprano': filterFreq = 1200; break;
    case 'alto': filterFreq = 900; break;
    case 'tenor': filterFreq = 650; break;
    case 'bass': filterFreq = 400; break;
  }
  this.filterNode.type = 'bandpass';
  this.filterNode.frequency.setValueAtTime(filterFreq, ...);
}`}
                                </code>
                            </pre>
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            Each voice gets an ADSR envelope with a quick 50ms attack and smooth 100ms release to avoid clicks. All four voices play simultaneously with equal volume, blending into a cohesive chord.
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">AI Harmony Generation</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            The harmony generation runs in a Web Worker to keep the UI at 60 FPS. When you play a melody note, the worker receives the MIDI pitch and the trained neural network predicts appropriate soprano, alto, tenor, and bass notes that harmonize with your input.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed m-0 pt-4">
                            The model is served as WebAssembly for fast inference (harmonizermodule.wasm), with pre-trained weights loaded from harmonizerweights.bin. This keeps latency under 20ms for real-time responsiveness.
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Hand Tracking Integration</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            I used MediaPipe Hands for robust, low-latency tracking. The app supports both left and right-handed users—you choose your dominant hand at startup. Your dominant hand's vertical position maps to pitch (higher = higher note), while your non-dominant hand controls volume.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed m-0 pt-4">
                            Hand landmarks are visualized in real-time on the canvas, providing immediate visual feedback. The system maintains 60 FPS by offloading harmony generation to a separate thread.
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Technical Architecture</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            Built with Next.js 15 and React 19, MotionWave uses the App Router for modern routing. TypeScript ensures type safety across the complex audio and ML logic. The harmonizer hook (useHarmonizer) manages the Web Worker lifecycle and message passing between the main thread and the harmony generation worker.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed m-0 pt-4">
                            I styled the app with Tailwind CSS 4 to create a vintage, premium aesthetic with a beige background and vinyl record animations. The rotating record effect uses CSS animations optimized for smooth 60 FPS performance.
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Design Goals</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            I wanted MotionWave to feel magical—like you're conducting an invisible choir. The combination of gesture control, AI harmony, and vocal synthesis creates an expressive instrument that's accessible to anyone with a webcam. No musical training required.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
