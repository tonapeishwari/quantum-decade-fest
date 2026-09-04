import { CalendarDays, Clock, User } from "lucide-react";
import { SCHEDULE } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function ScheduleSection() {
  return (
    <section id="schedule" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Programme"
          title="Schedule"
          description="Three days of talks, hands-on workshops and building. Exact timings are being finalised."
        />

        <ol className="relative mx-auto mt-12 max-w-3xl">
          <span
            aria-hidden
            className="absolute left-[9px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent sm:block"
          />
          {SCHEDULE.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 90} className="relative sm:pl-10">
              <span
                aria-hidden
                className="absolute left-0 top-6 hidden size-[19px] place-items-center rounded-full border border-primary/60 bg-background sm:grid"
              >
                <span className="size-2 rounded-full bg-accent" />
              </span>
              <div className="surface-card mb-4 min-w-0 rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" /> {item.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="size-3.5" /> {item.time}
                  </span>
                </div>
                <h3 className="font-display mt-3 text-xl text-foreground sm:text-2xl">{item.title}</h3>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <User className="size-3.5" /> {item.host}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
