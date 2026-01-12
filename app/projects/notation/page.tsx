import { projects } from "@/data/portfolio";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { notFound } from "next/navigation";

export default function NotationPage() {
    const project = projects.find((p) => p.id === "notation");

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
                            We built Notation to help users convert scanned documents and images into editable LaTeX. Whether it's mathematical equations, technical papers, or complex formulas, Notation uses AI to intelligently extract content and format it as clean, compilable LaTeX code.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Architecture</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The system is split into two main components: a Ruby on Rails API backend and a React frontend built with Vite. The backend handles file processing and LaTeX compilation, while the frontend provides the user interface with real-time rendering using KaTeX and react-pdf.
                        </p>
                        <figure className="relative flex justify-center overflow-hidden border border-black/5 shadow-sm my-1 max-w-[70%] mx-auto">
                            <img
                                src="/projects/image-20260112-024434.png"
                                alt="Notation System Architecture"
                                className="w-full h-auto max-h-[400px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </figure>

                        <h2 className="text-xl font-medium text-foreground">Content Processing Pipeline</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            When a user uploads a file, the backend determines the MIME type and routes it to the appropriate extraction service: PdfToLatexService for PDFs or ImageToLatexService for images. Both services leverage Google's Gemini 2.5 Flash model for content extraction.
                        </p>
                        <div className="my-6">
                            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                                <code className="language-ruby">
                                    {`def extract_content(file, mime_type)
  case mime_type
  when /pdf/
    PdfToLatexService.new(file).convert
  when /image/
    ImageToLatexService.new(file).convert
  else
    raise "Unsupported file type"
  end
end`}
                                </code>
                            </pre>
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            After extraction, the ContentFormattingService processes the raw output to ensure proper LaTeX formatting. The tcolorbox package is used to format notes into visually appealing color-coded boxes.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The compilation endpoint takes LaTeX code and generates a PDF using the LatexCompilationService. We implemented real-time compilation so users can see their documents rendered immediately after extraction. The frontend automatically strips markdown code block markers before sending to the compiler.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Frontend</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The React frontend features a dual-pane interface with two tabs: 'Rendered' and 'Raw Code'. Users can toggle between viewing the compiled PDF and inspecting the raw LaTeX source. We used react-pdf for PDF rendering with responsive sizing, and Framer Motion for smooth transitions between states.
                        </p>
                        <figure className="relative flex justify-center overflow-hidden border border-black/5 shadow-sm my-1 max-w-[85%] mx-auto">
                            <img
                                src="/projects/image-20260112-024005.png"
                                alt="Notation Dashboard Rendered View"
                                className="w-full h-auto max-h-[500px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </figure>
                        <figure className="relative flex justify-center overflow-hidden border border-black/5 shadow-sm my-1 max-w-[85%] mx-auto">
                            <img
                                src="/projects/image-20260112-024013.png"
                                alt="Notation Dashboard Code View"
                                className="w-full h-auto max-h-[500px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </figure>

                        <h2 className="text-xl font-medium text-foreground">Deployment</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            We deployed Notation on Google Cloud Platform using Cloud Run for serverless scaling. The project includes a complete CI/CD pipeline with Google Cloud Build, automatically building and deploying both frontend and backend containers. Docker Compose is available for local development.
                        </p>
                        <h2 className="text-xl font-medium text-foreground">Credits</h2>
                        <div className="text-base text-muted-foreground leading-relaxed">
                            This project was built by:
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
