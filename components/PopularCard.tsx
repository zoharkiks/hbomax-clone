import React from "react";

const PopuplarCard = ({
  image,
  clickFunction,
}: {
  image: string;
  clickFunction: any;
}) => {
  return (
    <>
      <img
        onClick={clickFunction}
        className="h-full  w-full cursor-pointer rounded-xl object-cover hover:scale-105 transition-all"
        src={image}
        alt=""
      />
    </>
  );
};

export default PopuplarCard;
