import React, { useEffect } from "react";
import { Navbar } from "../../components";
import { CastCrew, DetailsHero, Videos } from "../../containers";

// Redux
import { useSelector, useDispatch } from "react-redux";

const Details = () => {
  const details = useSelector((state) => state.movies.details )

  return (
    <div className="bg-black    ">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${details?.backdrop_path})`,
        }}
        className=" bg-cover bg-center bg-no-repeat p-5 md:px-9 lg:px-12   "
      >
        <Navbar />
        <DetailsHero />
      </div>

      <div className="p-5  md:px-9 lg:px-12">
        <Videos/>
        <CastCrew />
      </div>
    </div>
  );
};

export default Details;
