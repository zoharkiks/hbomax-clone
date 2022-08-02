import React from "react";
import { Navbar } from "../../components";
import { CastCrew,DetailsHero } from "../../containers";

const Details = () => {
  return (
    <div className="bg-black   ">
      <div className="  bg-[url('https://m.media-amazon.com/images/I/71mUK6cPosL._SL1280_.jpg')] bg-cover bg-center bg-no-repeat p-5 md:px-9 lg:px-12">
        <Navbar />
        <DetailsHero/>
      </div>

      <div className="p-5  md:px-9 lg:px-12">
        <CastCrew />
      </div>
    </div>
  );
};

export default Details;
