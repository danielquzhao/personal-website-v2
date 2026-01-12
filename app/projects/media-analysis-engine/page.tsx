import { projects } from "@/data/portfolio";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { notFound } from "next/navigation";

export default function MediaAnalysisEnginePage() {
    const project = projects.find((p) => p.id === "media-analysis-engine");

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            <ProjectHeader project={project} />

            <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-0">
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <div className="space-y-0">
                        <h2 className="text-lg font-medium m-0 text-foreground">Background</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            During my internship at Cineplex Digital Media, we had a simple but ambitious question: Can we automate our current media label tagging system? Manual tagging is slow and boring. We wanted to build a machine that could watch a video and tell us not just what is in it, but where it is, when scenes change, and how it looks.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            The goal was to build a pipeline that combines two things: High-Level Semantic Understanding (using Google's Gemini 2.5 Flash) and Pixel-Perfect Object Tracking (using Meta's SAM 3).
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Architecture</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            The system architecture is composed of five key components: Shot Detection, Object Detection, Semantic Analysis, Visual Features, and the Web Visualization Tool.
                        </p>
                        <figure className="my-0 flex flex-col items-center py-6">
                            <div className="relative flex justify-center overflow-hidden rounded-2xl border border-black/5 shadow-sm">
                                <img
                                    src="/projects/image-20251219-150246.png"
                                    alt="System Architecture"
                                    className="w-full h-auto max-h-[650px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                        </figure>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Shot Detection</h2>
                        <figure className="my-0 flex flex-col items-center py-6">
                            <div className="relative flex justify-center overflow-hidden rounded-2xl border border-black/5 shadow-sm" style={{ maxWidth: "30%" }}>
                                <img
                                    src="/projects/image-20251219-145902.png"
                                    alt="Shot Detection Visualization"
                                    className="w-full h-auto max-h-[650px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                            <figcaption className="mt-2 text-center text-sm text-muted-foreground italic m-0">
                                Shot Detection Visualization
                            </figcaption>
                        </figure>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            Early experiments with standard approaches like global luminance changes or PySceneDetect struggled with soft cuts. The most effective solution was using Gemini 2.5 Flash to identify frame indices where distinct visual cuts occur, catching semantic cuts that pixel-based methods might miss.
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Object Detection</h2>
                        <figure className="my-0 flex flex-col items-center py-6">
                            <div className="relative flex justify-center overflow-hidden rounded-2xl border border-black/5 shadow-sm" style={{ maxWidth: "50%" }}>
                                <img
                                    src="/projects/image-20251219-151839.png"
                                    alt="Object Detection & Tracking"
                                    className="w-full h-auto max-h-[650px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                            <figcaption className="mt-2 text-center text-sm text-muted-foreground italic m-0">
                                Object Detection & Tracking
                            </figcaption>
                        </figure>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            I used SAM 3 for zero-shot tracking. It natively supports text prompts (e.g., 'face', 'product', 'logo') to detect and track objects through time. To handle VRAM constraints, I implemented a 'chunking' strategy, processing segments in batches of 30 frames.
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Semantic Analysis & Visual Features</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            I used Gemini to classify attributes like Camera Shot (Close up, Wide), Setting (Indoor, Office), and Ad Attributes. Low-level visual signals like color palette (K-Means), brightness, contrast, and motion energy were computed using OpenCV and Scikit-learn.
                        </p>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Web Visualization Tool</h2>
                        <figure className="my-0 flex flex-col items-center py-6">
                            <div className="relative flex justify-center overflow-hidden rounded-2xl border border-black/5 shadow-sm" style={{ maxWidth: "80%" }}>
                                <img
                                    src="/projects/image-20251219-152804.png"
                                    alt="Web Visualizer UI"
                                    className="w-full h-auto max-h-[650px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                            <figcaption className="mt-2 text-center text-sm text-muted-foreground italic m-0">
                                Web Visualizer UI
                            </figcaption>
                        </figure>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            JSON files are hard for humans to parse. I built a Next.js visualizer that serves as the 'player' for my data, syncing SVG bounding boxes with video playback and visualizing feature intensity on a scrubbable timeline.
                        </p>
                        <figure className="my-0 flex flex-col items-center py-6">
                            <div className="relative flex justify-center overflow-hidden rounded-2xl border border-black/5 shadow-sm" style={{ maxWidth: "80%" }}>
                                <img
                                    src="/projects/image-20251219-153139.png"
                                    alt="Timeline Exploration"
                                    className="w-full h-auto max-h-[650px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                            <figcaption className="mt-2 text-center text-sm text-muted-foreground italic m-0">
                                Timeline Exploration
                            </figcaption>
                        </figure>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">The CLI</h2>
                        <figure className="my-0 flex flex-col items-center py-6">
                            <div className="relative flex justify-center overflow-hidden rounded-2xl border border-black/5 shadow-sm" style={{ maxWidth: "80%" }}>
                                <img
                                    src="/projects/image-20251219-153626.png"
                                    alt="CLI Tool Output"
                                    className="w-full h-auto max-h-[650px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                            <figcaption className="mt-2 text-center text-sm text-muted-foreground italic m-0">
                                CLI Tool Output
                            </figcaption>
                        </figure>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            The tool was built to be flexible for developers. The main entry point is src/pipeline.py, which uses argparse to handle configuration.
                        </p>
                        <div className="my-8">
                            <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
                                <code className="language-bash">
                                    {`python src/pipeline.py --input assets/video.mp4 --output output/report.json

python src/pipeline.py \\
  --input assets/video.mp4 \\
  --prompt "red car" --prompt "driver" \\
  --camera-shot-label "drone shot" \\
  --setting-label "highway"`}
                                </code>
                            </pre>
                        </div>

                        <h2 className="text-lg font-medium m-0 text-foreground pt-8">Results & Limitations</h2>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            LLMs are surprisingly good shot detectors, often identifying logical scene breaks that align with human intuition. Hybrid pipelines combining broad LLM knowledge with specialized vision models like SAM work exceptionally well.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed m-0">
                            Future steps include investigating local LLM alternatives to reduce cloud costs, wrapping the orchestrator in a REST API, and optimizing the architecture for long-form video processing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
