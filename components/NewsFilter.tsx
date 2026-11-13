"use client";

import { useState } from "react";
import data from "@/data/news.json";
import { ArticleCard } from "@/components/ArticleCard";

const categories = [
  "All stories",
  "World",
  "Technology",
  "Culture",
  "Travel",
  "Design",
  "Science",
  "Business",
];

export const NewsFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All stories");

  const filteredArticles =
    selectedCategory === "All stories"
      ? data
      : data.filter(
          (article) =>
            article.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  return (
    <div>
      <div className="border-y border-[#E2E2DA] py-4 flex gap-4 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
            className={`rounded px-3 py-2.5 text-xs transition-colors ${
              selectedCategory === category
                ? "bg-[#22241F] text-white"
                : "text-[#65675F] hover:bg-[#EAE9E3]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 mt-8">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};
