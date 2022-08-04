import React, { useEffect } from "react";
import { NewReleasesCard } from "../components";
import { useRouter } from "next/router";

// Redux
import { useSelector, useDispatch } from "react-redux";
// Reducers
import { getDetails, getUpcomingMovies } from "../features/movies/moviesSlice";

const NewReleases = () => {
  const router = useRouter()
  const dispatch = useDispatch();

  const fetchDetails= (id) => {
    dispatch(getDetails(id))
    router.push('/details/'+id)
  }
  

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, []);

  const upcomingMovies = useSelector((state) => state.movies.upcoming.results);

  return (
    <div className="mt-6 flex flex-col font-gilbold text-lg text-white">
      <h1 className="md:text-xl lg:text-3xl">Upcoming Movies</h1>
      <div className="mt-5 flex space-x-5">
        {upcomingMovies?.slice(0, 4).map((movie: any) => (
          <NewReleasesCard
            key={movie.id}
            title={movie.title}
            image={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
            clickFunction={() => fetchDetails(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default NewReleases;
