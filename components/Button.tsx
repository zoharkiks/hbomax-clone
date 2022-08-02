import { Icon } from '@iconify/react'
import React from 'react'

const Button = ({icon,title,padding}:{icon:string, title:string,padding:string}) => {
  return (
    <>
    <button className={`border rounded-[10px] ${padding} flex space-x-2.5 justify-center items-center font-gilmed` }>
    <Icon className='h-5 w-5' icon={`${icon}`} />
<span className='text-sm md:text-lg lg:text-xl '>{title}</span>

    </button>
    </>
  )
}

export default Button