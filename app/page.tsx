import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { Footer } from "@/components/footer";
import { projects } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-20">
        <Hero />
        
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
