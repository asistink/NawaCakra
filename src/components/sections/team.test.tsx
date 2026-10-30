import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";
import { team, clusters } from "@/data/team";
import { site } from "@/data/site";

describe("Team", () => {
  it("menampilkan heading profil tim", () => {
    render(<Team />);
    expect(screen.getByRole("heading", { name: /tim nawa cakra|tim kami|profil tim/i })).toBeInTheDocument();
  });

  it("menampilkan semua 16 anggota tim", () => {
    render(<Team />);
    for (const m of team) {
      expect(screen.getByText(m.name)).toBeInTheDocument();
      expect(screen.getAllByText(m.role).length).toBeGreaterThan(0);
    }
  });

  it("mengelompokkan anggota berdasarkan 4 klaster", () => {
    render(<Team />);
    for (const key of Object.keys(clusters)) {
      expect(screen.getByText(clusters[key as keyof typeof clusters].label)).toBeInTheDocument();
    }
  });
});

describe("Contact", () => {
  it("menampilkan CTA ajakan dukungan & kontak", () => {
    render(<Contact />);
    expect(screen.getByRole("heading", { name: /hubungi kami|hubungi nawa cakra/i })).toBeInTheDocument();
  });

  it("menampilkan kontak WhatsApp, Instagram, dan Email", () => {
    render(<Contact />);
    expect(screen.getByText(site.contact.whatsapp)).toBeInTheDocument();
    expect(screen.getByText(site.contact.instagram)).toBeInTheDocument();
    expect(screen.getByText(site.contact.email)).toBeInTheDocument();
  });

  it("link WhatsApp mengarah ke wa.me", () => {
    render(<Contact />);
    const wa = screen.getByRole("link", { name: /whatsapp/i });
    expect(wa.getAttribute("href")).toContain("wa.me");
  });
});

describe("Footer", () => {
  it("menampilkan logo UGM dan copyright tim", () => {
    render(<Footer />);
    const logo = screen.getByAltText(/lambang universitas gadjah mada/i);
    expect(logo).toBeInTheDocument();
    expect(screen.getByText(/^nawa cakra$/i)).toBeInTheDocument();
    expect(screen.getAllByText(/2027/i).length).toBeGreaterThan(0);
  });
});
