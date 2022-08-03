import React, { useEffect } from 'react'
import { PopularCard } from '../components'

// Redux
import { useSelector, useDispatch } from "react-redux";
// Reducers
import { getPopularMovies } from "../features/movies/moviesSlice";



const Popular = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  const movies = useSelector((state) => state.movies.popularMovies.results);

  console.log(movies?.[0])

  return (
    <div className='text-white mt-20 flex flex-col font-gilbold text-lg'>
<h1 className='md:text-xl lg:text-3xl'>Popular Collections</h1>
<div className="flex mt-4 space-x-5">
{
movies?.slice(0,3).map((movie:any)=>(
  <PopularCard
  key={movie.id}
  image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
  />
))
  
}


</div>
    </div>
  )
}

export default Popular