import React from 'react'
import Flex from './Flex'
import { IoIosStar } from 'react-icons/io'
import { FaPlus } from 'react-icons/fa'
import Image from './Image'



const Cart = ({heading,text,price,reting,img }) => {
  
  // Render stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(reting);
    const hasHalfStar = reting % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<IoIosStar key={i} className='text-yellow-400' />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<IoIosStar key={i} className='text-yellow-400' />);
      } else {
        stars.push(<IoIosStar key={i} className='text-gray-300' />);
      }
    }
    return stars;
  };
  
  return (
    <div className='w-full'>
      <div className='bg-[#fafafa] w-full h-[350px] md:h-[400px] border border-gray-200 rounded-lg p-5 flex flex-col transition-all duration-300 hover:shadow-lg'>
        <div className='flex justify-center items-center h-40 md:h-48 mb-4'>
          <Image className='max-h-full max-w-full object-contain' src={img}/>
        </div>
        <h3 className='text-sm md:text-base mb-1 font-Pop font-semibold text-gray-600'>{heading}</h3>   
        <h4 className='text-lg md:text-xl mb-2 font-Pop font-bold text-[#1E1E1E]'>{text}</h4>
        <Flex className='justify-between items-center mb-3'>
          <Flex className='gap-1'>
            {renderStars()}
          </Flex>
          <p className='text-sm md:text-base text-gray-600'>{reting}</p>
        </Flex>
        <Flex className='justify-between items-center mt-auto'>
          <p className='text-lg md:text-xl font-bold text-[#1E1E1E]'>${price}</p>
          <div className='bg-black hover:bg-black/80 text-white flex w-8 h-8 md:w-10 md:h-10 rounded-full justify-center items-center duration-300 cursor-pointer'>
            <FaPlus className='text-xs md:text-sm'/>
          </div>
        </Flex>
      </div>
    </div>
  )
}

export default Cart