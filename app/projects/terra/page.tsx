import { projects } from "@/data/portfolio";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { notFound } from "next/navigation";

export default function TerraPage() {
    const project = projects.find((p) => p.id === "terra");

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
                            In this project we wanted to change the way people see the world by combining augmented reality with creative building mechanics. Our vision was simple: let anyone build structures in real world spaces using just their phone.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Key Features</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            We designed an intuitive interface where you simply click on your phone screen to add blocks in 3D space. You can view your buildings from any angle and experience life-sized models seamlessly integrated into your environment.
                        </p>
                        <div className="flex gap-4 mb-16 max-w-2xl mx-auto justify-center h-[350px]">
                            <figure className="relative flex justify-center overflow-hidden border border-black/5 shadow-sm h-full shrink-0">
                                <img
                                    src="/projects/image-20260112-015810.png"
                                    alt="Terra AR Gameplay 2"
                                    className="h-full w-auto object-contain block transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </figure>
                            <figure className="relative flex justify-center overflow-hidden border border-black/5 shadow-sm h-full shrink-0">
                                <img
                                    src="/projects/image-20260112-015711.png"
                                    alt="Terra AR Gameplay 1"
                                    className="h-full w-auto object-contain block transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </figure>
                        </div>

                        <h2 className="text-xl font-medium text-foreground">Technical Implementation</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            We built Terra with Unity and C#, using ARCore and AR Foundation for robust AR functionality on Android devices. The core placement system we developed uses AR raycasting to detect planes and existing blocks, with a grid-snapping system (0.1m resolution) to ensure blocks align perfectly.
                        </p>
                        <div className="my-6">
                            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                                <code className="language-csharp">
                                    {`Vector3 SnapToGrid(Vector3 position)
{
    float x = Mathf.Round(position.x / snapGridSize) * snapGridSize;
    float y = Mathf.Round(position.y / snapGridSize) * snapGridSize;
    float z = Mathf.Round(position.z / snapGridSize) * snapGridSize;
    return new Vector3(x, y, z);
}`}
                                </code>
                            </pre>
                        </div>

                        <h2 className="text-xl font-medium text-foreground">Block Placement System</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Our placement system intelligently handles two scenarios: placing blocks on AR-detected planes (ground, tables, walls) and stacking blocks on top of existing blocks. When you tap, the system first raycasts against existing blocks to enable stacking, then falls back to AR plane detection for new structures.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            We also added block customization with three color options (blue, red, green), accessible through keyboard shortcuts or UI buttons. Each placed block is tracked in a list, enabling features like undo and clear-all functionality.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">AR Foundation Integration</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            We leveraged Unity's AR Foundation framework with the ARCore XR Plugin for Android devices. The ARRaycastManager component handles plane detection and hit testing, allowing seamless interaction between virtual blocks and the physical environment.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            We used Unity ProBuilder for creating the Lego-style block models, providing clean geometry optimized for mobile AR performance.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Design Goals</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            We designed Terra to be accessible and free–no paywalls, no complex tutorials. Our goal was to make AR building as intuitive as physical Lego: tap where you want a block, and it appears. The real-world location anchoring adds a social dimension, turning public spaces into collaborative canvases.
                        </p>
                    </section>
                </div>
            </article>
        </main>
    );
}
