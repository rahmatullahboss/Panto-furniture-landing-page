import React from 'react'
import Container from '../component/Container'
import ChooseComponent from '../component/ChooseComponent'
import Flex from '../component/Flex'

const Choose = () => {
  return (
    <section  className='pt-16 md:pt-[120px]'>
        <Container>
            <Flex className='justify-between items-center flex-wrap md:flex-nowrap flex-col md:flex-row gap-y-8 md:gap-y-0'>
                <h1 className='text-3xl md:text-4xl text-[#1E1E1E] font-bold font-Pop text-center md:text-left'>Why <br /> Choosing Us</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full'>
              <ChooseComponent text='Luxury facilities' pra='The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.'/>
              <ChooseComponent text='Affordable Price' pra='You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.'/>
              <ChooseComponent text='Many Choices' pra='We provide many unique work space choices so that you can choose the workspace to your liking.'/>
            </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Choose