import type { SkillCategory as SkillCategoryType } from "../../data/skills";

interface Props {
  category: SkillCategoryType;
}

export function SkillCategory({ category }: Props) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <h3 className="mb-6 text-xl font-semibold text-white">
        {category.title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-cyan-500/30 px-4 py-2 text-sm text-cyan-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}