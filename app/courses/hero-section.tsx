import Image from "next/image";
import Link from "next/link";
import { getCoursesPageData } from "@/lib/sanity/queries/courses";

export const revalidate = 3600; // Revalidate every hour

export default async function IntensiveCourseHero() {
  const pageData = await getCoursesPageData();
  const { hero } = pageData;

  return (
    <section className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[430px] xl:min-h-[470px] w-full flex items-center justify-center bg-[#1c1c1c] overflow-hidden px-5 md:px-0 pt-28">
      <Image
        src={hero.backgroundImage}
        alt="Background"
        fill
        priority
        className="object-cover w-full h-full absolute inset-0 z-0"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative max-w-[1100px] z-20 w-full mx-auto py-16 flex items-center justify-between">
        <div className="flex flex-col justify-center items-start max-w-full md:max-w-[520px] lg:max-w-[580px]">
          {/* Logo */}
          {hero.logo && (
            <div className="flex items-center gap-2 mb-1">
              <Image
                src={hero.logo}
                alt="Logo"
                width={100}
                height={100}
                className="h-12 w-auto"
              />
            </div>
          )}

          {/* Title */}
          <h1 className="text-white font-red-hat-display font-bold text-[56px] leading-[125%] tracking-[0px] mb-4 drop-shadow-lg">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <div className="text-white font-poppins font-normal xl:text-[14px] xl:leading-[27px] xl:tracking-[0.32px] mb-5 text-base">
            {hero.subtitle}
          </div>

          {/* CTA Button */}
          <Link
            href={hero.ctaButtonLink}
            className="bg-[#D3363B] hover:bg-[#b72d2d] text-white font-work-sans font-medium xl:text-[16px] xl:leading-[100%] xl:tracking-[0%] text-center cursor-pointer px-7 py-2.5 rounded-full transition mb-3 inline-block"
            style={{ boxShadow: "0px 4px 4px 0px #D3363B4F" }}
          >
            {hero.ctaButtonText}
          </Link>

          {/* Brochure Download Button */}
          {hero.brochure?.url && (
            <a
              href={hero.brochure.url}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-gray-900 font-work-sans font-medium xl:text-[16px] xl:leading-[100%] xl:tracking-[0%] text-center cursor-pointer px-7 py-2.5 rounded-full transition inline-flex items-center gap-2"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{hero.brochure.title || 'Download Brochure'}</span>
            </a>
          )}
        </div>
        <div className="z-20 hidden md:flex flex-col justify-center">
          {/* Right side content if needed */}
        </div>
      </div>
    </section>
  );
}