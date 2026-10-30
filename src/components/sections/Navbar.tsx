"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "#tentang", label: "Tentang" },
  { href: "#desa", label: "Desa" },
  { href: "#program", label: "Program" },
  { href: "#sponsor", label: "Sponsor" },
  { href: "#tim", label: "Tim" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-dark/90 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <a href="#beranda" className="flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/60 font-display text-lg font-bold text-accent">
            NC
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-wide text-white">
              Nawa Cakra
            </span>
            <span className="text-[11px] tracking-widest text-white/60 uppercase">
              KKN PPM UGM 2027
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-white/80 transition hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#sponsor"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-primary-dark transition hover:bg-accent/85"
            >
              Dukung Kami
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/10 bg-primary-dark/95 px-6 py-4 backdrop-blur-md lg:hidden">
          {nav.map((item) => (
            <li key={item.href} className="py-2">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-white/90 transition hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#sponsor"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-primary-dark"
            >
              Dukung Kami
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
