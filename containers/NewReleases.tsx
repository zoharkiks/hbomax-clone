import React from 'react'
import { NewReleasesCard } from '../components'

const NewReleases = () => {
  return (
    <div className='text-white mt-6 flex flex-col font-gilbold text-lg'>

<h1 className='md:text-xl lg:text-3xl'>New Releases</h1>
<div className="flex mt-5 space-x-5">
<NewReleasesCard/>
<NewReleasesCard/>

</div>

    </div>
  )
}

export default NewReleases