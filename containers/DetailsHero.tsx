import { Icon } from '@iconify/react'
import React from 'react'
import { Button } from '../components'

// Redux
import { useSelector} from "react-redux";



const Details = () => {

  const details = useSelector((state) => state.movies.details);

  console.log(details);
  
  
  return (
    <div className="mt-10 flex flex-col items-start justify-center font-gilmed text-white md:mt-14">
      <span className="mt-2 md:order-first md:mt-0 md:mb-4 lg:text-xl">
        {`2021 | PG-13 | ${details?.runtime} mins`}
      </span>
      <h1 className="w-1/2 font-gilbold text-2xl mt-6 uppercase leading-[2rem] md:leading-[3rem] md:text-[2.5rem] lg:text-[5rem] lg:leading-[6rem]">
       {details.original_title}
      </h1>
      <span className="mt-3 md:text-xl lg:text-3xl">
        Action | Adventure | Fantasy
      </span>
      <div className="lg:order- mt-5 flex items-center justify-center space-x-2 text-sm md:text-lg">
        <Icon
          className="h-9 w-9 md:h-12 md:w-12 "
          icon="la:imdb"
          color="#f6c700"
        />
        <span>{Math.round(details.vote_average)}</span>
      </div>

      <div className="flex space-x-5 mt-10">
        <Button
          title="Watch Now"
          icon="ci:play-circle-outline"
          extra="p-2.5 md:p-4 lg:p-6 backdrop-blur-[10px] bg-gray-400 bg-opacity-20 border-none"
        />
         <Button
          title="Add In My List"
          icon="carbon:add-alt"
          extra="p-2.5 md:p-4 lg:p-6 "
        />
      </div>

    <span className="my-5 md:text-xl lg:text-3xl font-gilbold">Synopsis</span>

    <p className="text-sm w-[75%] leading-6 font-gilreg md:text-lg lg:text-[1.2rem] md:leading-9 ">

    {details.overview}
    </p>
    </div>
  )
}

export default Details