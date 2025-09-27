import Header from "@/components/Header";

export default function HeroSection() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 w-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/home/background.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="flex max-w-[1100px]  min-h-96 mx-auto flex-col items-center justify-center  lg:mt-2 text-center">
          <div className="w-full">
            <h1 className="text-2xl max-w-[500px] mx-auto sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] 2xl:text-7xl font-bold font-red-hat-display text-white mb-6 leading-[150%]">
              Unlock Exclusive Membership Benefits
            </h1>
            <p className="text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins text-white leading-none mt-5 max-w-2xl mx-auto">
              Join a community built for growth, connection, and opportunity.
              Gain access to exclusive resources, industry insights, and
              networking that empowers you to achieve more.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
