import Link from "next/link";

type ArticleCardType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  content: string[];
};

const categoryColors: Record<string, string> = {
  World: "bg-emerald-50 text-emerald-800 border-emerald-200",

  Technology: "bg-blue-50 text-blue-800 border-blue-200",

  Culture: "bg-purple-50 text-purple-800 border-purple-200",

  Travel: "bg-amber-50 text-amber-800 border-amber-200",

  Design: "bg-pink-50 text-pink-800 border-pink-200",

  Science: "bg-cyan-50 text-cyan-800 border-cyan-200",

  Business: "bg-orange-50 text-orange-800 border-orange-200",
};

export const ArticleCard = (props: ArticleCardType) => {
  const { title, description, slug, category, image, imageAlt, author, date } =
    props;

  const firstLetter = author
    .split(" ")
    .map((name) => name[0])
    .join("");

  const categoryColor = categoryColors[category];

  return (
    <Link href={`/news/${slug}`} className="group">
      <main className="">
        <div className="relative rounded-2xl h-full win-w-0 border bg-[#FFFFFF] border-[#E7E5E4] overflow-hidden shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-950/5 focus-visible:border-orange-300 motion-reduce:transform-none motion-reduce:transition-none">
          <div>
            <img
              src={image}
              alt={imageAlt}
              className="group-hover:scale-110 transition ease-in-out duration-300 w-full h-58.75 flex justify-between rounded-t-2xl"
            />
            <span
              className={`absolute top-4 left-4 px-3 py-1.5 rounded-[100px] text-[10px] font-bold flex justify-center items-center ring-1 ring-inset ${categoryColor}`}
            >
              {category}
            </span>
            <div className="absolute top-50 left-4 flex items-center gap-2 text-white">
              <span>◷</span>
              <span className="text-base">1 min read</span>
            </div>
          </div>
          <div className="flex flex-col justify-between p-6">
            <div className="flex flex-col gap-3">
              <div className="text-xl text-[#1C1917] font-bold group-hover:text-orange-500">
                {title}
              </div>
              <div className="text-sm text-[#57534E] font-regular">
                {description}
              </div>
            </div>
            <div className="mt-auto pt-6">
              <div className="flex items-center gap-3 border-t border-stone-100 pt-4 ">
                <div className={`size-10 shrink-0 rounded-full text-xs font-bold flex justify-center items-center ring-1 ring-inset ${categoryColor}` }>
                  {firstLetter}
                </div>
                <div className="w-full gap-1 flex flex-col ">
                  <p className="text-xs text-[#292524] font-bold">{author}</p>
                  <p className="text-[11px] text-[#78716C] ">{date}</p>
                </div>
                <span
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-orange-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white group-focus-visible:bg-accent group-focus-visible:text-white motion-reduce:transition-none group-hover:bg-orange-500"
                  aria-hidden="true"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Link>
  );
};
