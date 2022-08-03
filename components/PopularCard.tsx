import React from 'react'

const PopuplarCard = ({image}:{image:string}) => {
  return (
    <>
    <img className='w-[108px] h-[139px] md:w-[148px] md:h-[179px] lg:w-[219px] lg:h-[280px] object-fit rounded-xl' src={image} alt="" />
    </>
  )
}

export default PopuplarCard