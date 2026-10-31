export type ClusterKey = "saintek" | "soshum" | "medika" | "agro";

export interface TeamMember {
  name: string;
  role: string;
  cluster: ClusterKey;
  clusterLabel: string;
  photo?: string;
}

export const clusters: Record<
  ClusterKey,
  { label: string; short: string; color: string }
> = {
  saintek: { label: "Klaster Saintek", short: "Saintek", color: "#2D4A32" },
  soshum: { label: "Klaster Soshum", short: "Soshum", color: "#6B8E23" },
  medika: { label: "Klaster Medika", short: "Medika", color: "#C9A227" },
  agro: { label: "Klaster Agro", short: "Agro", color: "#8B5E3C" },
};

export const team: TeamMember[] = [
  // Saintek
  { name: "Raka Fadhlurrochman Faaiz", role: "Kormanit", cluster: "saintek", clusterLabel: "Saintek", photo: "/assets/tim/raka-fadhlurrochman.jpg" },
  { name: "Abdul Hamid Awaludin Ardiansyah", role: "Kormater Saintek", cluster: "saintek", clusterLabel: "Saintek", photo: "/assets/tim/abdul-hamid.jpg" },
  { name: "Gabriel Krisdanar Nugroho", role: "DDD", cluster: "saintek", clusterLabel: "Saintek", photo: "/assets/tim/gabriel-krisdanar.jpg" },
  { name: "Ayudya Pramesti Langgeng Maharani", role: "DDD", cluster: "saintek", clusterLabel: "Saintek", photo: "/assets/tim/ayudya-pramesti.jpg" },
  // Soshum
  { name: "Sisna Bela Adelia Putri", role: "Kormater Soshum", cluster: "soshum", clusterLabel: "Soshum", photo: "/assets/tim/sisna-bela.jpg" },
  { name: "Kadja Elyoenai Kale Lado", role: "Sponsorship", cluster: "soshum", clusterLabel: "Soshum", photo: "/assets/tim/kadja-elyoenai.jpg" },
  { name: "Muhammad Fawwaza", role: "Koor SHE", cluster: "soshum", clusterLabel: "Soshum", photo: "/assets/tim/muhammad-fawwaza.jpg" },
  { name: "Jocasta Ravya Ismo", role: "Humas & Publikasi", cluster: "soshum", clusterLabel: "Soshum", photo: "/assets/tim/jocasta-ravya.jpg" },
  { name: "Putu Angelina Devi Wahyuni", role: "Koor Acara", cluster: "soshum", clusterLabel: "Soshum", photo: "/assets/tim/putu-angelina.jpg" },
  { name: "Tia Glory Basaria Purba", role: "Humas & Publikasi", cluster: "soshum", clusterLabel: "Soshum", photo: "/assets/tim/tia-glory.jpg" },
  // Medika
  { name: "Argia Padmasari", role: "Sekretaris", cluster: "medika", clusterLabel: "Medika", photo: "/assets/tim/argia-padmasari.jpg" },
  { name: "Intan Candrani Abdi Negoro", role: "Kormasit", cluster: "medika", clusterLabel: "Medika", photo: "/assets/tim/intan-candrani.jpg" },
  { name: "Zakki Muhammad Thabrani", role: "Kormater Medika", cluster: "medika", clusterLabel: "Medika", photo: "/assets/tim/zakki-thabrani.jpg" },
  { name: "Kania Zafira Roxano", role: "Sponsorship", cluster: "medika", clusterLabel: "Medika", photo: "/assets/tim/kania-zafira.jpg" },
  // Agro
  { name: "I Gede Andeka", role: "Kormasit", cluster: "agro", clusterLabel: "Agro", photo: "/assets/tim/i-gede-andeka.jpg" },
  { name: "Ilma Fatiha", role: "Kormater Agro", cluster: "agro", clusterLabel: "Agro", photo: "/assets/tim/ilma-fatiha.jpg" },
];

export const network = [
  { name: "Gde Sumarjaya Linggih", role: "Anggota DPR RI Komisi VI" },
  { name: "I Gusti Ngurah Arya Wedakarna", role: "Anggota DPD" },
  { name: "Ni Luh Djelantik", role: "Anggota DPD" },
  { name: "Dr. I Komang Gede Sanjaya", role: "Bupati Tabanan" },
  { name: "Agung Bagus Pratiksa Linggih", role: "Ketua Umum BPD HIPMI Bali" },
  { name: "I Made Sugianto", role: "Kepala Desa Kukuh" },
];
