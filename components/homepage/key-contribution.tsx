"use client";

import ContributorCard from "../contribution-card";
import { CTABanner } from "./cta-banner";

export default function Contributors() {
  const people = [
    {
      name: "Mr. V.P. Raja",
      role: "Former Chairman, MERC",
      imgSrc: "/fc/1.jpg",
      imgAlt: "Mr. V.P. Raja portrait",
    },
    {
      name: "Mr. Ashok Kumar Rajput",
      role: "Former Member (Power Systems), CEA",
      imgSrc: "/fc/2.jpg",
      imgAlt: "Mr. Ashok Kumar Rajput portrait",
    },
    {
      name: "Dr. Upendra N. Behera",
      role: "Former Chairman, OERC",
      imgSrc: "/fc/3.jpg",
      imgAlt: "Dr. Upendra N. Behera portrait",
    },
    {
      name: "Mr. B.B Mehta",
      role: "Director(SLDC), OPTCL",
      imgSrc: "/fc/4.jpg",
      imgAlt: "Mr. B.B Mehta portrait",
    },
    {
      name: "Mr. P.K Agarwal",
      role: "Former Director & CISO, POSOCO",
      imgSrc: "/fc/5.jpg",
      imgAlt: "Mr. P.K Agarwal portrait",
    },
    {
      name: "Mr. Satyajit Ganguly",
      role: "Former CEO & MD, PXIL",
      imgSrc: "/fc/6.jpg",
      imgAlt: "Mr. Satyajit Ganguly portrait",
    },
  ];

  return (
    <section
      aria-labelledby="contributors-heading"
      className="w-screen py-16 md:py-16"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="text-center text-xs md:text-sm xl:text-base font-bold tracking-[0.18em] uppercase text-[#D3363B] leading-none font-['Red_Hat_Display']">
          Eminent Faculty
        </div>

        {/* Title */}
        <h2
          id="contributors-heading"
          className="mt-3 text-center text-2xl md:text-3xl xl:text-[36px] font-bold text-[#141414] text-balance leading-none font-['Red_Hat_Display']"
        >
          Guided by Experience. Shaping the Future of Power
        </h2>

        {/* Subtitle */}
        <p className="mt-4 md:mt-5 text-center text-sm md:text-base xl:text-base font-normal text-muted-foreground max-w-3xl mx-auto text-pretty xl:leading-7 font-['Poppins']">
          From former regulators to sector pioneers, our faculty brings deep
          insight into power sector regulations and policies — turning decades
          of experience into actionable learning that strengthens capacity and
          drives informed decision-making across the electricity value chain.
        </p>

        {/* Grid */}
        <div className="mt-10 md:mt-14 flex gap-4 overflow-x-auto pb-4 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {people.map((p) => (
            <ContributorCard
              key={p.name}
              name={p.name}
              role={p.role}
              imgSrc={p.imgSrc}
              imgAlt={p.imgAlt}
              className="flex-shrink-0"
            />
          ))}
        </div>
        <div className="mt-20">
          <CTABanner />
        </div>
      </div>
    </section>
  );
}
