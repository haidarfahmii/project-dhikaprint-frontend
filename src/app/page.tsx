import CustomerFavorite from "@/features/home/CustomerFavorite";
import FeaturedProduct from "@/features/home/FeaturedProduct";
import Hero from "@/features/home/Hero";
import JourneyBanner from "@/features/home/JourneyBanner";
import CaseStudies from "@/features/home/CaseStudies";
import RecentBlog from "@/features/home/RecentBlog";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Banner Utama */}
      <Hero />

      {/* 2. Customer Favorite Section */}
      <CustomerFavorite />

      {/* 3. Featured Product Section */}
      <FeaturedProduct />

      {/* 4. Banner Perjalanan Kami */}
      <JourneyBanner />

      {/* 5. Case Studies Section */}
      <CaseStudies />

      {/* 6. Recent Blog Section */}
      <RecentBlog />
    </div>
  );
}
