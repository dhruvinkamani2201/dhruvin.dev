import { profile } from "../data/profile";
import { Container } from "../components/common/Container";
import { Button } from "../components/common/Button";
import profileImage from "../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white">
      <Container className="grid min-h-screen items-center gap-16 pt-20 lg:grid-cols-2">
        {/* Left */}

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            {profile.title}
          </p>

          <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            {profile.tagline}
          </p>

          <div className="mt-10 flex gap-4">
            <Button href="#projects">
              View Projects
            </Button>

            <Button href={profile.resume} variant="secondary">
                Resume
            </Button>
          </div>

          <div className="mt-10 flex gap-3">
            <span className="h-3 w-3 rounded-full bg-emerald-400" />

            <span className="text-zinc-400">
              {profile.availability}
            </span>
          </div>
        </div>

        {/* Right */}

        <div className="flex justify-center">
          <img
            src={profileImage}
            alt={profile.name}
            className="aspect-square w-96 rounded-3xl object-cover"
          />
        </div>
      </Container>
    </section>
  );
}