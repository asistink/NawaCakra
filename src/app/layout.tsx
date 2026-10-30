import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: "Nawa Cakra | KKN PPM UGM 2027 | Desa Kukuh & Kerambitan, Tabanan, Bali",
  description:
    "Tim KKN PPM UGM Periode II 2027. Menggerakkan pembaruan secara menyeluruh dan selaras melalui sembilan sektor pemberdayaan desa. Harmoni Ekologi, Akselerasi Ekonomi.",
  openGraph: {
    title: "Nawa Cakra | KKN PPM UGM 2027",
    description:
      "Harmoni Ekologi, Akselerasi Ekonomi. Dukung program pemberdayaan Desa Kukuh & Kerambitan, Tabanan, Bali.",
    type: "website",
    locale: "id_ID",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nawa Cakra | KKN PPM UGM 2027",
    description:
      "Harmoni Ekologi, Akselerasi Ekonomi. Dukung program pemberdayaan Desa Kukuh & Kerambitan, Tabanan, Bali.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable} h-full antialiased js`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
