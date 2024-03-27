import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { Footer } from '@/components/Footer/Footer';

export const metadata = {
  title: 'PPDB Al Akhyar Islamic School',
  description:
    'Penerimaan Peserta Didik Baru Tahun Ajaran 2024/2025. Bergabung bersama Al Akhyar Islamic School Unggul dan Berprestasi.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        {/* facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ppdb.alakhyar.sch.id/" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/ppdb/promo-min.png" />
        {/* twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ppdb.alakhyar.sch.id/" />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content="/ppdb/promo-min.png"></meta>
      </head>
      <body>
        <MantineProvider theme={theme}>
        {children}
        <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
