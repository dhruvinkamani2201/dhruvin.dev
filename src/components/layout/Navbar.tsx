import { Container } from "../common/Container";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 font-bold text-cyan-400">
            DK
          </div>

          <div className="hidden sm:block">
            <p className="font-semibold text-white">Dhruvin Kamani</p>
            <p className="text-sm text-zinc-400">Software Engineer</p>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}