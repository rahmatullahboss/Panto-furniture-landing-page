import React from 'react'
import { Link } from 'react-router-dom'
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
  };
  return (
    <section id='shop'   className='pt-[94px]'>
      <Container>
        <h1 className='text-center text-3xl md:text-4xl text-[#1E1E1E] font-bold font-Pop'>Best Selling Product</h1>
      
      <div className='bg-[#EEEEEE] md:max-w-md max-w-full mx-auto mt-12 md:mt-[108px] rounded-full py-3 md:py-5'>
       <Flex className="justify-around flex-wrap">
         <button className='hover:bg-amber-700 py-1 px-2 md:py-2 md:px-3 rounded-full text-sm md:text-base'>Chair</button>
        <button className='hover:bg-amber-700 py-1 px-2 md:py-2 md:px-3 rounded-full text-sm md:text-base'>Beds</button>
        <button className='hover:bg-amber-700 py-1 px-2 md:py-2 md:px-3 rounded-full text-sm md:text-base'>Sofa</button>
        <Link to="/product"><button className='hover:bg-amber-700 py-1 px-2 md:py-2 md:px-3 rounded-full text-sm md:text-base'>View All Products</button></Link>
       </Flex>
      </div>
      <div className='pt-8 md:pt-[86px] w-full'>
         
         <Slider  {...settings} className="w-full">
 {
        products.map((item) => (
    <div key={item.id} className='px-2'>
      <Cart text={item.name} heading={item.category} price={item.price} reting={item.rating} img={item.imageUrl} productId={item.id} />
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