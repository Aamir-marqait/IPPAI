import { Suspense } from "react";
import { getAllArticles, getArticlesHero } from "@/lib/sanity";
import ArticlesClient from "./articles";
import HeroSection from "./hero-section";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ArticlesPage() {
  // Fetch data from Sanity
  const [articles, heroData] = await Promise.all([
    getAllArticles(),
    getArticlesHero(),
  ]);

  // Fallback hero data if not set in Sanity
  const hero = heroData || {
    title: "Articles",
    subtitle: "",
    backgroundImage: "/article/hero.png",
  };

  return (
    <main>
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
      />
      <Suspense fallback={<ArticlesLoading />}>
        <ArticlesClient articles={articles || []} />
      </Suspense>
    </main>
  );
}

// Loading component
function ArticlesLoading() {
  return (
    <section className="w-full py-10 sm:py-14 px-2 sm:px-6 bg-white">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-8">
          <div className="flex flex-col">
            <div className="h-12 w-64 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-6 w-96 bg-gray-200 animate-pulse rounded mt-2"></div>
          </div>
          <div className="flex gap-4">
            <div className="h-10 w-[265px] bg-gray-200 animate-pulse rounded"></div>
            <div className="h-10 w-[115px] bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm p-6 animate-pulse">
              <div className="w-full h-60 bg-gray-200 rounded-xl mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}