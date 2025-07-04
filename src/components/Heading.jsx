import React from 'react'

const Heading = ({title,subtitle}) =>{


  return (
    <div className='text-center my-5 mb-10 max-w-[600px] mx-auto space-y-2'>
      <h1 className='text-3xl font-bold lg:text-4xl'>{title}</h1>
      <p className='text-gray-600 text-xs'>{subtitle}</p>
    </div>
  )
}

export default Heading
