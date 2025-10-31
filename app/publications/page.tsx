import React from "react";
import HeroSection from "./hero-section";
import PublicationsSection from "./PublicationsSection";
import { getPublicationsPageData } from "@/lib/sanity/queries";

export const revalidate = 60;

export default async function PublicationsPage() {
  const pageData = await getPublicationsPageData();

  return (
    <div>
      <HeroSection 
        title={pageData.heroTitle}
        subtitle={pageData.heroSubtitle}
        backgroundImage={pageData.heroBackgroundImage}
      />
      <PublicationsSection 
        publications={pageData.publications}
        categories={pageData.categories}
      />
    </div>
  );
}