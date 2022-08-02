import React from 'react'
import { PopularCard } from '../components'

const Popular = () => {
  return (
    <div className='text-white mt-20 flex flex-col font-gilbold text-lg'>
<h1 className='md:text-xl lg:text-3xl'>Popular Collections</h1>
<div className="flex mt-4 space-x-5">
<PopularCard/>
<PopularCard/>

</div>
    </div>
  )
}

export default Popular