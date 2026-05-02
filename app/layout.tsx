import type { Metadata } from "next";
import "./globals.css";

import { Bricolage_Grotesque, Inter, DM_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hamdan Sprachendienste – Professionelle Sprachdienstleistungen",
  description:
    "Professionelles Dolmetschen & Übersetzen für Behörden, Gerichte und Unternehmen – kompetent, zuverlässig, beglaubigt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${bricolage.variable} ${inter.variable} ${dmMono.variable} antialiased dark`}
      suppressHydrationWarning
    >
      <body className="font-body bg-white dark:bg-navy-light text-navy dark:text-white min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 flex flex-col w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
