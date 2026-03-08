import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Accent Recording Studio – Nahrávací studio v Plzni",
  description:
    "Accent Recording Studio – profesionální nahrávací studio v Plzni s 28+ lety zkušeností. Nahrávání, mastering, dabing, karaoke produkce.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
