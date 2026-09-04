import { Mic } from "lucide-react";
import { SPEAKERS } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import eagle from "@/assets/qiskit-eagle.png.asset.json";

export function SpeakersSection() {
  return (
    <section id="speakers" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <img
            src={eagle.url}
            alt="Qiskit eagle emblem"
            className="size-20 shrink-0 object-contain sm:size-28"
          />
          <SectionTitle
            eyebrow="Voices"
            title="Speakers"
            description="Researchers and practitioners from academia and industry. Line-up announced soon."
          />
        </div>

        {SPEAKERS.length ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SPEAKERS.map((s, i) => (
              <Reveal key={s.name} delay={i * 90}>
                <article className="surface-card h-full rounded-2xl p-6">
                  <h3 className="font-display text-xl text-foreground">{s.name}</h3>
                  <p className="mt-1 text-sm text-accent">{s.designation}</p>
                  <p className="text-xs text-muted-foreground">{s.institution}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={120} className="mt-12">
            <div className="surface-card mx-auto max-w-2xl rounded-2xl px-6 py-12 text-center">
              <span className="mx-auto grid size-12 place-items-center rounded-full border border-border bg-surface-2">
                <Mic className="size-5 text-accent" />
              </span>
              <h3 className="font-display mt-5 text-2xl text-foreground">Speaker line-up coming soon</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                We are confirming quantum researchers, IBM Quantum advocates and faculty from the host
                institutes. Announcements will appear here first.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
