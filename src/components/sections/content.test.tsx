import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import VillageProfile from "./VillageProfile";
import Problems from "./Problems";
import Programs from "./Programs";
import { potentials, problems } from "@/data/content";
import { klaster } from "@/data/klaster";

describe("VillageProfile", () => {
  it("menampilkan judul profil desa Kukuh & Kerambitan", () => {
    render(<VillageProfile />);
    expect(screen.getByRole("heading", { name: /profil desa/i })).toBeInTheDocument();
    expect(screen.getAllByText(/kukuh/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/kerambitan/i).length).toBeGreaterThan(0);
  });

  it("menampilkan 4 statistik desa", () => {
    render(<VillageProfile />);
    expect(screen.getByTestId("village-stats").children).toHaveLength(4);
  });

  it("menampilkan 4 potensi desa termasuk Alas Kedaton", () => {
    render(<VillageProfile />);
    for (const p of potentials) {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    }
  });

  it("menampilkan embed Google Maps Desa Kukuh", () => {
    render(<VillageProfile />);
    const map = screen.getByTitle(/peta desa kukuh/i);
    expect(map.getAttribute("src")).toContain("google.com/maps");
  });
});

describe("Problems", () => {
  it("menampilkan 4 pilar permasalahan", () => {
    render(<Problems />);
    for (const p of problems) {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    }
  });
});

describe("Programs", () => {
  it("menampilkan 4 klaster program kerja", () => {
    render(<Programs />);
    for (const k of klaster) {
      expect(screen.getByRole("heading", { name: k.name })).toBeInTheDocument();
      expect(screen.getByText(k.subtitle)).toBeInTheDocument();
    }
  });

  it("menampilkan nama-nama proker penting", () => {
    render(<Programs />);
    expect(screen.getByText(/SIAP LEGAL/i)).toBeInTheDocument();
    expect(screen.getByText(/DEWI KREATIF/i)).toBeInTheDocument();
    expect(screen.getByText(/DIGI-KREASI/i)).toBeInTheDocument();
    expect(screen.getByText(/BALE PINTAR/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Lubang Resapan Biopori/i).length).toBeGreaterThan(0);
  });

  it("menampilkan label SDGs pada proker", () => {
    render(<Programs />);
    expect(screen.getAllByText(/SDG \d+/i).length).toBeGreaterThan(10);
  });
});
