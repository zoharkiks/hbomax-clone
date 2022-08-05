import React from "react";

const NewReleasesCard = ({
  title,
  image,
  clickFunction,
}: {
  title: string;
  image: string;
  clickFunction: any;
}) => {
  return (
    <div
      onClick={clickFunction}
      className={`flex  h-[146px] cursor-pointer w-[176px] items-end rounded-[10px] bg-cover bg-center bg-no-repeat transition-all hover:scale-105 md:h-[186px] md:w-[206px] lg:h-[280px] lg:w-[338px]`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=" flex w-full flex-col justify-center bg-black bg-opacity-40 px-1.5 pt-1 backdrop-blur-[10px] md:py-2 lg:space-y-4 lg:p-5 ">
        <h1 className=" text-sm md:text-base lg:text-[1.8rem]">{title}</h1>
        {/* <span className="font-gilreg text-[0.8rem] md:text-sm lg:text-base">
          Action | Adventure | Sci-Fi
        </span> */}
      </div>
    </div>
  );
};

export default NewReleasesCard;
