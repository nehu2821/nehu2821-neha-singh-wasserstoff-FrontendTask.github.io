import React from "react";
import CarouselComponent from "../components/CarouselComponent";
import PartyDetail from "../components/PartyDetail";

const PartyPage = () => {
  return (
    <div className="flex gap-2 mx-48 bg-[rgb(21,24,27)] h-[100%] flex-1 max-[1736px]:mx-20 max-[1180px]:mx-0">
      <CarouselComponent />
      <PartyDetail />
    </div>
  );
};

export default PartyPage;
