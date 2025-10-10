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

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12 md:px-12 md:py-20">
        <Link href="/">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>

        <div className="aspect-video relative bg-muted overflow-hidden rounded-lg mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <span className="text-9xl font-bold text-primary/10">
              {project.title.charAt(0)}
            </span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>

        <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {project.date}
          </div>
          {project.metrics && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {project.metrics}
            </div>
          )}
        </div>

        <div className="flex gap-3 mb-8">
          {project.links?.website && (
            <Button asChild>
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Website
              </a>
            </Button>
          )}
          {project.links?.github && (
            <Button variant="outline" asChild>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Github
              </a>
            </Button>
          )}
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Code className="w-5 h-5" />
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>Overview</h2>
          <p className="text-lg leading-relaxed">{project.overview}</p>
        </div>
      </div>
    </div>
  );
}

