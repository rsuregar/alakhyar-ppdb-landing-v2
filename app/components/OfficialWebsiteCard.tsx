/* eslint-disable @next/next/no-img-element */
import BlurFade from '@/components/magicui/blur-fade'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface Props {
  roundedClass?: string
}

const OfficialWebCard: React.FC<Props> = ({ roundedClass }) => {
  // const data = JSON.parse(props?.data?.PPDB_KETERANGAN || '{}')
  return (
    <BlurFade key={'official'} delay={0.04 * 0.05} inView>
      <div className="mx-auto max-w-9xl -mb-1.5">
        <div
          className={cn(
            'relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:mb-0 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0',
            roundedClass ?? 'sm:rounded-2xl'
          )}
        >
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#60a5fa" />
                <stop offset={1} stopColor="#38bdf8" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto md:max-w-lg 2xl:max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-8 text-white">
              Kenali lebih banyak tentang Al Akhyar Islamic School
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Dapatkan informasi terkini dan terlengkap mengenai Al Akhyar
              Islamic School Makassar.
            </p>
            <div className="mt-10 mb-10 sm:mb-0 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="https://alakhyar.sch.id"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Official Website
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8 hidden sm:block">
            <Image
              alt="App screenshot"
              src="/assets/alakhyar.sch.id.webp"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </BlurFade>
  )
}

export default OfficialWebCard
