import Header from "@/components/Header";

export default function HeroSection() {
  return (
    <div
      className=" inset-0 w-screen pb-20 bg-cover bg-center bg-no-repeat bg-[#000000]"
      style={{
        borderBottomLeftRadius: "40px",
        borderBottomRightRadius: "40px",
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="flex max-w-[1100px] mx-auto flex-col items-start justify-center mt-10">
          <div className=" w-full">
            <div className="text-center mb-12">
              <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] 2xl:text-7xl font-bold font-red-hat-display text-white mb-6 leading-[150%]">
                About Us
              </h1>

              <p className="text-left text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins text-white leading-none mt-5 max-w-2xl">
                Shaping India&apos;s energy future since 1994 through neutral
                advocacy, strategic collaboration, and policy excellence.
              </p>
            </div>

            <div
              className="rounded-[20px] flex items-center justify-center"
              style={{
                width: "1100px",
                height: "307px",
                top: "336px",
                left: "250px",
                borderRadius: "20px",
                background: "#00000033",
                border: "2px solid #FFFFFF5C",
                opacity: 1,
              }}
            >
              <div className="text-white text-center"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
