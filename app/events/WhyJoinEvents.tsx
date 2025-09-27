import React from "react";

const features = [
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <rect width="56" height="56" fill="none" />
        <g
          stroke="#D82927"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="16" width="25" height="18" rx="3" />
          <path d="M21.5 34v3.5M21.5 37.5h-7A2.5 2.5 0 0 1 12 35v-3.5M15 22h13M15 26h13" />
          <circle cx="40.5" cy="21.5" r="4.5" />
          <path d="M40.5 26v4m0 0-1.5 3m1.5-3 1.5 3" />
        </g>
      </svg>
    ),
    title: "IN PERSON NETWORKING",
    desc: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendisse in porttitor.",
    num: "01.",
  },
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <rect width="56" height="56" fill="none" />
        <g
          stroke="#D82927"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="36" cy="23" r="3" />
          <path d="M33 23a6 6 0 0 1 6 6M36 20v-1M36 12v3M47 23h-3M25 23h-3M42.071 13.929l-2.121 2.121M15.343 40.657l2.121-2.121M27 41v3M41 41v3M41 44h-14a2 2 0 0 1-2-2V23a2 2 0 0 1 2-2h6" />
        </g>
      </svg>
    ),
    title: "BOOST CREATIVITY",
    desc: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendisse in porttitor.",
    num: "02.",
  },
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <rect width="56" height="56" fill="none" />
        <g
          stroke="#D82927"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="14" y="19" width="15" height="14" rx="2" />
          <path d="M29 27h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5M17 26v-4a2 2 0 0 1 2-2h5" />
          <circle cx="34" cy="22" r="1.5" />
        </g>
      </svg>
    ),
    title: "AFTER PARTY EVENT",
    desc: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendisse in porttitor.",
    num: "03.",
  },
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <rect width="56" height="56" fill="none" />
        <g
          stroke="#D82927"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M28 18c1.657 0 3 1.343 3 3 0 2.5-3 5.5-3 5.5S25 23.5 25 21c0-1.657 1.343-3 3-3ZM28 34v4" />
          <circle cx="28" cy="28" r="10" />
        </g>
      </svg>
    ),
    title: "SPARK CREATIVITY",
    desc: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendisse in porttitor.",
    num: "04.",
  },
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <rect width="56" height="56" fill="none" />
        <g
          stroke="#D82927"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="13" y="23" width="30" height="16" rx="3" />
          <path d="M28 23v-3" />
          <circle cx="28" cy="19.5" r="2.5" />
          <path d="M22 31l3 3 6-6" />
        </g>
      </svg>
    ),
    title: "TOP SPEAKERS",
    desc: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendisse in porttitor.",
    num: "05.",
  },
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <rect width="56" height="56" fill="none" />
        <g
          stroke="#D82927"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="28" cy="25" r="3" />
          <circle cx="37" cy="32" r="3" />
          <circle cx="19" cy="32" r="3" />
          <path d="M24 28l-5 4M32 28l5 4" />
        </g>
      </svg>
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
        backgroundImage:
          "linear-gradient(180deg, rgba(22,27,34,0.5) 0%, rgba(22,27,34,0.7) 100%), url('/your-background-image.jpg')",
      }}
    >
      <div className="w-full flex flex-col items-center px-4 py-16 md:py-24">
        <div className="w-full max-w-[1100px] mx-auto text-center mb-12">
          <p className="uppercase text-[#D82927] font-semibold mb-2 tracking-wider text-[16px]">
            Join our event
          </p>
          <h2 className="text-white text-[38px] md:text-[48px] font-bold mb-3">
            Why Join Our Events?
          </h2>
          <p className="text-[#D1D5DB] text-lg md:text-xl font-normal max-w-2xl mx-auto">
            Guided by experienced leaders, experts, and advisors shaping the
            future of India&apos;s power sector.
          </p>
        </div>
        <div className="w-full max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/95 rounded-[28px] px-8 py-10 flex flex-col min-h-[250px] relative shadow-lg group hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-7">
                <div className="text-[#D82927]">{f.icon}</div>
                <span className="absolute right-8 top-8 text-[48px] md:text-[56px] font-extrabold text-[#F7D9D9] group-hover:text-[#E2C1C1] select-none pointer-events-none">
                  {f.num}
                </span>
              </div>
              <h3 className="uppercase text-[#151D2F] font-extrabold text-lg mb-2 tracking-wide">
                {f.title}
              </h3>
              <p className="text-[#5B6476] text-[16px] font-normal leading-snug">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
