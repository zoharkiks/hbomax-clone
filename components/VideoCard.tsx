import React from 'react'

const VideoCard = ({bgId,videoId}:{bgId:string,videoId:string}) => {
  return (
    <div style={{ backgroundImage: `url(https://i.ytimg.com/vi/${bgId}/hqdefault.jpg)` }} className='flex h-[160px] cursor-pointer w-[176px] items-end rounded-[10px] bg-cover bg-center bg-no-repeat transition-all hover:scale-105 md:h-[220px] md:w-[250px] lg:h-[280px] lg:w-[338px]'>

<a className='h-full w-ful' href={`https://www.themoviedb.org/video/play?key=${videoId}`}  >
  
</a>

    </div>
  )
}

export default VideoCard