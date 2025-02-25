'use client'

import React from 'react'
import BlurFade from '@/components/magicui/blur-fade'
import Image from 'next/image'
import PulsatingButton from '@/components/magicui/pulsating-button'

interface HeroCardProps {
  title?: string
  subtitle?: string
  description?: string
  image?: string
  href?: string
  tahunAjaran?: string
  isOpen?: boolean
  handleClick?: () => void
  children?: React.ReactNode
  color?: {
    from: string
    via?: string
    to: string
  }
}

export const HeroCard: React.FC<HeroCardProps> = ({
  title,
  description,
  subtitle,
  handleClick,
  color,
  image,
}) => {
  return (
    <BlurFade key="hero" delay={0.4 * 0.05} inView>
      <div className="mx-auto max-w-9xl">
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
              fill="url(#759c1415-0410-454c-8f7c-9a820de036412)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de036412">
                <stop stopColor={color?.to} />
                <stop offset={1} stopColor={color?.from} />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md 2xl:max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-stone-200 sm:text-5xl">
              {title}
            </h2>
            <h2 className="text-3xl font-bold tracking-tight text-stone-200 sm:text-4xl">
              {subtitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {description}
            </p>
            <div className="mt-10 mb-10 sm:mb-0 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="https://s.alakhyar.sch.id/ppdb" onClick={handleClick}>
                <PulsatingButton className="font-bold dark:text-white">
                  Daftar Siswa Baru
                </PulsatingButton>
              </a>
              <a
                href="https://s.alakhyar.sch.id/pindahan"
                onClick={handleClick}
              >
                <PulsatingButton
                  pulseColor="#fbbf24"
                  className="font-bold dark:text-white bg-amber-400 dark:bg-amber-500"
                >
                  Daftar Pindahan
                </PulsatingButton>
              </a>
            </div>
          </div>
          <div className="relative w-full lg:w-auto">
            <div className="lg:absolute lg:bottom-0 lg:right-0">
              <Image
                alt="App screenshot"
                src={image || '/assets/web-branding.webp'}
                width={1824}
                height={1080}
                priority
                className="w-[22rem] md:w-[40rem] max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  )
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface AccordionItemData {
  title: string
  content: string | React.ReactNode
}

interface AccordionProps {
  data: AccordionItemData[]
}

export const Accordions: React.FC<AccordionProps> = ({ data }) => {
  return (
    <Accordion type="multiple" className="w-full">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border my-2 px-4 rounded-lg"
        >
          <AccordionTrigger className="text-base sm:text-xl font-bold hover:no-underline sm:hover:text-2xl">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg mb-4">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

interface BookletCardProps {
  bookletUrl: string
}

export const BookletCard: React.FC<BookletCardProps> = ({ bookletUrl }) => {
  return (
    <div className="relative md:mt-12 -mb-2">
      <iframe
        src={bookletUrl}
        className="inset-0 w-full h-screen sm:h-[700px] rounded-0 md:rounded-xl"
        scrolling="no"
        allowFullScreen={true}
      ></iframe>
    </div>
  )
}
