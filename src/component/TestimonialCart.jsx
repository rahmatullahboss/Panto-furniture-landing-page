import React from 'react'
import Image from './Image'

const TestimonialCart = ({img,rev,text}) => {
  return (
    <div className='w-full px-4'>
     <div className='mt-8 mb-5 bg-amber-50 border rounded-xl w-full p-4 md:p-6'> 
       <Image className='w-16 h-16 md:w-20 md:h-20 mx-auto' src={img}/>
        <div className='text-center'>
      <h3 className='text-lg font-Pop font-semibold'>{rev}</h3>
      <p className='text-gray-500 text-sm md:text-base mt-2'>{text}</p>
     </div>
     </div>
    
    </div>
  )
}

export default TestimonialCart