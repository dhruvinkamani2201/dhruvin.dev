import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import { CredentialCard } from "../components/ui/CredentialCard";
import { credentialSections } from "../data/credentials";

export default function Credentials() {
  return (
    <section id="credentials" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Credentials"
          title="Education & Certifications"
          description="Academic foundation complemented by professional cloud and AI certifications."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {credentialSections.map((section) => (
            <CredentialCard
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}