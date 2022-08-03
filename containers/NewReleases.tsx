import React, { useEffect } from 'react'
import { NewReleasesCard } from '../components'

// Redux
import { useSelector, useDispatch } from "react-redux";
// Reducers
import {getUpcomingMovies } from "../features/movies/moviesSlice";


const NewReleases = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, []);


const upcomingMovies = useSelector((state) => state.movies.upcoming.results);



  return (
    <div className='text-white mt-6 flex flex-col font-gilbold text-lg'>

<h1 className='md:text-xl lg:text-3xl'>Upcoming Movies</h1>
<div className="flex mt-5 space-x-5">

 {

upcomingMovies?.slice(0, 4).map((movie: any) => (
  <NewReleasesCard
  
  key={movie.id}
  title={movie.title}
  image={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
  />
))
 }


</div>

    </div>
  )
}

export default NewReleases