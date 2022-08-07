import React, { useEffect } from "react";
import { NewReleasesCard } from "../components";
import { useRouter } from "next/router";

// Carousel
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Reducers
import { getDetails, getUpcomingMovies } from "../features/movies/moviesSlice";

const NewReleases = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const fetchDetails = (id,movieName) => {
    dispatch(getDetails(id));
    router.push("/details/" + movieName);
    
  };

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, []);

  const upcomingMovies = useSelector((state) => state.movies.upcoming.results);

  return (
    <div className="mt-8 flex flex-col font-gilbold text-lg text-white">
      <h1 className="md:text-xl lg:text-3xl">Upcoming Movies</h1>
      <div className="mt-5 flex">
        <Flicking moveType="freeScroll" align="prev" circular={true}>
          {upcomingMovies?.slice(0, 16).map((movie: any) => (
            <div key={movie?.id} className="mr-4  ">
              <NewReleasesCard
                title={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                clickFunction={() => fetchDetails(movie.id)}
              />
            </div>
          ))}
        </Flicking>
      </div>
    </div>
  );
};

export default NewReleases;
