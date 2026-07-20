interface Credential {
  title: string;
  subtitle: string;
  year?: string;
}

interface Props {
  title: string;
  items: Credential[];
}

export function CredentialCard({ title, items }: Props) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <h3 className="mb-8 text-2xl font-bold text-white">
        {title}
      </h3>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="border-l-2 border-cyan-400 pl-5"
          >
            <h4 className="font-semibold text-white">
              {item.title}
            </h4>

            <p className="text-zinc-400">
              {item.subtitle}
            </p>

            {item.year && (
              <p className="mt-1 text-sm text-zinc-500">
                {item.year}
              </p>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}