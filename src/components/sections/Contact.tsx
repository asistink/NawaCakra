import Reveal from "@/components/Reveal";
import Image from "next/image";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  const waNumber = site.contact.whatsapp.replace(/[^0-9]/g, "");
  return (
    <section id="kontak" className="bg-primary-dark py-24 text-white sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Ayo Berkolaborasi
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Hubungi <span className="text-accent">Nawa Cakra</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            Tertarik menjadi sponsor, kolaborator, atau sekadar ingin tahu lebih lanjut
            tentang program kami? Kami menantikan kabar Anda.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <Reveal className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-accent/50">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary-dark">
              <MessageCircle className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50">WhatsApp</p>
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${site.contact.whatsapp}`}
                className="mt-1 block text-sm font-semibold text-white transition group-hover:text-accent"
              >
                {site.contact.whatsapp}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-accent/50">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary-dark">
              <Mail className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50">Email</p>
              <a
                href={`mailto:${site.contact.email}`}
                className="mt-1 block text-sm font-semibold text-white transition group-hover:text-accent"
              >
                {site.contact.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-accent/50">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary-dark">
              <Phone className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50">Instagram</p>
              <a
                href={`https://instagram.com/${site.contact.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm font-semibold text-white transition group-hover:text-accent"
              >
                {site.contact.instagram}
              </a>
            </div>
          </Reveal>
        </div>

        {/* QR code */}
        <Reveal delay={0.2} className="mt-12 flex flex-col items-center gap-3">
          <div className="rounded-2xl bg-white p-3 shadow-lg">
            <Image
              src="/assets/qr-code.svg"
              alt="QR code menuju website Nawa Cakra"
              width={140}
              height={140}
            />
          </div>
          <p className="text-xs text-white/50">
            Pindai untuk membuka website di ponsel
          </p>
        </Reveal>
      </div>
    </section>
  );
}
