import ArticlesAndInsights from "@/components/homepage/Articleandinsight";
import Banners from "@/components/homepage/banners";
import HomeHero from "@/components/homepage/hero-section";
import Introduction from "@/components/homepage/introduction";
// import KnowledgeHub from "@/components/homepage/knowledge-hub";
import LeadershipSection from "@/components/homepage/LeadershipSection";
import Commitments from "@/components/homepage/our-commitments";
import Testimonials from "@/components/homepage/testimonials";
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
      <Testimonials />
      <LeadershipSection />
      <Banners />
    </div>
  );
}
