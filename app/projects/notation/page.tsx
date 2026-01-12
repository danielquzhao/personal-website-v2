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
                            I built Notation to solve a common problem: converting scanned documents and images into editable LaTeX. Whether it's mathematical equations, technical papers, or complex formulas, Notation uses AI to intelligently extract content and format it as clean, compilable LaTeX code.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Key Features</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Notation handles both PDF and image uploads, extracting content directly into LaTeX. It intelligently recognizes complex mathematical expressions and equations using Gemini 2.5 Flash. The app compiles LaTeX code into high-quality PDFs instantly using an integrated compilation service, all within a sleek, responsive UI with fluid micro-animations.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Architecture</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The system is split into two main components: a Ruby on Rails API backend and a React frontend built with Vite. The backend handles file processing and LaTeX compilation, while the frontend provides the user interface with real-time rendering using KaTeX and react-pdf.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Content Extraction Pipeline</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            When a user uploads a file, the backend determines the MIME type and routes it to the appropriate extraction service: PdfToLatexService for PDFs or ImageToLatexService for images. Both services leverage Google's Gemini 2.5 Flash model for high-fidelity content extraction.
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
                            After extraction, the ContentFormattingService processes the raw output to ensure proper LaTeX formatting, handling edge cases like markdown code blocks and ensuring document structure is preserved.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">LaTeX Compilation</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The compilation endpoint takes LaTeX code and generates a PDF using the LatexCompilationService. I implemented real-time compilation so users can see their documents rendered immediately after extraction. The frontend automatically strips markdown code block markers before sending to the compiler.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Frontend Experience</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The React frontend features a dual-pane interface with two tabs: 'Rendered' and 'Raw Code'. Users can toggle between viewing the compiled PDF and inspecting the raw LaTeX source. I used react-pdf for PDF rendering with responsive sizing, and Framer Motion for smooth transitions between states.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The LaTeXViewer component automatically recompiles whenever the LaTeX content changes, providing instant visual feedback. Error handling shows clear messages when compilation fails, helping users debug their LaTeX syntax.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Deployment</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            I deployed Notation on Google Cloud Platform using Cloud Run for serverless scaling. The project includes a complete CI/CD pipeline with Google Cloud Build, automatically building and deploying both frontend and backend containers. Docker Compose is available for local development.
                        </p>

                        <h2 className="text-xl font-medium text-foreground">Technical Decisions</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            I chose Rails for the backend because it provides a solid foundation for API development with built-in conventions. Gemini 2.5 Flash offered the best balance of speed and accuracy for mathematical content extraction. For the frontend, Vite+React gave me fast hot module replacement during development, and KaTeX provided blazing-fast math rendering without the overhead of MathJax.
                        </p>
                    </section>
                </div>
            </article>
        </main>
    );
}
