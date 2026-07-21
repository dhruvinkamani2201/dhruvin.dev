import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import logo from "../../assets/logo.png";
import { profile } from "../../data/profile";
import { Button } from "../common/Button";
import { Container } from "../common/Container";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        "hero",
        "experience",
        "projects",
        "skills",
        "credentials",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        const top = element.offsetTop - 120;
        const bottom = top + element.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}

        <a
          href="#hero"
          aria-label="Back to top"
          className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.03]"
        >
          <img
            src={logo}
            alt="Dhruvin Kamani Logo"
            className="h-11 w-11 rounded-xl"
          />

          <div className="hidden sm:block">
            <p className="font-semibold text-white">
              {profile.name}
            </p>

            <p className="text-sm text-zinc-400">
              Software Engineer
            </p>
          </div>
        </a>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive =
              activeSection === item.href.replace("#", "");

            return (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <Button
            href={profile.resume}
            target="_blank"
            variant="primary"
          >
            View Resume
          </Button>
        </nav>

        {/* Mobile Toggle */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? (
            <HiX size={28} />
          ) : (
            <HiMenu size={28} />
          )}
        </button>
      </Container>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="border-t border-white/10 bg-zinc-950/95 backdrop-blur-xl lg:hidden">
          <Container className="flex flex-col py-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-zinc-300 hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-6">
              <Button
                href={profile.resume}
                target="_blank"
              >
                View Resume
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}