'use client'

import OfficialWebCard from '@/app/components/OfficialWebsiteCard'
import { Accordions, HeroCard } from '../component/HeroCard'
import { useFirebase } from '@/hooks/useFirebase'
import { remoteConfigs } from '@/types/firebase'
import CallToAction from '@/app/components/CallToAction'
import { sendGTMEvent } from '@next/third-parties/google'
import { Separator } from '@/components/ui/separator'

const colors = {
  tkit: {
    from: '#db2777',
    to: '#fb7185',
  },
  sdit: {
    from: '#f59e0b',
    to: '#fbbf24',
  },
  smpit: {
    from: '#2563eb',
    to: '#3b82f6',
  },
  smait: {
    from: '#d1d5db',
    to: '#f3f4f6',
  },
}

const image = {
  tkit: '/assets/web-branding.webp',
  sdit: '/assets/web-branding.webp',
  smpit: '/assets/web-branding.webp',
  smait: '/assets/web-branding.webp',
}

const title = {
  tkit: 'TK Islam Al Akhyar',
  sdit: 'SD Islam Al Akhyar',
  smpit: 'SMP Islam Al Akhyar',
  smait: 'SMA Islam Al Akhyar',
}

const desc = {
  tkit: 'Pendidikan dini menerima anak usia 3-5 tahun. Pada usia ini fokus pada perkembangan motorik kasar dan halus, kemandirian, serta meningkatkan kemampuan sosial melalui bermain.',
  sdit: 'Pendidikan dasar menerima anak usia 6-12 tahun. Pada usia ini fokus pada pembelajaran akademik dan pembentukan karakter.',
  smpit:
    'Pendidikan menengah pertama menerima anak usia 13-15 tahun. Pada usia ini fokus pada pembelajaran akademik dan pembentukan karakter.',
  smait:
    'Pendidikan menengah atas menerima anak usia 16-18 tahun. Pada usia ini fokus pada pembelajaran akademik, pembentukan karakter dan keterampilan sosialisasi.',
}

const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params

  const { value } = useFirebase(remoteConfigs.PPDB_SYARAT) as any
  const { value: berkas } = useFirebase(remoteConfigs.PPDB_BERKAS) as any

  const { value: keterangan } = useFirebase(
    remoteConfigs.PPDB_KETERANGAN
  ) as any

  const { value: jadwal } = useFirebase(remoteConfigs.PPDB_JADWAL) as any

  function parseData(value: any, slug: string) {
    const syaratData = value[slug as keyof typeof value]
    return Array.isArray(syaratData) ? syaratData : []
  }

  const syarats = parseData(value, slug)
  const berkasData = parseData(berkas, slug)
  const banks =
    slug === 'tkit'
      ? keterangan?.pembayaran?.tkit
      : keterangan?.pembayaran?.official

  const gelombang2 = `Gelombang II dibuka dari tanggal ${jadwal?.batch2} jika kuota belum terpenuhi (${jadwal?.kuota?.[slug]}) siswa`

  const accordionData = [
    {
      title: `Persyaratan Umum`,
      content: (
        <ul className="list-decimal px-6">
          {syarats?.map((syarat, index) => <li key={index}>{syarat}</li>)}
        </ul>
      ),
    },
    {
      title: 'Kelengkapan Berkas Pendaftaran',
      content: (
        <ul className="list-decimal px-6">
          {berkasData?.map((berkas: any, index) => (
            <li key={index}>{berkas}</li>
          ))}
        </ul>
      ),
    },
    {
      title: 'Pembayaran Biaya Pendaftaran',
      content: banks && (
        <>
          {banks.map((bank: any, index: number) => (
            <div key={index}>
              <h3>{bank.bank}</h3>
              <p>Rekening: {bank.rekening}</p>
              <p>Penerima: {bank.penerima}</p>
            </div>
          ))}
          <div className="my-4"></div>
          <div className="bg-yellow-200 text-black p-2 rounded-md max-w-lg">
            Resi / Bukti pelunasan dari Bank disetor kepada Panitia Pendaftaran
            untuk diganti dengan kuitansi sekolah
          </div>
        </>
      ),
    },
    {
      title: 'Informasi Lainnya',
      content: gelombang2,
    },
  ]

  const handleClick = ({ event, value }: { event: string; value: any }) => {
    sendGTMEvent({ event: event, value: value })
  }

  return (
    <div className="p-0 sm:p-12">
      <HeroCard
        title={title[slug as keyof typeof title]}
        description={desc[slug as keyof typeof desc]}
        image={image[slug as keyof typeof image]}
        color={colors[slug as keyof typeof colors]}
        handleClick={() => handleClick({ event: `register-${slug}`, value: 1 })}
      />
      <div className="my-10 sm:my-16 px-6 sm:border sm:py-4 sm:rounded-xl">
        <div className="text-3xl md:text-4xl font-bold pb-3 text-left md:text-center md:max-w-screen-sm mx-auto">
          Syarat Pendaftaran <br />
          <span className="text-3xl md:text-3xl text-sky-700 dark:text-white">
            {title[slug as keyof typeof title]}
          </span>
        </div>
        {/* <Separator /> */}
        <Accordions data={accordionData} />
      </div>
      <div className="my-16"></div>
      <OfficialWebCard />
      <div className="-mt-5 sm:mt-10"></div>
      <CallToAction rounded />
    </div>
  )
}

export default Page
