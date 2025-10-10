import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="mb-8">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Daniel Zhao</h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
        Software engineer and designer passionate about building innovative
        solutions. Creating meaningful digital experiences that solve real-world
        problems.
      </p>

      <div className="space-y-3 mb-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {exp.company.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-semibold">{exp.company}</h3>
              <p className="text-sm text-muted-foreground">{exp.role}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
      >
        Click here for resume
        <ArrowRight className="w-4 h-4" />
      </a>
    </section>
  );
}

