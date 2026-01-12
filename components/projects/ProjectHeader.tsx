import { Project } from "@/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Code, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectHeaderProps {
    project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
    return (
        <div className="min-h-fit">
            <div className="fixed top-12 md:top-[5.2rem] left-0 right-0 z-50 pointer-events-none flex justify-center">
                <div className="max-w-4xl w-full px-6 md:px-12 relative flex items-center">
                    <div className="absolute left-6 md:left-0 top-1.5 pointer-events-auto hidden md:block">
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

            <div className="max-w-4xl mx-auto px-6 pt-12 pb-4 md:px-12 md:pt-20 md:pb-4">
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

                <div className="flex flex-col gap-4 px-0 border-t border-primary/5 pt-5 mb-0 items-start">
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
                        <div className="flex flex-wrap gap-x-2">
                            {project.links?.website && (
                                <div className="flex items-baseline gap-x-0.5">
                                    <a
                                        href={project.links.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base font-medium text-foreground/80 hover:text-primary transition-colors underline underline-offset-4 decoration-primary/30"
                                    >
                                        Website
                                    </a>
                                    {(project.links.github || project.links.dorahacks) && <span className="text-foreground/80 font-medium">,</span>}
                                </div>
                            )}
                            {project.links?.github && (
                                <div className="flex items-baseline gap-x-0.5">
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base font-medium text-foreground/80 hover:text-primary transition-colors underline underline-offset-4 decoration-primary/30"
                                    >
                                        GitHub
                                    </a>
                                    {project.links.dorahacks && <span className="text-foreground/80 font-medium">,</span>}
                                </div>
                            )}
                            {project.links?.dorahacks && (
                                <a
                                    href={project.links.dorahacks}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base font-medium text-foreground/80 hover:text-primary transition-colors underline underline-offset-4 decoration-primary/30"
                                >
                                    DoraHacks
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
