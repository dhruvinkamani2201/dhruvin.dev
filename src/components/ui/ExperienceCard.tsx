interface ExperienceCardProps {
  period: string;
  company: string;
  employer: string;
  role: string;
  technologies: string[];
  achievements: string[];
}

export default function ExperienceCard({
  period,
  company,
  employer,
  role,
  technologies,
  achievements,
}: ExperienceCardProps) {
  return (
    <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 hover:border-cyan-500/50">
      <p className="text-sm text-cyan-400">{period}</p>

      <h3 className="mt-2 text-2xl font-semibold text-white">
        {role}
      </h3>

      <p className="mt-1 text-zinc-300">
        {company}
      </p>

      {employer && (
        <p className="text-sm text-zinc-500">
          Contractor via {employer}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-6 space-y-3 text-zinc-400">
        {achievements.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}