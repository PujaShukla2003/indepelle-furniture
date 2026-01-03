import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";

export const metadata = {
  title: "Indepelle Furniture | Buy Furniture Online",
  description:
    "Buy premium furniture like sofa, bed, dining table online at best price.",
};

export default function Home() {
  return (
    <main>
      <Hero />
       <CategoryGrid />
    </main>
  );
}
