import type { Experience } from "../../data/experience";

interface Props {
  experience: Experience;
}

export function TimelineItem({ experience }: Props) {
  return (
    <div className="relative flex gap-8">
      {/* Timeline */}

      <div className="flex w-10 flex-col items-center">
        <div className="h-4 w-4 rounded-full bg-cyan-400" />

        <div className="mt-2 flex-1 w-px bg-zinc-700" />
      </div>

      {/* Card */}

      <article className="mb-12 flex-1 rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:border-cyan-400">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
          {experience.employer}
        </p>

        {experience.client && (
          <h3 className="mt-2 text-2xl font-bold text-white">
            {experience.client}
          </h3>
        )}

        {!experience.client && (
          <h3 className="mt-2 text-2xl font-bold text-white">
            {experience.employer}
          </h3>
        )}

        <p className="mt-3 text-lg text-zinc-300">
          {experience.role}
        </p>

        <p className="mt-2 text-zinc-500">
          {experience.period} • {experience.location}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 px-3 py-1 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-6 space-y-2">
          {experience.achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex gap-3 text-zinc-300"
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />

              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}