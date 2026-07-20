import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  target?: "_blank" | "_self";
  rel?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  target = "_self",
  rel,
  onClick,
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-cyan-500 text-black hover:bg-cyan-400"
      : "border border-zinc-700 text-white hover:bg-zinc-800";

  const className = `inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${styles}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}