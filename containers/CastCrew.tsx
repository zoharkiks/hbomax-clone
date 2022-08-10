import React, { useEffect } from "react";
import { CastCrewCard } from "../components";

// Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";

// Redux
import { useSelector, useDispatch } from "react-redux";
// Reducers
import { getCredits } from "../features/movies/moviesSlice";

const CastCrew = () => {
  const dispatch = useDispatch();

  const details = useSelector((state) => state.movies.details);
  const casts = useSelector((state) => state.movies.credits.cast);
  const crews = useSelector((state) => state.movies.credits.crew);
  const test = useSelector((state) => state.movies.credits);

  useEffect(() => {
    dispatch(getCredits(details.id));
  }, [details]);

  return (
    <div className="mt-4 flex flex-col font-gilbold text-lg text-white lg:mt-14">
      <h1  className="md:text-xl lg:text-3xl">
        Cast
      </h1>
      <div className="mt-5 flex">
        <Swiper
          spaceBetween={20}
          slidesPerView={3.5}
          loop={true}
          initialSlide={0}
          freeMode={true}
          modules={[FreeMode]}
          breakpoints={{
            768: {
              slidesPerView: 4.5,
            },

            1028: {
              slidesPerView: 5.5,
            },
            1536: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
          }}
        >
          {casts?.slice(0, 10).map((cast: any) => (
            <SwiperSlide>
              <CastCrewCard
                key={cast.credit_id}
                name={cast.name}
                size="h-20 w-20 md:h-32 md:w-32"
                image={`https://image.tmdb.org/t/p/w300${cast?.profile_path}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-10 flex flex-col font-gilbold text-lg">
        <h1 className="md:text-xl lg:text-3xl">Crew</h1>
        <div className="mt-5 flex space-x-10">
          <Swiper
          spaceBetween={20}
          slidesPerView={3.5}
          loop={true}
          initialSlide={0}
          freeMode={true}
          modules={[FreeMode]}
          breakpoints={{
            768: {
              slidesPerView: 4.5,
            },

            1028: {
              slidesPerView: 5.5,
            },
            1536: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
          }}
          >
            {crews?.slice(0, 15).map((crew: any) => (
              <SwiperSlide>
                <CastCrewCard
                  name={crew.name}
                  key={crew.credit_id}
                  size="h-20 w-20 md:h-32 md:w-32"
                  image={`https://image.tmdb.org/t/p/w300${crew?.profile_path}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CastCrew;
