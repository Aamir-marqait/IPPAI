import Image from "next/image";

export default function OurPurpose() {
  return (
    <div
      className="w-screen min-h-[80vh] relative"
      style={{
        backgroundImage: "url('/optimized/about-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay for opacity */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="w-full max-w-[1100px] mx-auto px-6 py-16 lg:py-[5.5rem] relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-red-hat-display leading-none text-center text-white mb-6 lg:mb-8">
            Our Purpose
          </h1>
          <p className="text-xs sm:text-sm md:text-base xl:text-base font-normal font-poppins leading-none text-center text-white max-w-xl mx-auto">
            Guided by our core principles, we drive meaningful change in
            India&apos;s energy landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Examine Card */}
          <div className="group relative">
            <div
              className="bg-white group-hover:bg-[#D3363B] rounded-[20px] pb-6 px-[15px] transition-all duration-300 cursor-pointer group-hover:scale-105 group-hover:z-50 relative"
              style={{
                boxShadow: "0px 6px 25px 0px #A3A3A340",
                border: "1px solid #DFDFDF",
              }}
            >
              {/* Top right image - shows only on hover */}
              <div className="absolute top-[4px] right-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/optimized/about-5.webp"
                  alt="Decoration"
                  width={160}
                  height={64}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div
                className="mb-4 mt-2"
                style={{
                  background: `linear-gradient(0deg, #D3363B, #D3363B), linear-gradient(255.27deg, #D3363B 26.48%, #6D1C1E 110.06%), linear-gradient(255.27deg, #D3363B 26.48%, #6D1C1E 110.06%)`,
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  opacity: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/about/1.svg"
                  alt="Mission icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold font-red-hat-display leading-none text-[#141414] group-hover:text-white mb-3 transition-all duration-300">
                Mission
              </h2>
              <p className="text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins leading-[1.4] text-[#141414]/60 group-hover:text-white/90 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                To serve as a neutral platform for all stakeholders in
                India&apos;s power sector, facilitating dialogue, collaboration,
                and policy development for sustainable energy solutions.
              </p>
            </div>
          </div>

          {/* Engage Card */}
          <div className="group relative">
            <div
              className="bg-white group-hover:bg-[#D3363B] rounded-[20px] pb-6 px-[15px] transition-all duration-300 cursor-pointer group-hover:scale-105 group-hover:z-50 relative"
              style={{
                boxShadow: "0px 6px 25px 0px #A3A3A340",
                border: "1px solid #DFDFDF",
              }}
            >
              {/* Top right image - shows only on hover */}
              <div className="absolute top-[4px] right-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/optimized/about-5.webp"
                  alt="Decoration"
                  width={160}
                  height={64}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div
                className="mb-4 mt-2"
                style={{
                  background: `linear-gradient(0deg, #D3363B, #D3363B), linear-gradient(255.27deg, #D3363B 26.48%, #6D1C1E 110.06%), linear-gradient(255.27deg, #D3363B 26.48%, #6D1C1E 110.06%)`,
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  opacity: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/about/visionwhite.svg"
                  alt="Vision icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold font-red-hat-display leading-none text-[#141414] group-hover:text-white mb-3 transition-all duration-300">
                Vision
              </h2>
              <p className="text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins leading-[1.4] text-[#141414]/60 group-hover:text-white/90 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                To drive impactful energy and sustainability policies that
                position India as a global leader in clean, reliable, and
                affordable power generation.
              </p>
            </div>
          </div>

          {/* Empower Card */}
          <div className="group relative">
            <div
              className="bg-white group-hover:bg-[#D3363B] rounded-[20px] pb-6 px-[15px] transition-all duration-300 cursor-pointer group-hover:scale-105 group-hover:z-50 relative"
              style={{
                boxShadow: "0px 6px 25px 0px #A3A3A340",
                border: "1px solid #DFDFDF",
              }}
            >
              {/* Top right image - shows only on hover */}
              <div className="absolute top-[4px] right-[5px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/optimized/about-5.webp"
                  alt="Decoration"
                  width={160}
                  height={64}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div
                className="mb-4 mt-2"
                style={{
                  background: `linear-gradient(0deg, #D3363B, #D3363B), linear-gradient(255.27deg, #D3363B 26.48%, #6D1C1E 110.06%), linear-gradient(255.27deg, #D3363B 26.48%, #6D1C1E 110.06%)`,
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  opacity: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/about/2.svg"
                  alt="Values icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold font-red-hat-display leading-none text-[#141414] group-hover:text-white mb-3 transition-all duration-300">
                Values
              </h2>
              <p className="text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins leading-[1.4] text-[#141414]/60 group-hover:text-white/90 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                To serve as a neutral platform for all stakeholders in
                India&apos;s power sector, facilitating dialogue, collaboration,
                and policy development for sustainable energy solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
