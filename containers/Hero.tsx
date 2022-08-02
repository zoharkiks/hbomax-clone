import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "../components";

const Hero = () => {
  return (
    <div className="mt-10 md:mt-14 flex flex-col items-start justify-center font-gilmed text-white">
      <h1 className="font-gilbold text-2xl  md:text-[2.5rem] leading-[2rem] lg:text-[5rem] w-1/2 md:leading-[3rem] lg:leading-[6rem] uppercase">Spider-Man: 
No Way Home</h1>

      <div className="mt-2 flex items-center justify-center space-x-2 text-sm md:text-lg lg:order-">
        <Icon className="h-9 w-9 md:h-12 md:w-12 " icon="la:imdb" color="#f6c700" />
        <span>8.5</span>
      </div>
      <span className="mt-3 md:text-xl lg:text-3xl">Action | Adventure | Fantasy</span>
      <span className="mt-2 md:order-first md:mt-0 md:mb-4 lg:text-xl">2021 | PG-13 | 2h 28m</span>

      <div className="mt-7">
        <Button  title="Watch Now" icon="ci:play-circle-outline" extra='p-2.5 md:p-4 lg:p-6' />
      </div>
    </div>
  );
};

export default Hero;
