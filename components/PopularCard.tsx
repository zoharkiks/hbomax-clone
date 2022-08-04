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
        className="rounded-xl  object-cover w-full h-full"
        src={image}
        alt=""
      />
    </>
  );
};

export default PopuplarCard;
