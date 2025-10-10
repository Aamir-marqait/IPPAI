import Image from "next/image";

export default function ThreeDecadesSection() {
  return (
    <section className="py-16 bg-white">
      <div
        className="max-w-[1100px] mx-auto px-4 flex flex-col lg:flex-row items-center"
        style={{ gap: "70px" }}
      >
        {/* Left section */}
        <div className="w-full lg:w-[50%] flex flex-col items-start">
          <div
            className="mb-8 border-l-4 border-red-500 pl-3 font-red-hat-display uppercase"
            style={{
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#D3363B",
            }}
          >
            SINCE 1994
          </div>
          <h2
            className="mb-16 font-red-hat-display"
            style={{
              fontWeight: 700,
              fontSize: "36px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#141414",
            }}
          >
            Three Decades of&nbsp; Energy
            <br className="hidden md:block" />
            Leadership
          </h2>
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/optimized/about-hero.webp"
                alt="Energy Leadership"
                width={540}
                height={330}
                className="rounded-2xl object-cover"
                style={{ width: "100%", height: "auto", maxWidth: 540 }}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k="
              />
            </div>
            <div className="absolute -right-2 bottom-0 md:bottom-1 w-6 h-68 bg-[#FFF7DB] rounded-2xl z-0 hidden md:block"></div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-[50%] flex flex-col">
          <div
            className="mb-6 font-poppins"
            style={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "28px",
              letterSpacing: "0%",
              color: "#141414",
            }}
          >
            The Independent Power Producers Association of India (IPPAI) was
            established in 1994 as a neutral platform for stakeholders in
            India&apos;s evolving power sector.
            <br />
            <br />
            Born from the need to bridge gaps between policymakers, regulators,
            and industry players, IPPAI has consistently maintained its
            independence while fostering collaborative solutions to India&apos;s
            energy challenges.
            <br />
            <br />
            Over the past three decades, we have evolved from a small advocacy
            group to India&apos;s most trusted voice in power sector
            development, maintaining our commitment to neutrality and
            excellence.
          </div>
          {/* Stats */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="bg-[#D3363B] rounded-xl px-1 py-4 flex flex-col items-center min-w-[180px]">
              <span
                className="font-plus-jakarta-sans text-center"
                style={{
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                }}
              >
                30+
              </span>
              <span
                style={{
                  fontFamily: "Red Hat Display",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#FFFFFF",
                  marginTop: "8px",
                  display: "block",
                }}
              >
                Years of Industry Experience
              </span>
            </div>
            <div className="bg-[#D3363B] rounded-xl px-1 py-4 flex flex-col items-center min-w-[180px]">
              <span
                className="font-plus-jakarta-sans text-center"
                style={{
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                }}
              >
                300+
              </span>
              <span
                style={{
                  fontFamily: "Red Hat Display",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#FFFFFF",
                  marginTop: "8px",
                  display: "block",
                }}
              >
                Conferences Held
              </span>
            </div>
            <div className="bg-[#D3363B] rounded-xl px-10 py-4 flex flex-col items-center min-w-[180px]">
              <span
                className="font-plus-jakarta-sans text-center"
                style={{
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                }}
              >
                1000+
              </span>
              <span
                style={{
                  fontFamily: "Red Hat Display",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#FFFFFF",
                  marginTop: "8px",
                  display: "block",
                }}
              >
                Attendees
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
