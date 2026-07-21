import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import CredentialCard from "../components/ui/CredentialCard";
import { credentials } from "../data/credentials";

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="bg-zinc-950 py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Education & Certifications"
          description="Academic foundation backed by professional cloud and AI certifications."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {credentials.education.map((item) => (
            <CredentialCard
              key={item.degree}
              title={item.degree}
              subtitle={item.school}
              period={item.period}
              details={item.details}
            />
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10">
          <h3 className="mb-8 text-2xl font-semibold text-white">
            Professional Certifications
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {credentials.certifications.map((cert) => (
              <div
                key={cert}
                className="rounded-xl border border-zinc-800 px-5 py-4 text-zinc-300 transition hover:border-cyan-500/50"
              >
                ✓ {cert}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}