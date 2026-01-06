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
        <div className="relative flex items-center justify-center mb-10">
          <div className="absolute left-0">
            <Link href="/">
              <Button variant="ghost" className="-ml-4 hover:bg-muted/50 transition-colors text-muted-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground text-center">
            {project.title}
          </h1>
        </div>

        <div className="aspect-video relative bg-muted overflow-hidden rounded-2xl mb-4 group shadow-sm border border-black/5">
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

        <div className="flex flex-col gap-2 px-0 border-t border-primary/5 pt-5 items-start">
          {/* Date */}
          <div className="flex items-center gap-4 text-left w-full">
            <div className="bg-muted p-2 rounded-xl shrink-0">
              <Calendar className="w-5 h-5 text-muted-foreground/70" />
            </div>
            <div className="text-base font-medium text-foreground/80">{project.date}</div>
          </div>

          {/* technologies */}
          <div className="flex items-center gap-4 text-left w-full">
            <div className="bg-muted p-2 rounded-xl shrink-0">
              <Code className="w-5 h-5 text-muted-foreground/70" />
            </div>
            <div className="text-base font-medium text-foreground/80 leading-relaxed">
              {project.technologies.join(", ")}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-left w-full">
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
              <h2>Overview</h2>
              <p className="text-lg leading-relaxed">{project.overview}</p>
            </>
          )}
        </div>
      </div>
    </div >
  );
}

