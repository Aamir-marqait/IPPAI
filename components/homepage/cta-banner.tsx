import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type CTABannerProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  onClickHref?: string;
};

export function CTABanner({
  title = "Driving Innovation Together",
  description = "Join IPPAI to access exclusive events, insights, and industry connections.",
  ctaLabel = "Join Now",
  onClickHref = "/contact",
}: CTABannerProps) {
  return (
    <section aria-label="Call to Action" className="w-full">
      <div
        className="
          relative overflow-hidden rounded-2xl md:rounded-[22px]
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          w-full
          min-h-[180px] md:min-h-[260px] lg:min-h-[300px]
        "
      >
        {/* Background image */}
        <Image
          src="/optimized/cta.webp"
          alt="Industrial site at sunset"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k="
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />
        {/* Content */}
        <div
          className="
            relative z-10 text-white
            p-5 sm:p-7 md:p-10 lg:p-12
            max-w-[560px]
          "
        >
          <h2
            className="
              text-xl sm:text-2xl md:text-3xl xl:text-[32px] font-bold
              leading-none text-white font-['Red_Hat_Display']
            "
          >
            {title}
          </h2>
          <p className="mt-2 md:mt-3 text-sm md:text-base xl:text-base font-normal leading-none text-white font-['Poppins']">
            {description}
          </p>
          <div className="mt-4 md:mt-6">
            <Link href={onClickHref} aria-label={ctaLabel}>
              <Button className="cursor-pointer rounded-full px-6 md:px-7 py-2.5 md:py-3 xl:text-base font-medium text-center text-white bg-[#D3363B] shadow-[0px_4px_4px_0px_rgba(211,54,59,0.31)] leading-none font-['Work_Sans'] hover:bg-[#B8303A] border-none">
                {ctaLabel}
              </Button>
            </Link>
          </div>
        </div>

        {/* Soft inner vignette for rounded corners depth */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl md:rounded-[22px] ring-1 ring-black/10" />
      </div>
    </section>
  );
}
