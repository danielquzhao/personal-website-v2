"use client";

import { Project } from "@/types";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group">
      <div className="space-y-3">
        {/* Image */}
        <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-[1.02] transition-all duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl font-bold text-primary/10">
              {project.title.charAt(0)}
            </span>
          </div>
        </div>
        
        {/* Text content below */}
        <div className="space-y-1">
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

