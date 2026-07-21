import type { FC } from "react";

interface HighlightCardProps {
  title: string;
  description: string;
  icon: string;
}

const HighlightCard: FC<HighlightCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:bg-zinc-900">
      <div className="mb-6 text-4xl">{icon}</div>

      <h3 className="mb-3 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
};

export default HighlightCard;