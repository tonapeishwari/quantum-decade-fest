import { Cpu } from "lucide-react";
import { HAQTHON } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { BlochSphere } from "./BlochSphere";
import blochMark from "@/assets/bloch-sphere.png.asset.json";

export function HaqthonSection() {
  return (
    <section id="haqthon" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <img
            src={blochMark.url}
            alt="Bloch sphere symbol"
            className="size-16 shrink-0 rounded-full invert sm:size-20"
          />
          <SectionTitle eyebrow="Flagship challenge" title={HAQTHON.title} />
        </div>

        <Reveal delay={120} className="mt-12">
          <div className="surface-card overflow-hidden rounded-2xl">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:p-10">
              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
                  <Cpu className="size-3.5" /> Hackathon
                </span>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {HAQTHON.description}
                </p>

                {HAQTHON.registrationUrl ? (
                  <a
                    href={HAQTHON.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-ring mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
                  >
                    Register now
                  </a>
                ) : (
                  <p className="mt-7 inline-flex min-h-12 items-center rounded-full border border-dashed border-primary/50 px-6 text-sm font-medium text-muted-foreground">
                    {HAQTHON.ctaLabel}
                  </p>
                )}
              </div>

              <div className="flex min-w-0 flex-col items-center gap-8">
                <BlochSphere />
                <dl className="grid w-full min-w-0 gap-3 sm:grid-cols-2">
                  {HAQTHON.details.map((d) => (
                  <div key={d.label} className="rounded-xl border border-border bg-background/40 px-4 py-3">
                    <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {d.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">{d.value}</dd>
                  </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
