import Articles from "./articles";
import ContactSection from "./contact-section";
import HeroSection from "./hero-section";
import { Suspense } from "react";

const Page = () => {
  return (
    <main>
      <HeroSection />
      <Suspense>
        <Articles />
      </Suspense>
      <ContactSection />
    </main>
  );
};

export default Page;
