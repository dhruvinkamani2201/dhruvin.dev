import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import { TimelineItem } from "../components/ui/TimelineItem";
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

        <div className="mt-16">
        {experiences.map((experience) => (
            <TimelineItem
            key={`${experience.employer}-${experience.client ?? experience.role}`}
            experience={experience}
            />
        ))}
        </div>
      </Container>
    </section>
  );
}