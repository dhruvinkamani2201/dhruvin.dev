import { FaGithub, FaTimes } from "react-icons/fa";
import type { Project } from "../../types/project";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: Props) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-zinc-700 bg-zinc-950 p-10">

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            {project.title}
          </h2>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white"
          >
            <FaTimes />
          </button>
        </div>

        <section className="space-y-8">

          <div>
            <h3 className="mb-2 text-cyan-400 font-semibold">
              Overview
            </h3>

            <p className="text-zinc-300">
              {project.overview}
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-cyan-400 font-semibold">
              Architecture
            </h3>

            <p className="text-zinc-300">
              {project.architecture}
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-cyan-400 font-semibold">
              Challenges
            </h3>

            <p className="text-zinc-300">
              {project.challenges}
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-cyan-400 font-semibold">
              Impact
            </h3>

            <p className="text-zinc-300">
              {project.impact}
            </p>
          </div>

        </section>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black"
        >
          <FaGithub />
          View Source
        </a>

      </div>
    </div>
  );
}