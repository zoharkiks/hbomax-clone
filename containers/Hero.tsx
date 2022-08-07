import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { Button } from "../components";
import { useSelector } from "react-redux";



const Hero = ({title,rating,date,image}:{title:string,rating:string,date:string,image:string}) => {


  return (
    <div style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${image})`,
    }} className="h-[70vh] p-5 md:px-9 bg-cover bg-center bg-no-repeat lg:h-screen lg:px-12 flex flex-col items-start justify-center space-y-6 font-gilmed text-white lg:space-y-8  ">
     
      <h1 className="w-1/2 font-gilbold text-2xl  uppercase leading-[2rem] md:mt-6 md:text-[2.5rem] md:leading-[3rem] lg:text-[5rem] lg:leading-[6rem]">
       {title}
      </h1>
      <div className="lg:order- mt-2 flex items-center justify-center space-x-2 text-sm md:text-lg">
        <Icon
          className="h-9 w-9 md:h-12 md:w-12 "
          icon="la:imdb"
          color="#f6c700"
        />
        <span>{rating}</span>
      </div>
      {/* <span className="mt-3 md:text-xl lg:text-3xl">
        Action | Adventure | Fantasy
      </span> */}
      <span className="mt-2 md:order-first md:mt-0 md:mb-4 lg:text-xl">
       {` ${date}`}
      </span>

      <div className="mt-7">
        <Button
          title="Watch Now"
          icon="ci:play-circle-outline"
          extra="p-2.5 md:p-4 lg:p-6 backdrop-blur-[10px] bg-black bg-opacity-50 border-none "
          clickFunction={null}
        />
      </div>

    </div>
  );
};

export default Hero;
