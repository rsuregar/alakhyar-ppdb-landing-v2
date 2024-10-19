/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
// import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { PPDB_KEUNGGULAN, remoteConfigs } from "@/types/firebase";
import { useFirebase } from "@/hooks/useFirebase";

const BLUR_FADE_DELAY = 0.04;

export function HowToRegister() {
  return (
    <div className="relative max-w-9xl sm:mt-6 mx-auto text-center">
      <section className="sm:mb-8 hidden">
        <div className="flex-col flex justify-center items-center flex-1 space-y-1.5">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className=""
            yOffset={8}
            text={
              <>
                <p className="text-sm sm:text-lg text-gray-900 dark:text-stone-300 font-medium  mt-4">
                  Bagaimana Cara Mendaftar
                </p>
                <div className="text-xl font-extrabold sm:text-5xl sm:font-bold mb-9 dark:text-stone-300">
                  Al Akhyar Islamic School{" "}
                </div>
              </>
            }
          />
        </div>
      </section>
      <img src="/assets/pattern.png" className="w-full" alt="pattern" />
      <div className="absolute sm:mt-0 top-[10%] sm:left-[16%] sm:w-[72%] sm:h-[66%] w-full h-full left-0 p-3 sm:p-0">
        <img
          src="/assets/how-to-register.webp"
          alt="Hero Video"
          className="sm:absolute sm:left-0 top-0 w-full md:w-[57rem] max-w-full rounded-xl bg-white/5 ring-1 ring-white/10"
        />
      </div>
    </div>
  );
}

const isClient = typeof window !== 'undefined';

export const isMobile = isClient ? window.innerWidth < 640 : false;

export function Keunggulan() {
  const { value } = useFirebase(remoteConfigs?.PPDB_KEUNGGULAN) as any

  const ungguls: PPDB_KEUNGGULAN[] = !isMobile ? value.slice(1) : value

  return (
    <section className=" bg-white dark:bg-gray-950 relative mt-20 md:mt-32 py-4">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4 mb-8">
          <div className="w-full md:w-1/2 px-4 md:mb-0 text-center md:text-left mt-8 md:mt-0">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-sky-700 bg-sky-100 font-medium uppercase rounded-full shadow-sm">
              Mengapa memilih kami
            </span>
            <h2 className="mb-6 text-2xl md:text-5xl  leading-tight font-bold tracking-tighter">
              Al Akhyar Islamic School
            </h2>
            <div className="w-4/5 px-4 mb-8 hidden md:block">
              <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-sky-500 font-semibold rounded-full">
                {value[0]?.number}
              </div>
              <h3 className="mb-2 text-2xl font-bold">{value[0]?.title}</h3>
              <p className="text-lg font-medium text-justify">{value[0]?.description}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <img
              src="/assets/howto.jpg"
              className="w-full rounded-xl z-50"
              alt="pattern"
            />
            {/* video thumbnailSrc */}
            <div className="relative hidden">
              <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/oQYc6tHJG-Y?si=dJgDf4MoKV9KTHtw"
                thumbnailSrc="/assets/howto.jpg"
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/oQYc6tHJG-Y?si=dJgDf4MoKV9KTHtw"
                thumbnailSrc="/assets/howto.jpg"
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>
        </div>

        <div className="flex px-3 md:px-0 flex-wrap -mx-4 text-left">
          {ungguls.map((item: PPDB_KEUNGGULAN) => (
            <div key={item.number} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 text-center md:text-left">
              <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-sky-500 font-semibold rounded-full">
                {item.number}
              </div>
              <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
              <p className="font-medium text-coolGray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
