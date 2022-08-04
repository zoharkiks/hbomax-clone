import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import { PopularCard } from "../components";

// Redux
import { useSelector, useDispatch } from "react-redux";
// Reducers
import { getPopularMovies,getDetails } from "../features/movies/moviesSlice";

const Popular = () => {
  const dispatch = useDispatch();
  const router = useRouter()


  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  const movies = useSelector((state) => state.movies.popularMovies.results);

const fetchDetails= (id) => {
  dispatch(getDetails(id))
  router.push('/details/'+id)
}



  return (
    <div className="mt-20 flex flex-col font-gilbold text-lg text-white">
      <h1 className="md:text-xl lg:text-3xl">Popular Collections</h1>
      <div className="mt-4 flex space-x-5">
        {movies?.slice(0, 3).map((movie: any) => (
          <PopularCard
            key={movie.id}
            image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            clickFunction={() => fetchDetails(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
