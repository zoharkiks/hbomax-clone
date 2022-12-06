import React, { useState } from "react";
import { useSelector } from "react-redux";
import { VideoCard } from "../components";
import { Icon } from "@iconify/react";

// Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";

const Videos = () => {
  const videos = useSelector((state) => state.movies.videos.results);

  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const openModal = (id: string) => {
    setVideoId(id);
    setOpen(!isOpen);
  };

  return (
    <div className="flex flex-col mt-4 text-lg text-white font-gilbold lg:mt-14">
      <h1 className="md:text-xl lg:text-3xl">Videos</h1>
      <div className="flex mt-5 ">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          loop={false}
          initialSlide={1}
          freeMode={true}
          modules={[FreeMode]}
          // breakpoints={{
          //   768: {
          //     slidesPerView: 2,
          //   },
          // }}
        >
          {videos?.slice(0, 8).map((video: any) => (
            <SwiperSlide>
              <VideoCard
                videoId={video.key}
                bgId={video.key}
                title={video.name}
                type={video.type}
                clickFunction={() => openModal(video.key)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Trailer Modal  */}

      {isOpen ? (
        <div className=" fixed inset-0 z-40 h-screen w-screen bg-black bg-opacity-80 backdrop-blur-[10px] ">
          <div className="flex justify-center lg:pl-[50%]  ">
            <Icon
              className="w-12 h-12 mt-32 lg:mt-8"
              icon="ant-design:close-circle-outlined"
              onClick={() => setOpen(!isOpen)}
            />
          </div>

          <div className="fixed top-1/2 left-1/2 z-50 flex h-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-gray-400 p-2 text-black  drop-shadow-lg lg:h-[75%] lg:w-1/2 ">
            <Icon
              className="absolute z-10 w-1/2 text-gray-300 h-1/2"
              icon="clarity:video-gallery-line"
            />

            <iframe
              className="z-20 w-full h-full "
              loading="eager"
              width="800"
              height="700"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="5"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Videos;
