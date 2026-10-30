import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import { site } from "@/data/site";

describe("Navbar", () => {
  it("menampilkan brand Nawa Cakra dan menu navigasi utama", () => {
    render(<Navbar />);
    expect(screen.getByText(/nawa cakra/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /tentang/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /desa/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /program/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sponsor/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /tim/i })).toBeInTheDocument();
  });

  it("link nav mengarah ke anchor section yang benar", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /sponsor/i }).getAttribute("href")).toBe("#sponsor");
    expect(screen.getByRole("link", { name: /tim/i }).getAttribute("href")).toBe("#tim");
  });
});

describe("Hero", () => {
  it("menampilkan nama tim, tagline, dan lokasi", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/nawa cakra/i);
    expect(screen.getByText(site.tagline)).toBeInTheDocument();
    expect(screen.getByText(/kabupaten tabanan, bali/i)).toBeInTheDocument();
    expect(screen.getByText(/kkn ppm ugm periode ii 2027/i)).toBeInTheDocument();
  });

  it("menampilkan dua CTA utama", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /dukung program kami/i }).getAttribute("href")).toBe("#sponsor");
    expect(screen.getByRole("link", { name: /lihat program kerja/i }).getAttribute("href")).toBe("#program");
  });

  it("menampilkan motto tim", () => {
    render(<Hero />);
    expect(screen.getByText(new RegExp(site.motto))).toBeInTheDocument();
  });
});

describe("About (Tentang)", () => {
  it("menjelaskan makna Nawa Cakra dan tema besar", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: /makna/i })).toBeInTheDocument();
    const makna = screen.getByText(/bahasa sansekerta/i);
    expect(makna).toHaveTextContent("sembilan");
    expect(makna).toHaveTextContent("roda");
    expect(screen.getByText(/sembilan sektor pemberdayaan/i)).toBeInTheDocument();
  });

  it("menampilkan 9 sektor pemberdayaan", () => {
    render(<About />);
    const list = screen.getByTestId("sektor-list");
    expect(within(list).getAllByRole("listitem")).toHaveLength(9);
    expect(within(list).getByText(/digital/i)).toBeInTheDocument();
    expect(within(list).getByText(/kesehatan/i)).toBeInTheDocument();
    expect(within(list).getByText(/pendidikan/i)).toBeInTheDocument();
  });
});
