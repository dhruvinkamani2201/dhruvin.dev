import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Great"
          description="I'm currently open to full-time Software Engineering opportunities. Feel free to reach out."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50"
          >
            <FaEnvelope className="text-3xl text-cyan-400" />

            <h3 className="mt-6 text-xl font-semibold text-white">
              Email
            </h3>

            <p className="mt-2 break-all text-zinc-400">
              {profile.email}
            </p>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50"
          >
            <FaLinkedin className="text-3xl text-cyan-400" />

            <h3 className="mt-6 text-xl font-semibold text-white">
              LinkedIn
            </h3>

            <p className="mt-2 text-zinc-400">
              Connect with me
            </p>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50"
          >
            <FaGithub className="text-3xl text-cyan-400" />

            <h3 className="mt-6 text-xl font-semibold text-white">
              GitHub
            </h3>

            <p className="mt-2 text-zinc-400">
              View my repositories
            </p>
          </a>
        </div>
      </Container>
    </section>
  );
}