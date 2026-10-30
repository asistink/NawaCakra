export type ClusterKey = "saintek" | "soshum" | "medika" | "agro";

export interface TeamMember {
  name: string;
  role: string;
  cluster: ClusterKey;
  clusterLabel: string;
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
  { name: "Raka Fadlurrochman Faaiz", role: "Kormanit", cluster: "saintek", clusterLabel: "Saintek" },
  { name: "Abdul Hamid Awaludin Ardiansyah", role: "Kormater Saintek", cluster: "saintek", clusterLabel: "Saintek" },
  { name: "Gabriel Krisdanar Nugroho", role: "DDD", cluster: "saintek", clusterLabel: "Saintek" },
  { name: "Ayudya Pramesti Langgeng Maharani", role: "DDD", cluster: "saintek", clusterLabel: "Saintek" },
  // Soshum
  { name: "Sisna Bela Adelia Putri", role: "Kormater Soshum", cluster: "soshum", clusterLabel: "Soshum" },
  { name: "Kadja Elyoenai Kale Lado", role: "Sponsorship", cluster: "soshum", clusterLabel: "Soshum" },
  { name: "Muhammad Fawwaza", role: "Koor SHE", cluster: "soshum", clusterLabel: "Soshum" },
  { name: "Jocasta Ravya Ismo", role: "Humas & Publikasi", cluster: "soshum", clusterLabel: "Soshum" },
  { name: "Putu Angelina Devi Wahyuni", role: "Koor Acara", cluster: "soshum", clusterLabel: "Soshum" },
  { name: "Tia Glory Basaria Purba", role: "Humas & Publikasi", cluster: "soshum", clusterLabel: "Soshum" },
  // Medika
  { name: "Argia Padmasari", role: "Sekretaris", cluster: "medika", clusterLabel: "Medika" },
  { name: "Intan Candrani Abdi Negoro", role: "Kormasit", cluster: "medika", clusterLabel: "Medika" },
  { name: "Zakki Muhammad Thabrani", role: "Kormater Medika", cluster: "medika", clusterLabel: "Medika" },
  { name: "Kania Zafira Roxano", role: "Sponsorship", cluster: "medika", clusterLabel: "Medika" },
  // Agro
  { name: "I Gede Andeka", role: "Kormasit", cluster: "agro", clusterLabel: "Agro" },
  { name: "Ilma Fatiha", role: "Kormater Agro", cluster: "agro", clusterLabel: "Agro" },
];

export const network = [
  { name: "Gde Sumarjaya Linggih", role: "Anggota DPR RI Komisi VI" },
  { name: "I Gusti Ngurah Arya Wedakarna", role: "Anggota DPD" },
  { name: "Ni Luh Djelantik", role: "Anggota DPD" },
  { name: "Dr. I Komang Gede Sanjaya", role: "Bupati Tabanan" },
  { name: "Agung Bagus Pratiksa Linggih", role: "Ketua Umum BPD HIPMI Bali" },
  { name: "I Made Sugianto", role: "Kepala Desa Kukuh" },
];
