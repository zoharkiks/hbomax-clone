import React from "react";

const CastCrewCard = ({
  name,
  size,
  image,
}: {
  name: string;
  size: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2.5 ">
      <img
        className={`${size} rounded-full object-cover  `}
        src={image}
        alt="cast-crew"
      />
      <span className="text-center font-gilreg text-sm leading-5 md:text-lg md:leading-7 lg:text-[1.2rem]">
        {name}
      </span>
    </div>
  );
};

export default CastCrewCard;
