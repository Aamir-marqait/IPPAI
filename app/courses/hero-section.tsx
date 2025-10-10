import Image from "next/image";
import Link from "next/link";

export default function IntensiveCourseHero() {
  return (
    <section className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[430px] xl:min-h-[470px] w-full flex items-center justify-center bg-[#1c1c1c] overflow-hidden px-5 md:px-0 pt-28">
      <Image
        src="/course/hero.jpg"
        alt="Background"
        fill
        priority
        className="object-cover w-full h-full absolute inset-0 z-0"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* <div className="absolute top-3/4 left-4 md:-left-0  -translate-y-1/2 z-20 hidden md:block">
        <Image
          src="/course/person-left.png"
          alt="Person Left"
          width={150}
          height={150}
          className="object-cover w-20 h-auto"
          draggable={false}
          priority
        />
      </div> */}

      <div className="relative max-w-[1100px] z-20 w-full mx-auto  py-16 flex items-center justify-between">
        <div className="flex flex-col justify-center items-start max-w-full md:max-w-[520px] lg:max-w-[580px] ">
          <div className="flex items-center gap-2 mb-1">
            <Image
              src="/l.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-12 w-auto"
            />
          </div>

          <h1 className="text-white font-red-hat-display font-bold text-[56px] leading-[125%] tracking-[0px] mb-4 drop-shadow-lg">
            Intensive Course on <br className="hidden sm:block" />
            Regulatory &amp; Policy <br className="hidden md:block" />
            Framework in the Power Sector
          </h1>

          <div className="text-white font-poppins font-normal xl:text-[14px] xl:leading-[27px] xl:tracking-[0.32px] mb-5 text-base">
            3 day Residential course conducted by IPPAI 25th to 27th September
            2025
          </div>
          <Link
            href="/contact"
            className="bg-[#D3363B] hover:bg-[#b72d2d] text-white font-work-sans font-medium xl:text-[16px] xl:leading-[100%] xl:tracking-[0%] text-center cursor-pointer px-7 py-2.5 rounded-full transition mb-3 inline-block"
            style={{ boxShadow: "0px 4px 4px 0px #D3363B4F" }}
          >
            Sign Up For Resources
          </Link>
        </div>
        <div className=" z-20 hidden md:flex flex-col justify-center">
          {/* <div className="relative z-10 w-[500px] h-[500px]">
            <Image
              src="/course/person-right.png"
              alt="Person Right"
              fill
              className="object-contain"
              draggable={false}
              priority
            />

            <div className="absolute z-30 flex flex-col items-center justify-center top-0 -right-12 w-48 h-44 rounded-xl px-7 py-5 bg-black/25 shadow-lg">
              <Image
                src="/course/i.png"
                alt="Students"
                width={120}
                height={60}
                className="object-contain mb-3"
              />
              <div className="text-center font-work-sans font-medium text-sm leading-relaxed text-white">
                Total Students
              </div>
              <div className="text-center font-work-sans font-bold text-4xl leading-relaxed text-white">
                12K
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
