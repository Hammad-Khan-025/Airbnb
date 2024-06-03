import React from 'react'

export default function HeroSection() {
  return (
    <div className='flex flex-col text-center my-10 tracking-wider'>
      <div className='flex justify-center'>
        <img className='w-[1000px] pb-5 md:pb-10 px-5 md:px-20' src='../images/grid.png' alt='grid'/>
      </div>
      <div>
        <h1 className='py-5 font-bold text-3xl md:text-4xl'>Online Experiences</h1>
        <p className='mx-5 md:mx-32 text-justify'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra velit sed quam varius, nec dapibus nisi posuere. Sed ultricies metus id mi suscipit, sed posuere nunc malesuada. Cras tempus, lectus vel luctus dignissim, elit leo fermentum justo, vitae tincidunt eros justo in nisi. Etiam placerat lacus a mi mattis, sit amet suscipit dolor finibus. Vivamus rhoncus ultricies velit, at consectetur nisi cursus in. Sed sed est euismod, fringilla ante vel, faucibus nunc. Maecenas nec pulvinar lectus.</p>
      </div>
    </div>
  )
}
