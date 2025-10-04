"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

const galleryImages = [
  "/img/img1.png",
  "/img/img2.png",
  "/img/img3.png",
  "/img/img4.png",
  "/img/img5.png",
  "/img/img6.png",
  "/img/img7.png",
  "/img/img8.png",
  "/img/img9.png",
];

export default function PhotoGallery() {
  return (
    <section className="py-10 sm:py-14 px-2 sm:px-6 bg-white">
      <div className="mx-auto w-full max-w-[1100px] flex flex-col items-center">
        {/* Heading */}
        <h2 className="font-red-hat-display font-bold text-[36px] leading-[48px] text-[#141414] text-center capitalize mb-2">
          Photo Gallery
        </h2>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-[#4D5756] text-center mb-8 max-w-2xl">
          See the faces behind the impact, witness the transformative power of
          our programmes and explore visual stories of hope and resilience.
        </p>
        {/* Gallery Grid */}
        <div
          className="
            w-full
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-5
            justify-items-center
          "
        >
          {galleryImages.map((src, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <div
                  className="relative bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
                  style={{
                    width: "350.6px",
                    height: "231px",
                    maxWidth: "100%",
                    opacity: 1,
                  }}
                >
                  <Image
                    src={src}
                    alt={`Gallery Image ${idx + 1}`}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: "12px",
                    }}
                    sizes="(max-width: 700px) 90vw, (max-width: 1200px) 45vw, 350px"
                    priority={idx < 3}
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                <DialogTitle className="sr-only">
                  Gallery Image {idx + 1}
                </DialogTitle>
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={src}
                    alt={`Gallery Image ${idx + 1}`}
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    sizes="(max-width: 1200px) 90vw, 80vw"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
