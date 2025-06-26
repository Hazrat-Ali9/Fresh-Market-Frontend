import { FlashSaleItem } from "@/components/Home/FlashSale/FlashSale";
import VegetableCard from "@/components/VegetableCard/VegetableCard";
import React from "react";
interface ratingData {
  rating: string;
}

const AllCategoryProductsPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data: FlashSaleItem[] = await res.json();
  const sortedProducts = data.sort(
    (a: ratingData, b: ratingData) =>
      parseFloat(b.rating) - parseFloat(a.rating)
  );
  return (
    <>
      <div className="container pt-40">
        <h2>All Category Trending Products </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 pt-10">
          {sortedProducts?.slice(0, 10)?.map((item: FlashSaleItem) => (
            <VegetableCard item={item} key={item._id} />
          ))}
        </div>
      </div>
      ;
    </>
  );
};

export default AllCategoryProductsPage;
