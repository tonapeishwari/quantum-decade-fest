import { Instagram, Linkedin, Youtube, Twitter, Link2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SOCIALS } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const ICONS: Record<string, LucideIcon> = {
  Instagram,
  LinkedIn: Linkedin,
  YouTube: Youtube,
  X: Twitter,
};

export function SocialSection() {
  return (
    <section id="social" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Stay in the loop"
          title="Social Media"
          description="Announcements, speaker reveals and HaQthon updates land on our channels first."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SOCIALS.map((s, i) => {
            const Icon = ICONS[s.platform] ?? Link2;
            const body = (
              <>
                <span className="grid size-11 place-items-center rounded-full border border-border bg-surface-2 text-accent">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-foreground">{s.platform}</span>
                  <span className="block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.url ? "Follow" : "Coming soon"}
                  </span>
                </span>
              </>
            );

            return (
              <Reveal key={s.platform} delay={i * 80}>
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card flex h-full items-center gap-4 rounded-2xl p-5"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="surface-card flex h-full items-center gap-4 rounded-2xl p-5 opacity-80">
                    {body}
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
