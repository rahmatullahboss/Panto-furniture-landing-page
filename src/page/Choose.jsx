import React from 'react'
import Container from '../component/Container'
import ChooseComponent from '../component/ChooseComponent'
import Flex from '../component/Flex'

const Choose = () => {
  return (
    <section id='about' className='pt-[120px]'>
        <Container>
            <Flex className='justify-between items-center wrap md:flex-row flex-col gap-y-4'>
                <h1 className='text-4xl text-[#1E1E1E] font-bold font-Pop '>Why <br /> Choosing Us</h1>
            <ChooseComponent text='Luxury facilities' pra='The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.'/>
            <ChooseComponent text='Affordable Price' pra='You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.'/>
            <ChooseComponent text='Many Choices' pra='We provide many unique work space choices so that you can choose the workspace to your liking..'/>
            </Flex>
        </Container>
    </section>
  )
}

export default Choose