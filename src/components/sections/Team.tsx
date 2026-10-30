import Reveal from "@/components/Reveal";
import { team, clusters, type ClusterKey } from "@/data/team";

const clusterOrder: ClusterKey[] = ["saintek", "soshum", "medika", "agro"];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Team() {
  return (
    <section id="tim" className="texture-paper bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Orang-Orang di Balik Roda
          </p>
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
            Tim <span className="text-accent">Nawa Cakra</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            16 mahasiswa Universitas Gadjah Mada lintas disiplin saintek &amp; soshum yang
            terbagi dalam 4 klaster program kerja.
          </p>
        </Reveal>

        <div className="mt-16 space-y-14">
          {clusterOrder.map((key, ki) => {
            const c = clusters[key];
            const members = team.filter((m) => m.cluster === key);
            return (
              <Reveal key={key} delay={ki * 0.06}>
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: c.color }}
                  />
                  <h3 className="font-display text-xl font-semibold text-primary">
                    {c.label}
                  </h3>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                  {members.map((m) => (
                    <div
                      key={m.name}
                      className="rounded-2xl border border-primary/10 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-accent">
                        {initials(m.name)}
                      </span>
                      <p className="mt-4 text-sm font-semibold leading-snug text-primary">
                        {m.name}
                      </p>
                      <p className="mt-1 text-xs font-medium text-accent">{m.role}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
