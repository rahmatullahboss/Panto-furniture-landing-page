import React from 'react'
import Image from './Image'

const TestimonialCart = ({img,rev,text}) => {
  return (
    <div className='md:h-[547px] md:w-[200px] '>
     <div className='mt-16 mb-5 bg-amber-50 border rounded-xl md:w-[400px] w-full p-4 '> 
       <Image src={img}/>
        <div >
      <h3 className='tex-lg font-Pop font-semibold'>{rev}</h3>
      <p className=''>varifaid</p>
      <p className='text-gray-500'>{text}</p>
     </div>
     </div>
    
    </div>
  )
}

export default TestimonialCart