import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.32em] text-accent sm:text-xs">{eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">{title}</h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
      <div className="divider-glow mx-auto mt-7 w-28" />
    </Reveal>
  );
}
