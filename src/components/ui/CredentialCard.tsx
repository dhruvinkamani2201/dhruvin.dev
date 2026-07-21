interface Props {
  title: string;
  subtitle: string;
  period?: string;
  details?: string;
}

export default function CredentialCard({
  title,
  subtitle,
  period,
  details,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition hover:border-cyan-500/50">
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-zinc-300">
        {subtitle}
      </p>

      {period && (
        <p className="mt-3 text-sm text-cyan-400">
          {period}
        </p>
      )}

      {details && (
        <p className="mt-3 text-zinc-400">
          {details}
        </p>
      )}
    </div>
  );
}