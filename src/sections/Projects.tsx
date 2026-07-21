import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="bg-zinc-950 py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work"
          description="A selection of engineering, quantitative finance, AI, and cloud projects."
        />

        {featured && (
          <div className="mt-16">
            <ProjectCard {...featured} />
          </div>
        )}

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {others.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}