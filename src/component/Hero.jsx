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

        <h1 className='text-[#FFFFFF] text-4xl lg:text-6xl font-Pop font-normal md:h-[208px] md:w-[861px] text-center pt-24 mb-8 md:mx-auto leading-130%'>
          Make your interior more minimalistic & modern
        </h1>

        <p className='text-center text-[#FFFFFF] text-2xl font-normal md:w-[606px] w-[306px] mx-auto leading-160% font-Pop'>
          Turn your room with panto into a lot more minimalist and modern with ease and speed
        </p>
        <div className='text-center pt-[60px] relative'>
          <input onChange={handleChange} className='w-full md:w-80 px-6 py-2 bg-white/25 rounded-full border-gray-300 py-4' type="text" placeholder='Searce Furniture' />
          <div className='w-[40px] h-[40px] rounded-full bg-[#E58411] flex justify-center items-center absolute md:top-[70px] top-[70px] md:right-[400px] right-[10px] cursor-pointer'>
            <FaSearch className='text-amber-50'/>
          </div>
        </div>
        {
          searce.length>0 &&
          input.length>0 &&
          <div className='py-2 w-1/2 bg-amber-50 mx-auto rounded-2xl mt-4'>
            {
              searce.map(item=>(
                <p><Image className='w-[20px]' src={item. imageUrl}/>{item.name}=={item.price}</p>
              ))
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Hero