// TopCategories.js
import Link from "next/link";
import bbPic from "@/assets/images/bbb.webp";
import Image from "next/image";
import LeafyPic from "@/assets/images/vv1.webp";
import CruciferousPic from "@/assets/images/vv3.jpg";
import RootPic from "@/assets/images/vv2.jpg";
import SquashPic from "@/assets/images/vv5.jpg";
import AlliumsPic from "@/assets/images/vv4.jpeg";
import NightshadesPic from "@/assets/images/vv6.jpg";
const TopCategories = () => {
  return (
    <>
      <div className="container pt-40">
        <h2>Top Categories</h2>
        <div className="pt-10">
          <div className="grid md:grid-cols-3  grid-cols-1 md:gap-6 gap-4 ">
            <div className=" md:col-span-2">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Link href="/product/nightshades">
                    <div className="bg-gray-200 p-4 rounded-lg ">
                      {/* Iterate over event items and create card elements */}

                      <Image
                        className="rounded-[6px] w-[380px] h-[187px] hover:scale-105 duration-300 transition-all"
                        height={187}
                        width={380}
                        src={NightshadesPic}
                        alt="Nightshades image"
                      />

                      <p className="pt-3 text-[#55a630] font-bold md:text-2xl">
                        Nightshades
                      </p>
                    </div>
                  </Link>
                </div>

                <div>
                  <Link href="/product/cruciferous">
                    <div className="bg-gray-200 p-4 rounded-lg ">
                      {/* event 5  */}

                      <Image
                        className="w-[380px] h-[187px] rounded-[6px] hover:scale-105 duration-300 transition-all"
                        src={CruciferousPic}
                        alt="Cruciferous image"
                        height={187}
                        width={380}
                      />

                      <p className="pt-3 text-[#55a630]  font-bold md:text-2xl">
                        Cruciferous
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="">
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/product/root">
                      <div className="bg-gray-200 p-4 rounded-lg ">
                        <div className="">
                          {/* event 2  */}

                          <Image
                            className=" w-[168px] h-[187px] rounded-[6px] hover:scale-105 duration-300 transition-all"
                            src={RootPic}
                            alt="Root image"
                            height={187}
                            width={168}
                          />

                          <p className="pt-3 text-[#55a630] font-bold md:text-2xl">
                            Root
                          </p>
                        </div>
                      </div>
                    </Link>
                    <div className="">
                      <Link href="/product/alliums">
                        <div className="bg-gray-200 p-4 rounded-lg">
                          {/* event 3  */}

                          <Image
                            className="w-[168px] h-[187px] rounded-[6px] hover:scale-105 duration-300 transition-all"
                            src={AlliumsPic}
                            alt="Alliums image"
                            height={187}
                            width={168}
                          />

                          <p className="pt-3 text-[#55a630] font-bold md:text-2xl">
                            Alliums
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <Link href="/product/squash">
                    <div className="bg-gray-200 p-4 rounded-lg ">
                      {/* event 4  */}

                      <Image
                        className="w-[380px] h-[187px] rounded-[6px] hover:scale-105 duration-300 transition-all"
                        src={SquashPic}
                        alt="Squash image"
                        height={187}
                        width={380}
                      />

                      <p className="pt-3 text-[#55a630] font-bold md:text-2xl">
                        Squash
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <Link href="/product/leafy">
                <div className="bg-gray-200 p-4 rounded-lg">
                  {/* event 1  */}

                  <Image
                    className="rounded-[6px] w-[380px] md:h-[460px] hover:scale-105 duration-300 transition-all"
                    src={LeafyPic}
                    alt="Leafy image"
                    height={460}
                    width={380}
                  />

                  <p className="pt-3 text-[#55a630] font-bold md:text-2xl">
                    Leafy
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="w-40 mx-auto pt-10">
            <Link href="category">
              <button className="btn">View All</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:pt-40 pt-20">
        <div className=" w-full">
          {/* Add CSS class to make Image span full width */}
          <Image
            className="w-full md:h-[410px] h-[300px]"
            src={bbPic}
            alt="image"
            layout="responsive"
            width={200}
            height={410}
          />
        </div>
      </div>
    </>
  );
};

export default TopCategories;
