import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  themeColor: '#045591',
  colorScheme: 'light dark',
}


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PPDB Al Akhyar Islamic School",
  description: "Penerimaan Peserta Didik Baru. Bergabung bersama Al Akhyar Islamic School Unggul dan Berprestasi.",
  keywords: 'PPDB Alakhyar, sekolah islam, sekolah islam makassar, SD, SMP, SMA, TK, PAUD, Alakhyar, Alakhyar Islamic School, PPDB, Penerimaan Peserta Didik Baru, PPDB Alakhyar, PPDB Alakhyar Islamic School, PPDB Makassar, PPDB Sekolah Islam, PPDB Sekolah Islam Makassar, PPDB SD, PPDB SMP, PPDB SMA, PPDB TK, PPDB PAUD',
  appleWebApp: true,
  appLinks: {
    web: {
      'url': 'https://ppdb.alakhyar.sch.id',
      'should_fallback': false,
    }
  },
  openGraph: {
    title: 'PPDB Al Akhyar Islamic School',
    description: "Penerimaan Peserta Didik Baru. Bergabung bersama Al Akhyar Islamic School Unggul dan Berprestasi.",
    images: ['/assets/logo-alakhyar.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={GA_MEASUREMENT_ID} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
