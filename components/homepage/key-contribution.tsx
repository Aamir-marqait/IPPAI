"use client";

import ContributorCard from "../contribution-card";
import { CTABanner } from "./cta-banner";

export default function Contributors() {
  const people = [
    {
      name: "Becca Stone",
      role: "Chief Learning Officer",
      imgSrc: "/home/key1.png",
      imgAlt: "Becca Stone portrait",
    },
    {
      name: "Robert Fox",
      role: "Senior Consultant",
      imgSrc: "/home/key1.png",
      imgAlt: "Robert Fox portrait",
    },
    {
      name: "Kristin Watson",
      role: "Training Facilitator",
      imgSrc: "/home/key1.png",
      imgAlt: "Kristin Watson portrait",
    },
    {
      name: "Amélie Durand",
      role: "Instructional Designer",
      imgSrc: "/home/key1.png",
      imgAlt: "Amélie Durand portrait",
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
          Key Contributors
        </div>

        {/* Title */}
        <h2
          id="contributors-heading"
          className="mt-3 text-center text-2xl md:text-3xl xl:text-[36px] font-bold text-[#141414] text-balance leading-none font-['Red_Hat_Display']"
        >
          Driving Innovation Together
        </h2>

        {/* Subtitle */}
        <p className="mt-4 md:mt-5 text-center text-sm md:text-base xl:text-base font-normal text-muted-foreground max-w-3xl mx-auto text-pretty xl:leading-7 font-['Poppins']">
          Eminent thinkers, renowned experts and erudite speakers come together
          on a common platform to inform, inspire and create change.
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
