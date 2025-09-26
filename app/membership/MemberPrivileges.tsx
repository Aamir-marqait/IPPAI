import Image from "next/image";

export default function MemberPrivileges() {
  return (
    <section
      className="w-screen py-8 md:py-10"
      style={{
        backgroundImage: "url('/membership/bg1.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl xl:text-[36px] font-bold text-white text-center leading-none font-['Red_Hat_Display']">
          Member Privileges &amp; Access
        </h2>
        <p className="text-white text-sm md:text-base xl:text-base font-normal leading-7 text-center mt-2 mb-10 font-poppins">
          Unlock exclusive opportunities to shape India&apos;s energy future.
        </p>
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 py-8 flex-1 max-w-xs min-w-[360px] min-h-[320px] flex flex-col items-center text-center">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-neutral-100 mb-6">
              <Image
                src="/membership/1.png"
                alt="Exclusive Insights"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl md:text-2xl xl:text-[28px] font-semibold mb-2 leading-[38px] text-center text-[#121212] font-red-hat-display">Exclusive Insights</h3>
            <p className="text-gray-500 text-base md:text-lg xl:text-lg font-normal leading-[30px] text-center font-poppins">
              Access comprehensive reports, research, and policy updates that
              shape India&apos;s power sector landscape.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 py-8 flex-1 max-w-xs min-w-[360px] min-h-[320px] flex flex-col items-center text-center">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-neutral-100 mb-6">
              <Image
                src="/membership/2.png"
                alt="Industry Recognition"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl md:text-2xl xl:text-[28px] font-semibold mb-2 leading-[38px] text-center text-[#121212] font-red-hat-display">Industry Recognition</h3>
            <p className="text-gray-500 text-base md:text-lg xl:text-lg font-normal leading-[30px] text-center font-poppins">
              Platform for thought leadership through speaking opportunities,
              publications, and award programs.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 py-8 flex-1 max-w-xs min-w-[360px] min-h-[320px] flex flex-col items-center text-center">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-neutral-100 mb-6">
              <Image
                src="/membership/3.png"
                alt="Direct Access"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl md:text-2xl xl:text-[28px] font-semibold mb-2 leading-[38px] text-center text-[#121212] font-red-hat-display">Direct Access</h3>
            <p className="text-gray-500 text-base md:text-lg xl:text-lg font-normal leading-[30px] text-center font-poppins">
              Connect directly with policymakers, regulators, and industry
              leaders driving sector transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
