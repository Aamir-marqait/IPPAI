import Image from "next/image";

const milestones = [
  {
    year: "1994",
    icon: (
      <Image
        src="/about/1994.png"
        alt="1994 milestone"
        width={45}
        height={45}
        className="object-contain"
      />
    ),
    text: "IPPAI Founded As India's First Independent Power Producers Association",
  },
  {
    year: "2001",
    icon: (
      <Image
        src="/about/2001.png"
        alt="2001 milestone"
        width={45}
        height={45}
        className="object-contain"
      />
    ),
    text: "Established As Key Policy Advisor To Government Of India",
  },
  {
    year: "2005",
    icon: (
      <Image
        src="/about/2005.png"
        alt="2005 milestone"
        width={45}
        height={45}
        className="object-contain"
      />
    ),
    text: "Launched Comprehensive Regulatory Framework Initiatives",
  },
  {
    year: "2010",
    icon: (
      <Image
        src="/about/2010.png"
        alt="2010 milestone"
        width={45}
        height={45}
        className="object-contain"
      />
    ),
    text: "Pioneered Renewable Energy Integration Policies",
  },
  {
    year: "2015",
    icon: (
      <Image
        src="/about/2015.png"
        alt="2015 milestone"
        width={45}
        height={45}
        className="object-contain"
      />
    ),
    text: "Achieved Recognition As Leading Energy Sector Catalyst",
  },
  {
    year: "2020",
    icon: (
      <Image
        src="/about/2020.png"
        alt="2020 milestone"
        width={45}
        height={45}
        className="object-contain"
      />
    ),
    text: "Expanded Focus To Include Sustainability And Clean Energy",
  },
  {
    year: "2024",
    icon: (
      <Image
        src="/about/2024.png"
        alt="2024 milestone"
        width={45}
        height={45}
        className="object-contain"
      />
    ),
    text: "Leading India's Energy Transition With 3200+ MW Mobilized",
  },
];

export default function MilestonesTimeline() {
  return (
    <section className="bg-white py-8 md:py-14">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-center mb-2 font-red-hat-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-[#141414]">
          Milestones That Matter
        </h2>
        <p className="text-center text-[#141414] text-sm md:text-base mb-8 md:mb-12 font-poppins font-normal leading-6 md:leading-7 max-w-2xl mx-auto">
          Three decades of transformative achievements in India&apos;s power
          sector
        </p>

        <div className="flex flex-col md:flex-row max-w-3xl items-center justify-center mx-auto">
          {/* Years & Dots - Hidden on mobile, shown on desktop */}
          <div className="hidden md:flex flex-col items-end pr-6 lg:pr-9 relative">
            {/* Dotted line */}
            <div
              className="absolute top-12 bottom-7 w-0.5 border-dashed border-[#CDCDCD] border-l-2 z-0"
              style={{
                height: "calc(100% - 3.5rem)",
                right: "40px",
              }}
            />
            {milestones.map((m) => (
              <div
                key={m.year}
                className="flex items-center mb-16 lg:mb-20 last:mb-0 z-10 mt-10"
              >
                <span className="text-[#C24A48] text-2xl lg:text-4xl font-semibold w-12 lg:w-16 text-right">
                  {m.year}
                </span>
                <span className="ml-6 lg:ml-10 w-3 h-3 rounded-full bg-[#C24A48] block"></span>
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-7">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-start sm:items-center bg-[#F6F6F6] border-b border-[#D3363B] rounded-2xl p-4 md:p-6 lg:p-8 gap-4 md:gap-6 w-full max-w-full md:max-w-[587px]"
              >
                <div className="flex md:hidden items-center gap-3 mb-2">
                  <span className="text-[#C24A48] text-xl font-semibold">
                    {m.year}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#C24A48]"></span>
                </div>

                <div className="flex items-center justify-center bg-[#FFF7F7] rounded-lg w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                  {m.icon}
                </div>

                <div className="hidden sm:block w-px h-8 md:h-12 border-l border-[#DDDDDD]"></div>

                <div className="font-red-hat-display capitalize font-semibold text-base md:text-lg lg:text-xl leading-tight text-[#141414] flex-1">
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
