import React from "react";

const CastCrewCard = ({name,size,image}:{name:string,size:string,image:string}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2.5">
      <img
        className={`${size} rounded-full object-cover`}
        src={image}
        alt="cast-crew"
      />
      <span className="w-max text-sm leading-6 font-gilreg md:text-lg lg:text-[1.2rem] md:leading-9">{name}</span>
    </div>
  );
};

export default CastCrewCard;
