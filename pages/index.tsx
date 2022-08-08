import type { NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";

// Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, EffectCoverflow } from "swiper";
// Import Swiper styles
import "swiper/css";

// import containers
import { Hero, NewReleases, Popular } from "../containers";
// import components
import { Navbar } from "../components";

const Home: NextPage = () => {
  const movies = useSelector((state) => state.movies.popularMovies.results);

  return (
    <div className="bg-black ">
      <Head>
        <title>HBO Max Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Website Sections */}

      <div>
        <Navbar />
        <Swiper
        initialSlide={1}
          slidesPerView={1}
          loop={true}
          modules={[FreeMode, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            slideShadows: false,
            depth: 100,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {movies?.slice(0, 3).map((movie: any) => (
            <SwiperSlide>
              <div className="w-full" key={movie?.id}>
                <Hero
                  title={movie.title}
                  rating={movie.vote_average}
                  date={movie.release_date}
                  image={movie.backdrop_path}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="px-5 pb-7  md:px-9 lg:px-12">
        <Popular />
        <NewReleases />
      </div>
    </div>
  );
};

export default Home;
