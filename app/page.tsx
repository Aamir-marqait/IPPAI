import PartnersCarousel from "@/components/homepage/association-partners";
import HomeHero from "@/components/homepage/hero-section";
import Introduction from "@/components/homepage/introduction";
import Commitments from "@/components/homepage/our-commitments";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <PartnersCarousel />
      <Introduction />
      <Commitments />
    </div>
  );
}
