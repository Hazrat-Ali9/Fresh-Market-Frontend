import Link from "next/link";
import React from "react";
import { FlashSaleItem } from "../FlashSale/FlashSale";
import VegetableCard from "@/components/VegetableCard/VegetableCard";
// Trending Products
interface ratingData {
  rating: string;
}

const TrendingProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data: FlashSaleItem[] = await res.json();
  // Sort the products by ratings in descending order
  const sortedProducts = data.sort(
    (a: ratingData, b: ratingData) =>
      parseFloat(b.rating) - parseFloat(a.rating)
  );

  // Get the top 6 rated products
  const topProducts = sortedProducts.slice(0, 6);

  return (
    <>
      <div className="container pt-40">
        <div className="flex justify-between">
          <div>
            <h2>Trending Products</h2>
            <p></p>
          </div>
          <Link href="/products">
            <button className="btn">View All</button>
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-16">
          {topProducts?.map((item: FlashSaleItem) => (
            <VegetableCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
