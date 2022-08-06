import type { NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";
// Carousel
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay, Fade } from "@egjs/flicking-plugins";

// import containers
import { Hero, NewReleases, Popular } from "../containers";
// import components
import { Navbar } from "../components";

const Home: NextPage = () => {
  const plugins = [
    new AutoPlay({ duration: 2500, direction: "NEXT", stopOnHover: false }),
    new Fade(),
  ];

  const movies = useSelector((state) => state.movies.popularMovies.results);

  return (
    <div className="bg-black ">
      <Head>
        <title>HBO Max Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Website Sections */}

      <div className="    ">
        <Navbar />
        <Flicking
          moveType="snap"
          align="prev"
          circular={true}
          panelsPerView={1}
          plugins={plugins}
i
        >
          {movies?.slice(0, 3).map((movie: any) => (
            <div
              className="w-10
            "
            >
              <Hero
                title={movie.title}
                rating={movie.vote_average}
                date={movie.release_date}
                image={movie.backdrop_path}
              />
            </div>
          ))}
        </Flicking>
      </div>
      <div className="px-5 pb-7  md:px-9 lg:px-12">
        <Popular />
        <NewReleases />
      </div>
    </div>
  );
};

export default Home;
