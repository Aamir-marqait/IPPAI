import Image from "next/image";

export default function OurPurpose() {
  return (
    <div className="w-screen ">
      <div className="w-full max-w-[1100px] mx-auto px-6 py-16 lg:py-[5.5rem]">
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-red-hat-display leading-none text-center text-[#141414] mb-6 lg:mb-8">
            Our Purpose
          </h1>
          <p className="text-xs sm:text-sm md:text-base xl:text-base font-normal font-poppins leading-none text-center text-[#141414]/60 max-w-xl mx-auto">
            Guided by our core principles, we drive meaningful change in
            India&apos;s energy landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Examine Card */}
          <div className="group relative">
            <div
              className="bg-white rounded-[20px] pb-6 px-[15px] transition-all duration-300 cursor-pointer group-hover:scale-105 group-hover:z-50"
              style={{ boxShadow: "0px 6px 25px 0px #A3A3A340", border: "1px solid #DFDFDF" }}
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
                Mission
              </h2>
              <p className="text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins leading-[1.4] text-[#141414]/60 line-clamp-3 group-hover:line-clamp-none">
                To serve as a neutral platform for all stakeholders in
                India&apos;s power sector, facilitating dialogue, collaboration,
                and policy development for sustainable energy solutions.
              </p>
            </div>
          </div>

          {/* Engage Card */}
          <div className="group relative">
            <div
              className="bg-white rounded-[20px] pb-6 px-[15px] transition-all duration-300 cursor-pointer group-hover:scale-105 group-hover:z-50"
              style={{ boxShadow: "0px 6px 25px 0px #A3A3A340", border: "1px solid #DFDFDF" }}
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
                Vision
              </h2>
              <p className="text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins leading-[1.4] text-[#141414]/60 line-clamp-3 group-hover:line-clamp-none">
                To drive impactful energy and sustainability policies that
                position India as a global leader in clean, reliable, and
                affordable power generation.
              </p>
            </div>
          </div>

          {/* Empower Card */}
          <div className="group relative">
            <div
              className="bg-white rounded-[20px] pb-6 px-[15px] transition-all duration-300 cursor-pointer group-hover:scale-105 group-hover:z-50"
              style={{ boxShadow: "0px 6px 25px 0px #A3A3A340", border: "1px solid #DFDFDF" }}
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
                Values
              </h2>
              <p className="text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins leading-[1.4] text-[#141414]/60 line-clamp-3 group-hover:line-clamp-none">
                To serve as a neutral platform for all stakeholders in India&apos;s
                power sector, facilitating dialogue, collaboration, and policy
                development for sustainable energy solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
