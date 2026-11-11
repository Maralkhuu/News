import data from "@/data/news.json";
import { notFound } from "next/navigation";
import articles from "@/data/news.json";
import { ArticleCard } from "@/components/ArticleCard";
type ArticleDetailPageType = {
  params: Promise<{ slug: string }>;
};


export const instant= false
export const generateStaticParams = () => {
  return data.map((article) => ({
    slug: article.slug,
  }));
};

const ArticleDetailpage = async ({ params }: ArticleDetailPageType) => {
  const { slug } = await params;

  const foundArticle = data.find((article) => article.slug === slug);

  if (!foundArticle) {
    notFound();
  }

  const related = articles.filter(
    (element) =>
      foundArticle.category === element.category &&
      foundArticle.id !== element.id,
  );
  return 
  <main>
    <div></div>
  </main>
  
};

export default ArticleDetailpage;
