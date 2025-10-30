import Image from "next/image";

interface GalleryImage {
  url: string;
  alt?: string;  // ✅ Made optional
}

interface EventsGalleryData {
  sectionTitle?: string;  // ✅ Made optional to match Sanity
  mainHeading: string;
  description?: string;  // ✅ Made optional to match Sanity
  images: GalleryImage[];
}

interface EventsGalleryProps {
  data: EventsGalleryData;
}

export default function EventsGallery({ data }: EventsGalleryProps) {
  const images = data.images;

  // Desktop custom positions
  const positions = [
    { width: "273.75px", height: "196.94px", top: "0px", left: "0px" }, // 1
    { width: "273.75px", height: "246.17px", top: "0px", left: "288.75px" }, // 2
    { width: "273.75px", height: "295.41px", top: "0px", left: "577.5px" }, // 3
    { width: "231px", height: "246px", top: "0px", left: "866px" }, // 4
    { width: "273.75px", height: "295.41px", top: "211.94px", left: "0px" }, // 5
    {
      width: "273.75px",
      height: "246.17px",
      top: "261.17px",
      left: "288.75px",
    }, // 6
    { width: "273.75px", height: "196.94px", top: "310.41px", left: "577.5px" }, // 7
    { width: "231px", height: "246px", top: "261px", left: "866px" }, // 8
  ];

  return (
    <section className="w-full py-10 sm:py-14 px-2 sm:px-4 bg-gray-50">
      <div className="mx-auto max-w-[1100px]">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          {data.sectionTitle && (
            <div className="font-red-hat-display font-bold text-xs sm:text-base leading-none uppercase text-[#D3363B] mb-2 sm:mb-4">
              {data.sectionTitle}
            </div>
          )}
          <h2 className="font-red-hat-display font-bold text-xl sm:text-[36px] leading-none text-[#141414] mb-4 sm:mb-6">
            {data.mainHeading}
          </h2>
          {data.description && (
            <p className="font-poppins font-normal text-sm sm:text-base leading-[24px] sm:leading-[28px] text-gray-600 max-w-2xl">
              {data.description}
            </p>
          )}
        </div>

        {/* Responsive Grid for mobile/tablet, custom grid for desktop */}
        <div>
          {/* MOBILE/TABLET GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 lg:hidden">
            {images.map((image, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden rounded-[18px] bg-gray-200 group"
              >
                <Image
                  src={image.url || "/placeholder.svg"}
                  alt={image.alt || `Gallery image ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 260px"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* DESKTOP Custom Absolute Grid */}
          <div className="hidden lg:block relative w-full h-[520px]">
            {images.slice(0, 8).map((image, index) => {
              const pos = positions[index];
              return (
                <div
                  key={index}
                  className="absolute overflow-hidden bg-gray-200 group cursor-pointer"
                  style={{
                    width: pos.width,
                    height: pos.height,
                    top: pos.top,
                    left: pos.left,
                    borderRadius: "25px",
                  }}
                >
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="270px"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}