"use client";

import { HeroSection } from "./components/Hero";
import { TestimoniMarquee } from "./components/TestimoniMarquee";
import { HowToRegister } from "./components/HowToRegister";
import OfficialWebCard from "./components/OfficialWebsiteCard";
import CallToAction from "./components/CallToAction";

export default function Home() {

  return (
    <>
    <section className="sm:container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <HeroSection />
      <TestimoniMarquee />
      <HowToRegister />
      <OfficialWebCard />
    </section>
    <CallToAction />
    </>
  );
}
