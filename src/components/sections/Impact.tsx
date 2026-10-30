import Reveal from "@/components/Reveal";
import { Handshake, ShieldCheck } from "lucide-react";
import { network } from "@/data/team";
import { sdgList } from "@/data/content";

export default function Impact() {
  return (
    <section id="dampak" className="texture-paper bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Kenapa Mendukung Kami
          </p>
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
            Dampak Nyata, <span className="text-accent">Keberlanjutan Terjamin</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Program kerja Nawa Cakra dirancang agar hasilnya terus berputar jauh setelah
            masa KKN berakhir.
          </p>
        </Reveal>

        {/* Angka dampak */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <Reveal className="rounded-2xl bg-primary p-8 text-center text-white shadow-lg">
            <p data-testid="impact-umkm" className="font-display text-5xl font-bold text-accent">
              50+
            </p>
            <p className="mt-3 text-sm font-medium text-white/80">
              UMKM potensial yang didampingi (legalitas, branding, pemasaran digital)
            </p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-2xl bg-primary p-8 text-center text-white shadow-lg">
            <p data-testid="impact-sektor" className="font-display text-5xl font-bold text-accent">
              9
            </p>
            <p className="mt-3 text-sm font-medium text-white/80">
              Sektor pemberdayaan yang berputar sebagai satu roda ekosistem desa
            </p>
          </Reveal>
          <Reveal delay={0.16} className="rounded-2xl bg-primary p-8 text-center text-white shadow-lg">
            <p data-testid="impact-sdgs" className="font-display text-5xl font-bold text-accent">
              14
            </p>
            <p className="mt-3 text-sm font-medium text-white/80">
              Tujuan Pembangunan Berkelanjutan (SDGs) yang disasar program kerja
            </p>
          </Reveal>
        </div>

        {/* Jejaring strategis */}
        <Reveal delay={0.1} className="mt-16">
          <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-sm sm:p-10">
            <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-primary">
              <Handshake className="h-6 w-6 text-accent" />
              Jejaring Strategis Tim
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Jejaring mencakup unsur legislatif, pemerintah daerah, dan kelembagaan desa
              untuk menghubungkan program kerja dengan kebutuhan nyata masyarakat dan peluang
              keberlanjutan pasca-KKN.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {network.map((n) => (
                <li
                  key={n.name}
                  className="rounded-xl border border-primary/10 bg-bg-alt p-4"
                >
                  <p className="text-sm font-semibold text-primary">{n.name}</p>
                  <p className="mt-1 text-xs text-muted">{n.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* SDG chips */}
        <Reveal delay={0.15} className="mt-10">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <ShieldCheck className="h-5 w-5 text-accent" />
              Selaras dengan:
            </span>
            {sdgList.map((s) => (
              <span
                key={s}
                className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
