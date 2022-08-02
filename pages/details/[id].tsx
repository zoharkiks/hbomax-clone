import React from 'react'
import { Navbar,DetailsInfo } from '../../components'

const Details = () => {
  return (
    <div className="bg-black h-screen ">
 <div className="  md:h-screen bg-[url('https://m.media-amazon.com/images/I/71mUK6cPosL._SL1280_.jpg')] bg-cover bg-center bg-no-repeat p-5 md:px-9 lg:px-12">
        <Navbar />
        <DetailsInfo/>
      </div>
    </div>
  )
}

export default Details