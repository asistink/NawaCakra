# SRS — Website Pitching KKN Nawa Cakra

Dokumen Spesifikasi Perangkat Lunak — turunan langsung dari PRD (lihat `docs/PRD.md`).

## 1. Lingkup Sistem

Single-page landing website (statis + animasi klien) untuk pitching KKN Nawa Cakra. Tidak ada backend custom; semua konten dikelola lewat file data (TSX/JSON) dalam repo, mudah diedit oleh user.

## 2. Stack & Arsitektur

| Layer | Teknologi | Alasan |
|---|---|---|
| Framework | Next.js 15 (App Router, static export / SSR on Vercel) | Ekosistem komponen terlengkap, SEO ready |
| Styling | Tailwind CSS v4 + CSS variables untuk palet | Konsisten dengan earth tone + emas |
| Animasi | GSAP + ScrollTrigger + Lenis smooth scroll | Replikasi feel pionir.ugm.ac.id/2026 |
| Komponen | shadcn/ui (accordion, button, card, badge, sheet) + Aceternity UI (hero effects, text-reveal) | Cepat, cantik, konsisten |
| Ikon | lucide-react | Ringan |
| Font | Playfair Display (display) + Inter (body) | Kesan elegan-natural, gratis di Google Fonts |
| Maps | Google Maps embed iframe (Desa Kukuh, Tabanan) | Tanpa API key |
| Deploy | Vercel (gratis) | Zero maintenance |

## 3. Palet Warna & Identitas Visual

| Token | Warna | Penggunaan |
|---|---|---|
| `--bg` | `#FAF7F0` (krem gading) | Background utama |
| `--bg-alt` | `#F0EBDD` | Section selang-seling |
| `--primary` | `#2D4A32` (hijau hutan) | Navbar, heading, tombol utama |
| `--accent` | `#C9A227` (emas) | Aksen, garis, hover, ikon SDG |
| `--text` | `#1F2937` | Teks body |
| `--muted` | `#6B7280` | Teks sekunder |
| Dark section | `#1E2B22` | Section sponsor/tim agar kontras |

Motif dekoratif: garis pandan/bambu, tekstur kertas, bentuk-bentuk segitiga salang (sesuai deck PPT). Foto hero: Alas Kedaton / sawah subak.

## 4. Struktur Proyek

```
nawacakra-website/
├── docs/               # PRD, SRS
├── src/app/            # layout, page (landing), metadata
├── src/components/
│   ├── sections/       # Hero, About, Desa, Masalah, Proker, Impact, Timeline, Sponsor, Tim, Dokumentasi, Kontak, Footer
│   └── ui/             # shadcn/ui components
├── src/data/           # team.ts, proker.ts, sponsors.ts, timeline.ts (mudah diedit user)
├── public/             # logo UGM, logo tim, foto, media kit PDF, og-image
└── tailwind.config / globals.css
```

## 5. Kebutuhan Fungsional (FR)

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-01 | Hero dengan nama tim, tagline, UGM, lokasi, periode, nomor kelompok (placeholder), 2 CTA, animasi intro | P0 |
| FR-02 | Navbar sticky dengan smooth scroll ke section + indikator section aktif | P0 |
| FR-03 | Section Tentang: makna "Nawa Cakra", tema besar, konteks dua desa | P0 |
| FR-04 | Section Profil Desa: stats (penduduk 5.748 jiwa, 8 dusun, 12 banjar, elevasi 104–218 mdpl), potensi (Alas Kedaton, subak, 50+ UMKM, DèBong, batu sikat, bambu), Google Maps embed | P0 |
| FR-05 | Section 4 Pilar Masalah (grid kartu) | P0 |
| FR-06 | Section Program Kerja: 4 klaster (Agro, Soshum, Medika, Saintek), tiap klaster berisi daftar proker; detail proker dalam accordion (Masalah → Program → SDGs) | P0 |
| FR-07 | Section "Kenapa Mendukung Kami": impact metrics dengan counter animasi (50 UMKM, 17 SDGs, jejaring 6 relasi strategis), daftar jejaring strategis | P0 |
| FR-08 | Section Timeline: pra-KKN → pelaksanaan → pasca-KKN/keberlanjutan | P1 |
| FR-09 | Section Paket Sponsor: 3 tier + kolaborasi non-dana, benefit per tier, tombol "Unduh Media Kit (PDF)" | P0 |
| FR-10 | Section Tim: 5 anggota (Raka, Ardi, Angel, Ilma, Gea) dengan foto, fakultas, peran | P0 |
| FR-11 | Section Dokumentasi (placeholder galeri, siap diisi) | P1 |
| FR-12 | Section Kontak/CTA: WA, IG, email, QR code | P0 |
| FR-13 | Footer: logo UGM, logo tim, copyright, disclaimer | P1 |
| FR-14 | Responsive penuh (mobile, tablet, desktop) | P0 |
| FR-15 | SEO: metadata title/description/OG image; share preview bagus di WhatsApp | P0 |
| FR-16 | QR code berisi URL website (file statis di /public) | P1 |

## 6. Kebutuhan Non-Fungsional (NFR)

| ID | Kebutuhan | Target |
|---|---|---|
| NFR-01 | Waktu load (LCP) di 4G | < 2.5s; gambar dioptimalkan (WebP/AVIF via next/image) |
| NFR-02 | Skor Lighthouse (Performance/Accessibility) | ≥ 90 untuk P0 |
| NFR-03 | Animasi | 60fps, tidak menghalangi scroll (Gunakan GSAP, bukan JS berat per-frame) |
| NFR-04 | Aksesibilitas | Kontras WCAG AA, alt text semua foto |
| NFR-05 | Maintenance | Konten cukup diubah di `src/data/`, tanpa menyentuh komponen |
| NFR-06 | Bahasa | Indonesia (hardcoded) |
| NFR-07 | Zero-cost deployment | Vercel free tier |

## 7. Konten Sumber (dari PPT & penjabaran)

- **Makna Nawa Cakra:** 9 tangan siwa (nawa = 9, cakra = roda) — slide 1.
- **Tim:** Raka (Makna & Tema Besar), Ardi (Saintek & Pendanaan), Angel (Soshum & Relasi), Ilma (Agro), Gea (Medika).
- **4 Klaster:** Agro, Soshum, Medika, Saintek — masing-masing dengan masalah, potensi, program kerja, mapping SDGs.
- **Permasalahan 4 pilar** (slide 14–18).
- **Skema pendanaan** (sponsorship + relasi) — slide 33–37.
- **Skema keberlanjutan** — slide 12–13; Analisis Desa Baru (Timpag) — slide 38–40.
- **Jejaring strategis:** Gde Sumarjaya Linggih (DPR RI Komisi VI), I Gusti Ngurah Arya Wedakarna (DPD), Ni Luh Djelantik (DPD), Dr. I Komang Gede Sanjaya (Bupati Tabanan), Agung Bagus Pratiksa Linggih (Ketua Umum BPD HIPMI Bali), I Made Sugianto (Kepala Desa Kukuh).

## 8. Kriteria Penerimaan (MVP 1 minggu)

- [ ] Semua FR berprioritas P0 berfungsi.
- [ ] Animasi halus, smooth scroll, tanpa jank di desktop & mobile.
- [ ] Google Maps Desa Kukuh tampil.
- [ ] Section sponsor dengan 3 tier + tombol media kit PDF.
- [ ] Section tim dengan 5 anggota.
- [ ] Kontak CTA dengan placeholder (WA/IG/email) yang mudah diganti.
- [ ] QR code tersedia.
- [ ] OG image + meta SEO bagus saat share di WhatsApp.
- [ ] Deployed ke Vercel dan URL bisa dibagikan.
- [ ] Loading < 2.5s di 4G.

## 9. Rencana Kerja (1 minggu)

| Hari | Aktivitas |
|---|---|
| 1 | Scaffold Next.js + Tailwind + shadcn/ui; setup palet & font; struktur section |
| 2 | Hero + Navbar + Tentang (dengan animasi GSAP & Lenis) |
| 3 | Profil Desa + Permasalahan + Program Kerja (4 klaster + accordion) |
| 4 | Kenapa Mendukung Kami + Timeline + Paket Sponsor |
| 5 | Tim + Dokumentasi + Kontak + Footer |
| 6 | Optimasi: gambar, meta SEO, OG image, QR code, Lighthouse |
| 7 | Deploy ke Vercel + QA + buffer |
