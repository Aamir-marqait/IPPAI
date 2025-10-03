import PartnersCarousel from "@/components/homepage/association-partners";
import CompanyCarousel from "@/components/homepage/collab";
import HomeHero from "@/components/homepage/hero-section";
import Introduction from "@/components/homepage/introduction";
import Contributors from "@/components/homepage/key-contribution";
import KnowledgeHub from "@/components/homepage/knowledge-hub";
import { LatestVideos } from "@/components/homepage/latest-videos";
import Commitments from "@/components/homepage/our-commitments";
import Testimonials from "@/components/homepage/testimonials";
import { VoicesInAction } from "@/components/homepage/voice";
import WhatWeDo from "@/components/homepage/what-we-do";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <PartnersCarousel />
      <Introduction />
      <KnowledgeHub />
      <Commitments />
      <LatestVideos />
      <VoicesInAction />
      <WhatWeDo />
      <Testimonials />
      <Contributors />
      <CompanyCarousel />
    </div>
  );
}
