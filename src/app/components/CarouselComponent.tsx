import React from "react";
import Carousel from "../lib/Slick";
import Link from "next/link";

const CarouselComponent = () => {
  return (
    <>
      <div className="relative flex-[7] flex flex-col gap-40 py-8 px-4 max-2xl:flex-[5]">
        <p className="text-[rgb(255,202,95)] text-4xl font-extrabold">ASTRIX</p>
        <p className="text-[rgb(68,70,73)] text-9xl font-extrabold">ASTRIX</p>
        <p className="text-[rgb(68,70,73)] text-9xl font-extrabold">EVENTS</p>
        <div className="absolute top-[20%] z-10 left-[20%] right-[0%] ">
          {/* Carousel Component */}
          <Carousel />
        </div>
        <div className="gap-4 flex pt-8 ">
          <Link
            href=""
            className="text-base font-semibold bg-[rgb(68,70,73)] px-6 py-2 rounded-lg"
          >
            Events
          </Link>
          <Link
            href=""
            className="text-base font-semibold bg-[rgb(68,70,73)] px-6 py-2 rounded-lg"
          >
            Collections
          </Link>
        </div>
      </div>
    </>
  );
};

export default CarouselComponent;
