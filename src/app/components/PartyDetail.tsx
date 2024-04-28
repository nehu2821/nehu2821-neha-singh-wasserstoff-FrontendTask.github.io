import Link from "next/link";
import React from "react";

const PartyDetail = () => {
  return (
    <>
      <div className="right flex flex-[6] relative">
        <div className="marquee-container">
          <p className="marquee-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            vestibulum magna. Aliquam dfgfghjkl; lorem5 kanwar
          </p>
        </div>

        <div className="flex flex-col px-8 py-6 gap-12 text-xl">
          <h1 className="text-2xl font-bold w-[40%] max-xl:w-[70%]">
            Explore Your First Event
          </h1>
          <div className="box flex flex-col gap-8">
            <h1 className="text-6xl font-bold">Event Name</h1>
            <div className="flex gap-2">
              <p className="text-lg font-bold">Venue</p>
              <p className="text-lg font-bold">04/27/2024</p>
              <p className="text-lg font-bold">@ 19:00</p>
            </div>
            <p className="text-lg font-semibold w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              minima ut sit qui unde quo, repudiandae odio dolores voluptates?
              Vero?
            </p>
            <p className="text-2xl font-bold">Artist Line Up</p>
            <div className="flex items-center justify-center">
              <img src="/b.png" alt="" className="w-[30%] h-[50%]" />
              <img
                src="/ca.png"
                alt=""
                className="w-[40%] h-[80%] rounded-lg "
              />
              <img src="/c.png" alt="" className="w-[30%] h-[50%]" />
            </div>
          </div>
          <div className="flex justify-between items-end">
            <img src="/d.png" alt="" />
            <div>
              <Link
                href=""
                className="text-base font-semibold bg-[rgb(255,202,95)] px-6 py-2 rounded-lg inline-block"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartyDetail;
