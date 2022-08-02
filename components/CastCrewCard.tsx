import React from "react";

const CastCrewCard = ({name,size}:{name:string,size:string}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2.5">
      <img
        className={`${size} rounded-full object-cover`}
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        alt="cast"
      />
      <span className=" text-sm leading-6 font-gilreg md:text-lg lg:text-[1.2rem] md:leading-9">{name}</span>
    </div>
  );
};

export default CastCrewCard;
