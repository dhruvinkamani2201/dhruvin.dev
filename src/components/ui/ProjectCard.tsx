import { FaArrowRight, FaGithub } from "react-icons/fa";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  onLearnMore: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onLearnMore,
}: ProjectCardProps) {
  const {
    title,
    description,
    technologies,
    github,
    featured,
  } = project;

  return (
    <div
      className={`group rounded-3xl border border-zinc-800 bg-zinc-900/60 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 ${
        featured ? "p-10" : "p-8"
      }`}
    >
      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-zinc-400">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-6">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zinc-300 transition hover:text-cyan-400"
        >
          <FaGithub />
          <span>Source</span>
        </a>

        <button
          onClick={() => onLearnMore(project)}
          className="flex items-center gap-2 text-cyan-400 transition hover:translate-x-1"
        >
          Learn More
          <FaArrowRight className="text-sm" />
        </button>
      </div>
    </div>
  );
}