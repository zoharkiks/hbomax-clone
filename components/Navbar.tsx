import React, { useState } from "react";
import images from "../constants/images";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  return (
    <div className="flex items-center justify-between rounded-[20px] bg-black bg-opacity-40  p-6 font-gilmed backdrop-blur-[10px] md:px-12   ">
      <img className="" src={images.logo.src} alt="logo" />
      <Icon
        onClick={toggleMenu}
        className="h-5 w-5 cursor-pointer text-white md:hidden"
        icon="typcn:th-menu"
      />

      <ul className="hidden space-x-6 text-white md:flex lg:space-x-20">
        <li>
          <a href="">Movies</a>
        </li>
        <li>
          <a href="">TV Shows</a>
        </li>
        <li>
          <a href="">Animations</a>
        </li>
      </ul>

      <div className="hidden md:flex justify-evenly items-center md:space-x-1 lg:space-x-9  ">
        <form className=" flex items-center justify-between  rounded-[10px] bg-white bg-opacity-60 p-3 md:py-1  ">
          <Icon
            className=" h-4 w-4 mr-2 text-white"
            icon="ant-design:search-outlined"
          />
          <input
            placeholder="Search"
            className="bg-transparent text-black  outline-none placeholder:text-black  md:w-[8rem] lg:w-full"
            type="text"
          />
        </form>

        <img
          className=" h-12 w-12 cursor-pointer rounded-full object-cover  "
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
      </div>

      {opened ? (
        <div className="absolute right-0 top-0 w-max flex-col rounded-[20px] bg-black bg-opacity-40 py-6 px-4 text-white backdrop-blur-[200px]  ">
          <div className="mb-6 flex items-center justify-between ">
            <img className="" src={images.logo.src} alt="logo" />
            <Icon
              className="h-5 w-5 text-white"
              icon="ant-design:close-circle-filled"
              onClick={toggleMenu}
            />
          </div>

          <form className="mb-12 flex items-center justify-between  rounded-[10px] bg-white bg-opacity-60 p-3 ">
            <Icon
              className="mr-5 h-6  w-6 text-white"
              icon="ant-design:search-outlined"
            />
            <input
              placeholder="Search"
              className="bg-transparent text-black  outline-none placeholder:text-black"
              type="text"
            />
          </form>

          <ul className=" space-y-5">
            <li>
              <a href="">Movies</a>
            </li>
            <li>
              <a href="">TV Shows</a>
            </li>
            <li>
              <a href="">Animations</a>
            </li>
          </ul>

          <div className="mt-24 flex justify-between">
            <div className="flex   ">
              <img
                className="h-12 w-12 rounded-full object-cover "
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <span>Zohar Williams</span>
              <span>zohar@gmail.com</span>
            </div>
            <Icon
              className="h-6 w-6 cursor-pointer text-white"
              icon="humbleicons:logout"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
