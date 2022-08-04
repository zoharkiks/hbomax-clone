import React, { useEffect } from "react";
import { CastCrewCard } from "../components";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Reducers
import { getCredits } from "../features/movies/moviesSlice";

const CastCrew = () => {
  const dispatch = useDispatch();

  const details = useSelector((state) => state.movies.details);
  const casts = useSelector((state) => state.movies.credits.cast);
  const crews = useSelector((state) => state.movies.credits.crew);

  useEffect(() => {
    dispatch(getCredits(details.id));
  }, [details]);

  console.log(crews);

  return (
    <div className="mt-4 flex flex-col font-gilbold text-lg text-white lg:mt-14">
      <h1 onClick={() => console.log(casts)} className="md:text-xl lg:text-3xl">
        Cast
      </h1>
      <div className="mt-5 flex space-x-10">
        {casts?.slice(0, 3).map((cast: any) => (
          <CastCrewCard
            key={cast.id}
            name={cast.name}
            size="h-20 w-20 md:h-32 md:w-32"
            image={`https://image.tmdb.org/t/p/w300${cast?.profile_path}`}
          />
        ))}
      </div>

      <div className="mt-10 flex flex-col font-gilbold text-lg">
        <h1 className="md:text-xl lg:text-3xl">Crew</h1>
        <div className="mt-5 flex space-x-10">
          {crews?.slice(0, 3).map((crew: any) => (
            <CastCrewCard
              key={crew.id}
              name={crew.name}
              size="h-20 w-20 md:h-32 md:w-32"
              image={`https://image.tmdb.org/t/p/w300${crew?.profile_path}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CastCrew;
