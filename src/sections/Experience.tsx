import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import { ExperienceCard } from "../components/ui/ExperienceCard";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          description="Building enterprise software across healthcare, entertainment, insurance, and manufacturing."
        />

        <div className="space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.employer}-${experience.client ?? experience.role}`}
              experience={experience}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}