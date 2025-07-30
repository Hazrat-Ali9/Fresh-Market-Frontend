import React from "react";
// Product checkout
import { FaPlus } from "react-icons/fa";
import { LuMinus } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import ShippingForm from "./ShippingForm";

const ProductCheckOut = () => {
  return (
    <div className="container pt-40">
      <div className="md:flex justify-between">
        <div className="md:w-[600px] h-[400px] overflow-y-scroll pr-3">
          <div className="flex border p-2 border-gray-200 space-x-4">
            <div className="flex justify-center items-center">img</div>
            <div className="w-full pr-2">
              <div className="text-sm">
                <h1>Product Name</h1>
                <p>item price $10</p>
              </div>
              <div className="flex w-full justify-between items-center">
                <div className="text-sm">price $60</div>
                <div className="flex items-center justify-center space-x-3">
                  <span>
                    <LuMinus />
                  </span>
                  <span>6</span>
                  <span>
                    <FaPlus />
                  </span>
                </div>
                <div>
                  <RiDeleteBin6Line className="text-xl text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 h-[210px] w-[400px] px-3 py-5">
          <h1 className="text-xl font-bold">Order Summary</h1>
          <div className="mt-4 space-y-3 border-b">
            <div className="flex justify-between items-center">
              <p>Subtotal</p>
              <p>$60</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Shipping Cost</p>
              <p>$15</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Discount</p>
              <p>$0</p>
            </div>
          </div>
          <div className="flex mt-2 text-xl font-bold justify-between items-center">
            <p>Grand Total</p>
            <p>$75</p>
          </div>
        </div>
      </div>

      {/* Shipping Details */}
      <div className="pt-10">
        <div>
          <ShippingForm />
        </div>
      </div>
    </div>
  );
};

export default ProductCheckOut;
