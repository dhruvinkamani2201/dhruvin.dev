import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import HighlightCard from "../components/ui/HighlightCard";
import { highlights } from "../data/highlights";

export default function Highlights() {
  return (
    <section className="py-28 bg-zinc-950">
      <Container>
        <SectionHeading
          eyebrow="Highlights"
          title="Engineering Expertise"
          description="Building reliable software across cloud, data, AI, and enterprise systems."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((highlight) => (
            <HighlightCard
              key={highlight.title}
              {...highlight}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}