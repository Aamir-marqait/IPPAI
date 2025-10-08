import Image from "next/image";
import Link from "next/link";

export default function KnowledgeHubSection() {
  return (
    <section
      className="w-full flex flex-col items-center py-8 px-4 md:px-6 lg:px-8 md:-mt-20"
      style={{
        backgroundImage: "url('/home/khbg.png')",
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="w-full max-w-[1100px] flex flex-col items-center">
        {/* Heading */}
        <h2 className="font-red-hat-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#1B1B1B] mt-2 mb-2 text-center">
          Knowledge Hub
        </h2>
        <p className="text-[#8C8C8C] font-poppins text-sm md:text-base text-center mb-6 md:mb-8 px-4">
          Your gateway to energy intelligence and thought leadership.
        </p>

        {/* Main Card */}
        <div className="w-full max-w-[700px] mt-2 bg-white rounded-[18px] shadow-lg flex flex-col lg:flex-row px-0 py-6 md:py-8 lg:py-12 mx-auto items-stretch relative gap-4 md:gap-6 lg:gap-8">
          {/* Articles/Insights */}
          <div className="flex flex-1 flex-col px-4 md:px-6 lg:px-7 pt-2 pb-2 justify-between">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/home/kh1.png"
                alt="Articles Icon"
                width={38}
                height={38}
                className="w-[38px] h-[38px]"
              />
              <span className="font-red-hat-display font-bold text-[#BC3C33] text-xl">
                {/* Just icon, no label here */}
              </span>
            </div>
            <h3 className="font-serif font-bold text-xl md:text-2xl leading-[135%] text-[#243C4B] mb-4 md:mb-5 align-middle">
              Articles <br className="sm:hidden md:block" /> and Insights
            </h3>
            <div className="mb-3">
              <div className="font-serif font-bold text-sm md:text-base leading-[135%] text-[#243C4B] mb-2 align-middle">
                INDUSTRY PERSPECTIVE
              </div>
              <div className="font-sans font-normal text-sm md:text-[15px] leading-[150%] text-[#6D6D6D] mb-3 align-middle">
                Details of the Concessions/Exemptions under NET Metering
                Arrangement Technologies and New Paradigms in Renewable Energy
                Sphere
              </div>
              <div className="font-serif font-bold text-sm md:text-base leading-[135%] text-[#243C4B] mb-2 align-middle">
                SOCIO-ECOLOGICAL NARRATIVES
              </div>
              <div className="font-sans font-normal text-sm md:text-[15px] leading-[150%] text-[#6D6D6D] mb-3 align-middle">
                Current Ecological Concerns in the Power Sector: Options to
                Avoid or Minimise Impacts.The Neo-liberal Era - Sustainable
                Futures or Corporate Colonization&apos;s?
              </div>
              <div className="font-serif font-bold text-sm md:text-base leading-[135%] text-[#243C4B] mb-2 align-middle">
                ENERGY SECURITY
              </div>
              <div className="font-sans font-normal text-sm md:text-[15px] leading-[150%] text-[#6D6D6D] align-middle">
                Energy Security in South Asia: Bangladesh Perspective.
                Geopolitics of Energy: An Indian Perspective.
              </div>
            </div>
            <Link
              href="/articles"
              className="flex items-center gap-2 mt-auto group text-[#D3363B] font-semibold text-[13px]"
            >
              VIEW ALL
              <span className="transition-all group-hover:translate-x-1">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="#D3363B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* CENTER LINE */}
          <div className="hidden lg:flex items-stretch justify-center px-0">
            <div className="h-full flex items-center">
              <Image
                src="/line.png"
                alt="Divider"
                width={6}
                height={600}
                className="w-[6px] min-h-[340px] mx-0"
                style={{ minHeight: "280px", maxHeight: "1420px" }}
              />
            </div>
          </div>

          {/* Policy Recommendations */}
          <div className="flex flex-1 flex-col px-4 md:px-6 lg:px-7 pt-2 pb-2 justify-between">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/home/kh2.png"
                alt="Policy Icon"
                width={38}
                height={38}
                className="w-[38px] h-[38px]"
              />
            </div>
            <h3 className="font-serif font-bold text-xl md:text-2xl leading-[135%] text-[#243C4B] mb-4 md:mb-5 align-middle">
              Policy <br className="sm:hidden" /> Recommendations
            </h3>
            <div className="font-sans font-normal text-sm md:text-[15px] leading-[150%] text-[#6D6D6D] mb-3 align-middle">
              Details of the Concessions/Exemptions under NET Metering
              Arrangement Technologies and New Paradigms in Renewable Energy
              Sphere
              <br />
              <br />
              Current Ecological Concerns in the Power Sector: Options to Avoid
              or Minimise Impacts.The Neo-liberal Era - Sustainable Futures or
              Corporate Colonization&apos;s?
              <br />
              <br />
              Current Ecological Concerns in the Power Sector: Options to Avoid
              or Minimise Impacts.The Neo-liberal Era - Sustainable Futures or
              Corporate Colonization&apos;s?
            </div>
            <Link
              href="/articles"
              className="flex items-center gap-2 mt-auto group text-[#D3363B] font-semibold text-[13px]"
            >
              VIEW ALL
              <span className="transition-all group-hover:translate-x-1">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="#D3363B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
