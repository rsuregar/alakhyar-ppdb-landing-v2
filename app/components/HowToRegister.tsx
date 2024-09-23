/* eslint-disable @next/next/no-img-element */
import React from "react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
// import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

export function HowToRegister() {
  return (
    <div className="relative max-w-9xl sm:mt-6 mx-auto text-center">
      <section className="sm:mb-8">
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
      <div
  className="absolute mt-6 sm:mt-0 top-[15%] sm:left-[16%] sm:w-[72%] sm:h-[66%] w-full h-full left-0 p-3 sm:p-0"
>
  <img
    src="/assets/howto.jpg"
    alt="Hero Video"
    className="sm:absolute sm:left-0 top-0 w-full md:w-[57rem] max-w-full rounded-xl bg-white/5 ring-1 ring-white/10"
  />
</div>

    </div>
  );
}

export function HowToRegisterV2() {
  return (
    <section
      className="py-12 bg-white dark:bg-gray-950 relative mt-12 sm:mt-0"
    >
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4 mb-16">
          <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-sky-500 bg-sky-100 font-medium uppercase rounded-full shadow-sm">
              Kenapa Al Akhyar?
            </span>
            <h2 className="mb-6 text-4xl md:text-5xl leading-tight font-bold tracking-tighter">
              Al Akhyar Islamic School
            </h2>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
              Al Akhyar Islamic School adalah sekolah yang berkomitmen untuk
              memberikan pendidikan terbaik bagi siswa-siswinya. Kami memiliki
              berbagai program unggulan yang akan membantu siswa dalam
              mengembangkan potensi dirinya.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
          <img src="/assets/howto.jpg" className="w-full rounded-xl z-50" alt="pattern" />
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
        
        <div className="hidden flex-wrap -mx-4 text-center md:text-left">
          {[
            {
              number: 1,
              title: "Measure your performance",
              description:
                "Stay connected with your team and make quick decisions wherever you are.",
            },
            {
              number: 2,
              title: "Custom analytics",
              description:
                "Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.",
            },
            {
              number: 3,
              title: "Team Management",
              description:
                "Our calendar lets you know what is happening with customer and projects so you",
            },
            {
              number: 4,
              title: "Build your website",
              description:
                "A tool that lets you build a dream website even if you know nothing about web design or programming.",
            },
            {
              number: 5,
              title: "Connect multiple apps",
              description:
                "The first business platform to bring together all of your products from one place.",
            },
            {
              number: 6,
              title: "Easy setup",
              description:
                "End to End Business Platform, Sales Management, Marketing Automation, Help Desk",
            },
          ].map(({ number, title, description }) => (
            <div key={number} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-sky-500 font-semibold rounded-full">
                {number}
              </div>
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="font-medium text-coolGray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
