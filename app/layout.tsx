import type { Metadata } from "next";
import "./globals.css";

import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
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
    /*
     * "dark" as default matches our dark-first design so the server render
     * and first client paint are in sync — no flash for new visitors.
     * suppressHydrationWarning lets ThemeProvider swap the class on mount
     * without a React hydration warning.
     */
    <html
      lang="de"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} antialiased dark`}
      suppressHydrationWarning
    >
      <body className="font-body bg-cream dark:bg-navy text-navy dark:text-white min-h-screen flex flex-col transition-colors duration-300">
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
