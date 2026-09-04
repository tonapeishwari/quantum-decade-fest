import { ArrowUpRight } from "lucide-react";
import { COLLABORATORS } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function CollaborationSection() {
  return (
    <section id="collaboration" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Together"
          title="Collaboration"
          description="A joint effort by three Pune institutes with quantum technology partners."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COLLABORATORS.map((c, i) => {
            const inner = (
              <>
                <div className="flex min-w-0 items-center gap-4">
                  {c.logo ? (
                    <span className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-foreground p-1.5">
                      <img
                        src={c.logo}
                        alt={`${c.name} logo`}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </span>
                  ) : (
                    <span className="font-display grid size-14 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-lg text-accent">
                      {c.initials}
                    </span>
                  )}
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-medium text-foreground">{c.name}</h3>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {c.role}
                    </p>
                  </div>
                </div>
                {c.url ? (
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                ) : null}
              </>
            );

            return (
              <Reveal key={c.name} delay={i * 80}>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card group flex h-full items-center justify-between gap-3 rounded-2xl p-5"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="surface-card group flex h-full items-center justify-between gap-3 rounded-2xl p-5">
                    {inner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
