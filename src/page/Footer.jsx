import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
   <footer id='contact' className='bg-[#FFFFFF] py-8'>
    <Container>
      <Flex className='justify-between md:flex-row flex-col gap-y-8 items-center'>
          <div className='w-full md:w-auto text-center md:text-left'>
          <a href="#home">
                <h3 className='text-[#1E1E1E] text-2xl font-Pop font-bold pb-6'>Panto</h3>  
                <p className='w-full md:w-[293px] text-sm text-[#1E1E1] font-Pop font-normal'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>      
            </a>
        
        </div>

        <div className='text-center md:text-left'>

          <h2 className='text-[#F6973F] text-xl font-Pop font-semibold pb-6'>Services</h2>
          <ul className='flex flex-col gap-y-4 text-sm text-[#1E1E1] font-Pop font-normal '>
            <li className='hover:text-[#F6973F]'>Email Marketing</li>
            <li className='hover:text-[#F6973F]'>Campaigns</li>
            <li className='hover:text-[#F6973F]'>Branding</li>
          </ul>
        </div>
        <div className='text-center md:text-left'>

          <h2 className='text-[#F6973F] text-xl font-Pop font-semibold pb-6'>Furniture</h2>
          <ul className='flex flex-col gap-y-4 text-sm text-[#1E1E1] font-Pop font-normal '>
            <li className='hover:text-[#F6973F]'>Beds</li>
            <li className='hover:text-[#F6973F]'>Chair</li>
            <li className='hover:text-[#F6973F]'><a href="/product">All Products</a></li>
          </ul>
        </div>
        <div className='text-center md:text-left'>

          <h2 className='text-[#F6973F] text-xl font-Pop font-semibold pb-6'>Follow Us</h2>
          <ul className='flex flex-col gap-y-4 text-sm text-[#1E1E1] font-Pop font-normal '>
            <a href="https://www.facebook.com/toufiq.lizon.barguna" target='blank'> <li className='hover:text-[#F6973F] flex items-center justify-center md:justify-start gap-2'>
           <FaFacebook/><span>Facebook</span></li></a>
           
            <li className='hover:text-[#F6973F] flex items-center justify-center md:justify-start gap-2'><FaTwitter/><span>Twitter</span></li>
            <li className='hover:text-[#F6973F] flex items-center justify-center md:justify-start gap-2 '><FaInstagram/><span>Instagram</span></li>
          </ul>
        </div>
      </Flex>
      <Flex className='flex-col md:flex-row justify-between pt-8 gap-y-4 items-center'>
        <div><p className='text-sm text-[#1E1E1] font-Pop font-normal'> Copyright © 2021</p></div>
        <Flex className='flex-col md:flex-row gap-4 md:gap-x-[60px] items-center'>
          <p className='text-sm text-[#1E1E1] font-Pop font-normal'>Terms & Conditions</p>
          <p className='text-sm text-[#1E1E1] font-Pop font-normal'>Privacy Policy</p>
        </Flex>
      </Flex>
    </Container>
   </footer>
  )
}

export default Footer