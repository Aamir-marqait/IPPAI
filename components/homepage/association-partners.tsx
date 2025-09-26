"use client";

import Image from "next/image";

const partners = [
  { name: "Google", logo: "/home/google.png" },
  { name: "Uber", logo: "/home/uber.png" },
  { name: "Microsoft", logo: "/home/microsoft.png" },
  { name: "Shopify", logo: "/home/shopify.png" },
  { name: "Spotify", logo: "/home/spotify.png" },
];

export default function PartnersCarousel() {
  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="px-4">
        <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-normal font-briem-hand leading-none text-center text-[#141414] mb-12">
          Association Partners
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
