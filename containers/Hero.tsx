import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "../components";

const Hero = () => {
  return (
    <div className="mt-14 flex flex-col items-start justify-center font-gilmed text-white">
      <h1 className="font-gilbold text-2xl">DRACULA</h1>

      <div className="mt-2 flex items-center justify-center space-x-2 text-sm">
        <Icon className="h-9 w-9" icon="la:imdb" color="#f6c700" />
        <span>8.5</span>
      </div>
      <span className="mt-3">Action | Adventure | Fantasy</span>
      <span className="mt-2">2021 | PG-13 | 2h 28m</span>

      <div className="mt-7">
        <Button title="Watch Now" icon="ci:play-circle-outline" />
      </div>
    </div>
  );
};

export default Hero;
