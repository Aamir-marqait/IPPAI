import Image from "next/image";

export default function EventsGallery() {
  const images = [
    {
      src: "/event/img1.png",
      alt: "Business presentation with charts",
      size: "small",
    },
    {
      src: "/event/img2.png",
      alt: "Professional conference presentation",
      size: "equal",
    },
    {
      src: "/event/img3.png",
      alt: "Corporate meeting discussion",
      size: "big",
    },
    {
      src: "/event/img4.png",
      alt: "Business seminar audience",
      size: "equal",
    },
    {
      src: "/event/img5.png",
      alt: "Professional networking event",
      size: "big",
    },
    {
      src: "/event/img6.png",
      alt: "Corporate training session",
      size: "equal",
    },
    {
      src: "/event/img7.png",
      alt: "Conference auditorium presentation",
      size: "small",
    },
    {
      src: "/event/img8.png",
      alt: "Executive meeting with documents",
      size: "equal",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="mx-auto max-w-[1100px]">
        {/* Header Section */}
        <div className="mb-12">
          <div className="font-red-hat-display font-bold text-base leading-none uppercase text-[#D3363B] mb-4">
            EVENTS GALLERY
          </div>
          <h2 className="font-red-hat-display font-bold text-[36px] leading-none text-[#141414] mb-6">
            Collection of images from past events
          </h2>
          <p className="font-poppins font-normal text-base leading-[28px] text-gray-600 max-w-2xl">
            Unique confluences of stalwarts from government, industry and civil
            society engaging and deliberating for a brighter future.
          </p>
        </div>

        {/* Custom Positioned Grid */}
        <div className="relative w-full h-[520px]">
          {images.slice(0, 8).map((image, index) => {
            const positions = [
              {
                width: "273.75px",
                height: "196.94px",
                top: "0px",
                left: "0px",
              }, // 1
              {
                width: "273.75px",
                height: "246.17px",
                top: "0px",
                left: "288.75px",
              }, // 2
              {
                width: "273.75px",
                height: "295.41px",
                top: "0px",
                left: "577.5px",
              }, // 3
              { width: "231px", height: "246px", top: "0px", left: "866px" }, // 4
              {
                width: "273.75px",
                height: "295.41px",
                top: "211.94px",
                left: "0px",
              }, // 5
              {
                width: "273.75px",
                height: "246.17px",
                top: "261.17px",
                left: "288.75px",
              }, // 6
              {
                width: "273.75px",
                height: "196.94px",
                top: "310.41px",
                left: "577.5px",
              }, // 7
              { width: "231px", height: "246px", top: "261px", left: "866px" }, // 8
            ];

            const pos = positions[index];

            return (
              <div
                key={index}
                className="absolute overflow-hidden bg-gray-200 hover:scale-105 transition-transform duration-300 cursor-pointer"
                style={{
                  width: pos.width,
                  height: pos.height,
                  top: pos.top,
                  left: pos.left,
                  borderRadius: "25px",
                }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
