import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 w-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/careers/hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20">
        <main className="flex max-w-[1100px]  min-h-80 mx-auto flex-col items-center justify-center   text-center">
          <div className="w-full">
            <h1 className="text-2xl max-w-[500px] mx-auto sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] 2xl:text-7xl font-bold font-red-hat-display text-white mb-2 leading-[150%]">
              Careers
            </h1>
            <Image
              src="/home/line.png"
              alt=""
              width={150}
              height={4}
              className="mx-auto mb-6"
            />
            <p className="font-red-hat-display font-bold text-white text-center leading-[100%] max-w-[615px] mx-auto px-4 text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px]">
              We Believe in the power of Innovation, Ideas and People
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
