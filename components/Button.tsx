import { Icon } from '@iconify/react'
import React from 'react'

const Button = ({icon,title}:{icon:string, title:string}) => {
  return (
    <>
    <button className='border rounded-[10px] p-2.5 flex space-x-2.5 justify-center items-center font-gilmed '>
    <Icon className='h-5 w-5' icon={`${icon}`} />
<span className='text-sm '>{title}</span>

    </button>
    </>
  )
}

export default Button