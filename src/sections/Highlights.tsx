import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import { HighlightCard } from "../components/ui/HighlightCard";
import { highlights } from "../data/highlights";

export default function Highlights() {
  return (
    <section id="highlights" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Impact"
          title="Engineering Highlights"
          description="Delivering measurable business outcomes across enterprise software, cloud engineering, and AI."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((highlight) => (
            <HighlightCard
              key={highlight.title}
              highlight={highlight}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}