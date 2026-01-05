import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import EditorialGrid from "./components/EditorialGrid";
import InteriorGallery from "./components/InteriorGallery";

export const metadata = {
  title: "Indepelle Furniture | Buy Furniture Online",
  description:
    "Buy premium furniture like sofa, bed, dining table online at best price.",
};

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <Hero />

      {/* CATEGORY GRID */}
      <CategoryGrid />

      {/* INTERIOR GALLERY (NEW SECTION) */}
      <InteriorGallery
        title="Our Interior Designs"
        limit={6}   // Home page par sirf 6 images
      />

      {/* EDITORIAL / BLOG / CONTENT */}
      <EditorialGrid />
    </main>
  );
}
