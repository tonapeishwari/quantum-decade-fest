import { INSTITUTIONS } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <p className="font-display text-lg tracking-wide text-foreground">Qiskit Fall Fest</p>
        <p className="text-sm text-muted-foreground">
          A decade of quantum on cloud · Pune, India
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {INSTITUTIONS.map((inst) => (
            <li key={inst.name}>
              <a
                href={inst.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground transition-colors hover:text-accent"
              >
                {inst.full}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          Organised in partnership with IBM Qiskit
        </p>
      </div>
    </footer>
  );
}
