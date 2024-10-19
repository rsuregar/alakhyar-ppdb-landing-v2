"use client";

import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import locale from "dayjs/locale/id";
import ShinyButton from "@/components/magicui/shiny-button";
import { sendGTMEvent } from "@next/third-parties/google";

dayjs.extend(relativeTime);
dayjs.locale(locale);

interface Props {
  value: any;
  roundedClass?: string;
}

const PromoComponent: React.FC<Props> = ({ value }) => {
  const showPromo = value && value.show;
  // Format the dates using Day.js
  const formattedStartDate = dayjs(value?.start_date)
    .locale("id")
    .format("D MMM YYYY");
  const formattedEndDate = dayjs(value?.end_date).format("D MMM YYYY");
  const formattedDateRange = `${formattedStartDate} - ${formattedEndDate}`;

  const handleRegister = (type: "baru" | "mutasi") => {
    const event = type === "baru" ? "click_ppdb_button_new_promo" : "click_ppdb_button_mutation_promo";
    sendGTMEvent({ event: event, value: 1 });
    const url = {
      baru:
        "https://docs.google.com/forms/d/e/1FAIpQLScBFjzVsAviSEm2VHx2jFctbA-pUAPaCSMxx2Cr2DI5OjWB4g/viewform?usp=pp_url&entry.611144641=" +
        value?.voucher_code,
      mutasi:
        "https://docs.google.com/forms/d/e/1FAIpQLScxjxmWvKgOh4Zhc55YVWAMLA0v-DjIOcw7ka3oCy3jNh3a_w/viewform?usp=pp_url&entry.611144641=" +
        value?.voucher_code,
    } as const; // Mark url as a constant object with specific keys

    window.open(url[type], "_blank");
  };

  if (!showPromo) return null;
  return (
    <div className="md:container mx-auto mt-[4.6rem] md:mt-12">
      <div className="bg-gradient-to-br from-red-700 to-rose-400 text-white text-center py-10 px-16 md:px-20 rounded-lg relative overflow-hidden">
        {/* The background image with low opacity */}
        <img
          src="/assets/logo-alakhyar.png"
          className="absolute left-0 top-0 md:-ml-16 h-full opacity-10"
          style={{ objectFit: "cover" }}
          alt="Watermark"
        />

        <img
          src="/assets/promo.webp"
          className="h-24 mx-auto mb-4 rounded-lg"
          alt="Promo"
        />
        <h3
          className="text-base md:text-2xl font-semibold mb-4 "
          dangerouslySetInnerHTML={{ __html: value?.promo_text }}
        />
        <div className="flex justify-center items-center space-x-2 mb-6">
          <span className="border-dashed border text-white text-2xl font-bold font-mono tracking-widest px-4 py-2 rounded-lg">
            {value?.voucher_code}
          </span>
        </div>
        <p className="text-sm">
          Masa Berlaku: <br className="md:hidden"></br> {formattedDateRange}{" "}
        </p>
        <div className="flex flex-col md:flex-row gap-2 justify-center mt-6">
          <ShinyButton
            className="bg-white font-bold dark:bg-black dark:font-bold"
            onClick={() => handleRegister("baru")}
          >
            Daftar Siswa Baru
          </ShinyButton>
          <ShinyButton
            className="bg-white font-bold dark:bg-black dark:font-bold"
            onClick={() => handleRegister("mutasi")}
          >
            Daftar Siswa Pindahan
          </ShinyButton>
        </div>

        <div className="w-12 h-12 bg-white dark:bg-black rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
        <div className="w-12 h-12 bg-white dark:bg-black rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
      </div>
    </div>
  );
};

export default PromoComponent;
