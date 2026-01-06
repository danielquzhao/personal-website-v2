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
      <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-20">
        <Link href="/">
          <Button variant="ghost" className="mb-12 -ml-4 hover:bg-muted/50 transition-colors text-muted-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>

        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-foreground">
            {project.title}
          </h1>

          <div className="aspect-video relative bg-muted overflow-hidden rounded-2xl mb-16 group shadow-sm border border-black/5">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                <span className="text-9xl font-bold text-primary/10">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 px-4 max-w-2xl mx-auto">
            {/* Date */}
            <div className="flex items-center gap-4 text-left">
              <div className="bg-muted p-2.5 rounded-xl shrink-0">
                <Calendar className="w-4 h-4 text-muted-foreground/70" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-[0.15em] mb-0.5">Date</div>
                <div className="text-sm font-medium text-foreground/80">{project.date}</div>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 text-left">
              <div className="bg-muted p-2.5 rounded-xl shrink-0">
                <ExternalLink className="w-4 h-4 text-muted-foreground/70" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-[0.15em] mb-0.5">Links</div>
                <div className="flex flex-wrap gap-x-4">
                  {project.links?.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors underline decoration-foreground/10 underline-offset-4"
                    >
                      Website
                    </a>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors underline decoration-foreground/10 underline-offset-4"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* technologies */}
            <div className="flex items-center gap-4 text-left">
              <div className="bg-muted p-2.5 rounded-xl shrink-0">
                <Code className="w-4 h-4 text-muted-foreground/70" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-[0.15em] mb-0.5">Technologies</div>
                <div className="text-sm font-medium text-foreground/80 leading-relaxed">
                  {project.technologies.join(", ")}
                </div>
              </div>
            </div>

            {/* description/metrics */}
            <div className="flex items-center gap-4 text-left">
              <div className="bg-muted p-2.5 rounded-xl shrink-0">
                <User className="w-4 h-4 text-muted-foreground/70" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-[0.15em] mb-0.5">Status</div>
                <div className="text-sm font-medium text-foreground/80 leading-relaxed line-clamp-1">
                  {project.metrics || project.description}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {project.content ? (
            <div className="space-y-12">
              {project.content.map((block, index) => {
                switch (block.type) {
                  case "text":
                    return (
                      <p key={index} className="text-lg leading-relaxed">
                        {block.content}
                      </p>
                    );
                  case "heading":
                    const levels = {
                      2: "h2",
                      3: "h3",
                      4: "h4",
                    } as const;
                    const HeadingTag = levels[block.level as keyof typeof levels];
                    return <HeadingTag key={index}>{block.text}</HeadingTag>;
                  case "image":
                    return (
                      <figure key={index} className="my-12">
                        <div className="aspect-video relative bg-muted overflow-hidden rounded-lg">
                          <img
                            src={block.url}
                            alt={block.alt || project.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        {block.caption && (
                          <figcaption className="mt-4 text-center text-sm text-muted-foreground italic">
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
                          <code className={`language-${block.language}`}>
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
              <h2>Overview</h2>
              <p className="text-lg leading-relaxed">{project.overview}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

