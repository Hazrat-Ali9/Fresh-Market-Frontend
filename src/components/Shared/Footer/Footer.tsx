"use client";
import { AiFillYoutube, AiTwotonePhone } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import Link from "next/link";
import ffmlogo from "@/assets/images/ffmlogo.png";
import Image from "next/image";

const Footer = () => {
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-[#191D26] text-white border-t border-gray-200 mt-20">
        <div className="text-white md:pb-2 pb-10 pt-14">
          <div className="container">
            <div className="py-6">
              <div className="grid border-b dark:border-gray-600 border-gray-200 md:grid-cols-2 grid-cols-1 gap-2 pb-8">
                <div>
                  <div className="cursor-pointer flex items-center gap-1">
                    <Link
                      onClick={topFunction}
                      href="/"
                      className=" text-white duration-500"
                    >
                      {/* <img className="w-16" src={ffLogo} alt="logo" /> */}
                      <Image
                        src={ffmlogo}
                        width={65}
                        height={65}
                        alt="ffmlogo"
                      />
                    </Link>
                    <div className="flex space-x-2 md:text-3xl text-2xl font-bold">
                      <h1>Fresh</h1>
                      <h1 className="text-[#55a630] font-bold">Market</h1>
                    </div>
                  </div>
                  <div className="pt-6 text-[16px] font-medium md:w-[90%]">
                    <p>
                      A Fresh Market website for vegetables provides a
                      convenient platform for consumers to purchase, and have
                      fresh vegetables delivered directly to their doorstep.
                      With a focus on quality, variety, and convenience, these
                      websites offer a seamless shopping experience, connecting
                      customers with a wide selection of locally sourced and
                      seasonal produce.
                    </p>
                    {/* -------email------  */}
                    <div className="flex gap-4 pt-6">
                      <p className="dark:text-white">Follow us on:</p>
                      <div className=" bg-[#28589c] hover:scale-125 cursor-pointer duration-300 text-white h-8 w-8 rounded-full flex items-center justify-center">
                        <FaFacebookF className="https://www.facebook.com/HAZRATALIML" />
                      </div>
                      <div className=" bg-[#E1306c] hover:scale-125 cursor-pointer duration-300 text-white h-8 w-8 rounded-full flex items-center justify-center">
                        <BsInstagram className="https://www.facebook.com/HAZRATALIML"/>
                      </div>
                      <div className=" bg-[#ff0000] hover:scale-125 cursor-pointer duration-300 text-white h-8 w-8 rounded-full flex items-center justify-center">
                        <AiFillYoutube className="https://www.facebook.com/HAZRATALIML"/>
                      </div>
                      <div className=" bg-blue-700 hover:scale-125 cursor-pointer duration-300 text-white h-8 w-8 rounded-full flex items-center justify-center">
                        <BiLogoLinkedin className="https://www.facebook.com/HAZRATALIML"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="grid md:grid-cols-3 grid-cols-1 md:pt-6 gap-4">
                    <div>
                      <p className="text-2xl font-bold pb-6">Get To Know Us</p>
                      <div className="space-y-2 text-[16px] font-medium cursor-pointer">
                        <div>
                          <Link onClick={topFunction} href="/products">
                            Trending Products
                          </Link>
                        </div>
                        <div>
                          <Link onClick={topFunction} href="/category">
                            Top Category
                          </Link>
                        </div>
                        <div>
                          <Link onClick={topFunction} href="/contact-us">
                            Contact Us
                          </Link>
                        </div>
                        <div>
                          <Link onClick={topFunction} href="">
                            Customer Care
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold pb-6 ">
                        Let Us Help You
                      </p>
                      <div className="space-y-2 text-[16px] font-medium cursor-pointer">
                        <p>100% Prime Food </p>
                        <p>Ongoing Support </p>
                        <p>On time Delivery </p>
                        <p>Trusted Partner </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold pb-6 ">Contact Us</p>
                      <div className="space-y-4">
                        {/* -------phone------  */}
                        <div className="flex items-center gap-2">
                          <div
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className="bg-[#023e8a] h-10 w-10 rounded-full flex justify-center items-center"
                          >
                            <AiTwotonePhone className="text-white" size={25} />
                          </div>
                          <div className="text-[16px] font-medium ">
                            <p>0131509070</p>
                          </div>
                        </div>
                        {/* -------location------  */}
                        <div className="flex items-center gap-2">
                          <div className="bg-[#023e8a] h-10 w-10 rounded-full flex justify-center items-center">
                            <GoLocation className="text-white" size={25} />
                          </div>
                          <div className="text-[16px] font-medium">
                            <p>Dhaka</p>
                            <p>Bangladesh</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4  flex justify-center items-center flex-wrap">
                <div>
                  <p className="dark:text-white">
                    © Copyright {currentYear}, All Rights Reserved by Hazrat Ali
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// Footer js
export default Footer;
