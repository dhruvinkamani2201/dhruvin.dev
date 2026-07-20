import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import { ProjectCard } from "../components/ui/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Engineering Work"
          description="A selection of enterprise software, AI, and cloud engineering projects."
        />

        <div className="space-y-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}