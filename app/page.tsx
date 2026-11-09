import { ArticleCard } from "@/components/ArticleCard";

const Home = () => {
  return (
    <div>
      <ArticleCard
        title="The future of cities is greener than you think"
        id={1}
        slug="1 min read"
        description="From rooftop gardens to car-free streets, a quieter urban revolution is taking root."
        category="WORLD"
        image="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85"
        imageAlt="Modern architecture surrounded by greenery"
        author="Alex Morgan"
        date="Nov 4, 2026"
        content={["dadgasf", "sdafasf"]}
      />
    </div>
  );
};

export default Home;
