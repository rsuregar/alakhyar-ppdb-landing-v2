import type { Metadata } from 'next'
// import localFont from "next/font/local";
import './globals.css'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { fontSans } from '@/lib/fonts'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { TailwindIndicator } from '@/components/tailwind-indicator'

import type { Viewport } from 'next'
import { SiteFooter } from '@/components/site-footer'
import AnalyticsScript from './components/AnalyticsScript'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#045591' },
    { media: '(prefers-color-scheme: light)', color: '#045591' },
  ],
}

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/assets/favicon-16x16.png',
    apple: '/assets/apple-touch-icon.png',
  },
  description: siteConfig.description,
  // appleWebApp: true,
  appLinks: {
    web: {
      url: 'https://ppdb.alakhyar.sch.id',
      should_fallback: false,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/assets/web-branding.webp'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={GA_MEASUREMENT_ID} />
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </>
          <TailwindIndicator />
        </ThemeProvider>
        <AnalyticsScript />
      </body>
    </html>
  )
}
