
import ArticlesAndInsights from "@/components/homepage/Article";
import Banners from "@/components/homepage/banners";
import HomeHero from "@/components/homepage/hero-section";
import Introduction from "@/components/homepage/introduction";

import Commitments from "@/components/homepage/our-commitments";
import TestimonialsLeadership from "@/components/homepage/testimonialsLeadership";
import { VoicesInAction } from "@/components/homepage/voice";
import WhatWeDo from "@/components/homepage/what-we-do";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <Introduction />
      <ArticlesAndInsights />
      {/* <KnowledgeHub /> */}
      <Commitments />
      <VoicesInAction />
      <WhatWeDo />
      {/* <Testimonials />
      <LeadershipSection /> */}
      <TestimonialsLeadership />
      <Banners />
    </div>
  );
}
