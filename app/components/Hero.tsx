/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import PulsatingButton from "@/components/magicui/pulsating-button";
import { useFirebase } from "@/hooks/useFirebase";
import { cn } from "@/lib/utils";
import { remoteConfigs } from "@/types/firebase";
import { ComingSoon } from "@/types/ppdb";
import { sendGTMEvent } from "@next/third-parties/google";
import { ChevronRight } from "lucide-react";

export const HeroSection = () => {
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
    <BlurFade key={'hero'} delay={BLUR_FADE_DELAY * 0.05} inView>
      <div className="relative container px-4 mx-auto">
      
      <div className="flex">
        <div className="w-full md:w-1/2 lg:w-4/12 xl:w-6/12 p-8">
          <div className="z-10 flex justify-center sm:justify-start">
            {comingSoonData?.show && (
              <div className="text-left flex items-center border rounded-xl py-1 px-2 mb-6 lg:mb-2 sm:font-bold">
                🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-xs sm:text-base text-left`
                  )}
                >
                  {comingSoonData?.subtitle}
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </div>
            )}
          </div>
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className=""
            yOffset={8}
            text={
              <>
                <div className="text-6xl text-center lg:text-[180px] sm:text-left -mb-3 font-bold font-heading md:max-w-2xl leading-none">
                  PPDB
                </div>
                <p className="text-center sm:text-start text-base sm:text-xl text-gray-900 dark:text-white font-medium md:max-w-sm mt-4">
                  Penerimaan Peserta Didik Baru
                </p>
                <div className="text-4xl sm:text-5xl font-black font-sans sm:font-bold mb-6 text-center sm:text-start">
                  Al Akhyar Islamic School{" "}
                  {comingSoonData?.show
                    ? comingSoonData?.tahun_ajaran
                    : tahunAjaran}
                </div>
              </>
            }
          />
          <div>
            <div className="flex justify-center sm:justify-start">
              {isOpen ? (
                <a href="https://s.alakhyar.sch.id/ppdb" onClick={handleClick}>
                  <PulsatingButton>Daftarkan diri Sekarang</PulsatingButton>
                </a>
              ) : (
                <PulsatingButton>Pendaftaran Ditutup</PulsatingButton>
              )}
            </div>
          </div>
        </div>
        <div className="hidden z-40 sm:block w-full md:w-1/3 lg:w-8/12 xl:w-8/12  xl:right-0 xl:-bottom-0 p-8">
          <div className="flex flex-wrap justify-center items-center lg:justify-end -m-3">
            <div className="w-auto lg:w-1/3 p-3">
              <div className="flex flex-wrap justify-center -m-3">
                <div className="w-auto p-3">
                  <a href="#">
                    <img
                      className="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000"
                      src="/assets/student.png"
                      alt="Video"
                    />
                  </a>
                </div>
                <div className="w-auto p-3">
                  <img
                    className="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000"
                    src="/assets/student.png"
                    alt="People 2"
                  />
                </div>
              </div>
            </div>
            <div className="w-auto lg:w-1/3 p-3">
              <div className="flex flex-wrap justify-center -m-3">
                <div className="w-auto p-3">
                  <a href="#">
                    <img
                      className="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000"
                      src="/assets/ba-2.png"
                      alt="Video"
                    />
                  </a>
                </div>
                <div className="w-auto p-3">
                  <img
                    className="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000"
                    src="/assets/student.png"
                    alt="People 2"
                  />
                </div>
              </div>
            </div>
            {/* <div className="w-auto lg:w-1/3 p-3">
                <div className="flex flex-wrap">
                  <div className="w-auto">
                    <img
                      className="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000"
                      src="https://static.shuffle.dev/components/preview/238eb578-e531-4cf4-a658-a1ff13c9b896/assets/public/flaro-assets/images/headers/people3.png"
                      alt="People 3"
                    />
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
    </BlurFade>
    
  );
};
