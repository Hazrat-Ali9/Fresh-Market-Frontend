import FlashSale from "@/components/Home/FlashSale/FlashSale";
import HomeBanner from "@/components/Home/HomeBanner/HomeBanner";
import OurFeature from "@/components/Home/OurFeature/OurFeature";
import TopCategories from "@/components/Home/TopCategories/TopCategories";
import TrendingProducts from "@/components/Home/TrendingProducts/TrendingProducts";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <OurFeature />
      <FlashSale />
      <TopCategories />
      <TrendingProducts />
    </>
  );
}
