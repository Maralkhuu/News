import Link from "next/link"

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

export const ArticleCard = (props: ArticleCardType) => {
  const {
    title,
    description,
    id,
    slug,
    category,
    image,
    imageAlt,
    author,
    date,
    content,
  } = props;

  return (
   <Link href={`news/ ${slug}`}>
    <div className="relative rounded-2xl h-full win-w-0 border bg-[#FFFFFF] border-[#E7E5E4] overflow-hidden shadow-2xs">
      <div>
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-[235px] flex justify-between rounded-t-2xl"
        />
        <span className="absolute top-4 left-4 w-[62px] h-[27px] rounded-[100px] bg-[#ECFDF5] text-[10px] text-[#065F46] font-bold flex justify-center items-center">
          {category}
        </span>
        <div className="absolute top-50 left-4 flex items-center gap-2 text-white">
          <span>◷</span>
          <span className="text-base">1 min read</span>
        </div>
      </div>
      <div className="flex flex-col justify-between p-6">
        <div className="flex flex-col gap-3">
          <div className="text-xl text-[#1C1917] font-bold">{title}</div>
          <div className="text-sm text-[#57534E] font-regular">
            {description}
          </div>
        </div>
        <div className="mt-auto pt-6">
          <div className="flex items-center gap-3 border-t border-stone-100 pt-4 ">
            <div className="size-10 shrink-0 rounded-full text-xs font-bold flex justify-center items-center ring-1 ring-inset bg-emerald-50 text-emerald-800 ring-emerald-200 ">
              AM
            </div>
            <div className="w-full gap-1 flex flex-col ">
              <p className="text-xs text-[#292524] font-bold">{author}</p>
              <p className="text-[11px] text-[#78716C] ">{date}</p>
            </div>
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-orange-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white group-focus-visible:bg-accent group-focus-visible:text-white motion-reduce:transition-none" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};
