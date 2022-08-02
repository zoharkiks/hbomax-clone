import React from 'react'
import { CastCrewCard } from '../components'

const CastCrew = () => {
  return (
    <div className='text-white mt-4 lg:mt-14 flex flex-col font-gilbold text-lg'>
<h1 className='md:text-xl lg:text-3xl'>Cast</h1>
<div className="flex mt-5 space-x-10">
<CastCrewCard size='h-20 w-20 md:h-32 md:w-32' name='Michelle'/>
<CastCrewCard size='h-20 w-20 md:h-32 md:w-32' name='Casandra'/>
</div>

<div className="mt-10 flex flex-col font-gilbold text-lg">
<h1 className='md:text-xl lg:text-3xl'>Crew</h1>
<div className="flex mt-5 space-x-10">
<CastCrewCard size='h-20 w-20 md:h-32 md:w-32' name='Michelle'/>
<CastCrewCard size='h-20 w-20 md:h-32 md:w-32' name='Casandra'/>
</div>
</div>

    </div>
  )
}

export default CastCrew