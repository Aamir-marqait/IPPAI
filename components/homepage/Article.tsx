import React from "react";
import Link from "next/link";
import { getAllArticles } from "@/lib/sanity/queries/articles";
import ArticleCards from "./ArticleCards";

const ArticlesAndInsights = async () => {
  // Fetch all articles and get the top 3
  const allArticles = await getAllArticles();
  const topArticles = allArticles.slice(0, 3);

  return (
    <section
      className="min-h-[85vh] px-4 py-12 flex flex-col justify-center items-center"
      style={{
        background:
          "linear-gradient(255.27deg, #D3363B 26.48%, #6D1C1E 110.06%)",
      }}
    >
      <div className="mb-8 text-center">
        <h2 className="font-red-hat-display font-bold text-4xl leading-none text-center text-white mb-2">
          Articles and Insights
        </h2>
        <p className="font-poppins font-normal text-base leading-7 text-center text-white">
          Your gateway to energy intelligence and thought leadership.
        </p>
      </div>

      {topArticles.length > 0 ? (
        <ArticleCards articles={topArticles} />
      ) : (
        <div className="text-white text-center py-12">
          <p className="text-lg">No articles available at the moment.</p>
        </div>
      )}

      <Link
        href="/articles"
        className="font-sora font-semibold text-base leading-[150%] uppercase text-white px-6 py-2 rounded-md cursor-pointer transition flex items-center gap-2"
      >
        VIEW ALL<span className="text-base">&rarr;</span>
      </Link>
    </section>
  );
};

export default ArticlesAndInsights;
