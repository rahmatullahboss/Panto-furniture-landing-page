import React from 'react'
import Button from './Button'



const ChooseComponent = ({text,pra}) => {
  return (
    <div className='w-full px-2 py-4'>
        <h3 className='text-xl md:text-2xl font-semibold mb-3'>{text}</h3>
        <p className='w-full md:w-[265px] text-base text-[#1E1E1E] mb-2 font-Pop font-normal'>{pra}</p>
        <Button/>
    </div>
  )
}

export default ChooseComponent