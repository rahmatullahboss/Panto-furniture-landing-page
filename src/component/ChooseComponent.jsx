import React from 'react'
import Button from './Button'



const ChooseComponent = ({text,pra}) => {
  return (
    <div>
        <h3 className='text-2xl font-semibold mb-3'>{text}</h3>
        <p className='w-[265px] text-base text-[#1E1E1E] mb-2 font-Pop font-normal'>{pra}</p>
        <Button/>
    </div>
  )
}

export default ChooseComponent