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
    <div className="relative rounded-2xl w-[376px] h-[500px] border bg-[#FFFFFF] border-[#E7E5E4] overflow-hidden">
      <div>
        <img
          src={image}
          alt={imageAlt}
          className="w-[374px] h-[235px] flex justify-between rounded-t-2xl"
        />
        <span className="absolute top-4 left-4 w-[62px] h-[27px] rounded-[100px] bg-[#ECFDF5] text-[10px] text-[#065F46] font-bold flex justify-center items-center">
          {category}
        </span>
        <div className="absolute top-50 left-4">
          <span className="text-xs text-[#FFFFFF]">{slug}</span>
        </div>
      </div>
      <div className="w-[374px] h-[263px] flex flex-col justify-between p-6">
        <div className="w-[326px] h-[114px] flex flex-col gap-3">
          <div className="text-xl text-[#1C1917] font-bold">{title}</div>
          <div className="text-sm text-[#57534E] font-regular">
            {description}
          </div>
        </div>
        <div className="w-[326px] h-[57px] gap-4 flex flex-col">
          <div className="h-[1px] w-[326px] bg-[#E2E2DA]"></div>
          <div className="w-[326px] h-[40px] flex gap-4">
            <div className="w-10 h-10 rounded-[100px] text-xs font-bold bg-[#ECFDF5] flex justify-center items-center" >AM</div>
            <div className="w-[226px] h-[37px] gap-1 flex flex-col ">
                <p className="text-xs text-[#292524] font-bold">{author}</p>
                <p className="text-[11px] text-[#78716C] ">{date}</p>
            </div>
            <div className="w-9 h-9 rounded-[100px] bg-[#FFF7ED]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
