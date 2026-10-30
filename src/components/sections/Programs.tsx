"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { ChevronDown, Sprout, Store, Heart, Droplets, Target } from "lucide-react";
import { klaster } from "@/data/klaster";

const icons = { sprout: Sprout, store: Store, heart: Heart, droplets: Droplets } as const;

function Badge({ sdg }: { sdg: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
      <Target className="mr-1 h-3 w-3" />
      {sdg}
    </span>
  );
}

export default function Programs() {
  const [openProgram, setOpenProgram] = useState<string | null>(null);

  return (
    <section id="program" className="bg-primary-dark py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Program Kerja
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Empat Klaster, <span className="text-accent">Satu Roda Pemberdayaan</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Keempat klaster saling terhubung: ekologi terjaga, ekonomi bertumbuh,
            warga sehat dan berkembang.
          </p>
        </Reveal>

        <div className="mt-16 space-y-8">
          {klaster.map((k, ki) => {
            const Icon = icons[k.icon as keyof typeof icons];
            return (
              <Reveal key={k.id} delay={ki * 0.06}>
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
                  <div className="flex items-center gap-4 border-b border-white/10 px-7 py-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary-dark">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{k.name}</h3>
                      <p className="text-sm text-accent">{k.subtitle}</p>
                    </div>
                  </div>

                  <ul className="divide-y divide-white/5">
                    {k.programs.map((p) => {
                      const key = `${k.id}-${p.title}`;
                      const open = openProgram === key;
                      return (
                        <li key={key}>
                          <button
                            type="button"
                            onClick={() => setOpenProgram(open ? null : key)}
                            aria-expanded={open}
                            className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left transition hover:bg-white/[0.04]"
                          >
                            <span className="flex flex-col gap-1">
                              <span className="font-semibold text-white">{p.title}</span>
                              <span className="text-sm leading-relaxed text-white/60">
                                {p.summary}
                              </span>
                              <span className="mt-2 flex flex-wrap gap-2">
                                {p.sdgs.map((sdg) => (
                                  <Badge key={sdg} sdg={sdg} />
                                ))}
                              </span>
                            </span>
                            <ChevronDown
                              className={`h-5 w-5 shrink-0 text-accent transition-transform ${open ? "rotate-180" : ""}`}
                            />
                          </button>
                          {open && (
                            <ul className="space-y-2 px-7 pb-6 pt-1">
                              {p.detail.map((d) => (
                                <li
                                  key={d}
                                  className="flex gap-3 text-sm leading-relaxed text-white/70"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                  {d}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
