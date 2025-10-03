import Image from "next/image";

export default function AboutIrpriSection() {
  return (
    <section className="w-full bg-white flex justify-center py-12 px-2 sm:px-4">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row gap-6 lg:gap-12 items-center lg:items-start">
        <div className="flex flex-row gap-4 flex-shrink-0">
          <div className="flex flex-col gap-4 relative">
            <Image
              src="/course/elements.png"
              alt="Triangles"
              width={58}
              height={60}
              className="absolute -top-8 -left-8 z-10 w-[48px] h-[48px] lg:w-[58px] lg:h-[60px]"
              draggable={false}
              priority
            />
            {/* Main vertical image */}
            <Image
              src="/course/about.png"
              alt="Person 1"
              width={220}
              height={320}
              className="rounded-[0px] object-contain w-[150px] sm:w-[170px] md:w-[200px] lg:w-[539px] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[537px] z-0"
              draggable={false}
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col justify-center lg:pl-12">
          <div className="mb-3">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-[5px] h-[24px] bg-[#D3363B] opacity-100"></div>
              <span className="font-red-hat-display font-bold xl:text-[16px] xl:leading-[100%] xl:tracking-[0%] text-[#D3363B] uppercase">
                ABOUT IRPRI
              </span>
            </div>
            <h2 className="font-red-hat-display font-bold xl:text-[36px] xl:leading-[48px] xl:tracking-[0%] text-2xl sm:text-3xl md:text-4xl text-[#222] mb-2 capitalize">
              Powering Knowledge,
              <br />
              <span className="text-[#BC3C33]">Policy &amp; Progress</span>
            </h2>
            <p className="font-poppins font-normal xl:text-[16px] xl:leading-[24px] xl:tracking-[0%] text-[#4D5756] text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              The IPPAI Regulatory and Policy Research Institute (IRPRI) is
              dedicated to advancing knowledge, capacity building, and
              leadership in India&apos;s evolving power and energy sector through
              research, training, and collaboration.
            </p>
          </div>
          {/* Mission & Vision */}
          <div className="flex flex-col sm:flex-row gap-5 mb-5">
            <div className="flex-1">
              <div className="font-red-hat-display font-bold xl:text-[16px] xl:leading-[14.17px] xl:tracking-[0%] text-[#0E2A46] text-base mb-1 capitalize">
                Our Mission:
              </div>
              <div className="font-poppins font-normal xl:text-[16px] xl:leading-[24px] xl:tracking-[0%] text-[#333931] text-base">
                To strengthen India&apos;s power sector by enhancing regulatory
                expertise, promoting policy awareness, and building skilled
                professionals through knowledge sharing, training, and industry
                collaboration.
              </div>
            </div>
            <div className="flex-1">
              <div className="font-red-hat-display font-bold xl:text-[16px] xl:leading-[14.17px] xl:tracking-[0%] text-[#0E2A46] text-base mb-1 capitalize">
                Our Vision:
              </div>
              <div className="font-poppins font-normal xl:text-[16px] xl:leading-[24px] xl:tracking-[0%] text-[#333931] text-base">
                To be a leading center of excellence in regulatory, policy, and
                power market development, empowering stakeholders to drive
                sustainable growth, innovation, and energy security for India&apos;s
                future.
              </div>
            </div>
          </div>
          <button 
            className="bg-[#D3363B] hover:bg-[#b72d2d] text-white font-work-sans font-medium xl:text-[16px] xl:leading-[100%] xl:tracking-[0%] text-center px-7 py-2.5 rounded-full transition mt-1 w-fit"
            style={{ boxShadow: '0px 4px 4px 0px #D3363B4F' }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
