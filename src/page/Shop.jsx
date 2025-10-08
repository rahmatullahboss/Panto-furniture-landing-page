import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'

import Cart from '../component/Cart'
import Chair4 from '../assets/chair-4.png'
import Chair1 from '../assets/chair-1.png'
import Chair2 from '../assets/chair-2.png'
import Chair3 from '../assets/chair-3.png'
import Chair5 from '../assets/chair-5.png'
import Lamp1 from '../assets/lamp-1.png'
import Slider from "react-slick";
import products from '../products';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from '../component/NextArrow'
import PrevArrow from '../component/PrevArrow'
const Shop = () => {


// console.log(arr);

    var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
       nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>
  };
  return (
    <section id='shop'   className='pt-[94px]'>
      <Container>
        <h1 className='text-center text-4xl text-[#1E1E1E] font-bold font-Pop'>Best Selling Product</h1>
      
      <div className='bg-[#EEEEEE] md:max-w-md max-w-full mx-auto mt-[108px] rounded-full py-5'>
       <Flex className="justify-around ">
         <button className='hover:bg-amber-700 py-2 px-3 rounded-full'>Chair</button>
        <button className='hover:bg-amber-700 py-2 px-3 rounded-full'>Beds</button>
        <button className='hover:bg-amber-700 py-2 px-3 rounded-full'>Sofa</button>
        <button className='hover:bg-amber-700 py-2 px-3 rounded-full'>Lamp</button>
       </Flex>
      </div>
      <div className='pt-[86px]'>
         
         <Slider  {...settings}>
 {
        products.map((item) => (
    <div >
      <Cart text={item.name} heading={item.category} price={item.price} reting={item.rating} img={item.imageUrl} />
    </div>
  ))
    }
</Slider>

   
    
        
       
       
      
     
        
      </div>
      
      </Container>
      </section>
  )
}

export default Shop