import type { Project } from "../../data/projects";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10 transition-all duration-300 hover:border-cyan-400">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        {project.category}
      </p>

      <h3 className="mt-3 text-3xl font-bold text-white">
        {project.title}
      </h3>

      <p className="mt-6 text-lg leading-8 text-zinc-300">
        {project.description}
      </p>

      <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 p-5">
        <p className="text-sm uppercase tracking-wide text-cyan-400">
          Impact
        </p>

        <p className="mt-2 text-zinc-300">
          {project.impact}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-cyan-500/30 px-3 py-1 text-sm text-cyan-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white hover:text-cyan-400"
          >
            <FaGithub className="h-[18px] w-[18px]" />
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white hover:text-cyan-400"
          >
            <ArrowUpRight size={18} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}