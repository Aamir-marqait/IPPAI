import Image from "next/image";
import { CTABanner } from "./cta-banner";

export default function Banners() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 px-2 sm:px-4 flex flex-col items-center">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center">
        <section className="w-full flex justify-center py-8 px-4">
          <div
            className="relative w-full max-w-[753px]  border-12  h-[416px] bg-white rounded-[71px] overflow-hidden p-4"
            style={{ boxShadow: "0px 12px 40px 0px #00000029" }}
          >
            <Image
              src="/optimized/main.webp"
              alt="Energy Infrastructure"
              fill
              className="object-cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k="
            />
          </div>
        </section>

        <div className="w-full space-y-9">
          <div className="mt-6">
            <CTABanner />
          </div>
        </div>
      </div>
    </section>
  );
}
