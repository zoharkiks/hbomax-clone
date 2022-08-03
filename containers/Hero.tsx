import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "../components";

// Redux
import { useSelector } from "react-redux";

const Hero = () => {
  // const { movies } = useSelector((state) => state.movies);

  // console.log(movies);

  return (
    <div className="mt-10 flex  flex-col items-start justify-center space-y-6 font-gilmed text-white md:mt-14 lg:space-y-8">
      <h1 className="w-1/2 font-gilbold text-2xl  uppercase leading-[2rem] md:mt-6 md:text-[2.5rem] md:leading-[3rem] lg:text-[5rem] lg:leading-[6rem]">
        Spider No Way Home
      </h1>

      <div className="lg:order- mt-2 flex items-center justify-center space-x-2 text-sm md:text-lg">
        <Icon
          className="h-9 w-9 md:h-12 md:w-12 "
          icon="la:imdb"
          color="#f6c700"
        />
        <span>8.5</span>
      </div>
      <span className="mt-3 md:text-xl lg:text-3xl">
        Action | Adventure | Fantasy
      </span>
      <span className="mt-2 md:order-first md:mt-0 md:mb-4 lg:text-xl">
        2021 | PG-13 | 2h 28m
      </span>

      <div className="mt-7">
        <Button
          title="Watch Now"
          icon="ci:play-circle-outline"
          extra="p-2.5 md:p-4 lg:p-6"
        />
      </div>
    </div>
  );
};

export default Hero;
