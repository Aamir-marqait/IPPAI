// import PartnersCarousel from "@/components/homepage/association-partners";
// import CompanyCarousel from "@/components/homepage/collab";

import HomeHero from "@/components/homepage/hero-section";
import Introduction from "@/components/homepage/introduction";
// import Contributors from "@/components/homepage/key-contribution";
import KnowledgeHub from "@/components/homepage/knowledge-hub";
// import { LatestVideos } from "@/components/homepage/latest-videos";
import LeadershipSection from "@/components/homepage/LeadershipSection";
import Commitments from "@/components/homepage/our-commitments";
import Testimonials from "@/components/homepage/testimonials";
import { VoicesInAction } from "@/components/homepage/voice";
import WhatWeDo from "@/components/homepage/what-we-do";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeHero />
      {/* <PartnersCarousel /> */}
      <Introduction />
      <section className="w-full flex justify-center py-8 px-4 md:px-6 lg:px-8 md:-mt-24">
        <div className="w-full max-w-[1200px] relative aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden shadow-lg">
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

      <KnowledgeHub />
      <Commitments />
      {/* <LatestVideos /> */}
      <VoicesInAction />
      <WhatWeDo />
      <Testimonials />
      {/* <Contributors /> */}
      <LeadershipSection />
      {/* <CompanyCarousel /> */}
    </div>
  );
}
