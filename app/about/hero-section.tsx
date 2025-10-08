import Image from "next/image";

export default function HeroSection() {
  return (
    <div 
      className="inset-0 w-full pb-20 min-h-[85vh] bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('/optimized/about-bg.webp')"
      }}
    >
      {/* Content */}
      <div className="relative z-10 pt-16 sm:pt-20 md:pt-28">
        <main className="flex max-w-screen-xl md:max-w-[1100px] mx-auto flex-col items-start justify-center mt-6 sm:mt-10 px-4 sm:px-6 md:px-8">
          <div className="w-full">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] 2xl:text-7xl font-bold font-red-hat-display text-white mb-4 sm:mb-6 leading-tight sm:leading-[150%]">
                About Us
              </h1>
              <p className="text-left text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins text-white leading-snug sm:leading-none mt-3 sm:mt-5 max-w-2xl">
                Shaping India&apos;s energy future since 1994 through neutral
                advocacy, strategic collaboration, and policy excellence.
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
                    India&apos;s power sector, facilitating dialogue,
                    collaboration, and policy development for sustainable energy
                    solutions.
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
                    India&apos;s power sector, facilitating dialogue,
                    collaboration, and policy development for sustainable energy
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
