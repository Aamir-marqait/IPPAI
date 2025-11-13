import Image from "next/image";
import Link from "next/link";

export default function RecognizedCatalystSection() {
  return (
    <section className="w-full bg-white">
      {/* Top text section */}
      <div className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 pt-12">
          <div className="mb-10">
            <div className="text-[#D3363B] font-red-hat-display font-bold text-base leading-none tracking-normal uppercase mb-8 border-l-4 border-[#D3363B] pl-3">
              SINCE 1994
            </div>
            <h2 className="font-red-hat-display font-bold text-3xl sm:text-4xl leading-tight tracking-normal text-black mb-2">
              Recognized as a Catalyst
              <br />
              for Change
            </h2>
            <p className="font-poppins font-normal text-base leading-7 tracking-normal text-black/80 my-2">
              Our impact resonates across India&apos;s energy sector and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col md:flex-row gap-7 w-full relative z-10">
            {/* Card 1 */}
            <div className="w-full max-w-[356px] md:w-[356px] min-h-[380px] flex flex-col justify-between bg-white rounded-[20px] border border-[#DFDFDF] overflow-hidden mx-auto">
              <div className="px-6 pt-8 pb-4 flex flex-col gap-3 justify-center text-left">
                <h3 className="font-red-hat-display font-bold text-2xl leading-none tracking-normal text-[#D3363B] mb-1">
                  Industry Partnerships
                </h3>
                <p className="font-poppins font-light text-base leading-6 tracking-normal text-black">
                  Collaborated with 500+ industry stakeholders across the power
                  sector.
                </p>
              </div>
              <div className="relative w-full h-40 sm:h-48 md:h-52">
                <Image
                  src="/optimized/about-ip.webp"
                  alt="Industry Partnerships"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 356px"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k="
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-[356px] md:w-[356px] min-h-[380px] flex flex-col justify-between bg-white rounded-[20px] border border-[#DFDFDF] overflow-hidden mx-auto">
              <div className="px-6 pt-8 pb-4 flex flex-col gap-3 justify-center text-left">
                <h3 className="font-red-hat-display font-bold text-2xl leading-none tracking-normal text-[#D3363B] mb-1">
                  Global Recognition
                </h3>
                <p className="font-poppins font-light text-base leading-6 tracking-normal text-black">
                  Acknowledged internationally as a model for energy sector
                  associations.
                </p>
              </div>
              <div className="relative w-full h-40 sm:h-48 md:h-52">
                <Image
                  src="/optimized/about-gr.webp"
                  alt="Global Recognition"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 356px"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k="
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-[356px] md:w-[356px] min-h-[380px] flex flex-col justify-between bg-white rounded-[20px] border border-[#DFDFDF] overflow-hidden mx-auto">
              <div className="px-6 pt-8 pb-4 flex flex-col gap-3 justify-center text-left">
                <h3 className="font-red-hat-display font-bold text-2xl leading-none tracking-normal text-[#D3363B] mb-1">
                  300+ Conferences Held
                </h3>
                <p className="font-poppins font-light text-base leading-6 tracking-normal text-black">
                  Organized 300+ events fostering innovation in India’s power
                  sector.
                </p>
              </div>
              <div className="relative w-full h-40 sm:h-48 md:h-52">
                <Image
                  src="/optimized/about-ea.webp"
                  alt="Excellence Awards"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 356px"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k="
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom banner */}
      <div className="w-full flex justify-center items-center py-16 bg-white">
        <div className="w-full max-w-[1100px] px-4 sm:px-6 lg:px-0">
          <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[352px] rounded-[32px] overflow-hidden">
            <Image
              src="/optimized/about-bg3.webp"
              alt="Driving Innovation"
              fill
              className="object-cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k="
              sizes="(max-width: 768px) 100vw, 1100px"
            />
            <div className="absolute inset-0 bg-black/30 z-10" />
            <div className="relative z-20 flex flex-col justify-center items-center w-full h-full px-4">
              <h3 className="font-red-hat-display font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-normal text-white text-center mb-5 drop-shadow">
                Join IPPAI in Driving Innovation
              </h3>
              <p className="font-poppins font-normal max-w-lg text-sm sm:text-base leading-6 tracking-normal text-white text-center mb-8 drop-shadow">
                Be part of India&apos;s energy transformation. Together, we can
                build a sustainable, reliable, and affordable power future for
                all.
              </p>
              <Link
                href="/contact"
                className="cursor-pointer bg-[#D3363B] shadow-[0px_4px_4px_0px_#D3363B4F] font-work-sans font-medium text-base leading-none tracking-normal text-center text-white px-7 py-2 rounded-full inline-block"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
