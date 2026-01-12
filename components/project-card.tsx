"use client";

import { Project } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const externalLink = project.links?.website || project.links?.dorahacks;

  return (
    <div className="group space-y-3">
      {/* Image Link */}
      <Link href={`/projects/${project.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-[1.02] transition-all duration-300">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl font-bold text-primary/10">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Text content block */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <Link href={`/projects/${project.id}`} className="block">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </Link>

          <div className="flex items-center gap-3">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <Link href={`/projects/${project.id}`} className="block">
          <p className="text-sm text-muted-foreground">
            {project.description}
          </p>
        </Link>
      </div>
    </div>
  );
}

