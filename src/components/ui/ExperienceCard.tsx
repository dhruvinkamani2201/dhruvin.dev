import type { Experience } from "../../data/experience";

interface Props {
  experience: Experience;
}

export function ExperienceCard({ experience }: Props) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <p className="text-sm uppercase tracking-widest text-cyan-400">
        {experience.employer}
      </p>

      {experience.client && (
        <p className="mt-1 text-zinc-400">
          Client: {experience.client}
        </p>
      )}

      <h3 className="mt-4 text-2xl font-bold text-white">
        {experience.role}
      </h3>

      <p className="mt-2 text-zinc-400">
        {experience.period} • {experience.location}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-cyan-400/30 px-3 py-1 text-sm text-cyan-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-6 list-disc space-y-2 pl-5 text-zinc-300">
        {experience.achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </article>
  );
}