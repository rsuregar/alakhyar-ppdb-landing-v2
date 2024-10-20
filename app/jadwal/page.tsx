'use client'

import CallToAction from '../components/CallToAction'
import OfficialWebCard from '../components/OfficialWebsiteCard'
import TimelineRegister from '../components/Timeline'

export default function Page() {
  return (
    <>
      <div className="p-0 sm:p-12">
        <div className="mb-0 sm:mb-10">
          <TimelineRegister />
        </div>
        <OfficialWebCard />
        <div className="-mt-5 sm:mt-10"></div>
        <CallToAction rounded />
      </div>

      {/* <CallToAction /> */}
    </>
  )
}
