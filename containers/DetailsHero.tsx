import { Icon } from "@iconify/react";
import React from "react";
import { Button } from "../components";

// Redux
import { useSelector } from "react-redux";
import { log } from "console";

const Details = () => {
  const details = useSelector((state) => state.movies.details)

  return (
    <div
    
    className=" mt-10 flex flex-col items-start justify-center pt-20 font-gilmed text-white md:mt-14 md:pt-24  ">
      <span className=" md:order-first md:mt-0 md:mb-4 lg:text-xl">
        {`2021 | PG-13 | ${details?.runtime} mins`}
      </span>
      <h1 className="mt-6 w-1/2 font-gilbold text-2xl uppercase leading-[2rem] md:text-[2.5rem] md:leading-[3rem] lg:text-[5rem] lg:leading-[6rem]">
        {details.original_title}
      </h1>
      <div className="mt-3 flex space-x-2 md:text-xl lg:text-3xl">
        {details?.genres?.map((genre) => (
          <span key={genre.id} className=" "> {genre.name} |</span>
        ))}
      </div>
      <div className="lg:order- mt-5 flex items-center justify-center space-x-2 text-sm md:text-lg">
        <Icon
          className="h-9 w-9 md:h-12 md:w-12 "
          icon="la:imdb"
          color="#f6c700"
        />
        <span>{Math.round(details.vote_average)}</span>
      </div>

      <div className="mt-10 flex space-x-5">
        <Button
          title="Watch Now"
          icon="ci:play-circle-outline"
          extra="p-2.5 md:p-4 lg:p-6 backdrop-blur-[10px] bg-gray-400 bg-opacity-20 border-none"
        />
        <Button
          title="Add In My List"
          icon="carbon:add-alt"
          extra="p-2.5 md:p-4 lg:p-6 border-white "
        />
      </div>

      <span className="my-5 font-gilbold md:text-xl lg:text-3xl">Synopsis</span>

      <p className="w-[75%] font-gilreg text-sm leading-6 md:text-lg md:leading-9 lg:text-[1.2rem] ">
        {details.overview}
      </p>
    </div>
  );
};

export default Details;
