import Reveal from "@/components/Reveal";
import { Sprout, Smartphone, Recycle, Users } from "lucide-react";
import { problems } from "@/data/content";

const icons = {
  sprout: Sprout,
  smartphone: Smartphone,
  recycle: Recycle,
  users: Users,
} as const;

export default function Problems() {
  return (
    <section id="permasalahan" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Latar Belakang
          </p>
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
            Empat Pilar <span className="text-accent">Permasalahan</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Hasil evaluasi dan riset data Desa Kukuh &amp; Kerambitan yang kami jadikan
            pijakan program kerja.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => {
            const Icon = icons[p.icon as keyof typeof icons];
            return (
              <Reveal
                key={p.title}
                delay={i * 0.08}
                className="group rounded-2xl border border-primary/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-accent transition group-hover:bg-accent group-hover:text-primary-dark">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-primary">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
