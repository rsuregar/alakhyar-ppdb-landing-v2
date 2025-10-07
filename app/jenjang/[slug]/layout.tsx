import { Metadata } from 'next'
import Page from './page' // Import your page

type PageLayoutProps = {
  params: Promise<{
    slug: string
  }>
}

// Use `generateMetadata` to create dynamic metadata
export async function generateMetadata({
  params,
}: PageLayoutProps): Promise<Metadata> {
  const { slug } = await params

  const mapping: any = {
    tkit: {
      title: 'TK Islam Al Akhyar',
      description:
        'SPMB AL AKHYAR ISLAMIC SCHOOL - Sekolah TK Islam terbaik di Makassar. Dipercaya oleh ratusan orangtua siswa. Daftar sekarang juga.',
    },
    sdit: {
      title: 'SD Islam Al Akhyar',
      description:
        'SPMB AL AKHYAR ISLAMIC SCHOOL - Sekolah SD Islam terbaik di Makassar. Dipercaya oleh ratusan orangtua siswa. Daftar sekarang juga.',
    },
    smpit: {
      title: 'SMP Islam Al Akhyar',
      description:
        'SPMB AL AKHYAR ISLAMIC SCHOOL - Sekolah SMP Islam terbaik di Makassar. Dipercaya oleh ratusan orangtua siswa. Daftar sekarang juga.',
    },
    smait: {
      title: 'SMA Islam Al Akhyar',
      description:
        'SPMB AL AKHYAR ISLAMIC SCHOOL - Sekolah SMA Islam terbaik di Makassar. Dipercaya oleh ratusan orangtua siswa. Daftar sekarang juga.',
    },
  }

  return {
    title: `${mapping[slug]?.title}`,
    description: `${mapping[slug]?.description}`,
    openGraph: {
      title: mapping[slug]?.title,
      description: mapping[slug]?.description,
    },
  }
}

// PageLayout component
export default async function PageLayout({ params }: PageLayoutProps) {
  return <Page params={params} />
}
