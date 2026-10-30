import Reveal from "@/components/Reveal";
import { CheckCircle2, FileDown, HandHeart, ArrowRight } from "lucide-react";
import { sponsorTiers } from "@/data/content";
import { site } from "@/data/site";

export default function Sponsors() {
  return (
    <section id="sponsor" className="bg-primary-dark py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Paket Kerjasama
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Jadilah <span className="text-accent">Mitra Nawa Cakra</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Dukungan Anda menjadi bahan bakar program pemberdayaan Desa Kukuh &amp;
            Kerambitan, didampingi dokumentasi dan publikasi yang transparan.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {sponsorTiers.map((t, i) => (
            <Reveal
              key={t.tier}
              delay={i * 0.08}
              className={`relative flex flex-col rounded-3xl p-8 ${
                t.featured
                  ? "bg-accent text-primary-dark shadow-2xl shadow-accent/20 lg:-translate-y-4"
                  : "border border-white/15 bg-white/[0.04]"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-dark shadow">
                  Paling Berdampak
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold">{t.tier}</h3>
              <p
                className={`mt-2 text-sm font-medium ${t.featured ? "text-primary-dark/70" : "text-accent"}`}
              >
                {t.amount}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed">
                    <CheckCircle2
                      className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-primary-dark" : "text-accent"}`}
                    />
                    <span className={t.featured ? "text-primary-dark/80" : "text-white/75"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#kontak"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                  t.featured
                    ? "bg-primary-dark text-white hover:bg-primary"
                    : "border border-accent text-accent hover:bg-accent hover:text-primary-dark"
                }`}
              >
                Hubungi Kami
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          ))}
        </div>

        {/* Media kit + kolaborasi non-dana */}
        <Reveal delay={0.12} className="mt-14">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:flex-row sm:p-10">
            <div className="flex items-start gap-4">
              <HandHeart className="h-8 w-8 shrink-0 text-accent" />
              <div>
                <h3 className="font-display text-lg font-semibold">
                  Kolaborasi non-dana juga terbuka
                </h3>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/70">
                  Sponsorship material, logistik, produk, maupun relasi bisnis bisa
                  disesuaikan dengan potensi dan kebutuhan Anda. Detail lengkap tersedia di media kit.
                </p>
              </div>
            </div>
            <a
              href="/mediakit/media-kit-nawa-cakra.pdf"
              download
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary-dark transition hover:bg-accent/85"
            >
              <FileDown className="h-4 w-4" />
              Unduh Media Kit
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-white/40">
            Perlu berdiskusi? Hubungi kami via WhatsApp ({site.contact.whatsapp}) atau email{" "}
            {site.contact.email}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
