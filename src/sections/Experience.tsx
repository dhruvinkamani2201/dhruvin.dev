import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import ExperienceCard from "../components/ui/ExperienceCard";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-zinc-950 py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional Journey"
          description="Building enterprise software across healthcare, insurance, media, and manufacturing."
        />

        <div className="mt-16 space-y-8">
          {experience.map((job) => (
            <ExperienceCard
              key={`${job.company}-${job.period}`}
              {...job}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}