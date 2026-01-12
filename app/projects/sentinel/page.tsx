import { projects } from "@/data/portfolio";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { notFound } from "next/navigation";

export default function SentinelPage() {
    const project = projects.find((p) => p.id === "sentinel");

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            <ProjectHeader project={project} />

            <article className="max-w-4xl mx-auto px-6 py-0 md:px-12">
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <section className="space-y-4">
                        <h2 className="text-xl font-medium text-foreground">Background</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            One of the most important systems in digital out of home signs is the ability to count the number of people who were exposed. Currently, we use cameras at Cineplex Digital Media, however these have many privacy concerns which lead us to use third party services (Quividi) as a legal moat. Being able to count heads without cameras could allow us to not rely on these services.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            LiDAR is an interesting technology because it does not detect identifying features, hence it is far better for privacy concerns. To explore this technology and its viability for people detection, I got my hands on an RPLiDAR A1 and used it to build Sentinel.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Architecture</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Sentinel has three main parts: the LiDAR sensing perception pipeline, the ML training pipeline, and the web tool for visualization and control. It's a mixed Python/TypeScript workspace: the detection code and model live in Python, and the UI lives in a Next.js app.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Hardware Setup</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The RPLidar A1 is a cheap 360° laser that connects via USB. It spins 5-10 times per second and measures distances at different angles. The laser can see up to 12 meters away, but the range is limited to 4 meters to focus on nearby people and reduce wall reflections.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Perception Pipeline</h2>
                        <figure className="flex flex-col items-center !-mt-2 !-mb-6">
                            <div className="relative flex justify-center overflow-hidden rounded-2xl border border-black/5 shadow-sm max-w-[80%]">
                                <img
                                    src="/projects/image-20251218-185416.png"
                                    alt="Perception Pipeline Architecture"
                                    className="w-full h-auto max-h-[650px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                        </figure>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The perception pipeline runs continuously 5-10 times per second. The PersonDetector class wraps the entire pipeline and maintains its state between frames. Each laser scan is converted from polar coordinates to cartesian, then DBSCAN clusters nearby points into objects.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Feature Extraction & Classification</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            26 geometric features are extracted from each cluster including size (point count, width, height), shape (aspect ratio, elongation), density, and boundary properties. A Random Forest classifier trained on these features distinguishes people from furniture with ~90% accuracy.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Random Forest was chosen over neural networks because it's fast on CPU (sub-millisecond inference), handles the feature set well without much tuning, and provides built-in feature importances for debugging.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Tracking</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Once people are detected, the tracker maintains consistent IDs across frames. It matches new detections to people from the previous frame, marks unmatched people as missing, and removes them after 5 frames (~1 second). New unmatched detections receive new IDs.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Dashboard</h2>
                        <figure className="flex flex-col items-center !-mt-2 !-mb-6">
                            <div className="relative flex justify-center overflow-hidden rounded-2xl border border-black/5 shadow-sm max-w-[80%]">
                                <img
                                    src="/projects/image-20251218-184906.png"
                                    alt="Sentinel Dashboard"
                                    className="w-full h-auto max-h-[650px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                        </figure>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The web dashboard provides real-time visualization and debugging. It's built with Flask + Socket.IO on the backend and Next.js on the frontend. The frontend renders a live point cloud visualization with color-coded clusters (green = person, red = not-person) and per-person info cards showing ID, distance, confidence, and point count.
                        </p>
                        <figure className="flex flex-col items-center !-mt-2 !-mb-6">
                            <div className="relative flex justify-center overflow-hidden rounded-2xl border border-black/5 shadow-sm max-w-[80%]">
                                <img
                                    src="/projects/image-20251218-184952.png"
                                    alt="Live tracking visualization"
                                    className="w-full h-auto max-h-[650px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                        </figure>

                        <h2 className="text-xl font-medium text-foreground">Results and Takeaways</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Geometric features work surprisingly well. Rather than using end-to-end neural networks, 26 carefully designed geometric features successfully distinguish people from furniture with ~90% accuracy. The full pipeline runs at 50-100ms per frame on a laptop CPU, with clustering (DBSCAN) being the bottleneck at ~20ms.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Limitations and Next Steps</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The system struggles with people partially blocked by furniture, very distant people (low point density), and similar-looking objects like backpacks on chairs. This is a natural limitation of 2D lidar. Future work may experiment with 3D lidar systems and training across frames to detect movement patterns rather than just frame-by-frame classification.
                        </p>
                    </section>
                </div>
            </article>
        </main>
    );
}
