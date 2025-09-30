import Image from "next/image";

// Testimonials section replicating the red gradient banner with portrait, quote, and decorative quote icons
export default function Testimonials() {
  return (
    <section
      className="w-screen relative"
      style={{
        background:
          " linear-gradient(255.27deg, #D3363B 26.48%, #6D1C1E 110.06%)",
      }}
    >
      <Image
        src="/optimized/4.webp"
        alt=""
        width={240}
        height={240}
        className="pointer-events-none absolute -bottom-6 left-0 opacity-100"
        loading="lazy"
      />
      <DecorQuotes
        side="right"
        size={132}
        className="pointer-events-none absolute top-16 right-20 opacity-100"
      />

      <div className="mx-auto max-w-[1100px] px-6 md:px-8 py-14 md:py-16 lg:py-20">
        <div className="flex items-center gap-2 mb-4 md:mb-5">
          <span
            className="h-5 w-1 rounded-full"
            style={{ background: "var(--primary-foreground)" }}
          />
          <span className="text-xs sm:text-sm md:text-base xl:text-base font-bold font-red-hat-display leading-none uppercase text-white">
            Testimonials
          </span>
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-red-hat-display leading-none text-white mb-8 md:mb-10">
          Our Client Experience in Their Own Words
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8 md:gap-10">
          {/* Speaker portrait + dots */}
          <div className="shrink-0">
            <div className="relative rounded-2xl overflow-hidden ring-4 ring-white/70">
              <Image
                src={"/optimized/test.webp"}
                alt="Speaker portrait"
                width={400}
                height={300}
                className="block h-[260px] w-[340px] object-cover md:h-[300px] md:w-[340px]"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k="
              />
            </div>
          </div>

          {/* Quote + meta */}
          <div className="flex-1">
            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-semibold font-red-hat-display leading-none text-white">
              &#34;It is one of the unique forums to meet so many regulators and
              decision-makers for energy in India. It&apos;s an amazing place to
              really share thoughts and meet so many of them all over India and
              sometimes from several other countries all at once. From that
              perspective, I think it&apos;s something very special about that
              retreat.&#34;
            </blockquote>

            <div className="mt-6 flex flex-col gap-2 md:mt-7">
              <p className="text-sm sm:text-base md:text-lg xl:text-[20px] font-bold font-poppins leading-none text-white">
                Mr. Pashupathy Gopalan
              </p>
              <p className="text-sm sm:text-base md:text-lg xl:text-[17px] font-normal font-poppins leading-none text-white/65">
                President, Asia Pacific and Sub-Saharan Africa, SunEdison
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <span
                className="h-2 w-16 rounded-full"
                style={{ background: "var(--primary-foreground)" }}
              />
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background:
                    "color-mix(in oklab, var(--primary-foreground), transparent 55%)",
                }}
              />
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background:
                    "color-mix(in oklab, var(--primary-foreground), transparent 55%)",
                }}
              />
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background:
                    "color-mix(in oklab, var(--primary-foreground), transparent 55%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DecorQuotes({
  side,
  size = 120,
  className = "",
}: {
  side: "left" | "right";
  size?: number;
  className?: string;
}) {
  const isRight = side === "right";
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      style={{ transform: "scaleX(-1)" }}
    >
      <path
        d="M30 70c-8 0-14-6-14-14V28c0-8 6-14 14-14h26v26H46c-1 8-8 14-16 14z"
        stroke="white"
        strokeWidth="6"
        opacity={isRight ? 0.85 : 1}
      />
      <path
        d="M86 70c-8 0-14-6-14-14V28c0-8 6-14 14-14h26v26H102c-1 8-8 14-16 14z"
        stroke="white"
        strokeWidth="6"
        opacity={isRight ? 0.85 : 1}
      />
    </svg>
  );
}
