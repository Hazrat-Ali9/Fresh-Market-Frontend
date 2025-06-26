import { FlashSaleItem } from "@/components/Home/FlashSale/FlashSale";
import Image from "next/image";
import React from "react";

const ProductDetailsPage = async ({
  params: { productId },
}: {
  params: { productId: string };
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products/${productId}`,
      {
        next: {
          revalidate: 30,
        },
      }
    );

    if (!res.ok) {
      return {
        notFound: true,
      };
    }

    const data: FlashSaleItem = await res.json();
    // console.log(data);

    const discountPercentage = parseFloat(data?.discountPercentage);

    // Calculate discounted price
    const originalPrice = parseFloat(data?.price);

    // Ensure discountPercentage is a valid number before using it
    const discountedPrice =
      !isNaN(discountPercentage) && discountPercentage !== 0
        ? originalPrice - (originalPrice * discountPercentage) / 100
        : data?.price;

    return (
      <>
        <div className="container pt-40">
          {/* Render product details */}
          <h2>Product Details</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 pt-10">
            <div className="bg-[#fffff] shadow-xl rounded-lg">
              <Image
                className="h-[450px] w-[450px]"
                src={data?.image}
                width={450}
                height={450}
                alt="image"
              />
            </div>
            <div>
              <h3 className="font-bold text-3xl">Name: {data?.name}</h3>
              <div className="flex items-center space-x-2 pt-3">
                <p className="text-lg font-semibold">
                  Price: ${parseFloat(discountedPrice.toString()).toFixed(2)}
                </p>
                <p className="text-rose-600 opacity-60 line-through ">
                  ${originalPrice.toFixed(2)}
                </p>
              </div>
              <p className="font-semibold text-lg">
                deliveryPrice: ${data?.deliveryPrice}
              </p>
              <div className="flex space-x-2 pt-2">
                <p className="font-semibold text-lg">Rating: {data?.rating}</p>
                <p className="font-semibold text-lg">Review: {data?.review}</p>
                <p className="font-semibold text-lg">
                  Delivery Time: {data?.deliveryTime}
                </p>
              </div>
              <div className="pt-2">
                <p className="">1. {data?.des1}</p>
                <p className="">2. {data?.des2}</p>
                <p className="">3. {data?.des3}</p>
              </div>

              <p className="pt-2">
                {" "}
                <span className="text-lg font-semibold">
                  Description :
                </span>{" "}
                {data?.fullDes}
              </p>
            </div>
          </div>

          {/* Add more details as needed */}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching product details:", error);
    return <p>Error fetching product details</p>;
  }
};

export default ProductDetailsPage;
