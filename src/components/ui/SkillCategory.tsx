interface Props {
  category: string;
  items: string[];
}

export default function SkillCategory({
  category,
  items,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">
      <h3 className="mb-6 text-xl font-semibold text-white">
        {category}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}