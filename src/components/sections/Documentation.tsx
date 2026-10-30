import Reveal from "@/components/Reveal";
import { Camera } from "lucide-react";

const slots = [
  { label: "Persiapan & LKK", span: "sm:col-span-2" },
  { label: "Kehidupan Desa", span: "" },
  { label: "Klaster Agro", span: "" },
  { label: "Klaster Soshum", span: "" },
  { label: "Klaster Medika", span: "" },
  { label: "Klaster Saintek", span: "sm:col-span-2" },
];

export default function Documentation() {
  return (
    <section id="dokumentasi" className="bg-bg-alt py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Dokumentasi
          </p>
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
            Perjalanan <span className="text-accent">Kami di Desa</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Galeri ini akan terisi sepanjang pelaksanaan KKN sebagai bukti nyata
            pemberdayaan yang berjalan.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-4">
          {slots.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.06}
              className={`flex min-h-48 flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-primary/20 bg-white/50 p-6 text-center ${s.span}`}
            >
              <Camera className="h-7 w-7 text-primary/30" />
              <p className="text-sm font-semibold text-primary/60">{s.label}</p>
              <p className="text-xs text-muted/70">Foto menyusul saat KKN berjalan</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
