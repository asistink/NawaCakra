import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Impact from "./Impact";
import Timeline from "./Timeline";
import Sponsors from "./Sponsors";
import { sponsorTiers } from "@/data/content";
import { network } from "@/data/team";

describe("Impact (Kenapa Mendukung Kami)", () => {
  it("menampilkan heading ajakan dukungan", () => {
    render(<Impact />);
    expect(
      screen.getByRole("heading", { name: /dampak nyata|kenapa mendukung/i })
    ).toBeInTheDocument();
  });

  it("menampilkan angka dampak (50 UMKM, 9 sektor, 14 SDGs)", () => {
    render(<Impact />);
    expect(screen.getByTestId("impact-umkm")).toHaveTextContent("50");
    expect(screen.getByTestId("impact-sektor")).toHaveTextContent("9");
    expect(screen.getByTestId("impact-sdgs")).toHaveTextContent("14");
  });

  it("menampilkan jejaring strategis", () => {
    render(<Impact />);
    for (const n of network) {
      expect(screen.getByText(n.name)).toBeInTheDocument();
    }
  });
});

describe("Timeline", () => {
  it("menampilkan 3 fase kegiatan", () => {
    render(<Timeline />);
    expect(screen.getByText("Pra-KKN")).toBeInTheDocument();
    expect(screen.getByText("Pelaksanaan")).toBeInTheDocument();
    expect(screen.getByText("Pasca-KKN")).toBeInTheDocument();
  });
});

describe("Sponsors", () => {
  it("menampilkan heading ajakan sponsor", () => {
    render(<Sponsors />);
    expect(
      screen.getByRole("heading", { name: /paket sponsor|kapan menjadi mitra|jadilah mitra/i })
    ).toBeInTheDocument();
  });

  it("menampilkan 3 tier paket sponsor beserta nominal", () => {
    render(<Sponsors />);
    for (const t of sponsorTiers) {
      expect(screen.getByText(t.tier)).toBeInTheDocument();
      expect(screen.getByText(t.amount)).toBeInTheDocument();
    }
  });

  it("menampilkan tombol unduh media kit", () => {
    render(<Sponsors />);
    const btn = screen.getByRole("link", { name: /unduh media kit|media kit/i });
    expect(btn).toBeInTheDocument();
    expect(btn.getAttribute("href")).toContain("/mediakit");
  });
});
