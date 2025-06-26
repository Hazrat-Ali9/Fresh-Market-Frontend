"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "./Banner.css";

const HomeBanner = () => {
  return (
    <>
      <div className=" md:pt-[60px]">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="slide2 flex items-center md:h-[90vh] h-[60vh]">
              <div className="container md:pt-2 pt-16  text-[#000]">
                <div className="md:text-5xl md:space-y-5 text-2xl px-5  font-bold">
                  <h1>Healthy vegetables that</h1>
                  <h1>You deserve to eat fresh</h1>
                </div>
                <p className=" pt-4 md:w-3/6 py-4 px-5 md:text-lg  font-semibold ">
                  At Fresh Market, we believe in providing you with the freshest
                  and healthiest options, and nothing embodies this better than
                  our selection of vibrant, crisp vegetables
                </p>
                <div className="px-5 ">
                  <button className="btn ">Explore Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide1 flex items-center md:h-[90vh] h-[60vh]">
              <div className="container md:pt-2 pt-16  text-[#000]">
                <div className="md:text-5xl md:space-y-5 text-2xl px-5  font-bold">
                  <h1>From farm to plate, </h1>
                  <h1>Freshness guaranteed </h1>
                </div>
                <p className=" pt-4 md:w-3/6 py-4 px-5 md:text-lg  font-semibold ">
                  Elevate your culinary experience and nourish your body with
                  our selection of healthy vegetables, because at Fresh Market,
                  we believe you deserve nothing but the best
                </p>
                <div className="px-5 ">
                  <button className="btn ">Explore Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide3 flex items-center md:h-[90vh] h-[60vh]">
              <div className="container md:pt-2 pt-16  text-[#000]">
                <div className="md:text-5xl md:space-y-5 text-2xl px-5  font-bold">
                  <h1>Crunch into nature bounty </h1>
                  <h1>Veggies picked just for you</h1>
                </div>
                <p className=" pt-4 md:w-3/6 py-4 px-5 md:text-lg  font-semibold ">
                  From farm to table, we prioritize freshness and
                  sustainability, ensuring that each vegetable retains its
                  natural goodness and vitality.
                </p>
                <div className="px-5 ">
                  <button className="btn ">Explore Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide5 flex items-center md:h-[90vh] h-[60vh]">
              <div className="container md:pt-2 pt-16  text-[#000]">
                <div className="md:text-5xl md:space-y-5 text-2xl px-5  font-bold">
                  <h1>Get your daily greens with us</h1>
                  <h1>Pick freshness, pick health</h1>
                </div>
                <p className=" pt-4 md:w-3/6 py-4 px-5 md:text-lg  font-semibold ">
                  With an array of colors, textures, and flavors, our vegetables
                  not only tantalize the taste buds but also provide essential
                  vitamins and minerals for your well-being
                </p>
                <div className="px-5 ">
                  <button className="btn">Explore Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomeBanner;
