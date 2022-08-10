import React from "react";
import ImageFallback from "./ImageFallback";

const CastCrewCard = ({
  name,
  image,
}: {
  name: string;
  size: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2.5 ">
      <ImageFallback
        src={image}
        classname="rounded-full object-cover h-20 w-20 md:h-32 md:w-32"
        fallbackSrc="https://cdn4.iconfinder.com/data/icons/office-thick-outline/36/office-14-128.png"
      />
      <span className="text-center font-gilreg text-sm leading-5 md:text-lg md:leading-7 lg:text-[1.2rem]">
        {name}
      </span>
    </div>
  );
};

export default CastCrewCard;
