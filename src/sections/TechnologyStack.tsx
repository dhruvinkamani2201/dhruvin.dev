import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import { SkillCategory } from "../components/ui/SkillCategory";
import { skillCategories } from "../data/skills";

export default function TechnologyStack() {
  return (
    <section id="skills" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Expertise"
          title="Technology Stack"
          description="Technologies I've used to build enterprise software, cloud platforms, AI solutions, and data-driven applications."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}