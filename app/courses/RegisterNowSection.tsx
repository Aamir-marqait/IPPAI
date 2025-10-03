import Image from "next/image";

export default function RegisterNowSection() {
  return (
    <section
      className="relative w-full min-h-[480px] flex items-center justify-center overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Background Image */}
      <Image
        src="/course/bci.png" // your BG image
        alt="Library background"
        fill
        className="object-cover w-full h-full"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1100px] flex flex-col md:flex-row items-start justify-between px-3 sm:px-6 py-12 gap-8">
        {/* Left Column */}
        <div className="flex-1 flex flex-col items-start justify-center gap-6 min-w-[290px] max-w-md">
          {/* Main Heading */}
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-2 font-red-hat-display">
            Register Now
            <br />
            Get Premium
            <br />
            Online
            <br />
            Admission
          </h1>
          <p className="text-white/80 text-base font-normal leading-relaxed max-w-xs mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
          </p>
        </div>

        {/* Right Column: Form */}
        <div className="flex-1 flex items-center justify-center w-full min-w-[320px] max-w-md relative">
          {/* Glass Effect Card */}
          <div className="w-full max-w-[540px] lg:w-[540px] lg:h-[625px] rounded-[20px] bg-gradient-to-br from-[rgba(13,13,13,0.4032)] via-[rgba(14,14,14,0.55)] to-[rgba(16,16,16,0.6984)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)_inset,_0px_-2px_4px_12px_rgba(255,255,255,0.08)] backdrop-blur-sm p-4 sm:p-6 lg:p-7">
            <h2 className="font-red-hat-display max-w-md font-bold text-2xl sm:text-3xl lg:text-[36px] leading-tight lg:leading-[48px] align-middle capitalize text-white mb-6 lg:mb-8">
              Sign Up For Free Resources
            </h2>
            <form className="flex flex-col gap-4 lg:gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full max-w-[456px] lg:w-[456px] h-[50px] sm:h-[54px] lg:h-[58px] rounded-[30px] px-4 lg:px-5 py-3 text-sm lg:text-base font-normal bg-white text-[#232323] border border-[#6D6D6D] outline-none placeholder:text-[#8D8D8D]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full max-w-[456px] lg:w-[456px] h-[50px] sm:h-[54px] lg:h-[58px] rounded-[30px] px-4 lg:px-5 py-3 text-sm lg:text-base font-normal bg-white text-[#232323] border border-[#6D6D6D] outline-none placeholder:text-[#8D8D8D]"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full max-w-[456px] lg:w-[456px] h-[50px] sm:h-[54px] lg:h-[58px] rounded-[30px] px-4 lg:px-5 py-3 text-sm lg:text-base font-normal bg-white text-[#232323] border border-[#6D6D6D] outline-none placeholder:text-[#8D8D8D]"
              />
              <textarea
                placeholder="Message"
                className="w-full max-w-[456px] lg:w-[456px] h-[100px] lg:h-[120px] rounded-[15px] px-4 lg:px-5 py-3 text-sm lg:text-base font-normal bg-white text-[#232323] border border-[#6D6D6D] outline-none placeholder:text-[#8D8D8D] resize-none"
              />
              <button
                type="submit"
                className="bg-[#D3363B] shadow-[0px_4px_4px_0px_rgba(211,54,59,0.31)] font-work-sans font-medium text-[16px] leading-[100%] text-center text-white rounded-full px-7 py-3 mt-2 transition hover:bg-[#b12c2c] w-fit"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
