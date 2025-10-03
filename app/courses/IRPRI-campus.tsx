import Image from "next/image";

export default function CampusSection() {
  return (
    <section className="w-full flex flex-col items-center bg-white py-8 px-2 sm:px-4">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-0 mb-12">
        {/* Left: Person Image in Circle */}
        <div className="flex-1 flex justify-center relative min-w-[290px] max-w-[360px]">
          {/* Main student image */}
          <div className="relative z-20 w-[520px] h-[320px] rounded-full overflow-hidden flex items-center justify-center bg-white">
            <Image
              src="/course/ic.png"
              alt="Campus students"
              fill
              className="object-contain"
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
          <p className="font-poppins font-normal xl:text-[16px] xl:leading-[28px] xl:tracking-[0%] text-[#6D6C80] text-base leading-relaxed mb-4">
            Edhen an unknown printer took a galley of type and scrambled it to
            make ype specimen bookas survived not only five centuries.Edhen an
            unknown printer took a galley of type and scrambled.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full mb-6">
            <div className="flex flex-col items-start gap-3 flex-1">
              <div className="flex items-start gap-3">
                <span className="w-[50px] h-[50px] flex items-center justify-center rounded-[30px] bg-[#FF6666] opacity-100">
                  <Image
                    src="/course/class.svg"
                    alt=""
                    width={26}
                    height={26}
                  />
                </span>
                <div className="font-red-hat-display font-bold text-base text-[#222] mb-0">
                  Smooth Virtual Live Classes
                </div>
              </div>

              <div className="font-poppins text-sm text-[#666]">
                Edhen an unknown printer Rtook galley of type scrambled.
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 flex-1">
              <div className="flex items-start gap-3">
                <span className="w-[50px] h-[50px] flex items-center justify-center rounded-[30px] bg-[#1BCBE3] opacity-100">
                  <Image src="/course/gc.svg" alt="" width={26} height={26} />
                </span>
                <div className="font-red-hat-display font-bold text-base text-[#222] mb-0">
                  99% Graduation Complete
                </div>
              </div>

              <div className="font-poppins text-sm text-[#666]">
                Edhen an unknown printer Rtook galley of type scrambled.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="w-full max-w-[1200px] min-h-[300px] rounded-2xl bg-gradient-to-r from-[#711D1F] to-[#CD353A] relative overflow-hidden">
        <div className="flex items-center justify-between h-full px-16 py-14  relative z-10">
          {/* Left Content */}
          <div className="flex-1 text-white max-w-md">
            <div className="font-poppins font-semibold text-[36px] leading-[47.88px] tracking-[-0.75px] align-middle capitalize text-white mb-2">
              Thousands Of{" "}
              <span className="relative bg-white/80 text-[#BC3C33] px-2 py-0.5 rounded-lg font-bold inline-block align-middle">
                Courses
              </span>
              <br className="sm:hidden" />
              &nbsp;Authored By Industry Experts
            </div>
            <button className="bg-white cursor-pointer shadow-[0px_4px_4px_0px_rgba(211,54,59,0.31)] font-work-sans font-semibold text-xl leading-[100%] text-center text-[#C82828] rounded-full mt-3 px-6 py-2 hover:bg-[#ffeaea] transition">
              Sign up for resources
            </button>
          </div>

          {/* Middle Stats */}
          <div className="flex items-center justify-start gap-7 flex-1 relative z-20">
            <div className="text-center flex flex-col gap-1 items-start">
              <div className="font-inter font-semibold text-[56px] leading-[47.04px] text-center align-middle text-white mb-1">
                45K+
              </div>
              <div className="font-inter font-medium text-[16px] leading-[19.2px] text-center align-middle text-white">
                Active Students
              </div>
            </div>
            <div className="w-px h-12 bg-[#ffffff44] hidden sm:block"></div>
            <div className="text-center flex flex-col gap-1 items-start">
              <div className="font-inter font-semibold text-[56px] leading-[47.04px] text-center align-middle text-white mb-1">
                328+
              </div>
              <div className="font-inter font-medium text-[16px] leading-[19.2px] text-center align-middle text-white">
                Best Instructors
              </div>
            </div>
          </div>
        </div>

        {/* Right Bottom Image - Absolute positioned */}
        <div className="absolute -right-4 -bottom-4 w-[300px] h-[280px] lg:w-[400px] lg:h-[320px]">
          <Image
            src="/course/bi.png"
            alt="Banner image"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}
