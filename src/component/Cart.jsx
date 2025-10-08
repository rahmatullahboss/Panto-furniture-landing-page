import React from 'react'
import Flex from './Flex'
import { IoIosStar } from 'react-icons/io'
import { FaPlus } from 'react-icons/fa'
import Image from './Image'



const Cart = ({heading,text,price,reting,img }) => {
  
  return (
    <div >
      <div className='bg-[#fafafa] w-[260px] h-[400px] border border-2'>
        <Image src={img}/>
       <h3 className='text-base mb-1 font-Pop font-semibold '>{heading}</h3>   
   <h4 className='text-lg mb-1 font-Pop font-bold'>{text}</h4>
    <Flex className='justify-around'>
    <Flex>
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
    </Flex>
     <p className='text-base'>{reting}</p>
   </Flex>
 <Flex className='justify-between'>
    <p className='text-base font-normal '>${price}</p>
    <div className='bg-black hover:bg-black/30 text-white flex w-[30px] h-[30px] rounded-full justify-center items-center duration-500'>
      <FaPlus/>
    </div>
 </Flex>

  
      </div>
      <div className='p-6 bg-amber-50 shadow-s'>
             
        {/* <h3 className='font-semibold text-xl mb-2'>{productname}</h3> */}
        
      </div>
    </div>
  )
}

export default Cart


