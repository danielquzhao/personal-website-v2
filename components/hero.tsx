import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
        {experiences.map((exp, index) => {
          const content = (
            <>
            <div
              className="w-12 h-12 rounded-md flex items-center justify-center overflow-hidden transition-all duration-200 group-hover:brightness-110"
              style={{
                backgroundColor: exp.color || "rgba(255, 255, 255, 0.05)",
              }}
            >
              {exp.icon ? (
                <Image
                  src={exp.icon}
                  alt={`${exp.company} logo`}
                  width={48}
                  height={48}
                  className="object-contain w-8 h-8"
                />
              ) : (
                <span className="text-2xl font-bold text-white">
                  {exp.company.charAt(0)}
                </span>
              )}
            </div>
              <div>
                <h3 className="font-semibold">{exp.company}</h3>
                <p className="text-sm text-muted-foreground">{exp.role}</p>
              </div>
            </>
          );

          return exp.link ? (
            <a
              key={index}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group cursor-pointer"
            >
              {content}
            </a>
          ) : (
            <div key={index} className="flex items-center gap-3">
              {content}
            </div>
          );
        })}
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

