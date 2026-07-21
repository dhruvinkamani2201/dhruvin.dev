import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Container } from "../components/common/Container";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <p className="font-semibold text-white">
            Dhruvin Kamani
          </p>

          <p className="text-sm text-zinc-500">
            Software Engineer • Cloud • AI • Data
          </p>
        </div>

        <div className="flex items-center gap-6 text-xl">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 transition hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 transition hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="text-zinc-400 transition hover:text-cyan-400"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Dhruvin Kamani
        </p>
      </Container>
    </footer>
  );
}