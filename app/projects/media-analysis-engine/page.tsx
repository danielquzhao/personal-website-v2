import { projects } from "@/data/portfolio";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { notFound } from "next/navigation";

export default function MediaAnalysisEnginePage() {
    const project = projects.find((p) => p.id === "media-analysis-engine");

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
                            During my internship at Cineplex Digital Media, we had a simple but ambitious question: Can we automate our current media label tagging system? At that point, the team was doing manual content tagging on the advertisements that we received, in order to try and understand relationships between engagement and ad content. 
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            However, manual tagging is slow and boring. Hence, the goal of this project was to build a pipeline that can perform the same task automatically.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Architecture</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The system architecture is composed of five key components: Shot Detection, Object Detection, Semantic Analysis, Visual Features, and the Web Visualization Tool.
                        </p>
                        <figure className="relative flex justify-center overflow-hidden rounded-2xl border border-black/5 shadow-sm !-mt-2 !-mb-6">
                            <img
                                src="/projects/image-20251219-150246.png"
                                alt="System Architecture"
                                className="w-full h-auto max-h-[650px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </figure>

                        <h2 className="text-xl font-medium text-foreground">Shot Detection</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The first challenge was to detect scene cuts. Surprisingly, this turned out to be quite a tricky task. Early experiments with approaches like measuring luminance changes sometimes would not detect a scene change if the transition was too smooth. PySceneDetect performed better, but still could not handle soft transitions. Ultimately, throwing the problem at an LLM actually yielded the best results.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Object Detection</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The next challenge was to detect objects in the media. When I was first coming up with solutions, it seemed that each had its own strengths and weaknesses. We wanted to use custom text prompts for detecting objects, so this meant that we needed to either train a custom model, which would require a large amount of training data and manual annotation for each custom label set, or use a zero-shot object detection model, which would be very slow if done frame by frame on a video.
                        </p>
                        <figure className="flex flex-col items-center !-mt-2 !-mb-6">
                            <div className="relative flex justify-center overflow-hidden rounded-2xl border border-black/5 shadow-sm max-w-[50%]">
                                <img
                                    src="/projects/image-20251219-151839.png"
                                    alt="Object Detection & Tracking"
                                    className="w-full h-auto max-h-[650px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                        </figure>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The solution actually ended up popping up in front of me during the process of development. Meta released their SAM 3 model which performs zero shot object detection, so we could detect objects using our custom text prompts. And since SAM 3 is a segmentation model, it can propagate object detections throughout a video in a reasonable amount of time!
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Semantic Analysis & Visual Features</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Lastly, I used Gemini to classify higher level attributes like camera shot and setting, and I used OpenCV to compute low-level visual features like color palette, brightness, contrast, and motion energy.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Web Visualization Tool</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            In order to make the data more accessible, I built a web visualization tool using Next.js and Tailwind CSS. The tool allows users to scrub through the video and explore the data in a more interactive way.
                        </p>
                        <figure className="flex flex-col items-center !-mt-2 !-mb-6">
                            <div className="relative flex justify-center overflow-hidden rounded-2xl border border-black/5 shadow-sm max-w-[80%]">
                                <img
                                    src="/projects/image-20251219-153139.png"
                                    alt="Timeline Exploration"
                                    className="w-full h-auto max-h-[650px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                        </figure>

                        <h2 className="text-xl font-medium text-foreground">The CLI</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Lastly, I built a CLI tool to make it easy to run the pipeline. The tool is built using argparse and allows users to specify the input video, output directory, and other parameters.
                        </p>
                        <figure className="flex flex-col items-center !-mt-2 !-mb-6">
                            <div className="relative flex justify-center overflow-hidden rounded-2xl border border-black/5 shadow-sm max-w-[80%]">
                                <img
                                    src="/projects/image-20251219-153626.png"
                                    alt="CLI Tool Output"
                                    className="w-full h-auto max-h-[650px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                        </figure>
                        <div className="my-6">
                            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
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

                        <h2 className="text-xl font-medium text-foreground">Results & Takeaways</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            This project was a lot of fun to work on and I learned a lot about applied AI and the media industry. It was cool to brainstorm different solutions to try and tackle a problem affecting the team, and I am glad that the project ended up working well!
                        </p>
                    </section>
                </div>
            </article>
        </main>
    );
}
