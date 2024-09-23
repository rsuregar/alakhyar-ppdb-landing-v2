import { useFirebase } from "@/hooks/useFirebase";
import { remoteConfigs } from "@/types/firebase";

/* eslint-disable @next/next/no-img-element */
export default function CallToAction() {
  const { value } = useFirebase(remoteConfigs.PPDB_KETERANGAN) as any;
  return (
    <section className="py-12">
      <div className="mx-auto">
        <div className="xl:p-24 gap-16 sm:gap-32 p-6 sm:p-12 bg-gradient-to-r from-sky-700 to-blue-800 flex  justify-between flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-3/6 relative">
            <img
              src="/assets/ba-1.png"
              alt="CTA"
              className="xl:absolute xl:bottom-0 rounded-t-3xl -mb-6 mx-auto lg:-mb-12 xl:-mb-24 lg:mx-0 object-cover"
            />
          </div>
          <div className="w-full lg:w-2/3 mt-6 sm:mt-0">
            <h2 className="font-sans text-3xl sm:text-5xl text-white font-black mb-7 text-center lg:text-left">
              Unggul dan Berakhlak? <br /> <div className="mt-3">Al Akhyar pilihannya.</div>{" "}
            </h2>
            <div className="flex items-center sm:flex-col sm:gap-7 md:flex-row lg:justify-start justify-center">
              <a
                href={`https://wa.me/${value?.whatsApp?.official}`}
                rel="noopener noreferrer"
                className="sm:w-auto text-[#075E54] bg-white hover:bg-green-50 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg inline-flex items-center justify-center px-6 py-3 mr-1"
              >
                <svg
                  className="mr-3 w-7 h-7 text-[#075E54] fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                </svg>
                <div className="text-left">
                  <div className="mb-1 text-xs lg:text-sm">Hubungi kami</div>
                  <div className="-mt-1 font-sans text-sm lg:text-md font-semibold">
                    WhatsApp
                  </div>
                </div>
              </a>
              <a
                href="https://s.alakhyar.sch.id/ppdb"
                rel="noopener noreferrer"
                target="_blank"
                className="sm:w-auto bg-white hover:bg-blue-50 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sky-800 rounded-lg inline-flex items-center justify-center px-4 py-3"
              >
                <svg
                  className="w-7 h-7 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="text-left">
                  <div className="mb-1 text-xs lg:text-sm">Ayo Buruan</div>
                  <div className="-mt-1 font-sans text-sm lg:text-md font-semibold">
                    Daftar Segera
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
