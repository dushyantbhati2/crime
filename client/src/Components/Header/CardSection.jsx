import React from 'react'

const CardSection = () => {
  return (
    <>
      <div className='flex justify-center gap-40 items-center mt-20 sm:px-16'>
        <div className='w-[450px] flex flex-col gap-6'>
        <h1 className='text-5xl font-bold '>
      Track crime in real-time
      </h1>
      <p className='text-lg  text-zinc-800 '>Discover our safety features</p>
      <button className='p-2 w-full border border-zinc-700  text-zinc-800'>Explore now</button>
        </div>
        <div className=' w-96 shadow-lg'>
            <img src="https://i.blogs.es/635f55/maps/1366_2000.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default CardSection
