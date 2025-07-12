import React from "react";
import { VegetableCardProps } from "../Home/FlashSale/FlashSale";
import Link from "next/link";
import Image from "next/image";
// Vegetable Card
const VegetableCard: React.FC<VegetableCardProps> = ({ item }) => {
  // Parse discountPercentage as a number
  const discountPercentage = parseFloat(item?.discountPercentage);

  // Calculate discounted price
  const originalPrice = parseFloat(item?.price);

  // Ensure discountPercentage is a valid number before using it
  const discountedPrice =
    !isNaN(discountPercentage) && discountPercentage !== 0
      ? originalPrice - (originalPrice * discountPercentage) / 100
      : item?.price;

  return (
    <>
      <Link href={`/products/${item._id}`}>
        <div className="shadow-lg hover:shadow-xl  bg-[#ffffff] rounded-xl h-[470px] hover:scale-105 duration-300">
          <Image
            className="h-[250px] w-full"
            src={item?.image}
            width={300}
            height={250}
            alt="image"
          />
          <div className="px-4 py-4">
            <div className="flex justify-between items-center">
              <h4 className="text-2xl font-bold">{item?.name}</h4>
              <p className="text-lg font-bold">
                Discount:{" "}
                <span className="text-[#55a630]">{discountPercentage}%</span>{" "}
              </p>
            </div>
            <div className="flex items-center space-x-2 pt-3">
              <p className="text-lg font-semibold">
                Price: ${parseFloat(discountedPrice.toString()).toFixed(2)}
              </p>
              <p className="text-rose-600 opacity-60 line-through ">
                ${originalPrice.toFixed(2)}
              </p>
            </div>

            <p className="text-lg font-semibold pt-2">rating:{item?.rating}</p>

            <div className="pt-3 flex justify-center">
              <button className="btn">Add To Cart</button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VegetableCard;
