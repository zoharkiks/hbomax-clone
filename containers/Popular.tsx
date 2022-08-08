import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { PopularCard } from "../components";

// Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";

// Redux
import { useSelector, useDispatch } from "react-redux";
// Reducers
import { getPopularMovies, getDetails } from "../features/movies/moviesSlice";

const Popular = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.popularMovies.results);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  const fetchDetails = (id, movieName) => {
    dispatch(getDetails(id));
    router.push("/details/" + movieName);
  };

  return (
    <div className="mt-20 flex flex-col font-gilbold text-lg text-white">
      <h1 className="md:text-xl lg:text-3xl">Popular Collections</h1>
      <div className="mt-4 flex items-center ">
        <Swiper
          spaceBetween={23}
          slidesPerView={2.5}
          loop={true}
          initialSlide={1}
          freeMode={true}
          modules={[FreeMode]}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },

            1028: {
              slidesPerView: 5,
            },
            1536: {
              slidesPerView: 6,
            },
          }}
        >
          {movies?.slice(0, 10).map((movie: any) => (
            <SwiperSlide>
              <PopularCard
                key={movie?.id}
                image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                clickFunction={() => fetchDetails(movie.id, movie.title)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Popular;
