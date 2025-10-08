import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Button from '../component/Button'
import Image from '../component/Image'
import Material1 from '../assets/material1.png'
 

import Material2 from '../assets/material2.png'
import Material3 from '../assets/material3.png'
const Matarial = () => {
  return (
    <section  className='pt-[100px]'>
        <Container>
            <Flex className='flex-col md:flex-row justify-between items-center gap-y-[20px]'>
                <div>
                    <div>
                                <h3 className='text-lg font-semibold text-amber-600 font-Pop'>Materials</h3>
                                <h2 className='capitalize text-4xl font-Pop font-bold md:w-[413px] w-[300px] pt-[20px]'>Very serious materials for making furniture</h2>
                                <p className='md:w-[556px] w-full pt-[23px] text-[#1E1E1E] font-Pop font-normal text-sm pb-2'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                                <Button/>
                            </div>
                </div>
                <div>
                    <Flex >
                        <div>
                            <Image src={Material1}/>
                            <Image src={Material2}/>
                        </div>
                        <div className='pt-[60px] md:pt-[115px]'>
                            <Image  src={Material3}/>
                        </div>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Matarial