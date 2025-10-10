/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'

import { cn } from '@/lib/utils'
import Marquee from '@/components/magicui/marquee'
import { useFirebase } from '@/hooks/useFirebase'

import { useId, useState } from 'react'

const ReviewCard = ({
  avatar,
  name,
  title,
  description,
  job = '-',
  className,
}: {
  avatar: string
  name: string
  title: string
  description: string
  job: string
  className?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <figure
      className={cn(
        'relative cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
        isHovered && 'hover:bg-sky-100',
        className ?? 'w-80'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <img className="rounded-full" width="32" height="32" alt={name} src={avatarApi(name)} /> */}
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">
            {title} | {job}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{description}</blockquote>
    </figure>
  )
}

export function TestimoniMarquee() {
  const { value } = useFirebase('PPDB_TESTIMONI') as any
  const firstRow = value?.slice(0, value.length / 2)
  const secondRow = value?.slice(value.length / 2)
  const id = useId()

  // console.log(value);
  if (!value) return null
  return (
    <>
      <div className="w-full px-4 z-40 bg-transparent pt-8 md:pt-0 md:mb-0 text-center">
        <span className="inline-block py-3 px-6 mb-4 text-lg leading-5 text-sky-700 bg-sky-50 font-bold rounded-full shadow-sm">
          Apa kata mereka?
        </span>
        <h2 className="text-2xl md:text-4xl leading-tight font-bold tracking-tighter">
          Testimoni dari Orang Tua, Siswa, dan Alumni
        </h2>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review: any) => (
            <ReviewCard key={review.name + id} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review: any) => (
            <ReviewCard key={review.name + id} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  )
}

export function TestimoniVertical() {
  const { value } = useFirebase('PPDB_TESTIMONI') as any
  const firstRow = value?.slice(0, value.length / 3)
  const secondRow = value?.slice(value.length / 3, (2 * value.length) / 3)
  const thirdRow = value?.slice((2 * value.length) / 3)
  const id = useId()

  // console.log(value);
  if (!value) return null
  return (
    <>
      <div className="w-full px-4 z-40 bg-transparent pt-8 md:pt-0 md:mb-0 text-center">
        <span className="inline-block py-3 px-6 mb-4 text-lg leading-5 text-sky-700 bg-sky-50 font-bold rounded-full shadow-sm">
          Apa kata mereka?
        </span>
        <h2 className="text-2xl md:text-4xl leading-tight font-bold tracking-tighter">
          Testimoni dari Orang Tua, Siswa, dan Alumni
        </h2>
      </div>
      <div className="relative mt-6 h-[400px] overflow-hidden">
        <div className="gap-2 md:columns-2 xl:columns-3 2xl:columns-3">
          <Marquee
            pauseOnHover
            vertical
            className="group w-full flex overflow-hidden p-2 [--duration:20s] md:[--duration:40s]"
          >
            {firstRow.map((review: any, index: number) => (
              <ReviewCard
                key={id + '-' + index}
                {...review}
                className="w-full"
              />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            vertical
            className="group flex overflow-hidden p-2 [--duration:20s] md:[--duration:40s]"
          >
            {secondRow.map((review: any, index: number) => (
              <ReviewCard
                key={id + '-' + index}
                {...review}
                className="w-full"
              />
            ))}
          </Marquee>
          <Marquee
            pauseOnHover
            vertical
            className="group flex overflow-hidden p-2 [--duration:20s] md:[--duration:40s]"
          >
            {thirdRow.map((review: any, index: number) => (
              <ReviewCard
                key={id + '-' + index}
                {...review}
                className="w-full"
              />
            ))}
          </Marquee>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
      </div>
    </>
  )
}
