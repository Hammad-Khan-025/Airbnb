import React from 'react'

export default function Card(props) {
  return (
    <>
      <div className='my-10 px-5 md:px-10'>
      <img className='w-[260px] max-w-none md:max-w-[260px] h-[350px]  rounded-2xl' src={props.img} alt='card'/>
      <div className='flex items-center mt-1'>
        <img className='w-5' src={props.starImg} alt='star'/>
        <span className='ms-2'>{props.rating}</span>
        <span className='ms-1 text-gray-500'>({props.reviewCount})</span>
        <span className='ms-5 text-gray-500'>{props.location}</span>
      </div>
      <p className='mt-3'>{props.title}</p>
      <p className='mt-3'><b>From ${props.price}</b> / person</p>
    </div>

    </>
  )
}
