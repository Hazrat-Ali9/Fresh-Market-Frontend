"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaMoneyCheck } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";


type IInput = {
  name: string;
  phoneNumber: string;
  address: string;
  email: string;
};

const ShippingForm: React.FC = () => {
  const { register, handleSubmit } = useForm<IInput>();
  const onSubmit: SubmitHandler<IInput> = (data) => console.log(data);
  return (
    <>
      <form className="space-y-4 w-1/2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex space-x-4 ">
          <div className="flex flex-col w-full">
            <label>Name</label>
            <input
              className="border border-gray-300 h-10"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Email</label>
            <input
              className="border border-gray-300 h-10"
              {...register("email")}
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col w-full">
            <label>Phone Number</label>
            <input
              className="border border-gray-300 h-10"
              {...register("phoneNumber")}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Address</label>
            <input
              className="border border-gray-300 h-10"
              {...register("address")}
            />
          </div>
        </div>
        <div className="mt-8">
          <div>
            <h4 className="text-xl font-bold">Payment Method</h4>
            <div className="mt-2">
              <div className="border border-gray-300 h-10 flex items-center justify-between px-3">
               <div className="flex items-center space-x-4">
               <FaMoneyCheck className="text-xl" />
                <p>Cash On Delivery</p>
               </div>
                <FaRegCheckCircle className="text-xl text-[#55a630]"/>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-[#55a630] rounded-lg px-4 py-3 text-[#ffffff] font-semibold ">Confirm Order</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ShippingForm;
