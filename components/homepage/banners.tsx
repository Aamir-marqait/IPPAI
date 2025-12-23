import Image from "next/image";
import { CTABanner } from "./cta-banner";
import { getHomeBanner } from "@/lib/sanity/queries/homeBanner";

export const revalidate = 3600; // Revalidate every hour

export default async function Banners() {
  const bannerData = await getHomeBanner();
  const hasBanner = !!bannerData?.bannerImage;

  return (
    <section className="w-full bg-white py-10 sm:py-14 px-2 sm:px-4 flex flex-col items-center">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center">
        {hasBanner && (
          <section className="w-full flex justify-center py-8 px-4">
            <div
              className="relative w-full max-w-[1100px] overflow-hidden"
              style={{ boxShadow: "0px 12px 40px 0px #00000029" }}
            >
           <div className="relative w-full aspect-[16/7] bg-white">
  <Image
    src={bannerData.bannerImage as string}
    alt={bannerData.altText || "Energy Infrastructure Banner"}
    fill
    className="object-contain"
    loading="lazy"
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k="
    sizes="(max-width: 640px) 100vw, 1100px"
  />
</div>

            </div>
          </section>
        )}

        <div className="w-full space-y-9">
          <div className="mt-6">
            <CTABanner />
          </div>
        </div>
      </div>
    </section>
  );
}
