import { ABOUT } from "@/data/content";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-accent">{ABOUT.eyebrow}</p>
          <h2 className="font-display mt-3 text-2xl text-foreground sm:text-3xl">{ABOUT.title}</h2>
          {ABOUT.paragraphs.map((p) => (
            <p key={p} className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
