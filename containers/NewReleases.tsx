import React, { useEffect } from "react";
import { NewReleasesCard } from "../components";
import { useRouter } from "next/router";

// Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";

// Redux
import { useSelector, useDispatch } from "react-redux";
// Reducers
import { getDetails, getUpcomingMovies } from "../features/movies/moviesSlice";

const NewReleases = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((state) => state.movies.upcoming.results);

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, []);

  const fetchDetails = (id, movieName) => {
    dispatch(getDetails(id));
    router.push("/details/" + movieName);
  };

  console.table(upcomingMovies?.[0]);
  
  
  return (
    <div className="mt-8 flex flex-col font-gilbold text-lg text-white">
      <h1 className="md:text-xl lg:text-3xl">Upcoming Movies</h1>
      <div className="mt-5 flex">
        <Swiper
          spaceBetween={35}
          slidesPerView={2}
          loop={true}
          initialSlide={1}
          freeMode={true}
          modules={[FreeMode]}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1536: {
              slidesPerView: 4,
            },
          }}
        >
          {upcomingMovies?.slice(0, 20).map((movie: any) => (
            <SwiperSlide key={movie?.id}>
              <NewReleasesCard
                key={movie?.id}
                title={movie?.title}
                image={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                clickFunction={() => fetchDetails(movie.id, movie.title)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewReleases;
