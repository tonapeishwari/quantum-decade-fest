import { Gamepad2 } from "lucide-react";
import { ARENA_CARDS } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function ArenaSection() {
  return (
    <section id="arena" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Play the physics"
          title="Quantum Arena"
          description="Light, competitive challenges running alongside the main programme."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ARENA_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 90}>
              <article className="surface-card h-full rounded-2xl p-6">
                <span className="grid size-11 place-items-center rounded-full border border-border bg-surface-2 text-accent">
                  <Gamepad2 className="size-5" />
                </span>
                <h3 className="font-display mt-5 text-xl text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
