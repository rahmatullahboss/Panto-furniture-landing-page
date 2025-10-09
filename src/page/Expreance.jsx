import React from 'react'
import Container from '../component/Container'
import Image from '../component/Image'
import Expricences from '../assets/expricences.png'
import Flex from '../component/Flex'
import Button from '../component/Button'
const Expreance = () => {
  return (
    <section id='about' className='pt-16 md:pt-[305px]'>
      <Container>
       <Flex className='items-center flex-col md:flex-row justify-between gap-8'>
         <div className='w-full md:w-1/2'>
            <Image src={Expricences} className='w-full'/>
        </div>
        <div className='w-full md:w-1/2'>
            <h3 className='text-lg font-semibold text-amber-600 font-Pop'>Experiences</h3>
            <h2 className='capitalize text-3xl md:text-4xl font-Pop font-bold w-full pt-4'>we provide you the best experience</h2>
            <p className='w-full pt-4 text-[#1E1E1E] font-Pop font-normal text-sm pb-2'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
            <Button/>
        </div>
       </Flex>
      </Container>
    </section>
  )
}

export default Expreance