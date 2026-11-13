


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


const HomePage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("All stories");

  const filteredArticles =
    selectedCategory === "All stories"
      ? data
      : data.filter(
          (article) =>
            article.category.toLowerCase() ===
            selectedCategory.toLowerCase()
        );

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-12">

      <header>
        <div className="mb-6 flex items-end justify-between gap-5">
          <div className="flex flex-col justify-between">
            <p className="text-[10px] text-[#C44724]">
              STAY CURIOUS
            </p>
            <p className="text-[36px] font-bold text-[#22241F]">
              The latest stories.
            </p>
          </div>

          <p className="text-[12px] text-[#65675F]">
            Big ideas. Fresh voices. Worth your time.
          </p>
        </div>
      </header>

      {/* Category Filter */}
      <div className="border-y border-[#E2E2DA] py-4 flex gap-4 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
            className={`rounded cursor-pointer px-3 py-2.5 text-xs transition-colors ${
              selectedCategory === category
                ? "bg-[#22241F] text-white "
                : "text-[#65675F] hover:bg-[#EAE9E3]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Article Count */}
      <p className="w-full py-5 text-[12px] text-[#65675F]">
        {filteredArticles.length} stories to explore
      </p>

      {/* Article Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <p className="py-10 text-center text-[#65675F]">
          No stories found.
        </p>
      )}

      <footer></footer>
    </div>
  );
};




export default HomePage;
