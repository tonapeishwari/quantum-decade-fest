import { ArrowRight, ExternalLink } from "lucide-react";
import { HAQTHON, HERO, INSTITUTIONS } from "@/data/content";
import { Reveal } from "./Reveal";
import qiskitWordmark from "@/assets/qiskit-wordmark.png.asset.json";
import fallFestBadge from "@/assets/fall-fest-2026.png.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center pt-24 pb-16 sm:pt-28">
      <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
        <Reveal>
          <img
            src={fallFestBadge.url}
            alt="Qiskit Fall Fest 2026 badge"
            className="mx-auto size-24 rounded-full sm:size-28"
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-6 flex flex-wrap items-center justify-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.34em] text-accent sm:text-xs">
            <span>In partnership with IBM</span>
            <img src={qiskitWordmark.url} alt="Qiskit" className="h-4 w-auto invert sm:h-5" />
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display text-gradient mx-auto mt-5 max-w-4xl text-[clamp(2rem,8vw,4.75rem)] leading-[1.08] font-semibold tracking-tight">
            {HERO.title}
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-base sm:text-xl">
            {INSTITUTIONS.map((inst, i) => (
              <span key={inst.name} className="flex items-center gap-2">
                {i > 0 ? <span className="text-primary/70">×</span> : null}
                <a
                  href={inst.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${inst.full} — official website`}
                  className="rounded-md px-1 font-medium text-foreground underline decoration-primary/40 decoration-2 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent"
                >
                  {inst.name}
                </a>
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={340}>
          <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {HERO.meta.map((m) => (
              <div key={m.label} className="surface-card rounded-xl px-4 py-3">
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {m.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground sm:text-base">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={440}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={HAQTHON.registrationUrl || "#haqthon"}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-accent/40 bg-surface-2 px-7 text-sm font-semibold text-accent transition-transform hover:-translate-y-0.5 hover:bg-secondary sm:w-auto"
            >
              Register for event <ArrowRight className="size-4" />
            </a>
            <a
              href="#haqthon"
              className="glow-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Explore HaQthon <ArrowRight className="size-4" />
            </a>
            <a
              href="#arena"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-7 text-sm font-semibold text-foreground transition-colors hover:bg-surface-2 sm:w-auto"
            >
              Quantum Arena <ExternalLink className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
