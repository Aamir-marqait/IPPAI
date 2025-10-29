"use client"
import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      className="inset-0 w-full pb-20 min-h-screen bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('/optimized/about-bg.webp')",
      }}
    >
      {/* Content */}
      <div className="relative z-10 pt-16 sm:pt-20 md:pt-25">
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
                  className="bg-white rounded-[20px] pb-6 px-[15px] transition-all duration-300 cursor-pointer hover:border-2 hover:border-[#D3363B]"
                  style={{ boxShadow: "0px 6px 25px 0px #A3A3A340" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0px 4px 24px 0px #D3363B40";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0px 6px 25px 0px #A3A3A340";
                  }}
                >
                  <div className="w-full h-36 relative mb-2">
                    <Image
                      src="/optimized/intro1.webp"
                      alt="Two businessmen examining documents in a professional meeting"
                      fill
                      className="object-contain"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k="
                    />
                  </div>
                  <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold font-red-hat-display leading-none text-[#141414] mb-3">
                    Examine
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins leading-[1.4] text-[#141414]/60 line-clamp-3 group-hover:line-clamp-none">
                    IPPAI is able to take up pioneering positions on issues that
                    the industry grapples with and seek solutions to the same.
                    This enables it to provide cutting-edge inputs to
                    policymakers and regulators in the formative stage of policy
                    and regulatory development.
                  </p>
                </div>
              </div>

              {/* Engage Card */}
              <div className="group relative">
                <div
                  className="bg-white rounded-[20px] pb-6 px-[15px] transition-all duration-300 cursor-pointer hover:border-2 hover:border-[#D3363B]"
                  style={{ boxShadow: "0px 6px 25px 0px #A3A3A340" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0px 4px 24px 0px #D3363B40";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0px 6px 25px 0px #A3A3A340";
                  }}
                >
                  <div className="w-full h-36 relative mb-2">
                    <Image
                      src="/optimized/intro2.webp"
                      alt="Business team engaged in a presentation meeting"
                      fill
                      className="object-contain"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k="
                    />
                  </div>
                  <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold font-red-hat-display leading-none text-[#141414] mb-3">
                    Engage
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins leading-[1.4] text-[#141414]/60 line-clamp-3 group-hover:line-clamp-none">
                    IPPAI provides an engaging interface between players in the
                    energy sector, policymakers (central and state level),
                    electricity boards, financial institutions, ministries,
                    power developers, Indian and multinational companies,
                    equipment suppliers, EPC contractors and consultants.
                  </p>
                </div>
              </div>

              {/* Empower Card */}
              <div className="group relative">
                <div
                  className="bg-white rounded-[20px] pb-6 px-[15px] transition-all duration-300 cursor-pointer hover:border-2 hover:border-[#D3363B]"
                  style={{ boxShadow: "0px 6px 25px 0px #A3A3A340" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0px 4px 24px 0px #D3363B40";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0px 6px 25px 0px #A3A3A340";
                  }}
                >
                  <div className="w-full h-36 relative mb-2">
                    <Image
                      src="/optimized/intro3.webp"
                      alt="Silhouettes of people celebrating with raised arms against sunset"
                      fill
                      className="object-contain"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k="
                    />
                  </div>
                  <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold font-red-hat-display leading-none text-[#141414] mb-3">
                    Empower
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins leading-[1.4] text-[#141414]/60 line-clamp-3 group-hover:line-clamp-none">
                    IPPAI&apos;s neutral disposition enables it to interact with
                    regulators from a position of strength and provide
                    cutting-edge inputs to them on a continuing basis. This
                    empowers both the regulator and the industry to work
                    together for the greater good of the power sector.
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
