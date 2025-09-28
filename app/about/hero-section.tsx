export default function HeroSection() {
  return (
    <div className="inset-0 w-full pb-12 bg-cover bg-center bg-no-repeat bg-[#000000] rounded-b-[40px]">
      {/* Content */}
      <div className="relative z-10 pt-16 sm:pt-20 md:pt-28">
        <main className="flex max-w-screen-xl md:max-w-[1100px] mx-auto flex-col items-start justify-center mt-6 sm:mt-10 px-4 sm:px-6 md:px-8">
          <div className="w-full">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] 2xl:text-7xl font-bold font-red-hat-display text-white mb-4 sm:mb-6 leading-tight sm:leading-[150%]">
                About Us
              </h1>
              <p className="text-left text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins text-white leading-snug sm:leading-none mt-3 sm:mt-5 max-w-2xl">
                Shaping India&apos;s energy future since 1994 through neutral
                advocacy, strategic collaboration, and policy excellence.
              </p>
            </div>

            <div
              className="
                rounded-[20px] flex items-center justify-center
                w-full h-40 sm:h-56 md:h-64 lg:h-[307px] 
                mx-auto
                bg-black/20 border-2 border-white/35 opacity-100
                "
            >
              <div className="text-white text-center"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
