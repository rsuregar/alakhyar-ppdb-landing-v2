/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import {
  TestimoniMarquee,
  TestimoniVertical,
} from './components/TestimoniMarquee'
import { HowToRegister, Keunggulan } from './components/HowToRegister'
import OfficialWebCard from './components/OfficialWebsiteCard'
import CallToAction from './components/CallToAction'
import BlurFade from '@/components/magicui/blur-fade'
import Image from 'next/image'
import { useFirebase } from '@/hooks/useFirebase'
import { remoteConfigs } from '@/types/firebase'
import { ComingSoon } from '@/types/ppdb'
import { sendGTMEvent } from '@next/third-parties/google'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import PulsatingButton from '@/components/magicui/pulsating-button'
import PromoComponent from './components/PromoComponent'
// import { ImageMarquee } from './components/ImageMarquee'
import { event as eventGA } from '@/lib/gtag'
import { track } from '@vercel/analytics'
import { FaqComponent } from './components/FaqComponent'
import SparklesText from '@/components/magicui/sparkles-text'
import Ripple from '@/components/ui/ripple'
import Quota from './components/Quota'

export default function Home() {
  const { value: comingSoon } = useFirebase(
    remoteConfigs.PPDB_COMING_SOON_INFO
  ) as any

  const { value: tahunAjaran } = useFirebase(
    remoteConfigs.PPDB_TAHUN_AJARAN
  ) as any

  const { value: isOpen } = useFirebase(remoteConfigs.PPDB_OPEN) as any

  const { value: promo } = useFirebase(remoteConfigs?.PPDB_SPECIAL_PROMO) as any

  const comingSoonData = comingSoon as ComingSoon

  const handleClick = ({ event, value }: { event: string; value: any }) => {
    // console.log('click', event, value)
    sendGTMEvent({ event: event, value: value })
    eventGA({
      action: 'click', // This is the action you want to track
      category: 'Button', // Category for the event
      label: 'PPDB Button Register', // Label for the event
      value: '1', // Optional value; can be a number or string
    })
    // Alternatively, you can use the custom event_name parameter if required
    window.gtag('event', event, {
      event_name: value,
    })
    track(
      event,
      {
        value: value,
      },
      { flags: ['register-ppdb-button'] }
    )
  }
  return (
    <>
      <BlurFade key={'hero'} delay={0.004 * 0.05} inView>
        <div className="mx-auto max-w-9xl mt-1">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-0 -mb-20 sm:mb-0 sm:px-16 md:pt-24 lg:flex lg:justify-between lg:gap-x-20 lg:px-24 lg:pt-0">
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
            <div className="mx-auto md:max-w-xl 2xl:max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left">
              <Image
                src="/assets/logo.webp"
                width={150}
                height={100}
                priority
                alt="logo"
                className="rounded-2xl mb-4 mx-auto sm:mx-0"
              />
              <div className="z-10 flex justify-center sm:justify-start">
                {comingSoonData?.show && (
                  <div className="text-left flex items-center border rounded-xl py-1 px-2 mb-2 lg:mb-2 sm:font-bold">
                    🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{' '}
                    <span
                      className={cn(
                        `inline animate-gradient bg-gradient-to-r from-white via-gray-200 to-white bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-xs sm:text-base text-left`
                      )}
                    >
                      {comingSoonData?.subtitle}
                    </span>
                    <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </div>
                )}
              </div>
              {/* <h2 className="text-3xl font-bold tracking-tight text-stone-200 sm:text-5xl">
                PPDB{' '}
                {comingSoonData?.show
                  ? comingSoonData?.tahun_ajaran
                  : tahunAjaran}
              </h2> */}
              <SparklesText
                className="text-3xl font-bold tracking-tight sm:text-6xl text-white mb-4"
                text={`
                  SPMB 
                ${
                  comingSoonData?.show
                    ? comingSoonData?.tahun_ajaran
                    : tahunAjaran
                }
                `}
              />
              <h2 className="text-3xl font-bold tracking-tight text-stone-200 sm:text-4xl">
                Al Akhyar Islamic School Makassar
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                🎓 <strong>Tunggu Apa Lagi?</strong> Berikan masa depan yang
                cerah dengan bergabung bersama kami. Segera daftarkan
                putra-putri Anda di sekolah kami!
              </p>
              <div className="mt-10 mb-10 sm:mb-0 flex flex-col md:flex-row items-center justify-center gap-6 lg:justify-start">
                {isOpen || true ? (
                  <a
                    href="https://s.alakhyar.sch.id/ppdb"
                    target="_blank"
                    onClick={() =>
                      handleClick({
                        event: 'click_ppdb_button_new_homepage',
                        value: 1,
                      })
                    }
                  >
                    <PulsatingButton className="font-bold dark:text-white">
                      Daftar Siswa Baru
                    </PulsatingButton>
                  </a>
                ) : null}
                <a
                  href="https://s.alakhyar.sch.id/pindahan"
                  target="_blank"
                  onClick={() =>
                    handleClick({
                      event: 'click_ppdb_button_mutation_homepage',
                      value: 1,
                    })
                  }
                >
                  <PulsatingButton
                    pulseColor="#fbbf24"
                    className="font-bold dark:text-white bg-amber-400 dark:bg-amber-500"
                  >
                    Daftar Siswa Pindahan
                  </PulsatingButton>
                </a>
              </div>
              <Ripple />
            </div>

            <div className="relative w-full lg:w-auto">
              <div className="lg:absolute lg:bottom-0 lg:right-0">
                <Image
                  alt="App screenshot"
                  src="/assets/web-branding.webp"
                  width={1824}
                  height={1080}
                  priority
                  className="w-[22rem] md:w-[40rem] max-w-none"
                />
              </div>
            </div>
            {/* <div className="relative h-80 mt-12 -mb-[5rem] md:-mb-0 lg:mt-24 border border-white">
              <Image
                alt="App screenshot"
                src="/assets/web-branding.webp"
                width={1824}
                height={1080}
                priority
                className="md:absolute md:left-0 md:top-0 w-[22rem] md:w-[20rem] max-w-none md:mt-[8rem] 2xl:mt-[3rem]"
              />
            </div> */}
          </div>
        </div>
      </BlurFade>

      <BlurFade key={'quota'} delay={0.1} inView>
        <div className="mb-12">
          <Quota />
        </div>
      </BlurFade>

      <BlurFade key={'promo'} delay={0.1} inView>
        <div className="-mb-20 sm:mt-0 sm:mb-0">
          <PromoComponent value={promo} />
        </div>
      </BlurFade>

      <section className="sm:container grid items-center gap-6 pb-6 pt-20 md:py-10">
        {/* <HeroSection /> */}
        {/* <TestimoniMarquee /> */}
        <TestimoniVertical />
        <BlurFade key={'register'} delay={0.1} inView>
          <HowToRegister />
          <Keunggulan />
        </BlurFade>
      </section>
      <BlurFade key={'official'} delay={0.1} inView>
        <OfficialWebCard roundedClass={'rounded-none'} />
      </BlurFade>
      {/* <BlurFade key={'image'} delay={0.08 * 0.05} inView>
        <ImageMarquee />
      </BlurFade> */}
      <BlurFade key={'cta'} delay={0.08 * 0.05} duration={1} inView>
        <CallToAction />
      </BlurFade>
      <FaqComponent />
    </>
  )
}
