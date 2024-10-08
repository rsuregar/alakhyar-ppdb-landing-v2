/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { HeroSection } from "./components/Hero";
import { TestimoniMarquee } from "./components/TestimoniMarquee";
import { HowToRegister, HowToRegisterV2 } from "./components/HowToRegister";
import OfficialWebCard from "./components/OfficialWebsiteCard";
import CallToAction from "./components/CallToAction";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import { useFirebase } from "@/hooks/useFirebase";
import { remoteConfigs } from "@/types/firebase";
import { ComingSoon } from "@/types/ppdb";
import { sendGTMEvent } from "@next/third-parties/google";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import PulsatingButton from "@/components/magicui/pulsating-button";

export default function Home() {
  const { value: comingSoon } = useFirebase(
    remoteConfigs.PPDB_COMING_SOON_INFO
  ) as any;

  const { value: tahunAjaran } = useFirebase(
    remoteConfigs.PPDB_TAHUN_AJARAN
  ) as any;

  const { value: isOpen } = useFirebase(remoteConfigs.PPDB_OPEN) as any;

  const comingSoonData = comingSoon as ComingSoon;
  const BLUR_FADE_DELAY = 0.04;

  const handleClick = () => {
    sendGTMEvent({ event: "clickRegisterButton", value: "1" });
  };
  return (
    <>
    <BlurFade key={"hero"} delay={0.004 * 0.05} inView>
      <div className="mx-auto max-w-9xl mt-2">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-0 -mb-20 sm:mb-0 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <div className="z-10 flex justify-center sm:justify-start">
              {comingSoonData?.show && (
                <div className="text-left flex items-center border rounded-xl py-1 px-2 mb-6 lg:mb-2 sm:font-bold">
                  🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
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
            <h2 className="text-3xl font-bold tracking-tight text-stone-200 sm:text-5xl">
              PPDB{" "}
              {comingSoonData?.show
                ? comingSoonData?.tahun_ajaran
                : tahunAjaran}
            </h2>
            <h2 className="text-3xl font-bold tracking-tight text-stone-200 sm:text-4xl">
              Al Akhyar Islamic School
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              🎓 <strong>Tunggu Apa Lagi?</strong> Berikan masa depan yang cerah
              dengan bergabung bersama kami. Segera daftarkan putra-putri Anda
              di sekolah kami!
            </p>
            <div className="mt-10 mb-10 sm:mb-0 flex items-center justify-center gap-x-6 lg:justify-start">
              {isOpen ? (
                <a href="https://s.alakhyar.sch.id/ppdb" onClick={handleClick}>
                  <PulsatingButton className="font-bold dark:text-white">Daftarkan Sekarang</PulsatingButton>
                </a>
              ) : (
                <PulsatingButton>Pendaftaran Ditutup</PulsatingButton>
              )}
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
      
      <section className="sm:container grid items-center gap-6 pb-8 pt-28 md:py-10">
        {/* <HeroSection /> */}
        <TestimoniMarquee />
        <BlurFade key={"register"} delay={0.04 * 0.05} inView>
          <HowToRegister />
          <HowToRegisterV2 />
        </BlurFade>
        <BlurFade key={"official"} delay={0.04 * 0.05} inView>
          <OfficialWebCard />
        </BlurFade>
      </section>
      <BlurFade key={"cta"} delay={0.08 * 0.05} inView>
        <CallToAction />
      </BlurFade>
    </>
  );
}
