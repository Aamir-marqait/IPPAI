import Image from "next/image";

export default function CampusSection() {
  return (
    <section className="w-full flex flex-col items-center bg-white py-8 px-2 sm:px-4">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-0 mb-12">
        <div className="flex-1 flex justify-center relative ">
          <div className="relative z-20 w-[320px] h-[320px] md:w-[100%] md:h-[420px] rounded-lg overflow-hidden flex items-center justify-center bg-white">
            <Image
              src="/c.png"
              alt="Campus students"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 flex flex-col items-start max-w-xl pl-0 lg:pl-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-[5px] h-[24px] bg-[#D3363B] opacity-100"></div>
            <span className="font-red-hat-display font-bold xl:text-[16px] xl:leading-[100%] xl:tracking-[0%] text-[#D3363B] uppercase">
              OUR CAMPUS
            </span>
          </div>
          <h2 className="font-red-hat-display font-bold xl:text-[36px] xl:leading-[47.88px] xl:tracking-[-0.75px] text-2xl sm:text-3xl md:text-4xl text-[#161439] mb-4 capitalize">
            IRPRI Campus
          </h2>
          <p className="font-poppins font-normal xl:text-[16px] xl:leading-[28px] xl:tracking-[0%] text-[#6D6C80] text-base leading-relaxed mb-2">
            The IRPRI facility is situated at Shoonya Farm Retreat in Belgundi,
            Belgaum, Karnataka, 591108. Direct flights are available to the
            Belagavi Airport a mere 30 minutes from Shoonya, from the following
            cities: Delhi, Mumbai, Bengaluru, Hyderabad, Tirupati, Nagpur,
            Surat, Ahmedabad, and Jaipur.
          </p>
          <h2 className="font-red-hat-display font-bold xl:text-[24px] xl:leading-[47.88px] xl:tracking-[-0.75px] text-2xl sm:text-3xl md:text-4xl text-[#161439] mb-2 capitalize">
            Campus Facilities:
          </h2>

          {/* Campus Activities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2 w-full">
            <ul className="font-poppins text-[#6D6C80] text-base space-y-1 min-w-[180px]">
              <li className="whitespace-nowrap">• Boating</li>
              <li className="whitespace-nowrap">• Bird Watching</li>
              <li className="whitespace-nowrap">• Nature Trails/Treks</li>
              <li className="whitespace-nowrap">• Paintball and Sports</li>
            </ul>
            <ul className="font-poppins text-[#6D6C80] text-base space-y-1 min-w-[180px]">
              <li className="whitespace-nowrap">• Meditation</li>
              <li className="whitespace-nowrap">• Outdoor Adventures</li>
              <li className="whitespace-nowrap">• Picnics</li>
              <li className="whitespace-nowrap">• Swimming Pool</li>
            </ul>
            <ul className="font-poppins text-[#6D6C80] text-base space-y-1 min-w-[180px]">
              <li className="whitespace-nowrap">• Yoga</li>
              <li className="whitespace-nowrap">• Expressive Art Workshops</li>
              <li className="whitespace-nowrap">• Cycling</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="hidden md:block w-full max-w-[1200px] min-h-[300px] rounded-2xl bg-gradient-to-r from-[#711D1F] to-[#CD353A] relative overflow-hidden">
        <div className="flex items-center gap-20 justify-between h-full px-16 py-14  relative z-10">
          {/* Left Content */}
          <div className="flex-1 text-white max-w-md">
            <Image
              src="/farm.svg"
              alt="Farm"
              width={300}
              height={200}
              className="w-[70%] h-auto"
            />
            {/* <button className="bg-white cursor-pointer shadow-[0px_4px_4px_0px_rgba(211,54,59,0.31)] font-work-sans font-semibold text-xl leading-[100%] text-center text-[#C82828] rounded-full mt-3 px-6 py-2 hover:bg-[#ffeaea] transition">
              Sign up for resources
            </button> */}
          </div>

          {/* Middle Stats */}
          <div className="flex items-start justify- gap-8 flex-1 relative z-20">
            <div className="flex flex-col gap-5 items-start">
              <div className="font-inter font-[300] text-[24px] text-center text-white w-full">
                Distance From <br />
                <span className="font-[600]">Belagavi Airport</span>
              </div>
              <div className="font-inter mt-8 font-[600] text-[32px] leading-[19.2px] text-left text-white">
                30 minutes
              </div>
            </div>
            <div
              className="w-px h-32 hidden sm:block"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            ></div>
            <div className="flex flex-col gap-5 items-center -ml-10">
              <div className="font-inter font-[300] text-[24px] text-center text-white max-w-xs">
                Distance From <br />
                <span className="font-[600]">
                  Hubbali, Kolhapur & Goa Airport
                </span>
              </div>
              <div className="font-inter font-[600] text-[32px] leading-[19.2px] text-center text-white">
                2-3 hours
              </div>
            </div>
          </div>
        </div>

        {/* Right Bottom Image - Absolute positioned */}
        {/* <div className="absolute -right-7 -bottom-4 w-[280px] h-[250px] lg:w-[400px] lg:h-[240px]">
          <Image
            src="/course/bi.png"
            alt="Banner image"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div> */}
      </div>
    </section>
  );
}
