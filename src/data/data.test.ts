import { describe, it, expect } from "vitest";
import { site } from "@/data/site";
import { team, clusters, network } from "@/data/team";
import { klaster } from "@/data/klaster";
import {
  villageStats,
  potentials,
  problems,
  timeline,
  sponsorTiers,
  sdgList,
} from "@/data/content";

describe("Site config", () => {
  it("memiliki nama tim Nawa Cakra dan UGM", () => {
    expect(site.name).toBe("Nawa Cakra");
    expect(site.university).toBe("Universitas Gadjah Mada");
    expect(site.tagline).toBe("Harmoni Ekologi, Akselerasi Ekonomi");
  });

  it("memiliki kontak placeholder", () => {
    expect(site.contact.whatsapp).toBeTruthy();
    expect(site.contact.instagram).toBeTruthy();
    expect(site.contact.email).toBeTruthy();
  });
});

describe("Data tim", () => {
  it("memiliki 16 anggota", () => {
    expect(team).toHaveLength(16);
  });

  it("Raka adalah Kormanit di Saintek", () => {
    const raka = team.find((m) => m.name.includes("Raka"));
    expect(raka).toBeDefined();
    expect(raka!.role).toBe("Kormanit");
    expect(raka!.cluster).toBe("saintek");
  });

  it("setiap anggota memiliki cluster yang valid", () => {
    for (const m of team) {
      expect(clusters[m.cluster]).toBeDefined();
    }
  });

  it("memiliki 6 jejaring strategis", () => {
    expect(network).toHaveLength(6);
    expect(network.some((n) => n.name.includes("Sugianto"))).toBe(true);
  });
});

describe("Data klaster program kerja", () => {
  it("memiliki 4 klaster: agro, soshum, medika, saintek", () => {
    expect(klaster).toHaveLength(4);
    expect(klaster.map((k) => k.id)).toEqual(
      expect.arrayContaining(["agro", "soshum", "medika", "saintek"])
    );
  });

  it("klaster soshum memiliki 4 program (SIAP LEGAL, DEWI KREATIF, DIGI-KREASI, BALE PINTAR)", () => {
    const soshum = klaster.find((k) => k.id === "soshum")!;
    expect(soshum.programs).toHaveLength(4);
    expect(soshum.programs[0].title).toContain("SIAP LEGAL");
    expect(soshum.programs[1].title).toContain("DEWI KREATIF");
    expect(soshum.programs[2].title).toContain("DIGI-KREASI");
    expect(soshum.programs[3].title).toContain("BALE PINTAR");
  });

  it("setiap program memiliki detail dan SDGs", () => {
    for (const k of klaster) {
      for (const p of k.programs) {
        expect(p.title.length).toBeGreaterThan(0);
        expect(p.summary.length).toBeGreaterThan(0);
        expect(p.detail.length).toBeGreaterThan(0);
        expect(p.sdgs.length).toBeGreaterThan(0);
      }
    }
  });
});

describe("Data konten desa & sponsor", () => {
  it("statistik desa Kukuh sesuai data (5.748 jiwa, 8 dusun, 12 banjar)", () => {
    expect(villageStats[0]).toMatchObject({ value: 5748, label: "Jiwa (2024)" });
    expect(villageStats[1].value).toBe(8);
    expect(villageStats[2].value).toBe(12);
  });

  it("memiliki 4 potensi desa termasuk Alas Kedaton & 50+ UMKM", () => {
    expect(potentials).toHaveLength(4);
    expect(potentials[0].title).toBe("Alas Kedaton");
    expect(potentials[2].title).toContain("UMKM");
  });

  it("memiliki 4 pilar permasalahan", () => {
    expect(problems).toHaveLength(4);
  });

  it("timeline memiliki 3 fase", () => {
    expect(timeline.map((t) => t.phase)).toEqual([
      "Pra-KKN",
      "Pelaksanaan",
      "Pasca-KKN",
    ]);
  });

  it("paket sponsor memiliki 3 tier dengan tier utama ditandai featured", () => {
    expect(sponsorTiers).toHaveLength(3);
    expect(sponsorTiers.filter((t) => t.featured)).toHaveLength(1);
    expect(sponsorTiers[0].tier).toBe("Mitra Utama");
  });

  it("memiliki mapping 14 SDGs", () => {
    expect(sdgList).toHaveLength(14);
  });
});
