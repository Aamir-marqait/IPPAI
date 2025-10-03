import Image from "next/image";
import Link from "next/link";

export default function IntensiveCourseHero() {
  return (
    <section className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[430px] xl:min-h-[470px] w-full flex items-center justify-center bg-[#1c1c1c] overflow-hidden pt-32">
      <Image
        src="/course/hero.png"
        alt="Background"
        fill
        priority
        className="object-cover w-full h-full absolute inset-0 z-0"
      />

      <div className="absolute top-3/4 left-4 md:-left-0  -translate-y-1/2 z-20 hidden md:block">
        <Image
          src="/course/person-left.png"
          alt="Person Left"
          width={150}
          height={150}
          className="object-cover w-20 h-auto"
          draggable={false}
          priority
        />
      </div>

      <div className="relative max-w-[1100px] z-20 w-full mx-auto  py-8 flex items-center justify-between">
        <div className="flex flex-col justify-center items-start max-w-full md:max-w-[520px] lg:max-w-[580px] ">
          <div className="flex items-center gap-2 mb-1">
            <Image
              src="/header/logo.png"
              alt="Logo"
              width={76}
              height={36}
              className="h-9 w-auto"
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
            Register Now
          </Link>
        </div>
        <div className=" z-20 hidden md:flex flex-col justify-center">
          <div className="relative z-10 w-[500px] h-[400px] r">
            <Image
              src="/course/person-right.png"
              alt="Person Right"
              fill
              className="object-fill"
              draggable={false}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
