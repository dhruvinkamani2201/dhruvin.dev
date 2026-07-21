import { profile } from "../data/profile";
import { stats } from "../data/stats";
import { Container } from "../components/common/Container";
import { Button } from "../components/common/Button";
import profileImage from "../assets/images/profile.jpg";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-zinc-950 text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <Container className="relative grid min-h-screen items-center gap-20 pt-24 lg:grid-cols-2">
        {/* Left */}

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            {profile.title}
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight lg:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-zinc-300">
            {profile.headline}
          </p>

          <p className="mt-6 max-w-xl leading-8 text-zinc-500">
            {profile.tagline}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">
              Explore My Work
            </Button>

            <Button
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              View Resume
            </Button>
          </div>

          {/* Socials */}

          <div className="mt-8 flex items-center gap-6 text-2xl text-zinc-400">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 backdrop-blur"
              >
                <h3 className="text-3xl font-bold text-cyan-400">
                  {stat.value}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

          <img
            src={profileImage}
            alt={profile.name}
            className="relative w-[380px] rounded-3xl border border-zinc-700 object-cover shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400"
          />
        </div>
      </Container>
    </section>
  );
}