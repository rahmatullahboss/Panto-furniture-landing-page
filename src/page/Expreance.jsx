import React from 'react'
import Container from '../component/Container'
import Image from '../component/Image'
import Expricences from '../assets/expricences.png'
import Flex from '../component/Flex'
import Button from '../component/Button'
const Expreance = () => {
  return (
    <section className='md:pt-[305px] pt-[100px]'>
      <Container>
       <Flex className='items-center flex-col md:flex-row justify-between '>
         <div>
            <Image src={Expricences}/>
        </div>
        <div>
            <h3 className='text-lg font-semibold text-amber-600 font-Pop'>Experiences</h3>
            <h2 className='capitalize text-4xl font-Pop font-bold md:w-[413px] w-[300px] pt-[20px]'>we provide you the best experience</h2>
            <p className='md:w-[556px] w-full pt-[23px] text-[#1E1E1E] font-Pop font-normal text-sm pb-2'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
            <Button/>
        </div>
       </Flex>
      </Container>
    </section>
  )
}

export default Expreance