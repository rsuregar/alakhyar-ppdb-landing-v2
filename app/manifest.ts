import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PPDB Al Akhyar Islamic School',
    short_name: 'PPDB Al Akhyar',
    description:
      'Penerimaan Peserta Didik Baru. Bergabung bersama Al Akhyar Islamic School Unggul dan Berprestasi.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/assets/logo-alakhyar.png',
        sizes: 'any',
      },
    ],
  }
}
