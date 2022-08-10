import React from 'react'
import { useSelector } from 'react-redux';
import { VideoCard } from '../components'

// Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";

const Videos = () => {

const videos = useSelector((state) => state.movies.videos.results);




  return (
    <div className='mt-4 flex flex-col font-gilbold text-lg text-white lg:mt-14'>
        <h1 className='md:text-xl lg:text-3xl'>Videos</h1>
        <div className='mt-5 flex space-x-5'>
        <Swiper
          spaceBetween={45}
          slidesPerView={4}
          loop={false}
          initialSlide={1}
          freeMode={true}
          modules={[FreeMode]}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1536: {
              slidesPerView: 4,
            },
          }}
        >
        {videos?.slice(0, 5).map((video: any) => (
               <SwiperSlide>
              <VideoCard
              videoId={video.key}
              bgId={video.key}
              />
            </SwiperSlide>
          ))}

</Swiper>
        </div>
    </div>
  )
}

export default Videos