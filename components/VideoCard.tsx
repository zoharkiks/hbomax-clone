import React, { useState } from "react";

const VideoCard = ({
  bgId,
  videoId,
  title,
  type,
  clickFunction,
}: {
  bgId: string;
  videoId: string;
  title: string;
  type: string;
  clickFunction: any;
}) => {

  return (
    <div onClick={clickFunction} className="flex flex-col rounded-xl bg-gray-900    ">
      <div
        style={{
          backgroundImage: `url(https://i.ytimg.com/vi/${bgId}/hqdefault.jpg)`,
        }}
        className=" h-[160px] rounded-t-xl bg-cover bg-center   bg-no-repeat md:h-[200px] lg:h-[240px]  "
      ></div>
      <div className="flex flex-col space-y-2 p-4 font-gilreg">
        <h1 className=" truncate  ">{title}</h1>
        <h1 className="border-t pt-4">{type}</h1>
      </div>


    </div>
  );
};

export default VideoCard;
