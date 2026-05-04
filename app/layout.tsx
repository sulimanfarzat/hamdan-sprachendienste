import type { Metadata } from "next";
import "./globals.css";

import { Bricolage_Grotesque, Inter, DM_Mono, Cairo } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import { LanguageProvider } from "../components/LanguageProvider";

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

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://www.hamdan-sprachendienste.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hamdan Sprachendienste – Arabisch Deutsch Übersetzer & Dolmetscher",
    template: "%s | Hamdan Sprachendienste",
  },
  description:
    "Vereidigter Arabisch-Deutsch Übersetzer und Dolmetscher für Behörden, Gerichte und Unternehmen. Beglaubigte Übersetzungen, Urkundendolmetschen – bundesweit tätig, Büros in Dresden und Mannheim.",
  keywords: [
    "Arabisch Deutsch Übersetzer",
    "Arabisch Deutsch Dolmetscher",
    "beglaubigte Übersetzung Arabisch Deutsch",
    "vereidigter Arabisch Übersetzer",
    "Arabisch Übersetzungsbüro",
    "Arabisch Dolmetscher Gericht",
    "Arabisch Dolmetscher Behörde",
    "Arabisch Übersetzer Deutschland",
    "Arabisch Übersetzer Dresden",
    "Arabisch Übersetzer Mannheim",
    "Urkundenübersetzung Arabisch",
    "Sprachendienste Arabisch",
    "مترجم عربي ألماني",
    "ترجمة عربي ألماني",
  ],
  authors: [{ name: "Hamdan Sprachendienste" }],
  creator: "Hamdan Sprachendienste",
  publisher: "Hamdan Sprachendienste",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Hamdan Sprachendienste",
    title: "Hamdan Sprachendienste – Arabisch Deutsch Übersetzer & Dolmetscher",
    description:
      "Vereidigter Arabisch-Deutsch Übersetzer und Dolmetscher für Behörden, Gerichte und Unternehmen. Beglaubigte Übersetzungen bundesweit.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hamdan Sprachendienste" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamdan Sprachendienste – Arabisch Deutsch Übersetzer & Dolmetscher",
    description:
      "Vereidigter Arabisch-Deutsch Übersetzer und Dolmetscher. Beglaubigte Übersetzungen, Gericht & Behörden – bundesweit.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "Hamdan Sprachendienste",
  description:
    "Vereidigter Arabisch-Deutsch Übersetzer und Dolmetscher für Behörden, Gerichte und Unternehmen. Beglaubigte Übersetzungen bundesweit.",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.png`,
  telephone: "",
  email: "info@hamdan-sprachendienste.de",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Dresden",
      addressCountry: "DE",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Mannheim",
      addressCountry: "DE",
    },
  ],
  areaServed: { "@type": "Country", name: "Deutschland" },
  knowsLanguage: ["de", "ar"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Arabisch-Deutsch Sprachdienstleistungen",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Arabisch-Deutsch Übersetzung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beglaubigte Urkundenübersetzung Arabisch" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Arabisch-Deutsch Dolmetschen" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gerichtsdolmetschen Arabisch" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${bricolage.variable} ${inter.variable} ${dmMono.variable} ${cairo.variable} antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-white dark:bg-navy-light text-navy dark:text-white min-h-screen flex flex-col transition-colors duration-300">
        <LanguageProvider>
          <ThemeProvider>
            <Navbar />
            <main className="flex-1 flex flex-col w-full">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
