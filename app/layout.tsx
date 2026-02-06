import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Barber changes lives | Frizerie București",
    template: "%s | Barber changes lives",
  },
  description:
    "Frizerie premium în București. Tunsori, barbă, îngrijire. Barber changes lives – unde stilul întâlnește experiența.",
  keywords: ["frizerie", "barber", "București", "tunsori", "barbă", "Barber changes lives"],
  authors: [{ name: "Barber changes lives" }],
  openGraph: {
    type: "website",
    locale: "ro_RO",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Sari la conținut
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
