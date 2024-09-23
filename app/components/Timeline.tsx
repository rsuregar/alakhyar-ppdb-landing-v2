"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useFirebase } from "@/hooks/useFirebase";
import { remoteConfigs } from "@/types/firebase";
import { Jadwal, OpenHouse } from "@/types/ppdb";
import React from "react";

const TimelineRegister = () => {
  const { value, loading } = useFirebase(remoteConfigs.PPDB_JADWAL) as any;
  const { value: gelombang } = useFirebase(remoteConfigs.PPDB_GELOMBANG) as any;
  const { value: tahunAjaran } = useFirebase(remoteConfigs.PPDB_TAHUN_AJARAN) as any;

  const jadwal = value as Jadwal;
  if (!jadwal || loading) return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
  return (
    <div className="mb-24">
  <div className="mb-10">
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden rounded-xl">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
          Jadwal PPDB Gel. {gelombang} - Tahun Ajaran {tahunAjaran}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
          Al Akhyar Islamic School.
        </p>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700">
        <dl>
          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Pendaftaran online/offline
            </dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
              {+gelombang === 1 ? jadwal?.buka : jadwal?.batch2}
            </dd>
          </div>

          <div className="bg-white dark:bg-gray-800 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t-2 border-gray-200 dark:border-gray-700 border-dashed">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Observasi Calon Siswa*
            </dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
              {Object.entries((+gelombang === 1 ? jadwal?.observasi : jadwal?.observasi_2) || {})
                .filter(([key, value]) => value !== false)
                .map(([key, value]) => (
                  <div key={key}>
                    <p>{key.toUpperCase().replace("IT", "")} : {value}</p>
                  </div>
                ))}
            </dd>
          </div>

          {jadwal?.pengumuman && (
            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t-2 border-gray-200 dark:border-gray-700 border-dashed">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Pengumuman hasil tes
              </dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                {jadwal?.pengumuman}
              </dd>
            </div>
          )}

          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t-2 border-gray-200 dark:border-gray-700 border-dashed">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Pendaftaran Ulang/Pengambilan Perlengkapan
            </dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
              {jadwal?.heregistrasi}
            </dd>
          </div>

          <div className="bbg-white dark:bg-gray-800 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t-2 border-gray-200 dark:border-gray-700 border-dashed">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Open House (Ukhuwah)
            </dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
              {jadwal && Object.entries(jadwal?.openhouse || {})
                .filter(([key, value]) => value !== false)
                .map(([key, value]) => (
                  <div key={key}>
                    <p>{key.toUpperCase().replace("IT", "")} : {value}</p>
                  </div>
                ))}
              <div className="text-gray-500 dark:text-gray-400 text-xs">
                *Waktu dan Tempat tentatif sesuai jenjang masing-masing
              </div>
            </dd>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t-2 border-gray-200 dark:border-gray-700 border-dashed">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Kegiatan Masa Orientasi Siswa
            </dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
              {jadwal && Object.entries(jadwal?.mos || {})
                .filter(([key, value]) => value !== false)
                .map(([key, value]) => (
                  <div key={key}>
                    <p>{key.toUpperCase().replace("IT", "")} : {value}</p>
                  </div>
                ))}
            </dd>
          </div>

          <div className="bg-white dark:bg-gray-800 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t-2 border-gray-200 dark:border-gray-700 border-dashed">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
              KBM dimulai
            </dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
              {jadwal && Object.entries(jadwal?.kbm || {})
                .filter(([key, value]) => value !== false)
                .map(([key, value]) => (
                  <div key={key}>
                    <p>{key.toUpperCase().replace("IT", "")} : {value}</p>
                  </div>
                ))}
            </dd>
          </div>

          <div className="bg-black px-4 py-5">
            <dt className="text-sm font-medium text-white text-center">
              Gelombang II dibuka dari tanggal{" "}
              <span className="text-lg font-bold">{jadwal?.batch2}</span>{" "}
              jika kuota belum terpenuhi
            </dt>
          </div>
        </dl>
      </div>
    </div>
  </div>
    </div>

  );
};

export default TimelineRegister;
