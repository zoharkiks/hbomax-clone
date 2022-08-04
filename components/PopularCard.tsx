import React from 'react'

const PopuplarCard = ({image,clickFunction}:{image:string,clickFunction:any}) => {
  return (
    <>
    <img onClick={clickFunction} className='w-[30%] md:w-[20%]  lg:w-[15%]  object-fit rounded-xl' src={image} alt="" />
    </>
  )
}

export default PopuplarCard