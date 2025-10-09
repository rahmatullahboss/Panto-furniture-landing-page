import React from 'react'
import Flex from './Flex'
import { IoIosStar } from 'react-icons/io'
import { FaPlus } from 'react-icons/fa'
import Image from './Image'



const Cart = ({heading,text,price,reting,img }) => {
  
  return (
    <div className='w-full'>
      <div className='bg-[#fafafa] w-full h-[350px] md:h-[400px] border border-2 p-4'>
        <Image className='w-full h-40 md:h-48 object-contain' src={img}/>
       <h3 className='text-base mb-1 font-Pop font-semibold '>{heading}</h3>   
   <h4 className='text-lg mb-1 font-Pop font-bold'>{text}</h4>
    <Flex className='justify-between items-center'>
    <Flex className='gap-1'>
      <IoIosStar className='text-yellow-400' />
      <IoIosStar className='text-yellow-400' />
      <IoIosStar className='text-yellow-400' />
      <IoIosStar className='text-yellow-400' />
      <IoIosStar className='text-yellow-400' />
    </Flex>
     <p className='text-sm md:text-base'>{reting}</p>
   </Flex>
 <Flex className='justify-between items-center mt-2'>
    <p className='text-base font-normal '>${price}</p>
    <div className='bg-black hover:bg-black/30 text-white flex w-8 h-8 md:w-[30px] md:h-[30px] rounded-full justify-center items-center duration-500'>
      <FaPlus className='text-xs md:text-sm'/>
    </div>
 </Flex>

  
      </div>
      <div className='p-4 md:p-6 bg-amber-50 shadow-s'>
             
      </div>
    </div>
  )
}

export default Cart