import Image from "next/image";
import Link from "next/link";

export default function SpecialCoursesHero() {
  return (
    <section className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[430px] xl:min-h-[470px] w-full flex items-center justify-center bg-[#1c1c1c] overflow-hidden px-5 md:px-0 pt-28">
      <Image
        src="/schero.png"
        alt="Background"
        fill
        priority
        className="object-cover w-full h-full absolute inset-0 z-0"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative max-w-[1100px] z-20 w-full mx-auto  py-16 flex items-center justify-between">
        <div className="flex flex-col justify-center items-start max-w-full md:max-w-[520px] lg:max-w-[900px] ">
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
            IRPRI — Institute for Regulatory <br className="hidden sm:block" />
            Policy & Research in Infrastructure
          </h1>
          <div className="text-white font-poppins font-medium text-[28px] leading-[100%] tracking-[0px] mb-5">
            Building Capacity, Sharing Knowledge, and Empowering India's Power
            Sector
          </div>

          <div className="text-white font-poppins font-normal xl:text-[14px] xl:leading-[27px] xl:tracking-[0.32px] mb-5 text-base">
            RPRI, an initiative by IPPAI, conducts specialized training programs
            and workshops for utilities, regulators, and industry professionals
            to strengthen understanding of policy, regulation, and market
            evolution in India&apos;s Power Sector.
          </div>
          <Link
            href="#register-now"
            className="bg-[#D3363B] hover:bg-[#b72d2d] text-white font-work-sans font-medium xl:text-[16px] xl:leading-[100%] xl:tracking-[0%] text-center cursor-pointer px-7 py-2.5 rounded-full transition mb-3 inline-block"
            style={{ boxShadow: "0px 4px 4px 0px #D3363B4F" }}
          >
            Learn More About IRPRI
          </Link>
        </div>
        <div className=" z-20 hidden md:flex flex-col justify-center"></div>
      </div>
    </section>
  );
}
