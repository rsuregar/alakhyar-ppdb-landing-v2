/* eslint-disable @next/next/no-img-element */
import React from "react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
// import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";

const BLUR_FADE_DELAY = 0.04;

export function HowToRegister() {
  return (
    <div className="relative max-w-9xl sm:mt-16 mb-8 mx-auto text-center">
      <section className="sm:mb-8">
        <div className="flex-col flex justify-center items-center flex-1 space-y-1.5">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className=""
            yOffset={8}
            text={
              <>
                <p className="text-sm text-gray-900 dark:text-stone-300 font-medium  mt-4">
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
        className="absolute mt-6"
        style={{ top: "15%", left: "14%", width: "72%", height: "66%" }}
      >
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="/assets/metis-dashboard.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block object-cover"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="/assets/metis-dashboard.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
}
