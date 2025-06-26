import Image from "next/image";
import expressDelivery from "@/assets/images/expressDelivery.png";
import cashOnDelivery from "@/assets/images/cashOnDelivery.png";
import freeDelivery from "@/assets/images/freeDelivery.png";

const OurFeature = () => {
  return (
    <>
      <div className="container pt-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {/* Express Delivery */}
          <div className="bg-[#3bceac] cursor-pointer px-6 py-5 flex justify-between rounded-xl hover:scale-105 duration-300 transition-all">
            <div>
              <h6 className="text-xl text-[#ffffff] font-bold">
                Express Delivery
              </h6>
              <p className="pt-3 font-medium text-[#ffffff]">
                On Time Every Time 24/7
              </p>
              <div className="pt-6">
                <button className=" bg-[#ffffff] rounded-full text-[#3bceac] p-2 font-medium">
                  Order Now
                </button>
              </div>
            </div>
            <div>
              <Image
                src={expressDelivery}
                width={150}
                height={150}
                alt="expressDelivery"
              />
            </div>
          </div>
          {/* Cash On Delivery */}
          <div className="bg-[#55a630] cursor-pointer px-6 py-5 flex justify-between rounded-xl hover:scale-105 duration-300 transition-all">
            <div>
              <h6 className="text-xl font-bold text-[#ffffff]">
                Cash On Delivery
              </h6>
              <p className="pt-3 font-medium text-[#ffffff]">
                On Time Every Time 24/7
              </p>
              <div className="pt-6">
                <button className=" bg-[#ffffff] text-[#55a630] rounded-full  p-2 font-medium">
                  Order Now
                </button>
              </div>
            </div>
            <div>
              <Image
                src={cashOnDelivery}
                width={150}
                height={150}
                alt="cashOnDelivery"
              />
            </div>
          </div>
          {/* Free Delivery */}
          <div className="bg-[#deab90] cursor-pointer px-6 py-5 flex justify-between rounded-xl hover:scale-105 duration-300 transition-all">
            <div>
              <h6 className="text-xl font-bold text-[#ffffff]">
                Free Delivery
              </h6>
              <p className="pt-3 font-medium text-[#ffffff]">
                On Time Every Time 24/7
              </p>
              <div className="pt-6">
                <button className=" bg-[#ffffff] text-[#deab90] p-2 rounded-full font-medium">
                  Order Now
                </button>
              </div>
            </div>
            <div>
              <Image
                src={freeDelivery}
                width={150}
                height={150}
                alt="freeDelivery"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeature;
