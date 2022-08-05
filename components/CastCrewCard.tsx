import React from "react";

const CastCrewCard = ({name,size,image}:{name:string,size:string,image:string}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2.5 ">
      <img
        className={`${size} rounded-full object-cover  `}
        src={image}
        alt="cast-crew"
      />
      <span className="w-1/2 text-center text-sm leading-5 font-gilreg md:text-lg lg:text-[1.2rem] md:leading-7">{name}</span>
    </div>
  );
};

export default CastCrewCard;
