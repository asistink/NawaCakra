export interface Program {
  title: string;
  summary: string;
  detail: string[];
  sdgs: string[];
}

export interface Klaster {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  programs: Program[];
}

export const klaster: Klaster[] = [
  {
    id: "agro",
    name: "Klaster Agro",
    subtitle: "Pertanian & Peternakan Sirkular (Zero Waste)",
    icon: "sprout",
    programs: [
      {
        title: "Energi Biogas",
        summary:
          "Demplot Biodigester Portable pengolah kotoran babi menjadi biogas gratis untuk kompor warga sekaligus menghilangkan bau pencemaran.",
        detail: [
          "Pembuatan demplot biodigester portable di kandang mitra.",
          "Pelatihan pengoperasian & perawatan kepada peternak.",
          "Hasil sampingan (bioslurry) dimanfaatkan sebagai pupuk organik.",
        ],
        sdgs: ["SDG 7", "SDG 12", "SDG 13"],
      },
      {
        title: "Tata Kelola Ternak",
        summary:
          "Pemasangan logbook/papan pencatatan siklus ternak di area kandang untuk mencegah kerugian peternak dan mengoptimalkan angka kelahiran.",
        detail: [
          "Pemasangan papan pencatatan siklus ternak di kandang.",
          "Pendampingan pencatatan rutin oleh peternak.",
          "Analisis data untuk perbaikan manajemen ternak.",
        ],
        sdgs: ["SDG 8"],
      },
      {
        title: "Kebun & Pakan Mandiri",
        summary:
          "Pemanfaatan kebun pekarangan berpupuk bioslurry dan budidaya pakan Maggot BSF untuk kemandirian pangan dan penghematan biaya pakan.",
        detail: [
          "Pembudidayaan Maggot BSF sebagai pakan alternatif.",
          "Pemanfaatan bioslurry sebagai pupuk pekarangan.",
          "Demplot kebun sayuran dan bunga pekarangan.",
        ],
        sdgs: ["SDG 2", "SDG 12"],
      },
    ],
  },
  {
    id: "soshum",
    name: "Klaster Soshum",
    subtitle: "Legalitas, Digitalisasi UMKM & Agrowisata",
    icon: "store",
    programs: [
      {
        title: "SIAP LEGAL: Solusi Asistensi Perizinan & Legalitas Usaha",
        summary:
          "Dari ±50 UMKM Desa Kukuh, lebih dari 80% belum memiliki legalitas lengkap. Program ini mendampingi penerbitan NIB via OSS dan sertifikasi SPP-IRT agar produk lokal bisa masuk pasar modern, QRIS, dan ekspor.",
        detail: [
          "Asistensi Legalitas Usaha Mandiri: pendaftaran NIB berbasis risiko melalui OSS.",
          "Edukasi & pendampingan Sertifikasi Pangan (SPP-IRT) dan perizinan pangan.",
          "Penyuluhan standardisasi & keamanan pangan (higiene, sanitasi, label).",
        ],
        sdgs: ["SDG 8", "SDG 9", "SDG 12"],
      },
      {
        title: "DEWI KREATIF: Desa Wisata & Agrowisata Terpadu",
        summary:
          "Alas Kedaton adalah jangkar pariwisata Desa Kukuh, namun wisatawan datang lalu pergi. Program ini merangkai subak, kuliner, kerajinan, dan budaya menjadi paket wisata yang memperpanjang kunjungan dan mendongkrak ekonomi desa.",
        detail: [
          "Pemetaan potensi pariwisata: inventarisasi budaya, lanskap subak, kuliner, kerajinan.",
          "Penyusunan paket wisata terpadu (kultur, agrowisata, edukasi) + katalog digital.",
          "Rekomendasi strategis pengembangan agrowisata bersama Pemerintah Desa, BUMDes, Pokdarwis.",
        ],
        sdgs: ["SDG 8", "SDG 11", "SDG 17"],
      },
      {
        title: "DIGI-KREASI: Digitalisasi, Branding & Keuangan UMKM",
        summary:
          "Produk unggulan seperti keripik gedebong \"DèBong\" dan ukiran batu sikat belum memiliki identitas visual. Program ini menghadirkan branding, kemasan modern, katalog digital, WhatsApp Business, QRIS, dan pembukuan sederhana.",
        detail: [
          "Penguatan branding & kemasan: logo, desain kemasan, fotografi produk.",
          "Optimalisasi pemasaran digital: katalog digital, WhatsApp Business, marketplace, QRIS.",
          "Pelatihan konten promosi & pembukuan keuangan sederhana.",
        ],
        sdgs: ["SDG 1", "SDG 8", "SDG 9"],
      },
      {
        title: "BALE PINTAR: Bimbingan Belajar & Edukasi Kreatif Anak & Warga",
        summary:
          "Wadah belajar interaktif di luar jam sekolah untuk anak-anak desa serta kelas edukasi warga: pertanian modern, literasi keuangan remaja, berpikir kritis, dan perencanaan karier.",
        detail: [
          "Bimbingan belajar interaktif anak (fun learning) di balai banjar.",
          "Gerakan literasi & edukasi kreatif: pojok baca, mendongeng, kelas kerajinan.",
          "Kelas edukasi interaktif warga: pertanian modern, literasi keuangan, berpikir kritis, karier.",
        ],
        sdgs: ["SDG 4", "SDG 10", "SDG 17"],
      },
    ],
  },
  {
    id: "medika",
    name: "Klaster Medika",
    subtitle: "Kesehatan Keluarga, PTM & Cegah Stunting",
    icon: "heart",
    programs: [
      {
        title: "Cegah Stunting: Piring Sakit",
        summary:
          "Penyusunan modul dan demonstrasi resep gizi lokal \"PIRING SAKIT\" yang diteruskan oleh Posyandu, Puskesmas, dan ibu hamil untuk penyediaan gizi anak.",
        detail: [
          "Modul edukasi gizi berbasis bahan pangan lokal.",
          "Demonstrasi resep bergizi kepada ibu-ibu & kader posyandu.",
          "Kolaborasi dengan Posyandu & Puskesmas untuk keberlanjutan.",
        ],
        sdgs: ["SDG 2", "SDG 3"],
      },
      {
        title: "Kesehatan Gigi & TOGA",
        summary:
          "Rekam kesehatan gigi anak dan pembuatan Kebun TOGA (Tanaman Obat Keluarga) menggunakan media botol plastik bekas sebagai data acuan rujukan Puskesmas.",
        detail: [
          "Pemeriksaan & pencatatan kesehatan gigi anak.",
          "Pembuatan Kebun TOGA dari botol plastik bekas.",
          "Edukasi perawatan gigi untuk anak dan orang tua.",
        ],
        sdgs: ["SDG 3"],
      },
      {
        title: "Edukasi Digital & Perilaku Sehat",
        summary:
          "Pembentukan Grup WhatsApp \"Senyum Sehat\" dan penyebaran materi edukasi bahaya rokok & alkohol sebagai saluran informasi kesehatan berkelanjutan.",
        detail: [
          "Pembentukan grup WhatsApp edukasi kesehatan.",
          "Konten edukasi bahaya rokok dan alkohol.",
          "Monitoring & evaluasi perilaku kesehatan warga.",
        ],
        sdgs: ["SDG 3"],
      },
    ],
  },
  {
    id: "saintek",
    name: "Klaster Saintek",
    subtitle: "Akses Layanan & Konservasi Air Desa",
    icon: "droplets",
    programs: [
      {
        title: "Digitalisasi Administrasi & Portal Informasi Desa",
        summary:
          "Restrukturisasi data desa, pembuatan modul formulir digital untuk surat pengantar & administrasi kependudukan, serta pelatihan SOP perangkat desa agar sistem berjalan mandiri pasca-KKN.",
        detail: [
          "Restrukturisasi & pembaruan data desa + peta digital interaktif.",
          "Pengembangan layanan publik digital (KTP, KK, surat keterangan).",
          "Pendampingan & pelatihan teknis perangkat desa.",
        ],
        sdgs: ["SDG 9", "SDG 11", "SDG 16"],
      },
      {
        title: "Konservasi Air: Lubang Resapan Biopori (LRB) Terpadu",
        summary:
          "Pemasangan titik LRB bertutup pipa PVC di fasilitas umum, balai banjar, sekolah, dan pekarangan warga untuk mencegah genangan & memanen kompos.",
        detail: [
          "Edukasi & sosialisasi resapan air kepada masyarakat.",
          "Pemasangan titik biopori terpadu di titik strategis.",
          "Penyusunan panduan pemeliharaan & pemanenan kompos.",
        ],
        sdgs: ["SDG 6", "SDG 11", "SDG 12", "SDG 13"],
      },
      {
        title: "Inspeksi Kualitas Air Desa Berbasis Parametrik",
        summary:
          "Pengujian air bersih warga (pH, TDS, suhu, kekeruhan) secara real-time, edukasi standar SNI, serta pemetaan kualitas air dan rekomendasi penanganan.",
        detail: [
          "Pemeriksaan parametrik kualitas air rumah tangga.",
          "Edukasi standar air bersih & kesehatan (SNI).",
          "Visualisasi pemetaan & rekomendasi penanganan.",
        ],
        sdgs: ["SDG 3", "SDG 6", "SDG 15"],
      },
    ],
  },
];
