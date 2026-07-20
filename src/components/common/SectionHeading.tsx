interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-cyan-400 uppercase tracking-[0.3em] text-sm">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-bold text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}