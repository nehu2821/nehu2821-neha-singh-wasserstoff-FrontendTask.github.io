import React from "react";
import Motion from "../lib/Motion";
import MotionImage from "../lib/MotionImage";

const HomePage = () => {
  return (
    <div className="w-full h-100vh bg-[rgb(255,244,223)] px-40 py-20 flex flex-col gap-10 max-xl:px-8">
      <p className="text-black text-4xl font-extrabold">ASTRIX</p>
      <div className=" flex flex-col gap-12 py-20 px-48 max-2xl:px-16">
        <div className=" flex gap-4 items-center  z-0 w-[100%]">
          <div className="flex gap-4"></div>
          <p className="font-bold text-6xl text-black z-0 flex-[1]">We</p>
          <img src="/p7.png" alt="first-image" className=" h-20 z-0 flex-[5]" />
          <Motion>
            <div className="h-20 flex gap-4">
              <p className="font-bold text-6xl text-black h-full">
                ORGANIZE THE
              </p>
            </div>
          </Motion>
        </div>
        <div className="flex gap-4 items-center   w-[70%]">
          <p className="font-bold text-6xl text-black z-0">CONNECTION</p>
          <MotionImage />
        </div>
        <div className=" flex gap-4 items-center   w-[100%]">
          <img src="/p4.png" alt="first-image" className=" h-20 z-0 flex-[4]" />
          <Motion>
            <div className="h-20 flex gap-4">
              <p className="font-bold text-6xl text-black h-full">BETWEEN </p>
              <img src="/p2.png" alt="first-image" className="w-60 h-20 z-0" />
              <p className="font-bold text-6xl text-black h-full">MUSIC </p>
            </div>
          </Motion>
        </div>
        <div className="flex gap-4 items-center  w-[100%]">
          <p className="font-bold text-6xl text-black z-0 flex-[1]">ARTIST</p>
          <img src="/p6.png" alt="first-image" className=" h-20 z-0 flex-[2]" />
          <div className="relative w-[100%] h-full flex-[7] ">
            <Motion>
              <div className="h-full flex gap-4">
                <p className="font-bold text-6xl text-black h-full flex-[2]">
                  CULTURE
                </p>
                <img
                  src="/p5.png"
                  alt="first-image"
                  className="flex-[4] h-20 z-0"
                />
              </div>
            </Motion>
          </div>
        </div>
        <div className=" flex gap-4 items-center  w-[100%]">
          <img src="/p8.png" alt="first-image" className="flex-[4] h-16 z-0" />
          <Motion>
            {" "}
            <div className="h-full flex gap-4 flex-[4]">
              <p className="font-bold text-6xl text-black h-full ">ART </p>
              <img src="/p7.png" alt="first-image" className=" h-16 z-0" />
              <p className="font-bold text-6xl text-black h-full ">
                COLLECTIONS
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
