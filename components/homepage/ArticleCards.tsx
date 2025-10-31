"use client";

import React, { useState } from "react";
import Image from "next/image";
import { JoinUsModal } from "@/components/JoinMembershipModal";
import type { Article } from "@/app/articles/types/article";

interface ArticleCardsProps {
  articles: Article[];
}

const ArticleCards = ({ articles }: ArticleCardsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl justify-center items-center mb-8">
        {articles.map((article, idx) => (
          <div
            key={article._id}
            className={`bg-white  py-3 flex flex-col items-start px-3 flex-1 min-w-[230px] max-w-[330px] mx-auto cursor-pointer transition hover:shadow-[0px_8px_28px_0px_rgba(16,24,40,0.13)] ${
              idx === 1 ? "" : ""
            }`}
            style={{ boxShadow: "0px 6px 16px 0px #A3A3A333" }}
            onClick={() => {
              setSelectedArticle({
                ...article,
                date: formatDate(article.publishedAt || ""),
              });
              setIsModalOpen(true);
            }}
          >
            {/* Article Image */}
            <div className="relative w-full h-48 mb-5  overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 350px"
              />
              {article.featured && (
                <div className="absolute top-2 right-2 bg-[#D3363B] text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}
            </div>

            {/* Article Title */}
            <h3 className="font-red-hat-display font-semibold text-[24px] leading-[38px] text-left capitalize text-[#121212] mb-3 line-clamp-2 w-full">
              {article.title}
            </h3>

            {/* Article Summary */}
            <p className="font-poppins  pr-3 font-normal text-[16px] leading-[30px] text-left text-[#636363] line-clamp-3 mb-4">
              {article.summary}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 mt-auto w-full">
              <Image
                src={article.author.avatar || "/header/logo.png"}
                alt={article.author.name}
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
              <div>
                <div className="font-rubik font-normal text-[14px] leading-none capitalize text-black text-opacity-60">
                  {article.author.name}
                </div>
                {/* <div className="font-inter font-normal text-sm leading-5 text-[#667085]">
                  {formatDate(article.publishedAt)}
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <JoinUsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        article={selectedArticle}
      />
    </>
  );
};

export default ArticleCards;
