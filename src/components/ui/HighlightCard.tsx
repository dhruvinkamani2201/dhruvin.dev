import type { Highlight } from "../../data/highlights";

interface HighlightCardProps {
  highlight: Highlight;
}

export function HighlightCard({
  highlight,
}: HighlightCardProps) {
  const Icon = highlight.icon;

  return (
    <article
      className="
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400
      "
    >
      <Icon className="mb-6 h-8 w-8 text-cyan-400" />

      <h3 className="text-2xl font-bold text-white">
        {highlight.value}
      </h3>

      <p className="mt-3 text-lg font-semibold text-white">
        {highlight.title}
      </p>

      <p className="mt-2 text-sm text-zinc-400">
        {highlight.subtitle}
      </p>
    </article>
  );
}