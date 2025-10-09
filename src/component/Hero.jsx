import React, { useState } from 'react'
import Image from './Image'
// import Bannar from "../assets/banner.png"
import Container from './Container'
import { FaSearch } from 'react-icons/fa'
import products from '../products'
const Hero = () => {
  let [searce, SetSearce]=useState([])
  let [input, SetInput]=useState("")
  let handleChange=(e)=>{
SetInput(e.target.value)
let searce=products.filter(item=>(item.name.toLowerCase().includes(e.target.value.toLowerCase())))
   SetSearce(searce);


  }
  return (
    <div id='home' className='w-full'>
      {/* Removed Container to allow full width */}
      <div className='bg-[url(/src/assets/banner.png)] w-full bg-no-repeat bg-cover min-h-screen shadow-2xl bg-bottom'>

        <h1 className='text-[#FFFFFF] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-Pop font-normal md:h-[208px] w-full px-4 md:w-[861px] text-center pt-24 mb-4 md:mb-8 md:mx-auto leading-tight'>
          Make your interior more minimalistic & modern
        </h1>

        <p className='text-center text-[#FFFFFF] text-lg sm:text-xl md:text-2xl font-normal w-11/12 sm:w-4/5 md:w-[606px] mx-auto px-4 leading-relaxed font-Pop'>
          Turn your room with panto into a lot more minimalist and modern with ease and speed
        </p>
        <div className='text-center pt-8 md:pt-[60px] relative mx-auto w-11/12 sm:w-3/4 md:w-80'>
          <input onChange={handleChange} className='w-full px-4 sm:px-6 py-2 md:py-4 bg-white/25 rounded-full border-gray-300 pl-4 sm:pl-6 pr-12 md:pr-14 text-sm sm:text-base' type="text" placeholder='Search Furniture' />
          <div className='w-8 h-8 md:w-[40px] md:h-[40px] rounded-full bg-[#E58411] flex justify-center items-center absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer'>
            <FaSearch className='text-amber-50 text-sm md:text-base'/>
          </div>
        </div>
        {
          searce.length>0 &&
          input.length>0 &&
          <div className='py-2 w-11/12 sm:w-3/4 md:w-1/2 bg-amber-50 mx-auto rounded-2xl mt-4 max-h-60 overflow-y-auto'>
            {
              searce.map(item=>(
                <div className='flex items-center p-2 hover:bg-amber-100'>
                  <Image className='w-8 h-8 mr-2' src={item.imageUrl}/>
                  <div className='flex justify-between w-full'>
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </div>
                </div>
              ))
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Hero