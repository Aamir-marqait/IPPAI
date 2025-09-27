import React from "react";
import Image from "next/image";

const features = [
  {
    icon: (
      <Image
        src="/event/1.png"
        alt="In Person Networking"
        width={56}
        height={56}
      />
    ),
    title: "IN PERSON NETWORKING",
    desc: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendisse in porttitor.",
    num: "01.",
  },
  {
    icon: (
      <Image
        src="/event/2.png"
        alt="Boost Creativity"
        width={56}
        height={56}
      />
    ),
    title: "BOOST CREATIVITY",
    desc: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendisse in porttitor.",
    num: "02.",
  },
  {
    icon: (
      <Image
        src="/event/3.png"
        alt="After Party Event"
        width={56}
        height={56}
      />
    ),
    title: "AFTER PARTY EVENT",
    desc: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendisse in porttitor.",
    num: "03.",
  },
  {
    icon: (
      <Image
        src="/event/4.png"
        alt="Spark Creativity"
        width={56}
        height={56}
      />
    ),
    title: "SPARK CREATIVITY",
    desc: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendisse in porttitor.",
    num: "04.",
  },
  {
    icon: (
      <Image
        src="/event/5.png"
        alt="Top Speakers"
        width={56}
        height={56}
      />
    ),
    title: "TOP SPEAKERS",
    desc: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendisse in porttitor.",
    num: "05.",
  },
  {
    icon: (
      <Image
        src="/event/6.png"
        alt="Potential Clients"
        width={56}
        height={56}
      />
    ),
    title: "POTENTIAL CLIENTS",
    desc: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendisse in porttitor.",
    num: "06.",
  },
];

export default function WhyJoinEvents() {
  return (
    <section
      className="relative w-screen min-h-[100vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: " url('/event/bg2.png')",
      }}
    >
      <div className="w-full flex flex-col items-center px-4 py-16 md:py-24">
        <div className="w-full max-w-[1100px] mx-auto text-center mb-12">
          <p className="font-red-hat-display font-bold text-base leading-none text-center uppercase text-[#D3363B] mb-2">
            Join our event
          </p>
          <h2 className="font-red-hat-display font-bold text-[36px] leading-none text-center text-white mb-3">
            Why Join Our Events?
          </h2>
          <p className="font-poppins font-normal text-base leading-[28px] text-center text-[#D1D5DB] max-w-2xl mx-auto">
            Guided by experienced leaders, experts, and advisors shaping the
            future of India&apos;s power sector.
          </p>
        </div>
        <div className="w-full max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/95 rounded-[25px] px-8 py-10 flex flex-col min-h-[250px] relative shadow-lg group hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-7">
                <div>{f.icon}</div>
                <span className="absolute right-8 top-8 text-[48px] md:text-[56px] font-extrabold text-[#F7D9D9] group-hover:text-[#E2C1C1] select-none pointer-events-none">
                  {f.num}
                </span>
              </div>
              <h3 className="font-poppins font-semibold text-[20px] leading-[24px] text-[#223645] uppercase mb-2">
                {f.title}
              </h3>
              <p className="font-poppins font-normal text-base leading-[24px] text-[#5B6476]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
