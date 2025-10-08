import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
   <footer id='contact' className='bg-[#FFFFFF] py-[40px]'>
    <Container>
      <Flex className='justify-between md:flex-row flex-col gap-y-4 items-center'>
          <div>
          <a href="#home">
                <h3 className='text-[#1E1E1E] text-2xl font-Pop font-bold pb-[29px]'>Panto</h3>  
                <p className='w-[293px] text-sm text-[#1E1E1] font-Pop font-normal'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>      
            </a>
        
        </div>

        <div>

          <h2 className='text-[#F6973F] text-xl font-Pop font-semibold pb-[42px]'>Services</h2>
          <ul className='flex flex-col gap-y-[16px] text-sm text-[#1E1E1] font-Pop font-normal '>
            <li className='hover:text-[#F6973F]'>Email Marketing</li>
            <li className='hover:text-[#F6973F]'>Campaigns</li>
            <li className='hover:text-[#F6973F]'>Branding</li>
          </ul>
        </div>
        <div>

          <h2 className='text-[#F6973F] text-xl font-Pop font-semibold pb-[42px]'>Furniture</h2>
          <ul className='flex flex-col gap-y-[16px] text-sm text-[#1E1E1] font-Pop font-normal '>
            <li className='hover:text-[#F6973F]'>Beds</li>
            <li className='hover:text-[#F6973F]'>Chair</li>
            <li className='hover:text-[#F6973F]'>All</li>
          </ul>
        </div>
        <div>

          <h2 className='text-[#F6973F] text-xl font-Pop font-semibold pb-[42px]'>Follow Us</h2>
          <ul className='flex flex-col gap-y-[16px] text-sm text-[#1E1E1] font-Pop font-normal '>
            <a href="https://www.facebook.com/toufiq.lizon.barguna" target='blank'> <li className='hover:text-[#F6973F] flex items-center gap-2'>
           <FaFacebook/><span>Facebook</span></li></a>
           
            <li className='hover:text-[#F6973F] flex items-center gap-2'><FaTwitter/><span>Twitter</span></li>
            <li className='hover:text-[#F6973F] flex items-center gap-2 '><FaInstagram/><span>Instagram</span></li>
          </ul>
        </div>
      </Flex>
      <Flex className='justify-between pt-[60px]'>
        <div><p className='text-sm text-[#1E1E1] font-Pop font-normal'> Copyright © 2021</p></div>
        <Flex className='gap-x-[60px]'>
          <p className='text-sm text-[#1E1E1] font-Pop font-normal'>Terms & Conditions</p>
          <p className='text-sm text-[#1E1E1] font-Pop font-normal'>Privacy Policy</p>
        </Flex>
      </Flex>
    </Container>
   </footer>
  )
}

export default Footer