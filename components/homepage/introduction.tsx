import Image from "next/image";

export default function Introduction() {
  return (
    <div className="w-screen min-h-screen bg-background">
      <div className="w-full max-w-[1100px] mx-auto px-6 py-16 lg:py-[5.5rem]">
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-red-hat-display leading-none text-center text-[#141414] mb-6 lg:mb-8">
            Independent Power Producers Association of India
          </h1>
          <p className="text-xs sm:text-sm md:text-base xl:text-base font-normal font-poppins leading-none text-center text-[#141414]/60 max-w-6xl mx-auto">
            IPPAI was set up as a not-for-profit association shortly after the
            Government of India opened the power sector to private industry.
            Since its inception as an independent body in 1994, IPPAI&apos;s aim
            has been to provide a neutral platform for the examination of issues
            critical to the development of the power sector in India, to discuss
            energy policy and to focus on strategic, financial, legal,
            regulatory and technical issues in the power, oil, gas and allied
            sectors with a prime focus on independent power producers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Examine Card */}
          <div className="group relative">
            <div
              className="bg-white rounded-[20px] pb-6 px-[15px] transition-all duration-300 cursor-pointer group-hover:scale-105 group-hover:z-50"
              style={{ boxShadow: "0px 6px 25px 0px #A3A3A340" }}
            >
              <div className="w-full h-36 relative mb-2">
                <Image
                  src="/home/intro1.png"
                  alt="Two businessmen examining documents in a professional meeting"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold font-red-hat-display leading-none text-[#141414] mb-3">
                Examine
              </h2>
              <p className="text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins leading-[1.4] text-[#141414]/60 line-clamp-3 group-hover:line-clamp-none">
                IPPAI is able to take up pioneering positions on issues that the
                industry grapples with and seek solutions to the same. This
                enables it to provide cutting-edge inputs to policymakers and
                regulators in the formative stage of policy and regulatory
                development.
              </p>
            </div>
          </div>

          {/* Engage Card */}
          <div className="group relative">
            <div
              className="bg-white rounded-[20px] pb-6 px-[15px] transition-all duration-300 cursor-pointer group-hover:scale-105 group-hover:z-50"
              style={{ boxShadow: "0px 6px 25px 0px #A3A3A340" }}
            >
              <div className="w-full h-36 relative mb-2">
                <Image
                  src="/home/intro2.png"
                  alt="Business team engaged in a presentation meeting"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold font-red-hat-display leading-none text-[#141414] mb-3">
                Engage
              </h2>
              <p className="text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins leading-[1.4] text-[#141414]/60 line-clamp-3 group-hover:line-clamp-none">
                IPPAI provides an engaging interface between players in the
                energy sector, policymakers (central and state level),
                electricity boards, financial institutions, ministries, power
                developers, Indian and multinational companies, equipment
                suppliers, EPC contractors and consultants.
              </p>
            </div>
          </div>

          {/* Empower Card */}
          <div className="group relative">
            <div
              className="bg-white rounded-[20px] pb-6 px-[15px] transition-all duration-300 cursor-pointer group-hover:scale-105 group-hover:z-50"
              style={{ boxShadow: "0px 6px 25px 0px #A3A3A340" }}
            >
              <div className="w-full h-36 relative mb-2">
                <Image
                  src="/home/intro3.png"
                  alt="Silhouettes of people celebrating with raised arms against sunset"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold font-red-hat-display leading-none text-[#141414] mb-3">
                Empower
              </h2>
              <p className="text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins leading-[1.4] text-[#141414]/60 line-clamp-3 group-hover:line-clamp-none">
                IPPAI&apos;s neutral disposition enables it to interact with
                regulators from a position of strength and provide cutting-edge
                inputs to them on a continuing basis. This empowers both the
                regulator and the industry to work together for the greater good
                of the power sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
