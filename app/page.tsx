import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { Footer } from "@/components/footer";
import { projects } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto px-6 py-12 lg:px-12 lg:py-20">
        <div className="lg:grid lg:grid-cols-[500px_1fr] lg:gap-12 xl:gap-20">
          {/* Left side - Hero */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <Hero />
            <Footer />
          </div>

          {/* Right side - Projects */}
          <section className="mt-12 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
