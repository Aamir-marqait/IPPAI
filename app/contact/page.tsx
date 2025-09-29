import ContactSection from "./contact-section";
import HeroSection from "./hero-section";
import MapSection from "./map-section";
import PartnersCarousel from "./partners";

function page() {
  return (
    <div>
      <HeroSection />
      <ContactSection />
      <MapSection />
      <PartnersCarousel />
    </div>
  );
}

export default page;
