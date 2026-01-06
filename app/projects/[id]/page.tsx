import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Code, ExternalLink, Github, User } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="fixed top-12 md:top-[5.2rem] left-0 right-0 z-50 pointer-events-none flex justify-center">
        <div className="max-w-4xl w-full px-6 md:px-12 relative flex items-center">
          <div className="absolute left-6 md:left-0 top-1.5 pointer-events-auto">
            <Link href="/">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent/50 transition-all duration-300 hover:-translate-x-1.5 text-muted-foreground p-0 h-auto w-auto cursor-pointer"
              >
                <ArrowLeft className="h-8 w-8" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-20">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground text-center">
            {project.title}
          </h1>
        </div>

        <div className="relative group flex justify-center m-0 overflow-hidden rounded-2xl border border-black/5 shadow-sm">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[650px] object-contain transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <span className="text-9xl font-bold text-primary/10">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 px-0 border-t border-primary/5 pt-5 mb-8 items-start">
          {/* Date */}
          <div className="flex items-center gap-4 text-left w-full m-0">
            <div className="bg-muted p-2 rounded-xl shrink-0">
              <Calendar className="w-5 h-5 text-muted-foreground/70" />
            </div>
            <div className="text-base font-medium text-foreground/80">{project.date}</div>
          </div>

          {/* technologies */}
          <div className="flex items-center gap-4 text-left w-full m-0">
            <div className="bg-muted p-2 rounded-xl shrink-0">
              <Code className="w-5 h-5 text-muted-foreground/70" />
            </div>
            <div className="text-base font-medium text-foreground/80 leading-relaxed">
              {project.technologies.join(", ")}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-left w-full m-0">
            <div className="bg-muted p-2 rounded-xl shrink-0">
              <ExternalLink className="w-5 h-5 text-muted-foreground/70" />
            </div>
            <div className="flex flex-wrap gap-x-6">
              {project.links?.website && (
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-foreground/80 hover:text-primary transition-colors underline underline-offset-4 decoration-primary/30"
                >
                  Website
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-foreground/80 hover:text-primary transition-colors underline underline-offset-4 decoration-primary/30"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {project.content ? (
            <div className="space-y-0">
              {project.content.map((block, index) => {
                switch (block.type) {
                  case "heading":
                    const headingStyles = {
                      2: "text-lg font-medium m-0 text-foreground",
                      3: "text-base font-medium m-0 text-foreground",
                      4: "text-base font-medium m-0 text-foreground",
                    };
                    if (block.level === 2) return <h2 key={index} className={headingStyles[2]}>{block.text}</h2>;
                    if (block.level === 3) return <h3 key={index} className={headingStyles[3]}>{block.text}</h3>;
                    return <h4 key={index} className={headingStyles[4]}>{block.text}</h4>;
                  case "text":
                    return (
                      <p key={index} className="text-base text-muted-foreground leading-relaxed m-0">
                        {block.content}
                      </p>
                    );
                  case "image":
                    return (
                      <figure key={index} className="my-0 flex flex-col items-center">
                        <div
                          className="relative flex justify-center overflow-hidden rounded-2xl border border-black/5 shadow-sm"
                          style={block.width ? { maxWidth: block.width } : undefined}
                        >
                          <img
                            src={block.url}
                            alt={block.alt || project.title}
                            className="w-full h-auto max-h-[650px] object-contain block transition-transform duration-500 hover:scale-[1.02]"
                          />
                        </div>
                        {block.caption && (
                          <figcaption className="mt-2 text-center text-sm text-muted-foreground italic m-0">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  case "code":
                    return (
                      <div key={index} className="my-8">
                        {block.fileName && (
                          <div className="text-xs text-muted-foreground mb-2 font-mono">
                            {block.fileName}
                          </div>
                        )}
                        <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
                          <code className={`language - ${block.language} `}>
                            {block.code}
                          </code>
                        </pre>
                      </div>
                    );
                  case "metrics":
                    return (
                      <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"
                      >
                        {block.items.map((item, i) => (
                          <div
                            key={i}
                            className="bg-muted/50 p-6 rounded-xl border border-primary/5"
                          >
                            <div className="text-sm text-muted-foreground mb-1">
                              {item.label}
                            </div>
                            <div className="text-2xl font-bold text-primary">
                              {item.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          ) : (
            <>
              <h2 className="text-lg font-medium mt-6 mb-2 text-foreground">Overview</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{project.overview}</p>
            </>
          )}
        </div>
      </div>
    </div >
  );
}

