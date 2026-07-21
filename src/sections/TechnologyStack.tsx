import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import SkillCategory from "../components/ui/SkillCategory";
import { skills } from "../data/skills";

export default function TechnologyStack() {
  return (
    <section
      id="skills"
      className="bg-zinc-950 py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technology Stack"
          description="Technologies I use to design, build, deploy, and scale modern software."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {skills.map((category) => (
            <SkillCategory
              key={category.category}
              {...category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}