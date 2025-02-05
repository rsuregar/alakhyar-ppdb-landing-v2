import { NumberTicker } from '@/components/ui/number-ticker'
import { useFirebase } from '@/hooks/useFirebase'
import { remoteConfigs } from '@/types/firebase'
import React from 'react'

const Quota = () => {
  const { value: quota } = useFirebase(
    remoteConfigs.PPDB_REMAINING_QUOTA
  ) as any

  const statsData = [
    { value: 0, label: 'KB/TK Al Akhyar', hide: false },
    { value: 0, label: 'SD Al Akhyar', hide: false },
    { value: 0, label: 'SMP Al Akhyar', hide: false },
    { value: 0, label: 'SMA Al Akhyar', hide: false },
  ]

  return (
    <div className="md:container mt-28 -mb-12 sm:mt-8 md:-mb-12 md:p-8 text-center">
      <h2 className="text-2xl text- md:text-4xl leading-tight font-bold tracking-tighter text-center pointer-events-none whitespace-pre-wrap text-slate-900 dark:text-white">
        Sisa Kuota
      </h2>
      <p className="text-base sm:text-lg leading-tight tracking-tighter text-center pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-transparent dark:from-white dark:to-slate-900/10">
        Jangan sampai kehabisan Kuota Kelas
      </p>
      <dl className="grid max-w-screen-xl grid-cols-2 gap-4 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-4 dark:text-white sm:p-8 justify-center items-center">
        {(quota || statsData).map((stat: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-black rounded-lg"
          >
            <dt className="mb-2 text-3xl font-extrabold">
              <NumberTicker
                value={stat.value}
                className="whitespace-pre-wrap text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-center pointer-events-none bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent dark:from-white dark:to-slate-900/10"
              />
            </dt>
            <dd className="text-white dark:text-gray-400 font-bold">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Quota
