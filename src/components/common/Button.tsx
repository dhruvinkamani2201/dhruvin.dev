import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-cyan-500 text-black hover:bg-cyan-400"
      : "border border-zinc-700 text-white hover:bg-zinc-800";

  return (
    <a
      href={href}
      className={`inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${styles}`}
    >
      {children}
    </a>
  );
}