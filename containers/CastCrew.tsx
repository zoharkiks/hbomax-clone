import React, { useEffect } from "react";
import { CastCrewCard } from "../components";

// Carousel
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Reducers
import { getCredits } from "../features/movies/moviesSlice";

const CastCrew = () => {
  const dispatch = useDispatch();

  const details = useSelector((state) => state.movies.details );
  const casts = useSelector((state) => state.movies.credits.cast);
  const crews = useSelector((state) => state.movies.credits.crew);
  const test = useSelector((state) => state.movies.credits);

  useEffect(() => {
    dispatch(getCredits(details.id));
  }, [details]);


  return (
    <div className="mt-4 flex flex-col font-gilbold text-lg text-white lg:mt-14">
      <h1 onClick={() => console.log(casts)} className="md:text-xl lg:text-3xl">
        Cast
      </h1>
      <div className="mt-5 flex space-x-10">
        <Flicking moveType="freeScroll" align="prev" circular={false}>
          {casts?.slice(0, 10).map((cast: any) => (
            <div key={casts.credit_id} className="mr-2 w-[20%%] md:mr-4 lg:mr-8 ">
              <CastCrewCard
                key={cast.credit_id}
                name={cast.name}
                size="h-20 w-20 md:h-32 md:w-32"
                image={`https://image.tmdb.org/t/p/w300${cast?.profile_path}`}
              />
            </div>
          ))}
        </Flicking>
      </div>

      <div className="mt-10 flex flex-col font-gilbold text-lg">
        <h1 className="md:text-xl lg:text-3xl">Crew</h1>
        <div className="mt-5 flex space-x-10">
          <Flicking moveType="freeScroll" align="prev" circular={false}>
            {crews?.slice(0, 15).map((crew: any) => (
              <div key={crews.credit_id} className="mr-2 w-[20%%] md:mr-4 lg:mr-8">
                {" "}
                <CastCrewCard
                  name={crew.name}
                  key={crew.credit_id}
                  size="h-20 w-20 md:h-32 md:w-32"
                  image={`https://image.tmdb.org/t/p/w300${crew?.profile_path}`}
                />
              </div>
            ))}
          </Flicking>
        </div>
      </div>
    </div>
  );
};

export default CastCrew;
