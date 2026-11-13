import { ArticleCard } from "@/components/ArticleCard";
import data from "@/data/news.json";
import Link from "next/link";
import { notFound } from "next/navigation";

type ArticleDetailPageType = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export const generateStaticParams = () => {
  return data.map((article) => ({
    slug: article.slug,
  }));
};

const ArticleDetailPage = async ({ params }: ArticleDetailPageType) => {
  const { slug } = await params;

  const foundArticle = data.find((article) => article.slug === slug);

  if (!foundArticle) {
    notFound();
  }

  const relatedArticles = data
    .filter(
      (article) =>
        article.category === foundArticle.category &&
        article.slug !== foundArticle.slug,
    )
    .slice(0, 2);

  const firstLetter = foundArticle.author
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <main className=" bg-[#FAF9F6]">
      <div className="w-full mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="w-full h-15.25 pt-6 pb-5 flex gap-4 items-center">
          <Link href="/" className="font-bold text-xs text-[#22241F]">
            ← All stories
          </Link>
          <span className="text-xs text-[#65675F] ">/</span>
          <p className="text-xs text-[#65675F] ">World</p>
        </div>
        <div className="w-full h-[1px] bg-[#E2E2DA] "></div>
        <div className="w-full h-104.75 px-20">
          <div className="w-full pt-14 pb-10 flex gap-5 flex-col">
            <div className="w-[151px] h-[27px] flex gap-3 items-baseline">
              <p className="w-15.5 h-6.75 rounded-[100px] bg-[#ECFDF5] text-[10px] text-[#065F46] font-bold flex justify-center items-center ring-1 ring-inset bg-emerald-50 text-emerald-800 ring-emerald-200">
                {foundArticle.category}
              </p>
              <p className="text-[#65675F] text-[11px]">— THE DAILY</p>
            </div>

            <h1 className="text-6xl font-bold">{foundArticle.title}</h1>

            <p className="text-[20px] text-[#57534E] py-5">
              {foundArticle.description}
            </p>
            <div className="w-full h-[1px] bg-[#E2E2DA] "></div>
            <div className="w-[461px] flex justify-between">
              <div className="w-[212px] h-[48px] flex gap-3.5">
                <div className="size-10 shrink-0 rounded-full text-xs font-bold flex justify-center items-center ring-1 ring-inset bg-emerald-50 text-emerald-800 ring-emerald-200 ">
                  {firstLetter}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] text-[#65675F] font-bold">
                    WRITTEN BY
                  </p>
                  <p className="text-[14px] text-[#22241F] font-bold ">
                    {foundArticle.author}
                  </p>
                </div>
              </div>
              <div className="w-[249px] h-[41px] flex gap-6 ">
                <div className="w-[115px] h-[41px] flex flex-col gap-[6px] ">
                  <p className="text-[10px] text-[#65675F] font-bold ">
                    PUBLISHED
                  </p>
                  <p className="text-[14px] text-[#22241F] ">
                    {foundArticle.date}
                  </p>
                </div>
                <div className="w-[110px] h-[41px] flex flex-col gap-[6px]">
                  <p className="text-[10px] text-[#65675F] font-bold">
                    READING TIME
                  </p>
                  <p className="text-[14px] text-[#22241F]">1 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={foundArticle.image}
          alt={foundArticle.imageAlt}
          className="w-full min-h-0 object-cover rounded-2xl"
        />
        <div className=" h-[27px] flex justify-between pt-3 ">
          <p className="text-[10px] texgt-[#65675F]">
            Modern architecture surrounded by greenery
          </p>
          <p className="text-[10px] texgt-[#65675F]">
            Illustrative photography · Unsplash
          </p>
        </div>
        <div className="w-[full] h-[854px] py-14 flex gap-4 flex-col justify-center items-center ">
          <div className="w-[768px] rounded-2xl border border-[#E2E2DA] bg-[#FFFFFF] p-10 flex gap-6 flex-col">
            <p className="text-[#C44724] text-[10px] font-bold ">
              ━━ THE STORY
            </p>
            {foundArticle.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-[20px] text-[#44403C] leading-[34.2px] mb-7"
              >
                {paragraph}
              </p>
            ))}
            <div className="text-2xl text-[#C44724] font-bold flex justify-center">
              • • •
            </div>
          </div>
          <p className="w-[full] h-4 text-[11px] text-[#65675F] ">
            Fictional sample story · The Daily learning edition
          </p>
          <div className="w-[694px] h-[98px] rounded-2xl flex justify-between p-6 bg-[#FFF7ED] ">
            <div className="w-[548px] h-[50px] flex gap-1 flex-col  ">
              <p className="text-[18px] text-[#22241F] font-semibold ">
                A little more curiosity?
              </p>
              <p className="text-[14px] text-[#65675F] ">
                Your next good read is just around the corner.
              </p>
            </div>
            <Link
              href="/"
              className="w-[98px] h-[37px] rounded-full bg-[#22241F] flex justify-center items-center text-white text-[12px] cursor-pointer hover:bg-orange-500 transition ease-in-out duration-300"
            >
              All stories ↗
            </Link>
          </div>
        </div>
        {/* More to discover */}
        <section className="w-full pt-10 pb-20">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex flex-col gap-3">
              <p className="text-[13px] font-bold tracking-wider text-[#C44724]">
                KEEP YOUR CURIOSITY GOING
              </p>

              <h2 className="text-4xl font-bold text-[#22241F]">
                More to discover.
              </h2>
            </div>

            <button className="border border-emerald-200 rounded-full px-4 py-2 text-[14px] text-emerald-800 hover:bg-emerald-50">
              {foundArticle.category.charAt(0) +
                foundArticle.category.slice(1).toLowerCase()}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ArticleDetailPage;
