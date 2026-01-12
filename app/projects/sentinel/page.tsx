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
                            During my internship at CDM, I was exposed to the challenges of digital out of home signs. One of the most important systems in digital out of home signs is the ability to count the number of people who were exposed. Currently, we use cameras, however these have many privacy concerns which lead us to use third party services (Quividi) as a legal moat. Being able to count heads without cameras could allow us to not rely on these services.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            LiDAR is an interesting technology because it does not detect identifying features, hence it is far better for privacy concerns. To explore this technology and its viability for people detection, I got my hands on an RPLiDAR A1 and used it to build Sentinel.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Architecture</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Sentinel has three main parts: the LiDAR sensing perception pipeline, the ML training pipeline, and the web tool for visualization and control. The tech stack is mixed mostly between Python and TypeScript: the detection code and model live in Python, and the UI lives in a Next.js app.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Hardware Setup</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The RPLidar A1 is a cheap 360° laser that connects via USB. It spins 5-10 times per second and measures distances at different angles. The laser can see up to 12 meters away, but for this project I limited the range to 4 meters to focus on nearby people and reduce wall reflections.
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
                            The perception pipeline runs continuously 5-10 times per second. It's purpose is to detect points in the LiDAR scan and cluster them into objects. The PersonDetector class wraps the entire pipeline and maintains its state between frames. Each laser scan is converted from polar coordinates to cartesian, then DBSCAN clusters nearby points into objects.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Feature Extraction & Classification</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            After clustering, each cluster is converted into a feature vector. The user is then required to label the cluster as a person or furniture through the web interface. This is used to train a Random Forest classifier, which was chosen because it's fast on CPU and handles the feature set well.
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

                        <h2 className="text-xl font-medium text-foreground">Tracking</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Once people are detected, the tracker maintains consistent IDs across frames. It matches new detections to people from the previous frame, marks unmatched people as missing, and removes them after 5 frames (~1 second). New unmatched detections receive new IDs.
                        </p>
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


                        <h2 className="text-xl font-medium text-foreground">Results and Takeaways</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Sentinel was an interesting proof of concept for a simple person detection system using LiDAR technology. Though the system was able to successfully detect people in a variety of scenarios, it was limited a lot by the hardware constraints of the RPLidar A1. Nonetheless, the system showed the viability of LiDAR for this use case, and it prepares a foundation for future work with more advanced 3D LiDAR sensors.
                        </p>
                    </section>
                </div>
            </article>
        </main>
    );
}
