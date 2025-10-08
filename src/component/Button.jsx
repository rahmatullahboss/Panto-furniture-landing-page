import React from 'react'
import Image from './Image'
import  Flex from '../component/Flex'
import Arrow from '../assets/grommet-icons_form-next-link .png'
const Button = () => {
  return (
    <div>
        <Flex className="items-center gap-1">
            <button className='text-m text-amber-500 '>
            More Info
           
        </button>
         <Image src={Arrow} />
        </Flex>
    </div>
  )
}

export default Button