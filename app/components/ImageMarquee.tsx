import Marquee from '@/components/magicui/marquee'

const reviews = [
  {
    body: 'Sedang belajar menanam tanaman hias',
    img: '/assets/gallery-1.jpg',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john',
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/james',
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

import { useState } from 'react'
import Image from 'next/image'

const ReviewCard = ({ img, body }: { img: string; body: string }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <figure
      className="relative w-36 h-36 md:w-48 md:h-48 cursor-pointer overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        width={120}
        height={120}
        placeholder="empty"
        className={`w-full h-full object-cover rounded-xl transition-transform duration-300 ${isHovered ? '' : 'filter grayscale'}`}
        alt={body}
        src={img}
      />

      <figcaption
        className={`absolute bottom-0 left-0 w-full p-2 text-center text-white bg-black/50 transition-opacity duration-300 text-xs ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {body}
      </figcaption>
    </figure>
  )
}

export function ImageMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-6 bg-background border-b">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  )
}
