import VegetableCard from "@/components/VegetableCard/VegetableCard";
import Link from "next/link";
import React from "react";

export interface FlashSaleItem {
  _id: string;
  name: string;
  image: string;
  price: string;
  discountPercentage: string;
  rating: string;
  review: string;
  category: string;
  deliveryPrice: string;
  deliveryTime: string;
  des1: string;
  des2: string;
  des3: string;
  fullDes: string;
}
// Flash Sale
export interface VegetableCardProps {
  item: FlashSaleItem;
}

const FlashSale = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data: FlashSaleItem[] = await res.json();
  // console.log(data);
  return (
    <>
      <div className="container pt-40">
        <div className="flex justify-between">
          <div>
            <h2>Flash Sale</h2>
            <p></p>
          </div>
          <Link href="/flash-sale">
            <button className="btn">View All</button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 pt-10">
          {data?.slice(0, 4)?.map((item: FlashSaleItem) => (
            <VegetableCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FlashSale;
