import Reveal from "@/components/Reveal";
import { CheckCircle2 } from "lucide-react";
import { timeline } from "@/data/content";

export default function Timeline() {
  return (
    <section id="timeline" className="bg-bg-alt py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Rencana Kegiatan
          </p>
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
            Timeline <span className="text-accent">Pemberdayaan</span>
          </h2>
        </Reveal>

        <ol className="relative mt-16 space-y-12 border-l-2 border-primary/15 pl-8 ml-2">
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.phase} delay={i * 0.08} className="relative">
              <span className="absolute -left-[42px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-bg-alt">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <h3 className="font-display text-xl font-semibold text-primary">{t.phase}</h3>
                <span className="text-sm font-medium text-accent">{t.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {t.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
