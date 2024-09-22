import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AnalyticsScript from "./components/AnalyticsScript";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AnalyticsScript />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

          {children}
          
      </body>
    </html>
  );
}
