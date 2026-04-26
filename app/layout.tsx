import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Hamdan Sprachendienste – Professionelle Sprachdienstleistungen",
  description: "Übersetzungen, Dolmetschen & Beratung für Behörden, Gerichte und Unternehmen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased bg-background font-sans">
      <body className="min-h-full flex flex-col bg-background text-primary">
        <Navbar />
        <main className="flex-1 flex flex-col w-full mx-auto max-w-7xl px-4 md:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
