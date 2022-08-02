import React from 'react'
import { CastCrewCard } from '../components'

const CastCrew = () => {
  return (
    <div className='text-white mt-6 lg:mt-20 flex flex-col font-gilbold text-lg'>
<h1 className='md:text-xl lg:text-3xl'>Cast</h1>
<div className="flex mt-5 space-x-10">
<CastCrewCard name='Michelle'/>
<CastCrewCard name='Casandra'/>
</div>

<div className="mt-10 flex flex-col font-gilbold text-lg">
<h1 className='md:text-xl lg:text-3xl'>Crew</h1>
<div className="flex mt-5 space-x-10">
<CastCrewCard name='Michelle'/>
<CastCrewCard name='Casandra'/>
</div>
</div>

    </div>
  )
}

export default CastCrew