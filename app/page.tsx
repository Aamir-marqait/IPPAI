import PartnersCarousel from "@/components/homepage/association-partners";
import HomeHero from "@/components/homepage/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeHero />
      <PartnersCarousel />
    </div>
  );
}
