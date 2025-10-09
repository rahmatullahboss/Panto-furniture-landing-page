import React from 'react'
import Image from './Image'
import  Flex from '../component/Flex'
import Arrow from '../assets/grommet-icons_form-next-link .png'
const Button = () => {
  return (
    <div>
        <Flex className="items-center gap-1">
            <button className='text-sm md:text-m text-amber-500 '>
            More Info
           
        </button>
         <Image className='w-4 h-4 md:w-auto md:h-auto' src={Arrow} />
        </Flex>
    </div>
  )
}

export default Button