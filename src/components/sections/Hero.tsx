"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: gsap.Context | undefined;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          gsap.from("[data-hero-fade]", {
            opacity: 0,
            y: 30,
            duration: 0.9,
            stagger: 0.15,
            delay: 0.2,
            ease: "power2.out",
          });
          gsap.to("[data-hero-layer='far']", {
            yPercent: 18,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
          });
          gsap.to("[data-hero-layer='near']", {
            yPercent: 8,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
          });
        }, el);
      }
    );

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      id="beranda"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-primary-dark"
    >
      {/* Latar ilustrasi berlapis: langit, matahari, sawah subak */}
      <div
        data-hero-layer="far"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#152619] via-[#1E2B22] to-[#2D4A32]" />
        <div className="absolute right-[12%] top-[14%] h-40 w-40 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute left-[8%] top-[22%] h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
        {/* Garis kontur sawah */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,200 C240,160 360,240 560,210 C760,180 900,260 1100,230 C1260,206 1360,240 1440,220 L1440,320 L0,320 Z"
            fill="#2D4A32"
            opacity="0.55"
          />
          <path
            d="M0,240 C240,210 400,280 620,250 C840,220 980,290 1180,262 C1320,244 1400,268 1440,258 L1440,320 L0,320 Z"
            fill="#243A2B"
            opacity="0.8"
          />
          <path
            d="M0,280 C220,262 420,300 640,282 C860,264 1020,300 1240,288 C1360,281 1420,292 1440,290 L1440,320 L0,320 Z"
            fill="#1A2B20"
          />
        </svg>
      </div>

      <div
        data-hero-layer="near"
        className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6"
      >
        <p
          data-hero-fade
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-accent uppercase"
        >
          <MapPin className="h-3.5 w-3.5" />
          KKN PPM UGM Periode II 2027
        </p>
        <h1
          data-hero-fade
          className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl"
        >
          Nawa <span className="text-accent">Cakra</span>
        </h1>
        <p data-hero-fade className="mt-4 font-display text-xl text-white/90 sm:text-2xl">
          {site.tagline}
        </p>
        <p
          data-hero-fade
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base"
        >
          Membangun
          <span className="text-accent"> Desa Kukuh</span> dan
          <span className="text-accent"> Desa Kerambitan</span> di Kabupaten Tabanan, Bali,
          menggerakkan pembaruan melalui sembilan sektor pemberdayaan desa.
        </p>
        <p data-hero-fade className="mt-4 text-xs italic text-white/50">
          “{site.motto}”
        </p>

        <div data-hero-fade className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#sponsor"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-primary-dark shadow-lg shadow-accent/20 transition hover:bg-accent/85 hover:shadow-accent/35"
          >
            Dukung Program Kami
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#program"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
          >
            Lihat Program Kerja
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
