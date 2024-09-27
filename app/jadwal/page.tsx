'use client';

import CallToAction from "../components/CallToAction";
import OfficialWebCard from "../components/OfficialWebsiteCard";
import TimelineRegister from "../components/Timeline";


export default function Page() {
    return (
      <>
      <div className="p-0 sm:p-12">
      <div className="-mb-16 sm:mb-12">
      <TimelineRegister />
      </div>
      <OfficialWebCard />
      <CallToAction rounded/>
      </div>
     
      {/* <CallToAction /> */}
      </>
    )
  }