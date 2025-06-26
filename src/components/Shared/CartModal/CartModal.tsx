import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidShoppingBag } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuMinus } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
interface CartModalProps {
  cartOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ cartOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed top-24 pt-2 pb-6 grid grid-rows-11  right-0 h-screen border-l border-gray-200 w-80 bg-[#ffffff] text-[#000] transition-transform transform ${
          cartOpen
            ? "translate-x-0 duration-500 "
            : "translate-x-full duration-500"
        }`}
      >
        <div className="lg:row-span-1">
          <div className="flex justify-between px-3">
            <div className="flex space-x-1 items-center ">
              <BiSolidShoppingBag size={30} />
              <p className="text-lg font-semibold">Items</p>
            </div>
            <div
              onClick={onClose}
              className="flex space-x-3 items-center hover:text-red-600 cursor-pointer border-2 border-[#55a630] p-1"
            >
              <IoCloseSharp />
              <p className="text-sm">Close</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="bg-gray-300 text-lg flex justify-between w-full  font-semibold py-1 text-[#55a630]">
              <p className=" px-3">Delivery Charge of</p>
              <p className=" px-3">$15</p>
            </div>
          </div>
        </div>
        <div className="lg:row-span-8 mt-6 w-full">
          <div className="flex border-b pb-1 border-gray-200 space-x-4 w-full">
            <div className="flex justify-center items-center">img</div>
            <div className="w-full pr-2">
              <div className="text-sm">
                <h1>Product Name</h1>
                <p>item price $10</p>
              </div>
              <div className="flex w-full justify-between items-center">
                <div className="text-sm">price $60</div>
                <div className="flex item-center  justify-center space-x-3">
                  <span>
                    <LuMinus className="" />
                  </span>
                  <span>6</span>
                  <span>
                    <FaPlus className="" />
                  </span>
                </div>
                <div>
                  <RiDeleteBin6Line className="text-xl text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:row-span-1 px-3">
          <Link href="/checkout">
            <div
              onClick={onClose}
              className="bg-[#55a630] w-full px-3 py-1 rounded-lg "
            >
              <button className="text-lg  w-full text-[#ffffff] flex justify-between items-center">
                <span>Proceed Checkout</span>
                <span className="bg-[#ffffff] text-[#55a630] px-1">$233</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartModal;
