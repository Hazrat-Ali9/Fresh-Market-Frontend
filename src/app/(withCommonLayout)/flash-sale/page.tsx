import { FlashSaleItem } from "@/components/Home/FlashSale/FlashSale";
import VegetableCard from "@/components/VegetableCard/VegetableCard";
import React from "react";

const flashSalePage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data: FlashSaleItem[] = await res.json();
  return (
    <>
      <div className="container pt-40">
        <h2>Flash Sale Product</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 pt-10">
          {data?.slice(0, 10)?.map((item: FlashSaleItem) => (
            <VegetableCard item={item} key={item._id} />
          ))}
        </div>
      </div>
      ;
    </>
  );
};

export default flashSalePage;
