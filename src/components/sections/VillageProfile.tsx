import Reveal from "@/components/Reveal";
import Image from "next/image";
import { Sprout, Store, Trees, Landmark } from "lucide-react";
import { villageStats, potentials } from "@/data/content";

const icons = {
  trees: Trees,
  sprout: Sprout,
  store: Store,
  landmark: Landmark,
} as const;

export default function VillageProfile() {
  return (
    <section id="desa" className="bg-bg-alt py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Lokasi Kami
          </p>
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
            Profil Desa <span className="text-accent">Kukuh</span> &amp;{" "}
            <span className="text-accent">Kerambitan</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Dua desa di Kabupaten Tabanan, Bali yang kaya alam, budaya, dan potensi ekonomi
            lokal, siap dikembangkan bersama masyarakat.
          </p>
        </Reveal>

        {/* Statistik */}
        <div
          data-testid="village-stats"
          className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {villageStats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="rounded-2xl border border-primary/10 bg-white p-8 text-center shadow-sm"
            >
              <p className="font-display text-4xl font-bold text-primary">
                {s.value.toLocaleString("id-ID")}
              </p>
              <p className="mt-2 text-sm font-medium text-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>

        {/* Potensi + foto */}
        <div className="mt-16 grid items-start gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/assets/alas-kedaton.jpg"
                alt="Pemandangan kawasan Alas Kedaton, Desa Kukuh, Tabanan"
                width={470}
                height={640}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-6">
                <p className="font-display text-lg font-semibold text-white">
                  Alas Kedaton, jangkar pariwisata Desa Kukuh
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5 lg:col-span-3">
            {potentials.map((p, i) => {
              const Icon = icons[p.icon as keyof typeof icons];
              return (
                <Reveal
                  key={p.title}
                  delay={i * 0.06}
                  className="flex gap-4 rounded-2xl border border-primary/10 bg-white p-6 shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Peta */}
        <Reveal delay={0.1} className="mt-16 overflow-hidden rounded-3xl shadow-xl">
          <iframe
            title="Peta Desa Kukuh, Tabanan, Bali"
            src="https://maps.google.com/maps?q=Desa%20Kukuh%2C%20Marga%2C%20Tabanan%2C%20Bali&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
