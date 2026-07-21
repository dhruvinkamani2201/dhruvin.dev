import { useState } from "react";

import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";
import ProjectModal from "../components/ui/ProjectModal";

import { projects } from "../data/projects";
import type { Project } from "../types/project";

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

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
          description="A selection of engineering, quantitative finance, AI, cloud, and software development projects."
        />

        {featured && (
          <div className="mt-16">
            <ProjectCard
              project={featured}
              onLearnMore={setSelectedProject}
            />
          </div>
        )}

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {others.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onLearnMore={setSelectedProject}
            />
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
    </section>
  );
}