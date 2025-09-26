import PartnersCarousel from "@/components/homepage/association-partners";
import HomeHero from "@/components/homepage/hero-section";
import Introduction from "@/components/homepage/introduction";
import KnowledgeHub from "@/components/homepage/knowledge-hub";
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
      <Commitments />
      <WhatWeDo />
      <KnowledgeHub />
      <VoicesInAction />
      <Testimonials />
    </div>
  );
}
