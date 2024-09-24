/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { useFirebase } from "@/hooks/useFirebase";

const avatarApi = (name: string) => {
  return encodeURI(`https://ui-avatars.com/api/?name=${name}}&color=7F9CF5&background=EBF4FF&size=32&font-size=0.33&rounded=true`);
}

const ReviewCard = ({
  avatar,
  name,
  title,
  description,
}: {
  avatar: string;
  name: string;
  title: string;
  description: string;
}) => {

  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt={name} src={avatarApi(name)} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{title}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{description}</blockquote>
    </figure>
  );
};

export function TestimoniMarquee() {
  const { value } = useFirebase("PPDB_TESTIMONI") as any;
  const firstRow = value?.slice(0, value.length / 2);
  const secondRow = value?.slice(value.length / 2);

  console.log(value);
  if (!value) return null;
  return (
    <>
      <div className="w-full px-4  md:mb-0 text-center">
        <span className="inline-block py-3 px-6 mb-4 text-lg leading-5 text-sky-500 bg-sky-100 font-bold rounded-full shadow-sm">
          Apa kata mereka?
        </span>
        <h2 className="text-2xl md:text-2xl leading-tight font-bold tracking-tighter">
          Testimoni dari Orang Tua, Siswa, dan Alumni
        </h2>
      </div>


      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review: any) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review: any) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
}
