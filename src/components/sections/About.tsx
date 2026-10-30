import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

const sektor = [
  "Tata Kelola & Digital Desa",
  "Air",
  "Lingkungan & Ekonomi Sirkular",
  "Energi",
  "Pertanian & Peternakan",
  "Ekonomi UMKM",
  "Pariwisata & Budaya",
  "Kesehatan & Gizi",
  "Pendidikan & Literasi",
];

export default function About() {
  return (
    <section id="tentang" className="texture-paper bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Tentang Kami
          </p>
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
            Makna <span className="italic text-accent">Nawa Cakra</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            <span className="font-semibold text-primary">Nawa</span> berarti sembilan
            dalam bahasa Sansekerta, dan{" "}
            <span className="font-semibold text-primary">Cakra</span> berarti{" "}
            <span className="font-semibold text-primary">roda</span> yang menandakan
            keberlanjutan. Gabungan keduanya mengartikan{" "}
            <span className="font-semibold text-primary">
              sembilan sektor pemberdayaan yang berputar sebagai satu roda ekosistem desa
            </span>
            .
          </p>
        </Reveal>

        <ul
          data-testid="sektor-list"
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3"
        >
          {sektor.map((s, i) => (
            <Reveal
              as="li"
              key={s}
              delay={i * 0.05}
              className="flex items-center gap-3 rounded-xl border border-primary/10 bg-white p-4 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-accent">
                {i + 1}
              </span>
              <span className="text-sm font-medium text-primary">{s}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1} className="mx-auto mt-16 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Tema Besar
          </p>
          <p className="font-display text-2xl font-semibold text-primary sm:text-3xl">
            “{site.tagline}”
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
            Mengoptimalkan potensi lokal melalui integrasi teknologi digital dan penguatan
            ekosistem ekonomi desa yang berkelanjutan di Desa Kerambitan dan Desa Kukuh,
            Kecamatan Kerambitan, Kabupaten Tabanan, Bali. Pemanfaatan sumber daya alam
            dijaga tetap seimbang dan lingkungan tetap lestari, sambil memperkuat kapasitas pelaku
            usaha, UMKM, BUMDes, dan akses pasar produk lokal.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
