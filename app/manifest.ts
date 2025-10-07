import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SMPB Al Akhyar Islamic School',
    short_name: 'SMPB Al Akhyar',
    description:
      'Sistem Penerimaan Murid Baru. Bergabung bersama Al Akhyar Islamic School Unggul dan Berprestasi.',
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
